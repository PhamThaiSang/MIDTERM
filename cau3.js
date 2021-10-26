let a = []
let result = []
while (true) {
    let value = prompt()
    if (value == -1){
        break
    }
    a.push(value)
}
for (let i = 0; i < a.length; i++) {
    if (!result.includes(a[i])) {
        result.push(a[i])
    }
}
console.log(result)