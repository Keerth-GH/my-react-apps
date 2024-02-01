import React from 'react';
import ReactDOM from 'react-dom';

class demo {
    methodOne=()=>{
        var a=10;
        var b=20;
        var c=a+b;
        document.getElementById('root').innerHTML=c
    }
}

var myObj = new demo;
myObj.methodOne();