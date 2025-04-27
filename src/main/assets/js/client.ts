import axios from 'axios';

interface Task {
    id: number;
    title: string;
    description: string;
    dueAt: Date;
    status: {
        id: number;
        title: string;
    };
};

module.exports = {
    confirmDelete: function (taskId: number): void {
        //prompt the user for confirmation before deleting the task
        if(confirm('Really delete this task?')) {
            window.location.href = `/delete?id=${taskId}`;
        }
    },
    placeholderPopup: function (element: HTMLElement, field: string): void {
        async function sendToDB(task: Task) {
            try {
                await axios.put(
                    'http://localhost:4000/task/update',
                    task, 
                    {
                        timeout: 10000
                    }
                );

                //reload the page
                window.location.reload();
            }
            catch(e) {
                console.error(e);
                alert('an error occurred');
            }
        }
        //apply the change
        const jsonTaskOrNull: string | null = element.getAttribute('data-task');
        if(jsonTaskOrNull) {
            //if the field is status, there is only one possible change to make: swap it to the other option.
            //(also because it's a nested object it must be handled differently)
            if(field === 'status') {
                const { status, ...rest } = JSON.parse(jsonTaskOrNull);
                sendToDB({
                    status: {
                        id: status.id===2 ? 1 : 2
                    },
                    ...rest
                });
            }
            else { //otherwise prompt the user for the new value
                const oldTask: Task = JSON.parse(jsonTaskOrNull);
                const newValue = prompt(`Enter new value for ${field}`);
                if(newValue!==null) {
                    sendToDB({
                        ...oldTask, 
                        [field]: newValue
                    });
                }
                //else, if the user clicked cancel, we've nothing to do
            }
        }
        else {
            alert('an error occurred');
        }
    }
};
