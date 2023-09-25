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
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#FFFFFF",
        colorDark:"#191970",
    });
}