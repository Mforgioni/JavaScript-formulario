document.getElementById("boton").addEventListener("click", (e) => {
    e.preventDefault();

    function Usuarios(nombre,apellido,correo,pais,sexo,fecha) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.correo=correo;
        this.pais=pais;
        this.sexo=sexo;
        this.fecha=fecha;
    }

    let name = document.getElementById("nombre").value;
    let surname = document.getElementById("apellido").value;
    let mail = document.getElementById("correo").value;
    let opcion = document.getElementById("pais");
    let cowntry = Option.value;
    let radioButtonFemenino = document.getElementById("femenino");
    let radioButtonMasculino = document.getElementById("masculino");
    let sex;
    if (radioButtonMasculino.checked) {
        sex = radioButtonMasculino.value;
     }  
      else if (radioButtonFemenino.checked) {
        sex = radioButtonFemenino.value;
     }

    let date = document.getElementById("fecha").value;

    let nuevoUsuario = new Usuarios(name, surname, mail, opcion, cowntry, sex, date);
    let baseDeDatos = []

    function guardarUsuario() {
        baseDeDatos.push(nuevoUsuario);
        console.table(baseDeDatos)
    }
    guardarUsuario()
});

