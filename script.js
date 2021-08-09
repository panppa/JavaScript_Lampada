var on = false;
function changeLamp(){
    if(on){
        document.getElementById("lamp").src="images/lampada_off.png";
        on=false;
    }else
    {
        document.getElementById("lamp").src="images/lampada_on.png";
        on =true;
    }
}