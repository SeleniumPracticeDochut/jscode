fullname1=function(address){console.log(this.lname+ this.fname + address)}

let obj1={fname: "darshan ",
    lname:"yl ",
    fullname:function(){console.log(this.fname+ this.lname)}
}
let obj2={fname: "sudeep ",
    lname:"kiccha ",
   
}
//call 
obj1.fullname()
obj1.fullname.call(obj2)

fullname1.call(obj1,"mysore ")
fullname1.call(obj2,"bengaluru ")

