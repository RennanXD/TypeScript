//Type
type Order = {
    productId : string;
    price : number;
};

type User = {
    firstName: string
    lastName: string
    Age: number
    email? : string
    password?: string
    orders : Order[];
};

const user: User = {
    firstName: "Leleco",
    lastName: "Silva",
    Age: 25,
    email:"leleco@gmail.com",
    password: "123456",
    orders : [{productId:"1" , price:220}],
};

const printLog = (message:string) => {
    printLog(user.password!)
}

//Unions
type Author = {
    books : string[]
}

//const author: Author & User = {}