// *    Scroll Reveal 
ScrollReveal({ 
    reset: true ,
    distance : "100px",
    duration :3000,
    delay : 200
});

ScrollReveal().reveal('.head-home , .details', { origin :"top"});
ScrollReveal().reveal(' #card2', { origin :"bottom"});
ScrollReveal().reveal('.home-img , #card3', { origin :"left"});
ScrollReveal().reveal('.doc-m-h3 , #card1', { origin :"right"});




// * typed 
const typed = new Typed('#info1', {
    strings : ['مستشار مركز المعلومات والتحول الرقمي - خبير امن المعلومات '],
    typeSpeed: 50 ,
    loop: false 
});
const typed2 = new Typed('#info2', {
    strings : ['مستشار الهيئه العليا لتكنولوجيا المعلومات والأمن السيبراني بمؤسسة القادة للعلوم الادارية '],
    typeSpeed: 50 ,
    loop: false
});
const typed3 = new Typed('#info3', {
    strings : [ ' رئيس لجنة التحول الرقمي والأمن السيبراني بمبادرة مهندسون من أجل مصر المستدامة'],
    typeSpeed: 50 ,
    loop: false
});
const typed4 = new Typed('#info4', {
    strings : ['  رئيس وحدة الذكاء الاصطناعي والأمن السيبراني بمركز العرب للأبحاث و الدراسات'],
    typeSpeed: 50 ,
    loop: false
});


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let uploadFo = document.getElementById("uploadfo");
let uploadimg = document.querySelector(".uploadimg");
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

