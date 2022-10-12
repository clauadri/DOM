//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const div$$ = document.createElement('div');

document.body.appendChild(div$$);

console.log(div$$);


//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const div2$$ = document.createElement('div');

div2$$.innerHTML = `<p></p>`;

document.body.appendChild(div2$$);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div3$$ = document.createElement('div');

for (let i = 0; i < 6; i++) {
    
    console.log(i);
    
    let paraf$$ = document.createElement('p');
    
    div3$$.appendChild(paraf$$);
}

document.body.appendChild(div3$$);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const dinamicText$$ = document.createElement('p');

dinamicText$$.innerHTML = `'Soy dinamico!'`

document.body.appendChild(dinamicText$$);


//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2$$ = document.querySelector('.fn-insert-here');

h2$$.innerHTML = `'Wubba Lubba dub dub'`

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const list$$ = document.createElement('ul');

document.body.appendChild(list$$);
console.log(list$$)

for (let i = 0; i < apps.length; i++) {
    // console.log(i);

    let li$$ = document.createElement('li');
    li$$.innerText = apps[i];
    // console.log(li$$);
    
    
    list$$.appendChild(li$$);
}


//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const deletedNodes$$ = document.querySelectorAll('.fn-remove-me');

for (const nodos of deletedNodes$$) {
    nodos.remove();
    console.log(nodos);
}



//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//Recuerda que no solo puedes insertar elementos con .appendChild.


const p$$ = document.createElement('p');
const texto$$ = document.createTextNode('Voy en medio!');

p$$.appendChild(texto$$);

const beforeDiv$$ = document.querySelector('.before');
document.body.insertBefore(p$$,beforeDiv$$);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here


const div4$$ = document.querySelectorAll('div.fn-insert-here');

for (const div of div4$$) {
    const insideP$$ = document.createElement('p');
    const textInside$$ = document.createTextNode('Voy dentro!');
    insideP$$.appendChild(textInside$$);
    div.appendChild(insideP$$); 
}
console.log(div4$$)







