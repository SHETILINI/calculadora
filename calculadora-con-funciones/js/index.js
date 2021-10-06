alert("¡Bienvenido a la calculadora!");
// Declaro variables
let bool = true;
let arr = [];
let nums = [];
let a = 0;
let b = 0;
let i=0;
while (bool === true){
    arr = [];
    nums = [];
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
        arr = [];
        nums = [];
        a = 0;
        b = 0;
        i=0;
  
     /*Bucle mientras posición 0 o posición 1 de arr no sean de tipo number*/
    while((typeof arr[0] !== 'number') || (typeof arr[1] !== 'number')){
         //Pregunta de valores metidos en una cadena separados por espacio.
         let cadena = prompt("Dime dos valores(enteros) separados por espacio");
        
         // variable que quita los espacios de la cadena y mete solo números.
          nums=cadena.split(" ").map(Number);
         
          console.log(a);
          console.log(b);
          //bucle que utilizo para filtrar si los valores del array nums es un número o no
          for ( i = 0; i < nums.length; i++ ){
              if(nums[i] > 0){
                  //añado los valores mayores que 0 a otro array
                  arr.push(nums[i]);
              }
          }   
          console.log(arr);   
          /*Añado nuevos valores para a y b colocando las dos primeras posiciones del nuevo array que es donde se han guardado si son de tipo number
           */
  
           if (typeof arr[0] === 'number'){
              a = arr[0];  
          }else{
            alert("No es correcto el operando introducido");
        }
  
          if (typeof arr[1] === 'number'){
              b = arr[1];
              return arr;
          }else{
            alert("No es correcto el operando introducido");
          }
          
    }

    }
    //función normal que valida el punto3
    function punto3() {
        switch (arg) {
            //suma
            case '+':
                //función flecha para sumar
                let sum = (a, b) => a + b;

                alert( sum(a, b) );
                break;
                //resta
            case '-':
                //función flecha para restar
                let rest = (a, b) => a - b;

                alert( rest(a, b) );
                break;
                //multi
            case '*':
                //función flecha para multiplicar
                let mult = (a, b) => a * b;

                alert( mult(a, b) );
                break;
                //divi
            case '/':
                //función flecha para dividir
                let div = (a, b) => a / b;

                alert( div(a, b) );
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
    //Llamada de función punto3 pasándole el argumento comprobado en la que se localiza un switch con las opciones correspondientes.
    punto3(arg);

    //guardamos el valor de bool(true or false) para saber si el usuario quiere seguir utilizando la calculadora. Si introducimos false, romperemos el bucle.
    bool = confirm("¿Desea realizar otra operación?");
    
    
}

