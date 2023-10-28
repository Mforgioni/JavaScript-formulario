document.getElementById("boton").addEventListener("click", (e) => {
  e.preventDefault();

  function Usuarios(nombre, apellido, correo, pais, sexo, fecha) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.pais = pais;
    this.sexo = sexo;
    this.fecha = fecha;
  }

  let name = document.getElementById("nombre").value;
  let surname = document.getElementById("apellido").value;
  let mail = document.getElementById("correo").value;
  let option = document.getElementById("pais");
  let cowntry = option.value;
  let radioButtonFemenino = document.getElementById("femenino");
  let radioButtonMasculino = document.getElementById("masculino");
  let sex;
  if (radioButtonMasculino.checked) {
    sex = radioButtonMasculino.value;
  } else if (radioButtonFemenino.checked) {
    sex = radioButtonFemenino.value;
  } else {
    alert("seleccione su sexo")
  }
  let date = document.getElementById("fecha").value;


  let nuevoUsuario = new Usuarios(
    name,
    surname,
    mail,
    cowntry,
    sex,
    date
  );

  let validaName = /^[\p{L}ÁÉÍÓÚÑáéíóúñ\s]+$/u;
  let validaMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (!validaName.test(name)) {
    alert("nombre con caracterteres no permitidos");
  }
  if (!validaMail.test(mail)) {
    alert("El mail tiene caracterteres no permitidos");
  }
  if (!validaName.test(surname)) {
    alert("Apellido con caracterteres no permitidos");
  }
  if (
    (cowntry != "Mexico") &&
    (cowntry != "Argentina") &&
    (cowntry != "Brasil")
  ) {
    alert("debe seleccionar un pais");
  }
  if( date === "") {
    alert("Debe ingresar su fecha de nacimiento")
  }
  let baseDeDatos = [];

  function guardarUsuario() {
    baseDeDatos.push(nuevoUsuario);
    console.table(baseDeDatos);
  }
  guardarUsuario();
});