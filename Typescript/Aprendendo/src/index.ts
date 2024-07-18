//Tipos Basicos
let age : number = 5;
const firstName: string = "Leleco"
const isValid: boolean = true
let idk : any = 5 // Evitar o tipo any para projetos

const ids:number[] = [1,2,3,4,5]
const boolean: boolean[] = [true,false,true]
const names: string[] = ['Igor','Ruan','Zezão','Leleco']

//Tupla
const person: [number,string] = [1,'']

//Lista de Tuplas
const people: [number,string][] = [
    [1,'Leleco'],
    [2,'Lalau'],
    [3,'John']
]

//Intersections
const projectId: string | number | boolean = false

//Enum
enum Direction {
    Up = 1,
    Down = 2,
    Left = 'Esquerda'
}

//Type Assertions
const productName : any = 'Boné'

let itemId = <string>productName
const direction = Direction.Up;

console.log(direction)