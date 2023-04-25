export interface DBPosition {
    position_id: string;
    title: string;
    supervisor: string;
    pay: number;
    term: string;
    type: string;
    division: string;
    hours: number;
    office_hours: number;
    tasks: string[];
    is_default: boolean;
    holder: string;
    holder_name: string;
}

export class Position implements DBPosition {

    // Poston DB fields
    public position_id: string;
    public title: string;
    public supervisor: string;
    public pay: number;
    public term: string;
    public type: string;
    public division: string;
    public hours: number;
    public office_hours: number;
    public tasks: string[];
    public holder: string = "";
    public holder_name: string = "";

    // Class instance variables
    public is_default: boolean;

    constructor(
        position_id: string,
        title: string,
        supervisor: string,
        pay: number,
        term: string,
        type: string,
        division: string,
        hours: number,
        office_hours: number,
        tasks: string[],
        is_default: boolean
    ) {
        this.position_id = position_id;
        this.title = title;
        this.supervisor = supervisor;
        this.pay = pay;
        this.term = term;
        this.type = type;
        this.division = division;
        this.hours = hours;
        this.office_hours = office_hours;
        this.tasks = tasks;
        this.is_default = is_default;
    }
    

    public to_dict = (): DBPosition => {
        return {
            position_id: this.position_id,
            title: this.title,
            supervisor: this.supervisor,
            pay: this.pay,
            term: this.term,
            type: this.type,
            division: this.division,
            hours: this.hours,
            office_hours: this.office_hours,
            tasks: this.tasks,
            holder: this.holder,
            holder_name: this.holder_name,
            is_default: this.is_default,
        };
    };
}

class Executive extends Position {
    constructor(
        position_id: string,
        title: string,
        supervisor: string,
        division: string,
        tasks: string[],
        is_default: boolean
    ) {
        super(
            position_id,
            title,
            supervisor,
            7000,
            "1 Year",
            "At will",
            division,
            15,
            10,
            tasks,
            is_default
        );
    }
}

class ContractualEmployee extends Position {}

export class DivisionVP extends Executive {
    constructor(
        position_id: string,
        title: string,
        division: string,
        tasks: string[],
        is_default: boolean
    ) {
        super(position_id, title, "President", division, tasks, is_default);
    }
}

class Constitutional extends Executive {
    constructor(position_id: string, title: string, tasks: string[]) {
        super(
            position_id,
            title,
            "General Student Senate",
            "Division",
            tasks,
            true
        );
    }
}

export class President extends Constitutional {
    constructor(tasks: string[]) {
        super('president', "President", tasks);
    }
}

export class VP extends Constitutional {
    constructor(tasks: string[]) {
        super("vice_president", "Vice President", tasks);
    }
}

class Director extends Position {
    constructor(
        position_id: string,
        title: string,
        tasks: string[],
        is_default: boolean
    ) {
        super(
            position_id,
            title,
            "Vice President",
            4350,
            "1 Year",
            "At will",
            "Internal Affairs",
            10,
            10,
            tasks,
            is_default
        );
    }
}

export class DOC extends Director {
    constructor(position_id: string, tasks: string[]) {
        super(position_id, "Director of Communications", tasks, true);
    }
}

export class DOT extends Director {
    constructor(position_id: string, tasks: string[]) {
        super(position_id, "Director of Technology", tasks, true);
    }
}
