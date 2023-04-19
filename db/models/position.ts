
export interface DBPosition {
    position_id: number
    title: string
}

class Position implements DBPosition {
    public position_id: number
    public title: string

    constructor(position_id: number, title: string) {
        this.position_id = position_id;
        this.title = title;
    }

}