using {zoo} from '../db/schema';

service ServiceModif @(path : '/anon') {

  entity Animal          as projection on zoo.Animal;

  /**
   * Añadir nuevos atributos a una entidad
   */
  extend zoo.Vaca with {
    nuevaPropiedad : String;
  };

  entity Vaca            as projection on zoo.Vaca;

  /**
   * extend entity ServiceModif.Vaca with actions { action
   * calcTest() returns Integer }
   */

  /**
   * Vista que permite el paso de parametros (SOLO SOPORTADO EN
   * HANA) entity SomeView(pelaje : String) as select \* from Vaca
   * where pelaje = : pelaje;
   */


  /**
   * Ejemplo vista con un inner join !!! NO DEBE CONTENER
   * ASOCIACION LAS ENTIDADES ¡¡¡
   */
  view AgilaAndAnimal as
    select
          *,
      key Aguila.parent
    from zoo.Animal as Animal
    inner join zoo.Aguila as Aguila
      on Animal.nombre = Aguila.parent;


  /**
   * Exponiendo relacion N:M
   */
  entity Habitat         as projection on zoo.Habitat;
  entity EmpleadoHabitat as projection on zoo.EmpleadoHabitat;
  entity Empleado        as projection on zoo.Empleado;
  function calc() returns Integer;

}
