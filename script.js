const btn = document.getElementById('btn');
const tasks = document.getElementById('tasks');

btn.addEventListener('click', () => {
    const inputEl = document.getElementById('input-el');
    const input = inputEl.value;

    if (input === '') {
        alert('Please enter a task');
        return;
    }

    let content = `
        <div class="task">
            <p>${input}</p>
            <div class="delete-update">
                <button class="btn btn-danger delete-btn">Delete</button>
                <button class="btn btn-primary update-btn">Update</button>
            </div>
        </div>
    `;

    tasks.innerHTML += content;
    localStorage.setItem('tasks', tasks.innerHTML);
    inputEl.value = '';
});

// تحميل المهام من localStorage عند فتح الصفحة
window.addEventListener('load', () => {
    let storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks.innerHTML = storedTasks;
    }
});

// Event delegation للحذف والتحديث
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const taskDiv = e.target.closest('.task');
        taskDiv.remove();
        localStorage.setItem('tasks', tasks.innerHTML); // حدّث التخزين
    }

    if (e.target.classList.contains('update-btn')) {
        const taskDiv = e.target.closest('.task');
        const taskText = taskDiv.querySelector('p');
        const newText = prompt('Update task:', taskText.textContent);
        if (newText) {
            taskText.textContent = newText;
            localStorage.setItem('tasks', tasks.innerHTML); // حدّث التخزين
        }
    }
});
