// const p = document.querySelector('body > div:nth-child(1) > p.error');
// console.log(p.outerHTML);

// const para = document.querySelectorAll('p');
// const error = document.querySelectorAll('.error');
// console.log(error);

// para.forEach(val => {
//     console.log(val)
// });
// console.log(para[1]);


// get element by ID
// const id = document.getElementById('page-title');
// console.log(id);

// //get elements by their class name
// const errors = document.getElementsByClassName('error-el');
// console.log(errors[0]);

// // const error = document.getElementByClassName('error-el');
// // console.log(error[0]);

// const para = getElementsByTagName('p');
// console.log(para);

// const heading = document.querySelector('h1');
// heading.innerHTML = 'Hello, Ankit';
// console.log(heading.innerHTML)

// const paras = document.querySelectorAll('p');
// paras.forEach(paras => {
//     console.log(paras.innerHTML)
//     paras.innerHTML = 'ankit'
// });

// const content = document.querySelector('.content');

// const people = ['ankit' , 'kapil', 'navneet'];
// people.forEach(person => {
//     // console.log(person)
//     content.innerHTML += `<h3>${person}</h3>`
// });

// const link = document.querySelector('a');
// link.innerHTML = 'This is my portfolio';
// link.setAttribute('href', 'www.abnkit.com');
// // link.setAttribute('href', 'http://www.ankit.com');

// const heading  = document.querySelector('h1');
// heading.setAttribute('style', 'color: green');
// heading.style.margin = '50px';
// heading.style.fontSize = '55px';

// const heading = document.querySelector('h1');
// heading.classList.toggle('success');
// heading.classList.toggle('success');

// const paras = document.querySelectorAll('p');
// // console.log(paras)
// paras.forEach(para => {
//     if (para.textContent.includes('error')) {
//         para.classList.add('error');
        
//     }
//     if (para.textContent.includes('success')) {
//         para.classList.add('success');
        
//     }
// });

// const div1 = document.querySelector('div');
// console.log(div1.children);
// Array.from(div1.children).forEach(child => {
//     child.classList.add('div-child');
// });

const ul = document.querySelector('ul');

    ul.addEventListener('click', e => {
        e.target.remove();
    });
    




const todo = document.querySelectorAll('li');
// todo.forEach(item => {
//     item.addEventListener('click', e => {
//         // console.log(e.target)
//         // e.target.style.textDecoration = 'line-through';
//         e.target.remove();
//     })
// });

const button = document.querySelector('button');
button.addEventListener('click', () =>{
    const li = document.createElement('li');
    li.textContent = 'something new'
    ul.append(li);
});


