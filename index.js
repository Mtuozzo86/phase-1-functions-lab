// Code your solution in this file!



// function distanceFromHqInBlocks(block){
//     if (block > 42) {
//        return block - 42
//     } else if (block < 42) {
//         return 42 - block
//     }
// }

// function distanceFromHqInFeet(block){
//     return distanceFromHqInBlocks(block) * 264
// }

// function distanceTravelledInFeet(start, finish){
//     if (start > finish) {
//         return (start - finish) * 264
//     } else if (start < finish) {
//         return (finish - start) * 264
//     }
// }


// function calculatesFarePrice(start, finish){
//     const distance = distanceTravelledInFeet(start, finish)
//     if (distance <= 400){
//         return 0
//     } else if (distance > 400 && distance <= 2000){
//         return (distance - 400) * .02
//     } else if (distance > 2000 && distance < 2500) {
//         return 25
//     } else if (distance > 2500){
//         return 'cannot travel that far'
//     }
// }
// Scuber hq is 42
function distanceFromHqInBlocks(street){
    if(street > 42){
        return street - 42
    } else if(street < 42){
        return 42 - street
    }
}
console.log(distanceFromHqInBlocks(34))
//-------------------------------------------------------
function distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street) * 264
}
console.log(distanceFromHqInFeet(50))

function distanceTravelledInFeet(start, end){
    if(start > end){
        return (start - end) * 264
    } else if (end > start){
        return (end - start) * 264
    }
}
console.log(distanceTravelledInFeet(100, 10))
// Given the same starting and ending block as the
// previous test (_hint hint_), return the fare for the customer. The first four
// hundred feet are free. For a distance between 400 and 2000 feet, the price is 2
// cents per foot (not including 400, which are free!). Then Scuber charges a
// flat fare for a distance over 2000 feet and under 2500 feet. Finally, Scuber
// does not allow any rides over 2500 feet — the function returns `'cannot travel
// that far'` if a ride over 2500 feet is requested.
function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if(distance <= 400){
        return 0
    } else if (distance > 401 && distance <= 2000){
        return (distance - 400) * .02
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else if (distance >= 2500){
        return 'cannot travel that far'
    }
}
console.log(calculatesFarePrice(34, 41))
