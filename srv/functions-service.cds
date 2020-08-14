using {zoo} from '../db/schema';


service FunctionService @(path : '/funciones') {


    entity Animal as projection on zoo.Animal;
    /**
     * Funcion que nos permitira simplificar la relacion N:M y no
     * hacer expand
     */
    function getDataNM(dni : String) returns String;
    /**
     * Servicio que recoge los datos de los animales y permite
     * modificar los valores
     */
    function getDataAguila() returns array of Animal;
    /**
     * Ejemplo de guery en bbdd con capacidad de modificar/anadir
     * atributos
     */
    function getDataAguilaPlus() returns String;
}
