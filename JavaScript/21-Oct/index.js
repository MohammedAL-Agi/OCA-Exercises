
function validate(savingType){
var key = document.getElementById('key').value;
var value = document.getElementById('value').value;

   if(value != null  && key != null ){
       if(savingType == 'session'){
           sessionStorage.setItem(key, value);
           clearInput();
       }else{
           localStorage.setItem(key, value);
           clearInput();
       }
   }
}

clearData = () => {
    sessionStorage.clear();
    localStorage.clear();
}







































// const local = document.getElementById('local');
// const session = document.getElementById('session');
// const clear = document.getElementById('clear');


// let informations = [];

// const addInfo = (ev) =>{
// ev.preventDefult();

// let info = {
//     id: Date.now(),
//     key: document.getElementById('key').value,
//     value: document.getElementById('value').value
// };

// }

// informations.push(info);
// document.querySelector('form').reset();



//  function getLocal() {
//         localStorage.setItem(prompt("enter a key which is your full name"), prompt('enter a value Hassan Matar'));
//     }


//  function getSession() {
//         sessionStorage.setItem(prompt("enter a key which is your full name"), prompt('enter a value Hassan Matar'));
//     }

// function clearAll() {

//     sessionStorage.clear();
//     localStorage.clear();
// }
    
