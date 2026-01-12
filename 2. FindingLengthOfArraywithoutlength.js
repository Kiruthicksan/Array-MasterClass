function findingLength(arr){
    let count = 0

    for (let num of arr){
        count += 1
    }

    return count
}

console.log(findingLength([1,2,3,4,5]))