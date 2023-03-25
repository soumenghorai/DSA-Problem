let users = [{username:"soumenghorai",email:"soumenghorai2802gmail.com"},
             {username:"rahulghorai",email:"soumenghorai2802gmail.com"},
             {username:"animeshghorai",email:"soumenghorai2802gmail.com"},

]

function isuserExit(array, value){
    
    for(let item of array){
        if(item['username'] === value){
            return true;
        }
    }
    return false;
}
let res = isuserExit(users,"soumenghorai");
console.log(res);

// Time complexity
// o(n)  