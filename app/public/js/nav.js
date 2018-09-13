
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

document.querySelectorAll("#nav a").forEach(function(item){
  item.onclick = function(){
    closeNav();   
  }  
});

