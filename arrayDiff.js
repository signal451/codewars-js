function arrayDiff(arr, elements) {
    return arr.filter((ele, index, array) => {
            return elements.indexOf(ele) === -1 ? true : false 
    })
}

console.log(arrayDiff([1,2,3],[1,2]));