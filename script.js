/*
 esercizio 1: scrivi una funzione che controlli due numeri interi. è Ritorni "true" se uno dei due è 50 o se la somma dei due e 50

*/
const funzione1 = (num, num1)=>{
    if((num || num1) === 50){
        return true
    }else if(num+num1===50){
        return true
    }else{return false}
} 
console.log(funzione1(25,25))

/* crea una funzione che rimuova il carattere a una specifica posizione da una stringa.
 Passa la stringa e la posizione come parameti  e Ritorna la stringa modificata

*/
 const funzione2 =(string, position)=>{
    if(position < 0 || position >= string.length ){ 
        return string; 
    }
    
    let stringNew = string.slice(0,position) + string.slice(position +1)
    return stringNew
    
}

console.log(funzione2("peppe",0))
/*crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100 Ritorna true se rispechiano quseta condizione 
altrimenti Ritorna false
*/
const funzione3 =(num , num2)=>{
 if((num >= 40 || (num <= 60 && num2 >= 40) || num2 <= 60) &&
 (num >= 70 || (num <= 100 && num2 >= 70) || num2 >= 100)){
    return true
 } else{ return false}
}
console.log(funzione3(40,70))
/*
crea una funzione che accetti  come parameti il nome di una citta  il nome stesso se inizia con Los o New Ritorna true
 altrimenti ritoni false

*/
const funzione4 =(name)=>{
   if( (name.toLowerCase().includes("los"))||( name.toLowerCase().includes("new")) ){
    return true
   }else {return false}
}
console.log(funzione4("new"))

/* crea una funzione calcoli Ritorni la sommi tutti gli elementi di un array
arrey deve essere inserito come parametro 
\\\ da sitemare
*/
let ar = [9,111,31,13]
 const funzione5 =(array)=>{
    let result = 0;
    for(let i = 0; i < array.length; i ++){
    result += array[i]
     
    }
    return result
    }

console.log(funzione5(ar))
/* crea una funzione che che controlli array non contenga numeri  tra 1 o 3 se Non li contiene Ritorna true altrimenti false
  */

  const funzione6 =(array)=>{
    if(array.includes(1)|| array.includes(3)){
        return false
    }else{return true}
  }
   console.log(funzione6(ar))

/* crea una funzione che idetifica il tipo di angolo in cui gli gradi gli passi come parametri
 angolo acuto: meno di 90 => acuto
 angolo ottuso: tra 90 e 180 => ottuso
angolo retto: 90 => retto
 angolo piatto:180 => piatto
*/
  const funzione7 =(gradi)=>{
    
if (gradi < 90) {
  return "acuto"
}else if(gradi ==== 90){
return "retto"}
 else if(gradi === 180){
return "patto"}
else if (gradi < 90 && gradi >= 180){
return "ottuso"
}
  
  
}

/*crea una funzione crei un acronimo a partire dalla un frase : IL MONDO BUONO = IMB
*/
 const funzione8 = (string)=>{
    return string.split(" ").map(giuseppe =>  giuseppe[0]).join("").toLowerCase()
 }
 console.log(funzione8("IL MONDO BUONO"))