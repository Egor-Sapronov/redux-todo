'use strict';

function args(){
    console.log(arguments);
    
    console.log([...arguments]);
}

args(1,2,3,4);