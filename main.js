
//returns even numbers array from iputted array
function even(){
 
    var evens = [];
    for(var i=0; i<arguments[0].length i++){
        
        if(arguments[0][i] % 2 === 0){
            
            evens.push(arguments[0][i]);
        }
    }
    return evens;
}