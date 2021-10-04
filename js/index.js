alert("¡Bienvenido a la calculadora!");
// Declaro variables
let bool = true;
let arr = [];
let nums = [];
let a = 0;
let b = 0;

let i=0;


// bucle true para seguir calculando si el usuario lo desea.
while (bool === true){
    //Restablezco las variables a sus valores iniciales para que no se usen al restablecer el bucle.
    arr = [];
    nums = [];
    a = 0;
    b = 0;
    
    i=0;
    //pregunta operacion y quitamos espacios.
    let arg = prompt("Qué operación quiere realizar?(+, -, * ó /)");
    arg = arg.split(" ").join("");


    //bucle que se repite mientras no introduzcas el valor de operación válido
    while ((arg !== '+') && (arg !== '-') && (arg !== '*') && (arg !== '/')){
        arg = prompt("Qué operación quiere realizar?(+, -, * ó /)");
    }
     /*Bucle mientras posición 0 y posición 1 no sean de tipo number*/
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
          }
  
          if (typeof arr[1] === 'number'){
              b = arr[1];
          }
          
    }
       
        
        

        
    
        //Creo un menú que recibe el argumento de operación para entrar a nuestra elección
        switch (arg) {
            //suma
            case '+':
                let sum = a + b;
                alert( sum );
                break;
                //resta
            case '-':
                let rest = a - b;
                alert( rest );
                break;
                //multi
            case '*':
                let mult = a * b;
                alert( mult );
                break;
                //divi
            case '/':
                
                let div = a / b;
                alert( div );
                break;
            default:
                alert( "No introduciste ningún valor" );
                break;
      }
      //guardamos el valor de bool(true or false) para saber si el usuario quiere seguir utilizando la calculadora. Si introducimos false, romperemos el bucle.
      bool = confirm("¿Desea realizar otra operación?");
    
    
}
