function checkemail(){
    var un=document.getElementById("user").value

     var em=document.getElementById("emsg")

     var emailregex= /^\S+@\S+\.\S+$/.test(un)

     if (emailregex) {
        em.innerHTML="email is correct"
        em.style.color="blue"
        return true;

     } else {
         em.innerHTML="email is incorrect"
        em.style.color="red"
        return false;

     }
}
function checkpass(){
    var pn=document.getElementById("pass").value

     var pas=document.getElementById("epass")

     var passregex= /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(pn)

     if (passregex) {
        pas.innerHTML=" correct password"
        pas.style.color="blue"
        return true;

     } else {
         pas.innerHTML=" incorrect password"
        pas.style.color="red"
        return false;

     }
}
function checkmob(){
    var mn=document.getElementById("mob").value

     var mo=document.getElementById("emob")

     var mobregex= /^\d{10}$/.test(mn)

     if (mobregex) {
        mo.innerHTML=" correct mobile-no"
        mo.style.color="blue"
        return true;
     } else {
         mo.innerHTML=" incorrect mobile-no"
        mo.style.color="red"
        return false;
     }
}
function login() {
    
    if (checkemail() && checkpass() && checkmob()) {
        window.open("o.html")
    } else {
         document.getElementById("login").innerHTML="invalid info"
    }
}
