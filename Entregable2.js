function Usuario(nombre,apellido,libros,mascotas){
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;

    this.getFullName = function ()
    {
        console.log(`Mi nombre es ${this.nombre} ${this.apellido}`);
    }

    this.addMascota = function (mascota) 
    { 
        mascotas.push(mascota);
    }
    this.getMascotas = function()
    {
        console.log(mascotas.length);
    }
    
    this.addBook = function (libro)
    {
        libros.push(libro);
    }

    this.getBook = function ()
    {
        console.log(libros.map((libro)=>libro.nombre))
    }
}

const usuario = new Usuario('Viviana','Fajardo',[{nombre:"Ciudad Medialuna",autor:"Sarah J. Mass"}],["gato"]);
usuario.getFullName();
usuario.addMascota("hamster");
usuario.getMascotas();
usuario.addBook({nombre:"Trono de Cristal",autor:"Sarah J. Mass"});
usuario.getBook();