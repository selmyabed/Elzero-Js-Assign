let a = "Elzero Web School";
// Task [1]
console.log(a.charAt(2).toUpperCase() + a.slice(3 , 6))

// Task [2]
console.log(a.substring(a.length - 4 , a.length - 3).repeat(8).toUpperCase())
console.log(a.substr(13 , 1).repeat(8).toUpperCase())
console.log(a.slice(-4 , -3).repeat(8).toUpperCase())
console.log(a[13].repeat(8).toUpperCase())
console.log(a.charAt(13).repeat(8).toUpperCase())

// Task [3]
console.log(a.split(" " , 1))

// Task [4]
console.log(`${a.substr(0 , 6)} ${a.substr(a.length - 6)}`)
console.log(a.substr(0 , 6) + " " + a.substr(a.length - 6))

// Task [5]
console.log(a.charAt(0).toLowerCase() + a.substring(1 , a.length - 1).toUpperCase()  + a.substring( a.length - 1).toLowerCase())
console.log(`${a.charAt(0).toLowerCase()}${a.substring(1 , a.length - 1).toUpperCase()}${a.substring( a.length - 1).toLowerCase()}`)