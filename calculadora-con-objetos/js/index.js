alert("¡Bienvenido a la calculadora!");
// Declaro variables
let bool = true;
let arr = [];
let arr2 = [];
let nums = [];
let lets = [];
let a = 0;
let b = 0;
let i=0;


while (bool === true){
    arr = [];
    arr2 = [];
    nums = [];
    lets = [];
    a = 0;
    b = 0;
    i=0;
    //función normal que valida el punto1
    function punto1() {
        while ((arg !== '+') && (arg !== '-') && (arg !== '*') && (arg !== '/')){
            if ((arg !== '+') && (arg !== '-') && (arg !== '*') && (arg !== '/')){
                alert("No es correcto el tipo de operación introducido, compañere");
            }
            arg = prompt("Qué operación quiere realizar?(+, -, * ó /)");
            arg = arg.split(" ").join("");
        }
    }

    //función expresiva que valida el punto2
    let punto2 = function(){
        
  
     /*Bucle mientras posición 0 o posición 1 de arr no sean de tipo number*/
    while((typeof arr[0] !== 'number') || (typeof arr[1] !== 'number') || (arr.length < 1)){
        arr = [];
        //Pregunta de valores metidos en una cadena separados por espacio.
         let cadena = prompt("Dime dos valores(enteros) separados por espacio");
         //Quito espacios de la cadena y los meto en un array de nombre lets para filtrar las R
       
         // variable que quita los espacios de la cadena y mete solo números.
          nums=cadena.split(" ").map(Number);
          lets=cadena.split(" ");
          console.log(lets);
          //bucle que utilizo para filtrar si los valores del array nums es un número o no
          for ( i = 0; i < lets.length; i++ ){
              /*Si la iteración es igual a R hago un push de la propiedad LastResult
               del objeto Calculadora al array "arr" */
            if(lets[i] === 'R'){
                arr.push(Calculadora.LastResult);
            }
              if((nums[i] > 0) || (nums[i] < 0)){
                  //añado los valores mayores y menores que 0 a otro array
                  arr.push(nums[i]);
              }
                //filtrar 0 de tipo string para añadirlo en tipo number a la cadena arr
             if(lets[i] === '0'){
                arr.push(0);
            }
          } 
           
          /*Condicionales que devuelven error si la posiciones 0 y 1 dónde se han guardado los números no son de tipo número
          , y en segundo condicional devuelve el array si la primera condición no se cumple
           */

          if ((typeof arr[0] !== 'number')||(typeof arr[1] !== 'number')){  
              alert("No es correcto el operando introducido");
            }else{
                return arr;  
            }
            
          
    }

    }
    //función normal que valida el punto3
    function punto3() {
        switch (arg) {
            
            case '+':
                /*SUMA
                Cambio el valor de la propiedad LastResult por el resultado de la función sum 
                dentro del objeto Calculadora
                */
                Calculadora.LastResult = Calculadora.sum(a,b); 
                alert(Calculadora.LastResult);
                break;
                
            case '-':
                /*RESTA
                Cambio el valor de la propiedad LastResult por el resultado de la función rest
                 dentro del objeto Calculadora
                */
                Calculadora.LastResult = Calculadora.rest(a,b); 
                alert(Calculadora.LastResult);
                break;
                
            case '*':
                /*MULTIPLICACIÓN
                Cambio el valor de la propiedad LastResult por el resultado de la función mult 
                dentro del objeto Calculadora
                */
                Calculadora.LastResult = Calculadora.mult(a,b); 
                alert(Calculadora.LastResult);
                break;
                
            case '/':
                /*DIVISIÓN
                Cambio el valor de la propiedad LastResult por el resultado de la función divi 
                dentro del objeto Calculadora
                */
                Calculadora.LastResult = Calculadora.div(a,b); 
                alert(Calculadora.LastResult);
                break;
            default:
                alert( "No introduciste ningún valor" );
                break;
      }
    }
    // Primera pregunta
    let arg = prompt("Qué operación quiere realizar?(+, -, * ó /)");
    arg = arg.split(" ").join("");
    
    //Comprobación con función normal punto1 pasándole variable arg para saber si está bien el tipo operación
    if ((arg !== '+') && (arg !== '-') && (arg !== '*') && (arg !== '/')){
        punto1(arg);
    }
    

    //Declaración Variable val que guarda el return de la función de tipo expresión punto2
    let val = punto2();
    
        
    
    console.log(val);
    //asignación a = posicion 0 del array val y b = posicion 1 del array val
    
    a = val[0];
    b = val[1];
    
    
    
    //OBJETO CALCULADORA
    Calculadora = {
        //FUNCIÓN SUMA
        sum(a, b) {
            /*Transformo la operación a Number 
            porque el tipo dentro del objeto por defecto es String.
            */
            result = Number(a + b);
            return result;
        },
        //FUNCIÓN RESTA
        rest(a, b) { 
            /*Transformo la operación a Number 
            porque el tipo dentro del objeto por defecto es String.
            */
            result = Number(a - b);
            return result; 
        },
        //FUNCIÓN MULTIPLICACIÓN
        mult(a, b) {
            /*Transformo la operación a Number 
            porque el tipo dentro del objeto por defecto es String.
            */
            result = Number(a * b);
            return result;
        },
        //FUNCIÓN DIVISIÓN
        div(a, b) {
            /*Transformo la operación a Number 
            porque el tipo dentro del objeto por defecto es String.
            */
            result = Number(a / b);
            return result;
        },

        LastResult : 0, 
    
      };

      
     //Llamada de función punto3 pasándole el argumento comprobado en la que se localiza un switch con las opciones correspondientes.
     punto3(arg);

    
   

    //guardamos el valor de bool(true or false) para saber si el usuario quiere seguir utilizando la calculadora. Si introducimos false, romperemos el bucle.
    bool = confirm("¿Desea realizar otra operación?");
    
    
}

