//
function idInput(id){
    return document.getElementById(id+"-input").value;
}

document.getElementById("calculation-btn").addEventListener("click", function(){
    const totalIncome = idInput("income");
    const foodInputAmount = idInput("food");
    const rentInputAmount = idInput("rent");
    const clothesInputAmount = idInput("clothes");
    if (totalIncome < 0 || foodInputAmount < 0 || rentInputAmount < 0 || clothesInputAmount < 0 ){
        const failError = document.getElementById('notify-fail');
        failError.style.display = 'block';
    }
    else if (totalIncome == "" || foodInputAmount == "" || rentInputAmount == "" || clothesInputAmount == "" ){
        const failError = document.getElementById('notify-fail');
        failError.style.display = 'block';
    }
    else{
        //total expenses amount calculation
        const totalExpensesAmount = parseInt(foodInputAmount) + parseInt(rentInputAmount)+parseInt(clothesInputAmount);
    
    if(totalExpensesAmount > totalIncome){

        const failError = document.getElementById('notify-fail-0');
        failError.style.display = 'block';
    }

    else{
        document.getElementById("total-input").innerText = totalExpensesAmount;

        const totalBalance = totalIncome - totalExpensesAmount;

        document.getElementById("balance-input").innerText = totalBalance;
    
        // Saving button calculation
        document.getElementById("save-button").addEventListener("click", function(){
            // saving calculation
            const savingsTaka = idInput("save");
            const savingsMoney = parseFloat(savingsTaka);
            const numFixedTwo = savingsMoney.toFixed(2);
            const savingAmount = totalIncome * (numFixedTwo / 100);
            if (savingAmount < 0 ){
                const failError = document.getElementById('notify-fail-1');
                failError.style.display = 'block';
            }
            else if (totalIncome == "" || foodInputAmount == "" || rentInputAmount == "" || clothesInputAmount == "" ){
                const failError = document.getElementById('notify-fail-1');
                failError.style.display = 'block';
            }
            else if(savingAmount > totalBalance){
                const failError = document.getElementById('notify-fail-2');
                failError.style.display = 'block';
            }
            else{
                document.getElementById("saving-amount").innerText = savingAmount;
                document.getElementById("remaining-balance").innerText = totalBalance - savingAmount;
            }
            // console.log(saving);
        });
        
    }
    
    }
    document.getElementById('income-input').value = "";
    document.getElementById('food-input').value = "";
    document.getElementById('rent-input').value = "";
    document.getElementById('clothes-input').value = "";
    
});