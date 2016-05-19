var n;
function calculate_median(arr) {
    for(var i=0;i<arr.length;i++){
        if((i%2)!=0){
            //偶数位n个
            n++;
        }
    }
    if ((n%2)==0){
        //偶数
        return (arr[n-1]+arr[n+1])/2;
    }
    else{
        return   arr[n];
    }

}

//arr=[1,2,3,4,5,6,7,8,9];
//console.log(calculate_median(arr));
module.exports = calculate_median;
