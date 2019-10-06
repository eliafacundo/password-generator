var generatePassword = document.querySelector("generate");

generatePassword.addEventListener("click", function(generate) {
    var howManyChars = prompt("How many characters?");
    var finalPassword ="";

    if (howManyChars<8) {
        alert("Not enough characters!")
    }

    else if (howManyChars>128) {
        alert("Too many characters!")
    }

    else {
        function generate (){

        var values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()?";
        
        var password = "";
    
        for(var i = 0; i < randomPassword.length; i++) {
            password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
        }
        
        document.getElementById("display").value = password;
        
    }
    
    document.getElementById("slider").oninput = function() {
        if(document.getElementById("slider").value > 8) {
            document.getElementById("length").innerHTML = "length: " + document.getElementById("slider").value;
        }
        else{
            document.getElementById("length").innerHTML = "Length: 9";
        }
    }
    
    fucntion copy() {
        document.getElementById("display").querySelector();
        document.execCommand("copy");
        alert("password copied to clipboard")
    
    }

    }
})


