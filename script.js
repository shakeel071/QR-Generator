const qrText=document.getElementById('qr-text');
const sizes=document.getElementById('sizes');
const generateBtn=document.getElementById('generateBtn');
const downloadBtn=document.getElementById('downloadBtn');
const qrContainer=document.querySelector('.qr-body');

let size=sizes.value;
let qrCode=null;
generateBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    isEmptyInput(); 
});
sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    isEmptyInput();
   
});

downloadBtn.addEventListener('click',()=>{
    const qrCodeCanvas=document.querySelector('canvas');
    if(qrCodeCanvas){
        const imgDataUrl=qrCodeCanvas.toDataURL('img/png');
        const a=document.createElement('a');
        a.href=imgDataUrl;
        a.download='QR_Code.png';
        a.click();
    }
    else{
        alert("No QR code available to download");
    }
})

qrText.addEventListener('input',()=>{
    if(qrText.value.length===0){
        qrContainer.innerHTML="";
        qrContainer.style.display="none";
        qrCode=null;
    }
});

function isEmptyInput(){
    if(qrText.value.length>0){
        generateQRCode();
    }
   else{
    alert("Enter the text or URL to generate your QR code");
   }
}

function generateQRCode(){
    qrContainer.innerHTML="";
    qrContainer.style.display="flex";
   qrCode= new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#FFFFFF",
        colorDark:"#000",
    });
    let maxWidth = "100%"; // Default max-width for size 200x200
            let marginLeft = "0"; // Default margin-left for size 200x200
    
            if (size === "100") {
                maxWidth = "50%";
                marginLeft = "25%";
            } else if (size === "150") {
                maxWidth = "75%";
                marginLeft = "15.5%";
            }
                else if (size === "200") {
                    maxWidth = "100%";
                    marginLeft = "0";
            }
            qrContainer.style.maxWidth = maxWidth;
            qrContainer.style.marginLeft = marginLeft; 
}
function createBubble(){
    const section=document.querySelector('body')
    const createElement=document.createElement('span')
    var sze=Math.random() * 40;
    createElement.style.width=20 + sze+'px';
    createElement.style.height=20 + sze+'px'
    createElement.style.left=Math.random() * innerWidth + "px";
    section.appendChild(createElement);

    setTimeout(() =>{
        createElement.remove()
    },4000)
}
setInterval(createBubble,50)