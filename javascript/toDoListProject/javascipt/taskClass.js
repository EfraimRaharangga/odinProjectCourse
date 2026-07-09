export default class Task {
    constructor(title, desc, date, isDone = false, label = 'default') {
        this.id = crypto.randomUUID()
        this.title = title
        this.desc = desc
        this.date = new Date(date)
        this.isDone = isDone
        this.label = label
        this.createdAt = new Date()
    }

    updateTask(title, desc, date, isDone, label) {
        this.title = title
        this.desc = desc
        this.date = new Date(date)
        this.label = label
        this.isDone = isDone
    }
}