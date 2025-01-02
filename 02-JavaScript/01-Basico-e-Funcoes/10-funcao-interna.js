function addSquare(a, b){
    const square = (x) =>{
        return x * x;
    }

    let sqraA = square(a);
    let sqrbA = square(b);
    return sqraA + sqrbA;
}

console.log(addSquare(2, 3)); // 13