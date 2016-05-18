function calculate_median(arr) {
    for(var n= 0,i=0;i<arr.length;i++){
        if((i%2)!=0){
            //奇数位
            var num;
            num+=arr[i];
            n++;
        }
        var median_num=num/n;
    }
    return   median_num
}

module.exports = calculate_median;
