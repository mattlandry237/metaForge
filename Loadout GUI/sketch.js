
function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
}
/*   Primary Weapon Drop Down Menu Functions   */
function pdropDownMenu() {
    document.getElementById("primaryDD").classList.toggle("show");
}

window.onclick = function(event){
    if(!event.target.matches('.pdropbtn')){
        var pdropdowns = document.getElementsByClassName("pdropdown-content");
        var i;
        for (i = 0; i <pdropdowns.length; i++){
            var popenDropdown = pdropdowns[i];
            if(popenDropdown.classList.contains('show')){
               popenDropdown.classList.remove('show');
            }
        }
    }
}
/*   End Primary Weapon Drop Down Menu Functions   */


/*   Secondary Weapon Drop Down Menu Functions   */
function sdropDownMenu() {
    document.getElementById("secondaryDD").classList.toggle("show");
}

window.onclick = function(event){
    if(!event.target.matches('.sdropbtn')){
        var sdropdowns = document.getElementsByClassName("sdropdown-content");
        var i;
        for (i = 0; i <sdropdowns.length; i++){
            var sopenDropdown = sdropdowns[i];
            if(sopenDropdown.classList.contains('show')){
               sopenDropdown.classList.remove('show');
            }
        }
    }
}
/*   End Secondary Weapon Drop Down Menu Functions   */


/* Color Menu Functions */

function cdropDownMenu() {
    document.getElementById("colorDD").classList.toggle("show");
}

window.onclick = function(event){
    if(!event.target.matches('.cdropbtn')){
        var cdropdowns = document.getElementsByClassName("cdropdown-content");
        var i;
        for (i = 0; i <cdropdowns.length; i++){
            var copenDropdown = cdropdowns[i];
            if(copenDropdown.classList.contains('show')){
               copenDropdown.classList.remove('show');
            }
        }
    }
}
/* End Color Menu Functions */