export default class StorageManager {
    constructor() {
        this.storage = []
    }

    add(newTask) {
        this.storage.push(newTask)
    }

    delete(index) {
        this.storage.splice(index, 1)
    }

    edit(id, newTask) {
        this.storage[id] = newTask
    }

    searchTaskById(id) {
        const search = this.storage.findIndex(item => item.id == id)
        if (search == -1) {
            return false
        } else {
            return this.storage[search]
        }
    }

}