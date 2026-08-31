/*
 navegacion =document.querySelector('.navegacion');
/*
console.log(navegacion);
console.log(navegacion.childNodes);// Los espacios en blaco son cosiderados elementos
console.log(navegacion.children);//



console.log(navegacion.children[1].nodeName);
console.log(navegacion.children[1].nodeType);

*/

const card = document.querySelector('.card');

//card.children[1].children[1].textContent = 'Nuevo headign desde travesing the dom'
//card.children[0].src = 'img/hacer3.jpg';
//console.log(card.children[0]);}

//Travseing the Hijo al padre
//console.log(card.parentNode);
//console.log(card.parentElement.parentElement.parentElement);

// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard= document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);

