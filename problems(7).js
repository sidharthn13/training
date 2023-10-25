// Q1
let leader = function (arr) {
    let out = []
    out.push(arr[arr.length - 1]);
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > out[out.length - 1]) { out.push(arr[i]); }
    }
    console.log(out.reverse())
}



// Q2
let maxmin = function (arr) {
    let p1 = arr.length - 1
    let p2 = 0
    let out = []
    while (p1 > p2) { out.push(arr[p1]); out.push(arr[p2]); p1-= 1; p2 += 1 }
    if (p1 == p2) { out.push(arr[p1]) }
    console.log(out)
}



// Q 3
function sort_inbuilt(arr){
    console.log(arr.sort((a,b)=>{return a-b}))
}



// Q4
let remove_inbuilt = function(arr){
    console.log( arr.filter((value,index)=>{return arr.indexOf(value)==index}))
}




// Q5
let bubblesort = function(arr){
    for(let i = 0; i < arr.length ; i++){
        for(let j = 0 ; j < arr.length - i ; j++ ){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    console.log(arr)
}



// Q 6
function remove_duplicates(arr){
    let dic = {};
    let out = []

    for(let i of arr){if(dic.hasOwnProperty(i)){continue;}
else{dic[i] = i;out.push(i)}}
 console.log(out)

}



//Q7
let shiftzero = function (arr) {
    let out = []
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) { out.push(arr[i]) }
        else { count += 1 }
    }
    for (let j = 0; j < count; j++) { out.push(0) }
    console.log(out)
}


/////
leader([16, 17, 4, 3, 5, 2])
maxmin([1, 2, 3, 4, 5, 6, 7])
sort_inbuilt([3,0,4,2,0,5,8,5,8,9,6,6,4,0])
remove_inbuilt([3,0,4,2,0,5,8,5,8,9,6,6,4,0])
bubblesort([2,5,3,6,0,1,4])
remove_duplicates([3, 5, 8, 2,2,2,5,6,4, 5, 6, 9, 4])
shiftzero([1, 2, 0, 4, 3, 0, 5, 0])

    



