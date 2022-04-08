function compute() {
    //create references to the input elements we wish to validate
    var principal = document.getElementById("principal").value;
    //Check if principal field is empty
    if(principal == "" || principal == 0) {
          alert("Please enter prinicpal amount over $0");
          principal.focus();
          return;
    }
    //declare values to be used
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear() + parseInt(years);
    //display results
    var result_display = document.getElementById("result");
    result_display.innerText = "\n" +
        "If you deposit $" + principal + "\n" +
        "at an interest rate of " + rate + "%\n" +
        "You will receive an amount of $" + interest + "\n" +
        "in the year " + year;
}
function updateRate() {
    var rate_val = document.getElementById("rate").value;
    //add percent symbol to value
    var rate_per = rate_val + "%"
    //display percent rate
    var rate_update = document.getElementById("rate_value");
    rate_update.innerText = rate_per;
    //update slider value each time you drag the slider handle
    document.getElementById("rate").oninput = function() {
            rate_update.innerText = this.value + "%";
        }
}
