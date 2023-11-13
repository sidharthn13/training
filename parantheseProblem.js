let output = []
function main(num){
    generate(num,num,'')
}
function generate(open,closed,str){
    if(open ==0 && closed == 0){
        output.push(str)
    }
    if(open == closed && open != 0){
        str+= "("
        console.log(str)
        generate(open-1,closed,str)
    }
    if(open <closed && closed >0){
        str += ')'
        console.log(str)
        generate(open,closed-1,str)
    }
    if(open > closed && open >0){
        str+='('
        console.log(str)
        generate(open-1,closed,arr)
    }
}
main(3)
console.log(output)
