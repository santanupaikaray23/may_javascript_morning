// var a = 10
// function add(){
//     var b = 20
//     return a+b
// }
// console.log("a>>>",a)
// console.log("b>>>",b)
// console.log(add())

// var a =10;
// function add(){
//     var b =20
//     console.log("<<<<a inside>>>>",a)
//     var b = 20
//     return a+b
// }
// console.log("a outside>>>",a)
// console.log(add())
// console.log("b>>>",b)

var a = 10
for(i=0;i<5;i++){
    let b = 20
    console.log(a+b+i)
}
console.log("a outside>>>",a)
console.log("b>>>",b)