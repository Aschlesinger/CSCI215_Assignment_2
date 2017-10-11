function verify() {
    var text = document.getElementById("input").value;
    var test_text = text.split("");
    if(test_text.includes("@") && test_text.includes(".")){
        var email = text.split(/@/);

        var cut = email[1].split(/\./);

        var email_split = [email[0],cut[0],cut[1]];


        if(email_split[0].length>=1){
            if(email_split[1].length>=1){
                if(email_split[2].length>=1) {
                    alert("Valid Email")
                }
                else{
                    alert("Invalid Email!")
                }
            }
            else{
                alert("Invalid Email!")
            }
        }
        else{
            alert("Invalid Email!")
        }
    }
    else{
        alert("Invalid Email!")
    }



}


