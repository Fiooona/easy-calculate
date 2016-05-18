var n= 0;
var median_num;
var odd=0;
function calculate_median(arr) {
    for(var i=0;i<arr.length;i++){
        if((i%2)!=0){
            //偶数位
            odd +=parseInt(arr[i]);
            n++;
        }
    }
    median_num=odd/n;

    return   median_num;
}

//arr=[1,2,3,4,5,6,7,8,9];
//console.log(calculate_median(arr));
module.exports = calculate_median;
