let btnCV = document.getElementById('btnDownloadCv');

const descargarArchivo = () => {
    let link = document.createElement('a');
    link.href = '../img/cv-2023.pdf';
    link.download = 'cv-QuintanaNicolas';
    link.click();
};

btnCV.addEventListener('click', descargarArchivo);

//----------------------------------------------------

let btnHireMe = document.getElementById('btnHireMe');
let contactPhone = document.getElementById('contactPhone');
let contactMail = document.getElementById('contactMail');

const iniciarConversacion = () => {


    let telefono = '1138601251'; 
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
    if (isMobile) {
      window.open('https://api.whatsapp.com/send?phone=' + telefono, '_blank');
    } else {
      window.open('https://web.whatsapp.com/send?phone=' + telefono, '_blank');
    }
  };


  const enviarCorreo = () => {
    let direccionEmail = 'nicolasequintana@gmail.com'; 
  
    window.location.href = 'mailto:' + direccionEmail;
  }


  btnHireMe.addEventListener('click', iniciarConversacion)
  contactPhone.addEventListener('click', iniciarConversacion)
  contactMail.addEventListener('click', enviarCorreo)