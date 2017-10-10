function convert() {
    var text = document.getElementById("input").value;
    text=text.toUpperCase();
    text=text.replace(/\./g,' ');
    text=text.replace(/ /g,'');
    var split_text=text.split("");
    console.log(split_text);

    var morsecode = ["A",".-","B","-...","C","-.-.","D","-..","E",".","F","..-.","G","--.","H","....","I","..","J",".---",
        "K","-.-.","L",".-..","M","--","N","-.","O","---","P",".--.","Q","--.-","R",".-.","S","...","T","-","U","..-",
        "V","...-","W",".--","X","-..-","Y","-.--","Z","--.."];

    var list=[];
    for (var x in split_text){

        if(split_text[x]==""){
            delete split_text[x];
        }
        else {
            var a = morsecode.indexOf(split_text[x]);
            console.log(a);
            var letter = morsecode[a+1];
            list.push(letter);
        }

        console.log(list)
    }





    document.getElementById("output").innerHTML = list.join(" ");
}


