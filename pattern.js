

let pattern = function(num){
try{
if(num%2 != 0){
for(let i = 1; i<=num ; i+= 2){
    let a = [];
    for(let i = 0 ; i < num ; i++ ){ a.push('*'); }
    for(let j = 0 ; j <(num-i)/2 ; j++){ a[j] = ' ' ; a[a.length-1-j] = ' ' ; }
    console.log(a.join(''))
}

for(let i = num-2 ; i >=0 ; i-=2 ){
    let a = [];
    for(let i = 0 ; i < num ; i++ ){ a.push('*'); }
    for(let j = 0 ; j < (num-i)/2 ; j++){ a[j] = ' ' ; a[a.length-1-j] = ' ' ; }
    console.log(a.join(''))
}
}
else{throw new Error('even number')}
}
catch(err){console.log(`Error : ${err.message} is not accepted`)}
}

pattern(13)