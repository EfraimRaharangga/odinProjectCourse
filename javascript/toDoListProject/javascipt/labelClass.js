export default class LabelClass {
    constructor(name) {
        this.name = name
        this.id = crypto.randomUUID()
    }
    updateLabel(name) {
        this.name = name
    }
}