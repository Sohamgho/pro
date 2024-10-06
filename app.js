const addTaskBtn = document.querySelector('.add-task-btn');
const modal = document.getElementById('addTaskModal');
const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.querySelector('.task-list');
    
addTaskBtn.addEventListener('click', () => {
    modal.classList.add('active');
});
    
addTaskButton.addEventListener('click', () => {
    const taskName = taskInput.value.trim();
    if (taskName) {
        const li = document.createElement('li');
        li.innerHTML = `
             <div class="task-name">${taskName}</div>
            <div class="task-actions">
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
        modal.classList.remove('active');
    }
});
// Close modal if clicked outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});
// Event delegation for dynamic elements (delete and complete buttons)
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const taskItem = e.target.closest('li');
        taskItem.remove(); // Remove the task item
    }
    if (e.target.classList.contains('complete-btn')) {
        const taskItem = e.target.closest('li');
           taskItem.style.textDecoration = 'line-through'; // Mark task as completed
    }
});

