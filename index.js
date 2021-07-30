
var m = [{
    "success":true,
    "timestamp":1626358024,
    "base":"EUR",
    "date":"2021-07-15",
    "rates":{
      "AUD":1.587608,
      "BGN":1.955832,
      "GBP":0.852723,
      "USD":1.181998,
      "UYU":51.973196,
      "UZS":12570.550887,
      "VEF":252746931045.85898,
      "VND":27195.948945,
      "VUV":130.160103,
      "WST":3.016053,
      "XAG":0.044949,
      "XAU":0.000648,
      "XCD":3.19441,
      "XDR":0.830564
    }
  }]
function fun(vari, id) {
    var i = 0.0001;
    var num = document.getElementById(id);
        
    var myVar = setInterval(increase, 5000);      
        
        setInterval(function(){
                change = change * -1;
        }, 60000);

        setTimeout(myStopFunction, 5 * 60 * 1000);
        
        function increase() {
            if(change == 1) {
                vari = parseFloat(vari + i);
                if(vari >= 1.0001) {
                    num.innerText = vari.toFixed(4);
                }
                else {
                    num.innerText = 1.0001;
                }
                document.getElementById(id).style.backgroundColor = "green";
            }

            else if(change == -1) {
                vari = parseFloat(vari - i);
                if(vari >= 1.0001) {
                    num.innerText = vari.toFixed(4);
                }
                else {
                    num.innerText = 1.0001;
                }
                document.getElementById(id).style.backgroundColor = "tomato";
            }

          
        }
        function myStopFunction() {
        clearInterval(myVar);
    }
}

//var AUD = 1.587608
//var USD = 1.181998
//var GBP = 0.852723
//var BGN = 1.955832
var num = 10
var change = 1;
var AUD = m[0]["rates"]["AUD"];
var USD = m[0]["rates"]["USD"];
var GBP = m[0]["rates"]["GBP"];
var BGN = m[0]["rates"]["BGN"]
AUD = AUD.toFixed(4);
USD = USD.toFixed(4);
GBP = GBP.toFixed(4);
BGN = BGN.toFixed(4);



/*var i = 1;
var num = document.getElementById('number');

function start() {
  setInterval(increase, 1000);
}

function increase() {
    if (i < 100) {
      i++;
      num.innerText = i;
    }
}*/


/*
        var i = 0.0001;
        var num = document.getElementById('numer');
        
            
        var myVar = setInterval(increase, 5000);      
        
        setInterval(function(){
                change = change * -1;
        }, 60000);

        setTimeout(myStopFunction, 5 * 60 * 1000);
        
        function increase() {
            if(change == 1) {
                AUD = parseFloat(AUD + i);
                num.innerText = AUD.toFixed(4);
                document.getElementById('numer').style.backgroundColor = "green";
            }

            else if(change == -1) {
                AUD = parseFloat(AUD - i);
                num.innerText = AUD.toFixed(4);
                document.getElementById('numer').style.backgroundColor = "tomato";
            }

          
        }
        function myStopFunction() {
        clearInterval(myVar);
    }        
    */