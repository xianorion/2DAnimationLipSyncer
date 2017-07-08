//webster key: cf3a7339-c621-44fb-9794-a8cca38da0fb
var xhr = new XMLHttpRequest();
var word ="he";

var phonemeImages = [{image:'openMouth.jpg', phoneme:'oh'},{image:'closedMouth.jpg', phoneme:'no'}];
console.log(phonemeImages);

//used api request to webster to get informatio  about a word
function obtainPhonemeFrom(word){
    console.log("called");
xhr.open("GET", "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/"+word+"?key=cf3a7339-c621-44fb-9794-a8cca38da0fb", true);
xhr.send();
return xhr.onreadystatechange = processRequest;
}

 //processes request to webster and calls getPhoneme to get the phonetic spelling of a word
function processRequest(e) {
    console.log("state "+xhr.readyState+"status is "+ xhr.status);
 if (xhr.readyState == 4 && xhr.status == 200) {
        //var response = JSON.parse(xhr.responseText);
        console.info(xhr.responseText);
        return getPhonemeFromXML(xhr.responseText);
    }
}

//gets the phoneme from the xml on webster
function getPhonemeFromXML(xml){
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xml, "text/xml");
    let phonemeText = xmlDoc.getElementsByTagName("pr")[0].childNodes[0].nodeValue;

    if(phonemeText== null){
        phonemeTag = xmlDoc.getElementsByTagName("pr")[0];
        //while( phonemeTag.hasChildNodes()){
            phonemeTag.removeChild(phonemeTag.childNodes[0]);
        //}
        phonemeText = phonemeTag;
    }//else{
        //phonemeText = phonemeText.split(',')[0];
    //}
    console.log(phonemeText);
    return phonemeText;
}

function matchPhonemeToImages(){

}


//application
var grabbedPhoneme = obtainPhonemeFrom("the");
