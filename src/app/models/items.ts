
export interface IItems {
    id?: number,
    description?: string,
    done?: boolean
}

export class Items implements IItems {
    constructor(
        public id?: number,
        public description?: string,
        public done?: boolean
    ) { }
}