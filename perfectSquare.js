const nextPerfectSquare=(num)=>((Math.sqrt(num)+1)**2==Math.ceil(Math.sqrt(num)+1)**2)?(Math.sqrt(num)+1)**2:-1;

console.log(nextPerfectSquare(4));
console.log(nextPerfectSquare(16));
console.log(nextPerfectSquare(5));