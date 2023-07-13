function buildCard(index,img,title,desc){
var html="<div class='card' id='card+"+index+"'>";
if (img!=''){
html+="<img class='cardImage' src='"+img+"'>";
}
else{
    html+="<img class='replaceImg' src='images/FWMSH_logo.png'>";
    html+="<div class='buffer'></div>";
}
html+="<div class='cardTitle'>"+title+"</div>";
html+="<div class='cardDesc'>"+desc+"</div>";
html+="<button class='cardButton' onClick='displayModal("+index+")'>Explore</button></div>";
return (html);
}
function buildModal(index,title,img,desc){
    var html ="<div class='modal' id='modal"+index+"' position='relative'>";
  
    html+="<div class='top'>";
    html+="<span class='close' onclick='closeModal("+index+")'>&times;</span>";
    html+="<div class='modalTitle'>"+title+"</div></div>";
    if (img!=''){
        html+="<img class='modalImage' src='"+img+"'>";
        }
        else{
            html+="<img class='modalreplaceImg' src='images/FWMSH_logo.png'>";
            //html+="<div class='buffer'></div>";
        }

    html+="<div class='modalDescription'>"+desc+"</div>";

    html+="</div>";
    return(html);
}
function displayModal(index){
    modal=document.getElementById("modal"+index);
    modal.style.display="block";
}
function closeModal(index){
    modal=document.getElementById("modal"+index);
    modal.style.display="none";
}