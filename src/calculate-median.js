var n=0;
var index=0;
function calculate_median(arr) {
    for(var i=0;i<arr.length;i++){
        if((i%2)!=0){
            //偶数位n个
            n++;
        }
    }
    if ((n%2)==0){
        //偶数
        index=n;
        return ((arr[index-1]+arr[index+1])/2);
    }
    else{
        index=n;
        return   arr[index];
    }

}

//arr=[1,2,3,4,5,6,7,8,9];
//console.log(calculate_median(arr));
module.exports = calculate_median;
