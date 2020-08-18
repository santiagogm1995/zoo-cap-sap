using {zoo} from '../db/schema';

service CatalogService @(requires : 'superAdmin') {

  /**
   * Entidad con autentificacion
   */
  entity AnimalSinAuth as projection on zoo.Animal;
  /**
   * Hola mundo
   */
  function hello(to : String) returns String;
  /**
   * Suma de dos numeros
   */
  function suma(num1 : Integer, num2 : Integer) returns Integer;
  /**
   * Funcion sincrona que realiza una llamada a una api y
   * devuelve datos
   */
  function getRickYMortyData() returns String;

}
