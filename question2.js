for (let i = 0, j = 10; i < 5; i++, j--) {
    console.log(`i: ${i}, j: ${j}`);
}


let x = 1;
let y = (x++, x + 2, x * 3);
console.log(y); // Output: 6
