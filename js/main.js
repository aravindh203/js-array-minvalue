let array=[1,-39,50,94,22,5];
console.log(array);
function maxvalue(){
    b=array[0];
    for(i=0;i<array.length;i++){
        if(array[i]<b){
            b=array[i];
        }
    }
    return b;
}
console.log(maxvalue());