let inmgBox = document.getElementById('inmgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');

try{
    function generateQR(){
        qrImage.src = ' https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
    }
    
}

catch(err){
    console.log(err)
}
