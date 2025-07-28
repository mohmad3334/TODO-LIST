const btn = document.getElementById('btn');
const taskList = document.querySelector('.list-group');

btn.addEventListener('click', function () {
    const inputEl = document.getElementById('input');
    const input = inputEl.value.trim();

    if (input === '') {
        alert('Please enter a task');
        return;
    }

    const taskHTML = `
        <div class="task m-3 d-flex justify-content-between align-items-center">
            <p class="m-0 me-2">${input}</p>
            <div class="buttons d-flex justify-content-between align-items-center flex-column h-100">
                <button type="button" class="mb-3 btn btn-outline-danger delete-btn">Delete</button>
                <button type="button" class="btn btn-outline-secondary update-btn">Update</button>
            </div>
        </div>
    `;

    taskList.innerHTML += taskHTML;
    inputEl.value = '';
});

taskList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        const task = e.target.closest('.task');
        task.remove();
    }

    // تحديث
    if (e.target.classList.contains('update-btn')) {
        const task = e.target.closest('.task');
        const paragraph = task.querySelector('p');
        const newText = prompt('Update your task:', paragraph.textContent);
        if (newText !== null && newText.trim() !== '') {
            paragraph.textContent = newText;
        }
    }
});
