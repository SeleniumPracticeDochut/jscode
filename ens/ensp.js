class Bank{

    #pin=1234
    #balance =222
    accname="Darshan"

    get getbalance(){
        return this.#pin
    }

}

let rf= new Bank()

console.log(rf.getbalance)
rf.accname
console.log(rf.accname)