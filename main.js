/*Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, 
nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.

Posteriormente, cree tres instancias de este objeto y guárdalas en un array.

Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/

class Producto {
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    imprimir (){
        console.log(`El nombre del producto es ${this.nombre}\nEl precio del producto es ${this.precio} \nEl codigo del producto es ${this.codigo}`);
    }
    
}

const zapatillas = new Producto(001,'Zapatillas','$'+40000);
const pantalon = new Producto(002,'Pantalon','$'+25000);
const remera = new Producto(003,'Remera','$'+10000);

const arrayProductos = [zapatillas, pantalon, remera];

for (i=0; i<arrayProductos.length;i++){
    arrayProductos[i].imprimir();
}
