// This is a JavaScript file

function abrirInstitucional(){
  navigator.vibrate(2000);
  location.href="institucional.html";
}

function abrirMapa(){
  navigator.notification.beep(1);
  location.href="mapa.html";
};

function abrirCursos(){
  location.href="cursos.html";
}

function retornar(){
  location.href="index.html";
}