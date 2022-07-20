export interface Person {
    _id: number
    name: string
    paid: number
    debts: Creditor[]
}

export interface Creditor extends Person {
    amount: number | undefined
}

export const creditorFromPerson = (person: Person): Creditor => {
    return {...person, amount: undefined}
}

export const evaluateDebt = (person: Person, creditor: Creditor, peopleLen: number): Creditor | null => {
    const difference = (creditor.paid/peopleLen) - (person.paid/peopleLen)
    if (difference <= 0) return null
    else {
        creditor.amount = (Math.round(difference * 100) / 100)
        return creditor
    }
}