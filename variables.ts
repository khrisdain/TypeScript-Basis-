    // let greetings: string = "Hello Olamide";

    // console.log(greetings);

    // //Nb Declaration of greeting types as a string grants access to string properties and restrict other non string properties 

    // export {} //export an object

    // //number
    // let userId: number = 334455 //annotates userId is number

    // userId.toFixed

    // //Boolean
    // let isLoggedIn: boolean = false

function addTwo(num: number){
    return num + 2
}

console.log(addTwo(5))

function getUpper(val: string){
    val.toUpperCase()
}

getUpper("olanrewaju")

function signUpUser(name: string, email: string, password: string){
    return signUpUser(name); 
};

signUpUser('olamide', 'joseph14@gmail.com', 'olamide16');


function logInUser(name: string, isLogin: boolean, email: null){
    return isLogin;
}

logInUser();