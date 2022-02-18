function enviarCorreo(){
    var link='mailto:Diego.Vilor@softwareone.com';
    var asunto=document.getElementById('subject').value;
    var mensaje=document.getElementById('body').value;
    link+='?subject='+asunto+'&body='+mensaje;
    location.href=link;
}