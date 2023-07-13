function buildGal(index, title, img){
    var html= "<div class='container' position='relative'>";
    html+="<img class='galleryImg' onclick='displayModal("+index+")' src='"+img+"'>";
    html+="<div class='centered' onclick='displayModal("+index+")'>"+title+"</div></div>"

    return (html);

}
function buildModal(index,title,img,desc,link){
    var html ="<div class='modal' id='modal"+index+"' position='relative'>";
    html+="<img class='modalImg' src='"+img+"'>";
    html+="<div class='tint'></div>"
    html+="<div class='top'>";
    html+="<span class='close' onclick='closeModal("+index+")'>&times;</span>";
    html+="<div class='modalTitle'>"+title+"</div></div>";
    html+="<div class='positioning'>";
    html+="<div class='modalDescription'>"+desc+"</div>";
    html+="</div>";
    html+="<button class='modalButton' onclick='switchPage("+'"'+link+'"'+")'>Explore</button></div>";
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
function switchPage(page) {

    // Function to switch pages while appending the user preferences
    
    var link = page + '?lang='+lang+'&mediaType='+mediaType+'&fontSize='+fontSize+'&progress='+progress;
    
    window.location.href = link;
}
