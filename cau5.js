let d = parseInt(prompt())
let m = parseInt(prompt())
let y = parseInt(prompt())

if ( m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10){
    if (d > 31){
        console.log(" NGAY BAN NHAP KHONG HOP LE")
    }
    else if ( d === 31 ){
        d= 1
        m = m+1
        console.log( d + "/" + m + "/" + y)
    }
    else {
        d = d + 1
        console.log( d + "/" + m + "/" + y)
    }
}
else if ( m === 2){
    if (y%400 === 0){
        if (d> 29){
            console.log(" NGAY BAN NHAP KHONG HOP LE")
        }
        else if ( d === 29 ){
            d= 1
            m = m+1
            console.log( d + "/" + m + "/" + y)
        }
        else {
            d = d+1
            console.log( d + "/" + m + "/" + y)
        }
    }
    else{
        if (d> 28){
            console.log(" NGAY BAN NHAP KHONG HOP LE")
        }
        else if ( d === 28 ){
            d= 1
            m = m+1
            console.log( d + "/" + m + "/" + y)
        }
        else {
            d = d+1
            console.log( d + "/" + m + "/" + y)
        }
    }
}
else if ( m === 12 ){
    if (d > 31){
        console.log(" NGAY BAN NHAP KHONG HOP LE")
    }
    else if ( d === 31 ){
        d= 1
        m = 1
        y = y +1
        console.log( d + "/" + m + "/" + y)
    }
    else {
        d = d + 1
        console.log( d + "/" + m + "/" + y)
    }
}
else {
    if (d > 30){
        console.log(" NGAY BAN NHAP KHONG HOP LE")
    }
    else if ( d === 30 ){
        d= 1
        m = m+1
        console.log( d + "/" + m + "/" + y)
    }
    else {
        d = d + 1
        console.log( d + "/" + m + "/" + y)
    }
}
