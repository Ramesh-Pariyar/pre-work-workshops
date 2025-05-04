// YOUR CODE BELOW
const everyWhichWay = (numOne,numTwo,numThree) => {
    if (numOne + numTwo === numThree){
        return "Sum";
    }
    else if (numOne-numTwo===numThree){
        return "difference";
    }
    else if (numOne*numTwo ===numThree){
        return "multiply";
    }
    else if(numOne/numTwo === numThree){
        return "fraction";
    }
    else{
        return "null";
    }
};