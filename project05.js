function toggle(){
    let toggle = document.querySelector(".list");
    toggle.classList.toggle("newcontainer");
}

//toggling in a list

    
function screen() {


    window.onresize=screen;
    window.onload=screen;
    let mywidth=document.getElementById("resize").innerHTML;

    mywidth= "<h3>" + "width:" + innerWidth + "px" + "</h3>";
    console.log(mywidth);
}