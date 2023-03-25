var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        // tablink.classlist.remove("active-link");
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}
var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("day-theme");
    if(document.body.classList.contains("day-theme")){
        icon.src = "moon.png";
        logochange.src = "darklogo.png";
    }
    else{
        icon.src = "sun.png";
        logochange.src = "logo.png";
    }
}