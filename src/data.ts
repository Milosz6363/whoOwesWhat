export interface Person {
    id: number
    name: string
    paid: number
    debts: Debt[]
}

export interface Debt {
    to: Person
    amount: number
}