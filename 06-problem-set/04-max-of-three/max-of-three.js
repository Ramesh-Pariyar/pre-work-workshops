// YOUR CODE BELOW
const maxOfThree = (num1,num2,num3) =>{
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    elseif (num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}