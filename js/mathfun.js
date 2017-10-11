function convert() {
    var x = 0;
    var nums=[];
    while(x==0){
        var number = prompt("Enter a positive number \n If you want to stop enter: -1");

        console.log(number);
        if(isNaN(number)){
            alert("Enter Numbers only please");
        }
        else if(parseInt(number)== 1-2){
            x++;
        }
        else{
            nums.push(parseInt(number));

        }
    }

    nums.sort(function(a, b){return a-b});
    console.log(nums);

    var lenght = nums.length;
    var total_num = 0;
    var even = 0;
    var odd = 0;
    var prime = [];

    for(var y in nums){
        total_num=total_num+nums[y];

        if(nums[y]%2==0){
            even++
        }
        else{
            odd++
        }
        //for(var i = 2; i < nums[y]; i++){
           if(nums[y] % 2 !== 0) prime.push(nums[y]);


    }

    var max = nums[lenght-1];
    var min = nums[0];
    var median = nums[Math.floor(parseInt(lenght)/2)];
    var mean = total_num / lenght;



    document.getElementById("output").innerHTML = nums.join(" ");
    document.getElementById("output1").innerHTML = min;
    document.getElementById("output2").innerHTML = max;
    document.getElementById("output3").innerHTML = mean;
    document.getElementById("output4").innerHTML = median;
    document.getElementById("output5").innerHTML = even;
    document.getElementById("output6").innerHTML = odd;
    document.getElementById("output7").innerHTML = prime;






    //document.getElementById("output").innerHTML = list.join(" ");
}


