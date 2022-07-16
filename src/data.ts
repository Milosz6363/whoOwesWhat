export class Person {
    _id: number = 0
    name: string = ''
    paid: number = 0
    debts: Creditor[] = [] 
    constructor(id: number, n:string, p: number){
        this._id = id
        this.name = n
        this.paid = p
        this.debts = []
    }
    addCreditors(creditors: Person[]){
        creditors.forEach(creditor => {
            this.debts = [...this.debts, Creditor.creditorFromPerson(creditor)]
        })
    }
    evaluateDebts(){

    }
}

export class Creditor extends Person {
    amount: number | undefined
    constructor(public id: number, public n:string, public p: number){
        super(id, n, p)
        this.amount = undefined
    }
    static creditorFromPerson(person: Person){
        return new Creditor(person._id, person.name, person.paid)
    }
}