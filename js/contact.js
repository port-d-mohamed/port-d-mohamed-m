
let uploadFo = document.getElementById("uploadfo");
let imgtag = document.getElementById("myimage");

function onFileSelected(event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();
    imgtag.title = selectedFile.name;
    reader.onload = function (event) {
        const imgloc= event.target.result;
        localStorage.setItem("Photop", imgloc);
        displayimg(imgloc)
    };
    reader.readAsDataURL(selectedFile);
}
// \\\\
function displayimg(imgloc){
    imgtag.src = imgloc
}
const storimg = localStorage.getItem("Photop")

    if(storimg){
        displayimg(imgloc) 
        
    }
