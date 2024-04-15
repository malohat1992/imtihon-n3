let moon = document.querySelector('.moon')
let sun = document.querySelector ('.sun')
let li1 = document.querySelectorAll ('.li1')
let of = document.querySelector ('.of')
let on = document.querySelector ('.on')
let lampa = document.querySelector ('.lampa')
let lampa2 = document.querySelector ('.lampa2')



moon.addEventListener('click',()=>{
    moon.style.display = 'none'
    sun.style.display = 'inline-block'
    
    li1.forEach ((item) => {
        item.style.display='inline-block'  
      } );

})

sun.addEventListener('click',()=>{
    sun.style.display = 'none'
    moon.style.display = 'inline-block'
    
    li1.forEach ((item) => {
        item.style.display='none'  
      } );

})
of.addEventListener('click',()=>{
  of.style.display = 'none'
  on.style.display = 'inline-block'
  lampa2.style.display = 'inline-block'
  lampa.style.display = 'none'

})
on.addEventListener('click',()=>{
  on.style.display = 'none'
  of.style.display = 'inline-block'
  lampa.style.display = 'inline-block'
  lampa2.style.display = 'none'
 

})