let bike1={
    comapany: "honda",
    colour:"grey",
    cost: 99000,
    seating:2
}

let bike2=Object.create(bike1)
console.log(bike2.comapany);
bike2.colour="white"
console.log(bike2.colour);
console.log(bike1.colour);

