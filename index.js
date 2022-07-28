// Write your code here!

//createElement() and appendChild()
const element = document.createElement('div');
document.body.appendChild(element)

const ul = document.createElement('ul')

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}

element.appendChild(ul)

const header = document.getElementById('header')
header.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>"

element.style.backgroundColor = '#27647B'
element.style.fontSize = '24px';
element.style.marginLeft = '30px';
element.style.lineHeight = 2;

// ul.remove()