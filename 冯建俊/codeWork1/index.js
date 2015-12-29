/**
 * Created by fengjj on 2015/12/29.
 */
window.onload=function(){
    console.log(document.querySelector("#changeColor"))
    document.querySelector("#changeColor").onclick=function(){
        this.style.color="#000";
    }
}