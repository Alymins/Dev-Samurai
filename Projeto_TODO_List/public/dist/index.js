"use strict";
/*
 * TODO List:
 * Add edit task
 *
 */
(function () {
    var NotificationPlatform;
    (function (NotificationPlatform) {
        NotificationPlatform["SMS"] = "SMS";
        NotificationPlatform["EMAIL"] = "EMAIL";
        NotificationPlatform["PUSH_NOTIFICATION"] = "PUSH_NOTIFICATION";
    })(NotificationPlatform || (NotificationPlatform = {}));
    var ViewMode;
    (function (ViewMode) {
        ViewMode["TODO"] = "TODO";
        ViewMode["REMINDER"] = "REMINDER";
    })(ViewMode || (ViewMode = {}));
    ;
    var UUID = function () {
        return Math.random().toString(32).substring(2, 9);
    };
    var DateUtils = {
        tomorrow: function () {
            var tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            return tomorrow;
        },
        today: function () {
            return new Date();
        },
        formatDate: function (date) {
            return "".concat(date.getDate(), ".").concat(date.getMonth() + 1, ".").concat(date.getFullYear());
        }
    };
    var Reminder = /** @class */ (function () {
        function Reminder(description, date, notifications) {
            this.id = UUID();
            this.dateCreated = DateUtils.today();
            this.dateUpdated = DateUtils.today();
            this.description = "";
            this.date = DateUtils.tomorrow();
            this.notifications = [NotificationPlatform.EMAIL];
            this.description = description;
            this.date = date;
            this.notifications = notifications;
        }
        Reminder.prototype.render = function () {
            return "\n           ---> Reminder <---\n           description: ".concat(this.description, "\n           date: ").concat(DateUtils.formatDate(this.date), "\n           platforms: ").concat(this.notifications.join(','), "\n           ");
        };
        return Reminder;
    }());
    var Todo = /** @class */ (function () {
        function Todo(description) {
            this.id = UUID();
            this.dateCreated = DateUtils.today();
            this.dateUpdated = DateUtils.today();
            this.description = "";
            this.done = false;
            this.description = description;
        }
        Todo.prototype.render = function () {
            return "\n            ---> TODO <---\n            description: ".concat(this.description, "\n            done: ").concat(this.done, "\n            ");
        };
        return Todo;
    }());
    var editView = function (task, mode, tasks) {
        var bg = document.createElement('div');
        bg.id = "editScreen";
        bg.style.position = "absolute";
        bg.style.width = "100vw";
        bg.style.height = '100vh';
        bg.style.top = '0';
        bg.style.left = '0';
        bg.style.backgroundColor = 'rgba(0,0,0,0.9)';
        bg.style.display = 'flex';
        bg.style.alignItems = 'center';
        bg.style.justifyContent = 'center';
        var editDiv = document.createElement('div');
        editDiv.style.backgroundColor = 'rgba(230, 230, 230, 1)';
        editDiv.style.padding = '30px';
        //form and button edit and cancel
        if (mode === ViewMode.TODO) {
            var todo = task;
            editDiv.innerHTML = "\n            <form id=\"editForm\">\n                <fieldset id=\"todoSet\">\n                    <legend>Todo:</legend>\n                        <label for=\"todoDescription\">\n                            Description:\n                            <input type=\"text\" name=\"todoDescription\" value=\"".concat(todo.description, "\"  required>\n                        </label>\n                </fieldset>\n            </form>\n            <button type=\"submit\" id=\"editSubmit\">Edit</button>\n            <button type=\"submit\" id=\"editCancel\">Cancel</button>");
        }
        else {
            var reminder = task;
            editDiv.innerHTML = "\n            <form id=\"editForm\">\n                <fieldset id=\"reminderSet\">\n                    <legend>Reminder:</legend>\n                    <label for=\"reminderDescription\">\n                        Description\n                        <input type=\"text\" name=\"reminderDescription\" value=\"".concat(reminder.description, "\" required>\n                    </label>\n                    <label for=\"scheduleDate\">\n                        Date:\n                        <input type=\"date\" name=\"scheduleDate\" required value=\"").concat(reminder.date.toISOString().slice(0, 10), "\">\n                    </label>\n                    <label for=\"notification\">\n                        Notify by:\n                        <select name=\"notification\">\n                            <option value=\"SMS\">SMS</option>\n                            <option value=\"EMAIL\">EMAIL</option>\n                            <option value=\"PUSH_NOTIFICATION\">Push notification</option>\n                        </select>\n                    </label>\n                </fieldset>\n            </form>\n            <button type=\"submit\" id=\"editSubmit\">Edit</button>\n            <button type=\"submit\" id=\"editCancel\">Cancel</button>");
        }
        bg.appendChild(editDiv);
        document.body.appendChild(bg);
        var cancelButton = document.getElementById("editCancel");
        cancelButton === null || cancelButton === void 0 ? void 0 : cancelButton.addEventListener("click", function (event) {
            document.body.removeChild(bg);
        });
        var editButton = document.getElementById('editSubmit');
        editButton === null || editButton === void 0 ? void 0 : editButton.addEventListener('click', function (event) {
            if (mode === ViewMode.TODO) {
                var form = document.getElementById('editForm');
                var descriptionEdit = form.todoDescription.value;
                task.dateUpdated = DateUtils.today();
                task.description = descriptionEdit;
                document.body.removeChild(bg);
            }
            else {
                var reminder = task;
                var form = document.getElementById('editForm');
                var descriptionEdit = form.reminderDescription.value;
                var dateEdit = new Date(form.scheduleDate.value);
                var notificationEdit = [form.notification.value];
                reminder.dateUpdated = DateUtils.today();
                reminder.description = descriptionEdit;
                reminder.date = dateEdit;
                reminder.notifications = notificationEdit;
                task = reminder;
                document.body.removeChild(bg);
            }
            taskView.render(tasks, mode);
        });
    };
    var taskView = {
        getTodo: function (form) {
            var todoDescription = form.todoDescription.value;
            form.reset();
            return new Todo(todoDescription);
        },
        getReminder: function (form) {
            var reminderDescription = form.reminderDescription.value;
            var reminderDate = new Date(form.scheduleDate.value);
            var reminderNotifications = [form.notification.value];
            form.reset();
            return new Reminder(reminderDescription, reminderDate, reminderNotifications);
        },
        render: function (tasks, mode) {
            var tasksList = document.getElementById('tasksList');
            while (tasksList === null || tasksList === void 0 ? void 0 : tasksList.firstChild) {
                tasksList.removeChild(tasksList.firstChild);
            }
            tasks.forEach(function (task) {
                var li = document.createElement("LI");
                var textNode = document.createTextNode(task.render());
                li.appendChild(textNode);
                var doneButton = document.createElement('BUTTON');
                doneButton.innerText = "Done";
                doneButton.addEventListener("click", function (event) {
                    var target = event.target;
                    var li = target.parentNode;
                    if (li) {
                        tasksList === null || tasksList === void 0 ? void 0 : tasksList.removeChild(li);
                    }
                    tasks = tasks.splice(tasks.indexOf(task), 1);
                });
                li.appendChild(doneButton);
                var editButton = document.createElement('BUTTON');
                editButton.innerText = "Edit";
                editButton.addEventListener('click', function () {
                    editView(task, mode, tasks);
                });
                li.appendChild(editButton);
                tasksList === null || tasksList === void 0 ? void 0 : tasksList.appendChild(li);
            });
            var todoSet = document.getElementById('todoSet');
            var reminderSet = document.getElementById('reminderSet');
            if (mode === ViewMode.TODO) {
                todoSet === null || todoSet === void 0 ? void 0 : todoSet.setAttribute('style', 'display: block');
                todoSet === null || todoSet === void 0 ? void 0 : todoSet.removeAttribute('disabled');
                reminderSet === null || reminderSet === void 0 ? void 0 : reminderSet.setAttribute('style', 'display: none');
                reminderSet === null || reminderSet === void 0 ? void 0 : reminderSet.setAttribute('disabled', 'true');
            }
            else {
                reminderSet === null || reminderSet === void 0 ? void 0 : reminderSet.setAttribute('style', 'display: block');
                reminderSet === null || reminderSet === void 0 ? void 0 : reminderSet.removeAttribute('disabled');
                todoSet === null || todoSet === void 0 ? void 0 : todoSet.setAttribute('style', 'display: none');
                todoSet === null || todoSet === void 0 ? void 0 : todoSet.setAttribute('disabled', 'true');
            }
        },
    };
    var TaskController = function (view) {
        var _a, _b;
        var tasks = [];
        var mode = ViewMode.TODO;
        var handleEvent = function (event) {
            event.preventDefault();
            var form = event.target;
            switch (mode) {
                case ViewMode.TODO:
                    tasks.push(view.getTodo(form));
                    break;
                case ViewMode.REMINDER:
                    tasks.push(view.getReminder(form));
                    break;
            }
            view.render(tasks, mode);
        };
        var handleToggleMode = function () {
            switch (mode) {
                case ViewMode.TODO:
                    mode = ViewMode.REMINDER;
                    break;
                case ViewMode.REMINDER:
                    mode = ViewMode.TODO;
                    break;
            }
            view.render(tasks, mode);
        };
        (_a = document
            .getElementById('toggleMode')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', handleToggleMode);
        (_b = document
            .getElementById('taskForm')) === null || _b === void 0 ? void 0 : _b.addEventListener('submit', handleEvent);
    };
    TaskController(taskView);
})();
