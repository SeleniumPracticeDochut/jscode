function fun1(c1){
    c1()
    console.log("im parent")
}
function fun2(){
    console.log("im child")
}
fun1(fun2)