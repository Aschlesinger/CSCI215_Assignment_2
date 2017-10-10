function convert() {
    var text = document.getElementById("input").value;
    text=text.toUpperCase();
    text=text.replace(/\./g,' ');
    var split_text=text.split(" ");

    var list=[];
    for (var x in split_text){
        if(split_text[x]==""){
            delete split_text[x];
        }
        else if(list.includes(split_text[x])){

            var a = list.indexOf(split_text[x]);
                list.splice(a+1, 1, list[a+1]+1);

        }
        else {
            list.push(split_text[x]);
            var a = list.indexOf(split_text[x]);
            list.splice(a+1, 0, 1);
        }

    }





    document.getElementById("output").innerHTML = list.join(" ");
}


