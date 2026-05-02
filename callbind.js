let obj1={fname: "darshan",
    lname:"yl",
    fullname:function(){console.log(this.fname)}
}
let obj2={fname: "sudeep",
    lname:"ykicchal",
    fullname1:function(){console.log(this.fname)}
}
obj1.fullname()
obj2.fullname1()