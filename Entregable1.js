class Usuario {
    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        console.log(`Mi nombre es ${this.nombre} ${this.apellido}`);
    }

    addMascota(mascota){
        this.mascotas.push(mascota);
    }

    getMascota(){
        console.log(this.mascotas.length);
    }

    addBooks(libro){
        this.libros.push(libro);

    }

    getBooks(){
        console.log(this.libros.map((libro)=>libro.nombre));
    }

}
const usuario = new Usuario('Viviana','Fajardo',[{nombre:"Ciudad Medialuna",autor:"Sarah J. Mass"}],["Gato","Perro"]);
usuario.getFullName();
usuario.addMascota("Hamster");
usuario.getMascota();
usuario.addBooks({nombre:"Trono de Cristal",autor:"Sarah J. Mass"});
usuario.getBooks();

