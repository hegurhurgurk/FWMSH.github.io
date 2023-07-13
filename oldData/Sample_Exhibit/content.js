/*
***************************************************
This file controls all of the content
***************************************************
*/
//this variable determines weather you use a keypad or not
var use_keypad_entry = false;
//edit this to the name of the exhibit
var title_en = 'ChangeMe';
var title_es = "ChangeMe";
//this determines the titles to each item
//the format is "#": "what you want the title to be"
//seperate each entry with a comma
//use this website for reference if you want to use special characters or italics https://www.w3schools.com/html/html_formatting.asp
//each list needs to be the same length exept for the error
//if a particular item does not have a type of data like an image just leave the quotes empty
var nameDict_en = {

      'error': 'Artifact Not Found!'
    };
//where thumbnails go
//this is the same idea as the names except instead of the name you enter the file location for the thumbnail in ''
//example
//'#': 'thumbs/picture'
//remember the commas
var thumbDict_en = {

}
//exact same idea as thumbnails exept for the actual images
//example
//'#': 'images/picture'
var imageDict_en = {

      'error': ''
}
//this one determines the caption for the image
//example: '#': "this item is an item"
//gfhsuakfheskukavfyua
var captionDict_en = {

      'error': ''
}
//this one determines the actual text for the item
//example
//'#': "this item is an item"
var textDict_en = {
      
    };
//this one determines the audio files to be played for the audio version
//example
//"#": 'audio/en/sound'
var audioDict_en = {

}
//the rest of these are for the spanish version of the website. fill in if you want
//they act the same way as the english versions
var nameDict_es = {

      'error': ''
    };

var imageDict_es = {

      'error': ''
}

var captionDict_es = {

      'error': ''
}

var textDict_es = {

      'error': "Vaya, un artefacto con ese número no parece existir en esta galería. ¡Verifique que haya seleccionado la galería apropiada y luego intente con un número diferente!"
    };

var audioDict_es = {

}
