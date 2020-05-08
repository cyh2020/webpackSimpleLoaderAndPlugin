let user = {
    name:"fsj",
    age:15
}
let xt = JSON.stringify(user,null,1)
console.log(xt)

let b = JSON.parse(xt)
console.log(b)