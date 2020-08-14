const cds = require("@sap/cds");

module.exports = async function () {
  // Funcion que una vez recogidos los objetos de la bbdd permite modificarlos, no permite añadir atributos nuevos que no contenga anteriormente la entidad.
  this.after("READ", "Vaca", (each) => {
    each.nuevaPropiedad = "Cambiando el nombre";
  });

  /**
   * Metodo para interceptar operacion update sobre la entidad Animal
   */
  this.on("UPDATE", "Animal", (each) => {
    console.log(each.data);
  });

  this.on("calc", () => 43);
};
