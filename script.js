$(document).ready(function(){
    $(".pictures").hover(function(){
        $(this).css("width", "100px", "height", "100px");
    }, function(){
        $(this).css("width", "50px", "height", "50px");
    })
})

let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        document.getElementById("Hello").innerHTML = myObj.name;
    }
};
newRequest.open("GET", "https://api.github.com/users/Jggilbert/repos", true);
newRequest.send();
