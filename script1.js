function factorial(){
    const number=document.getElementById("num2").value;
    if(number<0){
        document.getElementById("viewoutput").innerHTML ="Error! Factorial for negative numbers does not exist.";
    }
    else if(number === 0){
        document.getElementById("viewoutput").innerHTML ="The factorial of "+ number +" is 1.";
    }
    else{
        let fact=1;
        for(let i=1;i<=number;i++){
            fact*=i;
        }
        document.getElementById("viewoutput").innerHTML ="The factorial of "+ number +" is " +fact;
    }
}
function prime(){
    const num=document.getElementById("num1").value;
    var count=0;
    if(num<0){
        document.getElementById("output").innerHTML =" Error! Negative number is not a prime number";
    }
    else if( num == 1 || num == 0){
        document.getElementById("output").innerHTML =" Neither a prime number nor a composite number";   
    }
    else {
        for(let i=2;i<num;i++){
            if( num % i == 0){
                count++;
            }
        }
        if(count>0){
            document.getElementById("output").innerHTML = num +" is not a prime number because it has extra "+ count +" factor";
        }
        else{
            document.getElementById("output").innerHTML = num +" is  a prime number";
        }
    }   
}

















