function confirmDelete(taskId) {
    if(confirm(`Really delete this task?`)) {
        window.location.href = `/delete?id=${taskId}`;
    }
}