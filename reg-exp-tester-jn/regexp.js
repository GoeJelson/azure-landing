function verify(){
    regex1 = RegExp(document.getElementById("ui").innerHTML);
    regex2 = RegExp(document.getElementById("ui2").innerHTML);
    document.getElementById("output").innerHTML = regex1.test(regex2).toString();
}