/* 
 * TODO List: 
 * Add edit task
 * 
 */

(() => {
    enum NotificationPlatform {
        SMS = 'SMS',
        EMAIL = "EMAIL",
        PUSH_NOTIFICATION = 'PUSH_NOTIFICATION'
    }

    enum ViewMode {
        TODO = "TODO",
        REMINDER = 'REMINDER',
    };

    const UUID = (): string => {
        return Math.random().toString(32).substring(2,9)
    };

    const  DateUtils = {
        tomorrow(): Date {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            return tomorrow
        },

        today(): Date {
            return new Date();
        },
        
        formatDate(date: Date): string {
            return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
        }
    };

    interface Task {
        id: string;
        dateCreated: Date;
        dateUpdated: Date;
        description: string;
        render(): string
    }

    class Reminder implements Task {
        id: string = UUID();
        dateCreated: Date = DateUtils.today();
        dateUpdated: Date = DateUtils.today();
        description: string = "";

        date: Date = DateUtils.tomorrow();
        notifications: Array<NotificationPlatform> = [NotificationPlatform.EMAIL];

        constructor(description: string,  date: Date, notifications: Array<NotificationPlatform>) {
            this.description = description
            this.date = date
            this.notifications = notifications
        }

        render(): string {
           return  `
           ---> Reminder <---
           description: ${this.description}
           date: ${DateUtils.formatDate(this.date)}
           platforms: ${this.notifications.join(',')}
           `;
        }
    }

    class Todo implements Task {
        id: string = UUID();
        dateCreated: Date = DateUtils.today();
        dateUpdated: Date = DateUtils.today();
        description: string = "";

        done: boolean = false;

        constructor(description: string) {
            this.description = description
        }

        render(): string {
            return `
            ---> TODO <---
            description: ${this.description}
            done: ${this.done}
            `;
        }

    }

    const editView = (task: Task, mode: ViewMode, tasks: Array<Task>) => {
        const bg = document.createElement('div');
        bg.id = "editScreen"
        bg.style.position = "absolute";
        bg.style.width = "100vw"
        bg.style.height = '100vh'
        bg.style.top = '0'
        bg.style.left = '0'
        bg.style.backgroundColor = 'rgba(0,0,0,0.9)'
        bg.style.display = 'flex'
        bg.style.alignItems = 'center'
        bg.style.justifyContent = 'center'

        const editDiv = document.createElement('div');
        editDiv.style.backgroundColor = 'rgba(230, 230, 230, 1)'
        editDiv.style.padding = '30px'
        
        //form and button edit and cancel
        if (mode === ViewMode.TODO){
            const todo = task as Todo
            editDiv.innerHTML = `
            <form id="editForm">
                <fieldset id="todoSet">
                    <legend>Todo:</legend>
                        <label for="todoDescription">
                            Description:
                            <input type="text" name="todoDescription" value="${todo.description}"  required>
                        </label>
                </fieldset>
            </form>
            <button type="submit" id="editSubmit">Edit</button>
            <button type="submit" id="editCancel">Cancel</button>`
        } else {
            const reminder = task as Reminder
            editDiv.innerHTML = `
            <form id="editForm">
                <fieldset id="reminderSet">
                    <legend>Reminder:</legend>
                    <label for="reminderDescription">
                        Description
                        <input type="text" name="reminderDescription" value="${reminder.description}" required>
                    </label>
                    <label for="scheduleDate">
                        Date:
                        <input type="date" name="scheduleDate" required value="${reminder.date.toISOString().slice(0,10)}">
                    </label>
                    <label for="notification">
                        Notify by:
                        <select name="notification">
                            <option value="SMS">SMS</option>
                            <option value="EMAIL">EMAIL</option>
                            <option value="PUSH_NOTIFICATION">Push notification</option>
                        </select>
                    </label>
                </fieldset>
            </form>
            <button type="submit" id="editSubmit">Edit</button>
            <button type="submit" id="editCancel">Cancel</button>`
        
        }
        bg.appendChild(editDiv)
        
        document.body.appendChild(bg)

        const cancelButton = document.getElementById("editCancel");
        cancelButton?.addEventListener("click", (event) => {
            document.body.removeChild(bg)
        })

        const editButton = document.getElementById('editSubmit');
        editButton?.addEventListener('click', (event) => {
            if (mode === ViewMode.TODO) {
                const form = document.getElementById('editForm') as HTMLFormElement
                const descriptionEdit = form.todoDescription.value
                task.dateUpdated = DateUtils.today()
                task.description = descriptionEdit
                document.body.removeChild(bg)
            }
            else {
                const reminder = task as Reminder
                const form = document.getElementById('editForm') as HTMLFormElement
                const descriptionEdit = form.reminderDescription.value
                const dateEdit = new Date(form.scheduleDate.value)
                const notificationEdit = [form.notification.value as NotificationPlatform ]
                reminder.dateUpdated = DateUtils.today()
                reminder.description = descriptionEdit
                reminder.date = dateEdit;
                reminder.notifications = notificationEdit

                task = reminder
                document.body.removeChild(bg)
            }
            taskView.render(tasks, mode)
        })
        
    }

    const taskView = {
        getTodo(form: HTMLFormElement): Todo{
            const todoDescription = form.todoDescription.value;
            form.reset();
            return new Todo(todoDescription);
        },

        getReminder(form: HTMLFormElement): Reminder{
            const reminderDescription = form.reminderDescription.value;
            const reminderDate = new Date(form.scheduleDate.value);
            const reminderNotifications = [form.notification.value as NotificationPlatform ];
            form.reset();
            return new Reminder(reminderDescription, reminderDate, reminderNotifications);
        },

        render(tasks: Array<Task>, mode: ViewMode) {
            const tasksList = document.getElementById('tasksList');
            while (tasksList?.firstChild) {
                tasksList.removeChild(tasksList.firstChild);
            }
            tasks.forEach((task) => {
                const li = document.createElement("LI");
                const textNode = document.createTextNode(task.render())
                li.appendChild(textNode)

                const doneButton = document.createElement('BUTTON')
                doneButton.innerText = "Done";
                doneButton.addEventListener("click", (event) => {
                    const target = event.target as Element
                    const li = target.parentNode
                    if (li) {
                        tasksList?.removeChild(li)
                    }
                    tasks = tasks.splice(tasks.indexOf(task), 1)
                })

                li.appendChild(doneButton);

                const editButton = document.createElement('BUTTON');
                editButton.innerText = "Edit";
                editButton.addEventListener('click', () => {
                    editView(task, mode, tasks)
                })

                li.appendChild(editButton)
    
                tasksList?.appendChild(li);
            });

            const todoSet = document.getElementById('todoSet');
            const reminderSet = document.getElementById('reminderSet')

            if (mode === ViewMode.TODO){
                todoSet?.setAttribute('style', 'display: block');
                todoSet?.removeAttribute('disabled');
                reminderSet?.setAttribute('style', 'display: none');
                reminderSet?.setAttribute('disabled', 'true');
            } else {
                reminderSet?.setAttribute('style', 'display: block');
                reminderSet?.removeAttribute('disabled');
                todoSet?.setAttribute('style', 'display: none');
                todoSet?.setAttribute('disabled', 'true');
            } 
        },
    };

    const TaskController = (view: typeof taskView) => {
        let tasks: Array<Task> = [];
        let mode: ViewMode = ViewMode.TODO;

        const handleEvent = (event: Event) => {
            event.preventDefault();
            const form = event.target as HTMLFormElement;
            switch (mode as ViewMode) {
                case ViewMode.TODO:
                    tasks.push(view.getTodo(form))
                    break;
                case ViewMode.REMINDER:
                    tasks.push(view.getReminder(form))
                    break;
            }
            view.render(tasks, mode);
        } 

        const handleToggleMode = () => {
            switch (mode as ViewMode) {
                case ViewMode.TODO:
                    mode = ViewMode.REMINDER
                    break;
                case ViewMode.REMINDER:
                    mode = ViewMode.TODO
                    break;
            }
            view.render(tasks, mode)
        }

        document
            .getElementById('toggleMode')
            ?.addEventListener('click', handleToggleMode);

        document
            .getElementById('taskForm')
            ?.addEventListener('submit', handleEvent)
    };

    TaskController(taskView);
})();