export interface Person {
    _id: number
    name: string
    paid: number
    debts: Creditor[]
}

export const addCreditors = (person: Person, creditors: Person[]): void => {
    creditors.forEach(creditor => {
        person.debts = [...person.debts, creditorFromPerson(creditor)]
    })
}

export interface Creditor extends Person {
    amount: number | undefined
}

export const creditorFromPerson = (person: Person): Creditor => {
    return {...person, amount: undefined}
}