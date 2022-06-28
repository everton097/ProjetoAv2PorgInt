const chk = document.getElementById('chk')

chk.addEventListener('change', myFunction)

function myFunction() {
    var link = document.querySelector("#temacss");
    if(link.getAttribute("href")==="/mystyle.css"){
        link.setAttribute("href","/mystylecopy.css");
    } else {
        link.setAttribute("href","/mystyle.css");
    }
}
