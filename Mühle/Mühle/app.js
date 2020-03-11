var d = document.getElementsByClassName("firstStone")[0]
d.style.position ="absolute";
window.onclick = function (clickEvent) {
    console.log("Geklicktes Element auf der x-Achse an der Position: " + clickEvent.pageX);
    console.log("Geklicktes Element auf der y-Achse an der Position: " + clickEvent.pageY);
    var rechnung = clickEvent.pageX -40;
    var rechnung2 = clickEvent.pageY -40;
    console.log(rechnung)
    if(rechnung <= 452 && rechnung2 <= 92){
        document.getElementsByClassName("firstStone")[0].style.left = "452px";
        document.getElementsByClassName("firstStone")[0].style.top = "92px";
    }

    console.log("Was ist das hier: " +document.getElementsByClassName("firstStone")[0] )
};