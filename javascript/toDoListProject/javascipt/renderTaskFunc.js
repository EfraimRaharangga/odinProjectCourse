export default function renderTasks(taskManager, taskContainer, currentActiveLabel, updateUI) {
    taskContainer.innerHTML = ''; // Clear current tasks

    const allTasks = taskManager.showTask();
    
    // Filter tasks based on currentActiveLabel. If currentActiveLabel is 'All', show all.
    const tasks = currentActiveLabel === 'All' 
        ? allTasks 
        : allTasks.filter(task => task.label === currentActiveLabel);

    if (tasks.length === 0) {
        taskContainer.innerHTML = `<div style="color: var(--text-muted); grid-column: 1 / -1; text-align: center; padding: 40px;">No tasks found for this label. Create one!</div>`;
        return;
    }

    tasks.forEach(task => {
        const dateObj = new Date(task.date);
        const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

        const card = document.createElement('div');
        card.className = `task-card ${task.isDone ? 'done' : ''}`;
        card.dataset.id = task.id;

        card.innerHTML = `
            <div class="task-header">
                <h3 class="task-title">${task.title}</h3>
                <span style="font-size: 0.75rem; background: rgba(139, 92, 246, 0.2); padding: 4px 8px; border-radius: 4px; color: var(--primary);">${task.label}</span>
            </div>
            <p class="task-desc">${task.desc || 'No description provided.'}</p>
            <div class="task-footer">
                <div class="task-date">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    ${isNaN(dateObj) ? 'No Date' : formattedDate}
                </div>
                <div class="task-actions">
                    <button class="btn-icon btn-check" title="Toggle Status">
                        ${task.isDone
                ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
                : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>`
            }
                    </button>
                    <button class="btn-icon btn-delete" title="Delete Task">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    </button>
                </div>
            </div>
        `;

        const checkBtn = card.querySelector('.btn-check');
        const deleteBtn = card.querySelector('.btn-delete');

        checkBtn.addEventListener('click', () => {
            taskManager.editTask(task.id, task.title, task.desc, task.date, !task.isDone, task.label);
            updateUI();
        });

        deleteBtn.addEventListener('click', () => {
            taskManager.deleteTask(task.id);
            updateUI();
        });

        taskContainer.appendChild(card);
    });
}