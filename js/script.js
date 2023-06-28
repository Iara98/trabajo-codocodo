$(document).ready(function() {
    $('#formulario1').submit(function(e) {
      e.preventDefault();
      var cantidad = $('#cantidad').val();
      var categorias = $('#categorias').val();
  
      if (cantidad === '') {
        $('#cantidad').addClass('is-invalid');
      } else if (categoria === '') {
        $('#categorias').addClass('is-invalid');
      } else {
        // Realizar redirección a la página de resumen con los datos del formulario
        window.location.href = 'resumen.html?cantidad=' + cantidad + '&categoria=' + categoria;
      }
    });
  });

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
  
    if (categoria === 'estudiante') {
      montoPagar = cantidad * valorEntrada * 0.2;
    } else if (categoria === 'junior') {
      montoPagar = cantidad * valorEntrada * 0.5;
    } else if (categoria === 'trainee') {
      montoPagar = cantidad * valorEntrada * 0.85;
    }
  
    $('#montoPagar').text('$' + montoPagar.toFixed(2));
  });