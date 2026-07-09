import LabelClass from "./labelClass.js"

export default class LabelManagerClass {
    constructor() {
        this.array = []
    }

    showClass() {
        return this.array
    }

    addLabel(name) {
        const newLabel = new LabelClass(name)
        this.array.push(newLabel)
    }

    editLabel(name, id) {
        const searchLabel = this.array.findIndex((x) => x.id == id)
        if (searchLabel !== -1) {
            this.array[searchLabel].updateLabel(name)
        } else {
            return 'gaono cuy'
        }
    }

    deleteLabel(id) {
        const searchLabel = this.array.findIndex((x) => x.id == id)
        if (searchLabel !== -1) {
            this.array.splice(searchLabel, 1)
        } else {
            return 'gaono cuy'
        }
    }
}