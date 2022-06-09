// function removeSmallest(numbers) {
//     let arr = [];
//     let minRating = numbers[0];

//     if(numbers.length === 0) return [];

//     for(let i = 0; i < numbers.length; i++) {
//         if(minRating > numbers[i]) {
//             minRating = numbers[i];
//         }
//         //what if first index is the lowest number tho ? 
//         if(minRating != numbers[i]) {
//             arr.push(numbers[i])
//         }
//     }
//     return arr;
//   }

function removeSmallest(numbers) {
    let minIndex = numbers.indexOf(Math.min(...numbers));
    return numbers.filter((num, idx, arr) => idx !== minIndex);
}


  





// odoo baigaa utga ni daraagiin utgaas ih baigaa esehiig shalgah







// console.log(arrayRemove([1, 2, 3, 4], 2));

console.log(removeSmallest([1, 2, 3, 5, 0, 2, 0]));