function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    var interest = principal * years * rate /100;

    var year = new Date().getFullYear()+parseInt(years);
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_value").innerText=rateval;
}
function checkdata(){
    //create references to the input elements we wish to validate
    var principal = document.getElementById("principal").value;
    //Check if principal field is empty
    if(principal.value == ""){
          alert("Please enter prinicpal amount over $0");
          principal.focus();
          return false;
    }
    //If all is well return true.
    alert("Form validation is successful.")
    return true;
}