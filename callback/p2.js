function add(x,y,c1,c2){
    let a=x+y
    c1(a,5,c2)

}
function sub(x,y,c2){
    let b=x-y
    c2(b,2)
    
}
function mul(x,y){
    let c=x*y
    console.log(c);
    
}
add(10,5,sub,mul)