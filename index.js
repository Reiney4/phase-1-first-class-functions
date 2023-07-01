function receivesAFunction(valerie){
    valerie();
}

const returnsANamedFunction =()=>receivesAFunction
    
  
function returnsAnAnonymousFunction(){
    return function(){
    }
}