// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
 

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul$$ = document.createElement('ul');
document.body.appendChild(ul$$);
console.log(ul$$);

for (let i = 0; i < countries.length; i++) {
    let li$$ = document.createElement('li');
    li$$.textContent = countries[i];
    ul$$.appendChild(li$$);
}

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const eleminar$$ = document.querySelector('.fn-remove-me')// primero lo selecionamos

eleminar$$.remove();// despues se borra
console.log(eleminar$$)

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div$$ = document.querySelector('[data-function="printHere"]');
console.log(div$$)

const ul2$$ = document.createElement('ul');
div$$.appendChild(ul2$$);

for (let i = 0; i < cars.length; i++) {
    
    const li2$$ = document.createElement('li');
    li2$$.textContent = cars[i];
    ul2$$.appendChild(li2$$);
    
}

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (let i = 0; i < countries2.length; i++) {
    const div3$$ = document.createElement('div');
    // console.log(div3$$);
    const h4$$ = document.createElement('h4');
    h4$$.textContent = countries2[i].title;
    console.log(h4$$);
    const img$$ = document.createElement('img');
    img$$.setAttribute('src', countries2[i].imgUrl);
    div3$$.appendChild(h4$$);
    div3$$.appendChild(img$$);
    
    document.body.appendChild(div3$$);

}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.
const button$$ = document.createElement('button');

function deleteLast() {
    const div4$$ = document.querySelectorAll('div');// aqui para que me caja los div que tocan meteriamos una clase a esos divs
    div4$$[div4$$.length-1].remove();
    button$$.removeEventListener('click',deleteLast)// le quitamos el evento para que cuando le haya borrado el ultimo el boton no borre mas
}

button$$.addEventListener('click', deleteLast);// si no añado parectesis a la funcion quiere decir que hasta que no haga click no se ejecuta, le quitamos la funcionalidad al boton
button$$.textContent = 'Eliminar';
document.body.appendChild(button$$);
// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

// mismo bucle que el 1.4

for (let i = 0; i < countries2.length; i++) {
    const div3$$ = document.createElement('div');
    const h4$$ = document.createElement('h4');
    const buttonItem$$ = document.createElement('button');//añado un boton por cada vuelta
    buttonItem$$.textContent = 'delete';//le doy un texto para que pueda verlo mejor
    h4$$.textContent = countries2[i].title;
    console.log(h4$$);
    const img$$ = document.createElement('img');
    img$$.setAttribute('src', countries2[i].imgUrl);
    div3$$.appendChild(h4$$);
    div3$$.appendChild(img$$);
    buttonItem$$.addEventListener('click', () => removeItem(div3$$))// funcion anonima para que no se ejecute la funcion hasta que no le de click
    document.body.appendChild(div3$$);
    document.body.appendChild(buttonItem$$)// añado el boton al body 
}

function removeItem(div3$$) {
    div3$$.remove();//cada vez que le de click al boton con el event listener
}

