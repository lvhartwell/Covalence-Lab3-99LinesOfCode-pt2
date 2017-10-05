
var friends = ["Trice", "Tori", "Amber", "Ash", "Titi"];

function print() {
    for (var i = 0; i < friends.length; i++) {
        var div = document.createElement("div");
        var heading = document.createElement("h3");
        var htext = document.createTextNode(friends[i]);
        div.appendChild(heading);
        heading.appendChild(htext);
        div.className = "friend";
    
       console.log(friends[i]);
    
    for(var j = 99; j > 0; j--) { 
        var para = document.createElement("p");
        div.appendChild(para);
        var ptext = document.createTextNode(j + " lines of code in the file; " +
        j + " lines of code. " + friends[i] + " strikes one "
        + " out, clears it all out, " +
        (j > 2 ?
            (j - 1) + " lines of code in the file" :
            j == 2 ? (j - 1) + " line of code in the file" :
            "no more lines of code in the file"));

        para.appendChild(ptext);
        document.body.appendChild(div);

       
    
};
    };
};

