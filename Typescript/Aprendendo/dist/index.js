"use strict";
//Tipos Basicos
let age = 5;
const firstName = "Leleco";
const isValid = true;
let idk = 5; // Evitar o tipo any para projetos
const ids = [1, 2, 3, 4, 5];
const boolean = [true, false, true];
const names = ['Igor', 'Ruan', 'Zezão', 'Leleco'];
//Tupla
const person = [1, ''];
//Lista de Tuplas
const people = [
    [1, 'Leleco'],
    [2, 'Lalau'],
    [3, 'John']
];
//Intersections
const projectId = false;
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
})(Direction || (Direction = {}));
//Type Assertions
const productName = 'Boné';
let itemId = productName;
const direction = Direction.Up;
console.log(direction);
