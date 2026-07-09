import Task from "./taskClass.js"

export default class TaskManager {
    constructor(storage) {
        this.array = storage
    }

    addTask(title, desc, date, isDone, label) {
        const newTask = new Task(title, desc, date, isDone, label)
        this.array.add(newTask)
    }

    deleteTask(id) {
        const searchId = this.array.storage.findIndex(x => x.id == id)
        if (searchId == -1) {
            return 'ga ada cuy'
        } else {
            this.array.delete(searchId)
        }
    }

    editTask(id, title, desc, date, isDone, label) {
        const searchId = this.array.searchTaskById(id)
        if (searchId) {
            searchId.updateTask(title, desc, date, isDone, label)
        }
    }

    showTask() {
        return this.array.storage
    }
}