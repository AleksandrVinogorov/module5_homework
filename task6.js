let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 's'];

let similar =  true;
for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (typeof(arr[i]) !== typeof(arr[j])){
            similar = false;
        }
    }
}
if (similar) {
    console.log("true");
} else {
    console.log("false");
}
