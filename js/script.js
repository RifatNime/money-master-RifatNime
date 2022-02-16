const amountCalculation = document.getElementById("calculate-btn");
amountCalculation.addEventListener("click", function(){
    // console.log("yes");
    
    const foodInput = document.getElementById("food-cost").value;
    const rentInput = document.getElementById("rent-cost").value;
    const clothInput = document.getElementById("clothes-cost").value;
    const expencesAmount = parseInt(foodInput) + parseInt(rentInput) + parseInt(clothInput);
    console.log(expencesAmount);
    const totalExpensesAmount = document.getElementById("total-expenses");
    totalExpensesAmount.innerText =  expencesAmount;
    
    console.log(totalExpensesAmount);
    

});

