namespace zoo;

using {
    cuid,
    managed,
    sap
} from '@sap/cds/common';

type Typo : String enum {
    ave;
    mamifero;
}

type TipoHabitat : String enum {
    secano;
}

//Entidad con id autoincremental
/*entity Animal : cuid {
    nombre : String;
    typo : Typo;
    vaca : Composition of one Vaca on vaca.parent = $self;
};*/

entity Animal {
    key nombre : String;
        typo   : Typo;
        vaca   : Composition of one Vaca
                     on vaca.parent = $self;
};

entity Vaca {
    key parent : Association to Animal;
        pelaje : String;
}

entity Aguila {
    key parent  : String;
        plumaje : String;
}

entity Empleado {
    key dni       : String;
        nombre    : String;
        apellidos : String;
        habitats  : Association to many EmpleadoHabitat
                        on habitats.dni = $self;
}

entity Habitat {
    key nombre    : String;
        tipo      : TipoHabitat;
        empleados : Association to many EmpleadoHabitat
                        on empleados.nombre = $self;
}

entity EmpleadoHabitat {
    key dni    : Association to Empleado;
    key nombre : Association to Habitat;
}
