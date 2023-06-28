$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    var nombre = urlParams.get('nombre');
    var apellido = urlParams.get('apellido');
    var correo = urlParams.get('correo');
    var cantidad = urlParams.get('cantidad');
    var categorias = urlParams.get('categorias');
  
    $('#nombre').text(nombre);
    $('#apellido').text(apellido);
    $('#correo').text(correo);
    $('#cantidad').text(cantidad);
    $('#categorias').text(categorias);
  
    var montoPagar = 0;
    var valorEntrada = 200;
  
    if (categorias === 'estudiante') {
      montoPagar = cantidad * valorEntrada * 0.2;
    } else if (categorias === 'trainee') {
      montoPagar = cantidad * valorEntrada * 0.85;
    } else if (categorias === 'juniore') {
      montoPagar = cantidad * valorEntrada * 0.5;
    }
  
    $('#montoPagar').text('$' + montoPagar.toFixed(2));
  });