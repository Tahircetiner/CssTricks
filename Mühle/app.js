var firstStones = document.getElementsByClassName("firstStone");
var areaOne = document.getElementsByClassName("area");
var itemIndex = 0;

window.onclick = function (clickEvent) {
    console.log("Geklicktes Element auf der x-Achse an der Position: " + clickEvent.pageX);
    console.log("Geklicktes Element auf der y-Achse an der Position: " + clickEvent.pageY);

    console.log(checkValidSetting(clickEvent.pageX,clickEvent.pageY, areaOne.item(i).getAttribute("coords").substring(0,2), areaOne.item(i).getAttribute("coords").substring(3,5)));

    console.log("### " + areaOne.item(0).getAttribute("coords").substring(0,3));
    console.log("### " + areaOne.item(0).getAttribute("coords").substring(4,7));


        for(var i = 0; i < areaOne.length; i++){

        if(checkValidSetting(clickEvent.pageX,clickEvent.pageY, areaOne.item(i).getAttribute("coords").substring(0,3), areaOne.item(i).getAttribute("coords").substring(4,7))){
            setStone(firstStones.item(itemIndex),areaOne.item(i));
            itemIndex++;
        }
    }

    //setStone(firstStones.item(itemIndex),areaOne.item(itemIndex));
    console.log("Wird hochgezaehlt?" + itemIndex);

};

function setStone(stone,area) {

    stone.style.position = "absolute";
    stone.style.left = area.getAttribute("coords").substring(0,3) + "px";
    stone.style.top = area.getAttribute("coords").substring(4,7) + "px";
}

function checkValidSetting(pixelOfClickedElementX,pixelOfClickedElementY,pixelOfFieldX,pixelOfFieldY) {
    var isValid = false;
    if(pixelOfClickedElementX <= pixelOfFieldX && pixelOfClickedElementY <= pixelOfFieldY){
        return true
    }

    return isValid;
}
