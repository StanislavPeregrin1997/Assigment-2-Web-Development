document.addEventListener("DOMContentLoaded", function(){
    console.log("Hello");
   
    var jspopup = document.getElementById("jspopup");
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1 ).padStart(2, "0");
    var yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;
    jspopup.onclick = function(){
        alert(today);
    }
})
