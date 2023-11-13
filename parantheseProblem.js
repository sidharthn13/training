let output =[]

function main(num){
    output = []
    total = 2 * num
    generate(num*2,num,num,[])
} 

function generate(total,numOpen,numClosed,arr){
    if(arr.length ==  total){
        output.push(arr)
        return
    }
    if(numOpen == numClosed && numOpen >0 && numClosed>0){
        arr.push('(')
        generate(total,numOpen-1,numClosed,arr)
        generate(total,numOpen,numClosed-1,arr)
    }
    if(numOpen != numClosed){
        if(numOpen == 0 && numClosed != 0){
            arr.push(')')
            generate(total,numOpen,numClosed - 1,arr)
        }
        else if(numOpen !=0 && numClosed == 0){
            arr.push('(')
            generate(total,numOpen-1,numClosed,arr)
        }
        else{
        arr.push('(')
        generate(total,numOpen-1,numClosed,arr)
        arr.push(')')
        generate(total,numOpen,numClosed-1,arr)}
    }
}
main(3)
output.forEach((el)=>console.log(el))