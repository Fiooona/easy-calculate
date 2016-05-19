

function calculate_median(arr) {
    var index=0;
    for(var n= 0,i=0;i<arr.length;i++){
        if((i%2)!=0){
            //偶数位n个
            n++;
        }
    }
    if ((n%2)==0){
        //偶数
        index=n;
        var num=( arr[index-1]+arr[index+1])/2 ;
    }
    else{
        index=n;
        num= arr[index];
    }
    return num
}
//arr=[1,2,3,4,5,6,7,8,9];
//console.log(calculate_median(arr));
module.exports = calculate_median;
