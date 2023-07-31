
// function calculateCube(){
//     // var cube = Math.pow(document.getElementById("number").value, 3);
//     let numberValue = parseInt(document.getElementById("number").value);

//     var result = numberValue * numberValue * numberValue;

//     document.getElementById('result').value = result;
//     document.getElementById('number').value = "";
// }

function billSplit(){
    // var cube = Math.pow(document.getElementById("number").value, 3);
    
    let amount = document.getElementById("number").value;
    let people = document.getElementById("people").value;

    amount = Number.parseInt(amount);
    people = Number.parseInt(people);

    if (Number.isInteger(amount) == false || amount == 0)
    {
        document.getElementById("errorAmount").innerHTML = "Please enter a valid amount";
        document.getElementById("number").style.borderBottomColor = "red";

    }
    else if(Number.isInteger(people) == false || people == 0)
    {
        document.getElementById("errorPeople").innerHTML = "Please enter valid number of people";
        document.getElementById("people").style.borderBottomColor = "red";
    }
    else{
        document.getElementById('errorAmount').innerHTML = "&nbsp";
        document.getElementById('errorPeople').innerHTML = "&nbsp";
        document.getElementById("number").style.borderColor = "grey";
        document.getElementById("people").style.borderColor = "grey";

        let result = (amount / people).toFixed(2);
        document.getElementById('result').value = result;
        document.getElementById('number').value = "";
        document.getElementById('people').value = "";
    }
    
}