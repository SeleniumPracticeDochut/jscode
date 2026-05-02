class Animal{

    static aname="charliee"
    static age= 20
    static details(){
        console.log(`${this.aname} is ${this.age} years old`)
    }

}
class Cat extends Animal{
static aname="tom"
static print(){
    console.log(this.aname);
}    

}
Cat.print()
Cat.details()