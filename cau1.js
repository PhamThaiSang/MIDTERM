let arr=[prompt()]
let result = "";

for (let i = arr[0].length - 1; i >= 0; i--) {
    result = result + arr[0][i];
}
console.log(result);