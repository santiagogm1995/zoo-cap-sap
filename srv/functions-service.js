module.exports = class data {
  /**
   * Ejemplo de guery en bbdd con capacidad de modificar/anadir atributos
   */

  async getDataAguilaPlus() {
    let srv = cds.connect.to("ServiceModif");
    let { Animal } = srv.entities;

    const req = await SELECT.from(Animal);
    req.forEach((element) => {
      element.prueba = "OKOKOK";
    });

    return JSON.stringify(req);
  }

  /**
      Funcion que recoge los datos de los animales y permite modificar los valores
     */
  async getDataAguila() {
    let srv = cds.connect.to("FunctionService");
    let { Animal } = srv.entities;

    const req = await SELECT.from(Animal);
    console.log(req);

    return req;
  }

  /**
   * Ejemplo de extraccion de la bbdd de una relacion NM para limpiar expands
   * @param {*} req parametro con todas la info de la request
   */
  async getDataNM(req) {
    let srv = cds.connect.to("ServiceModif");
    let { Habitat, EmpleadoHabitat, Empleado } = srv.entities;

    let oEmpleado = await SELECT.from(Empleado).where({
      dni: req.data.dni,
    });
    let oEmpleadoHabitat = await SELECT.from(EmpleadoHabitat).where({
      dni_dni: oEmpleado[0].dni,
    });
    let oHabitat = await SELECT.from(Habitat).where({
      nombre: oEmpleadoHabitat[0].nombre_nombre,
    });

    oEmpleado[0].habitats = [];

    oHabitat.forEach((a) => oEmpleado[0].habitats.push(a));

    return JSON.stringify(oEmpleado);
  }
};
