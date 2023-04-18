
export interface Position {
    title: string
    term: number
    pay: number
}

class President implements Position {
    
    public title;
    public term;
    public pay;

    constructor(title: string, term: number, pay: number) {
        this.title = title;
        this.term = term;
        this.pay = pay;
    }

}