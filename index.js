let btn = document.getElementById("btn")
let nav = document.getElementById('NAV')

function main(){
   nav.style.display = 'none'
   btn.addEventListener('click', ()=>{
      nav.style.display = 'block'
      btn.innerHTML = 'Close'
      btn.style.backgroundColor = '#cdb3e9'
      btn.addEventListener('click', ()=>{
         nav.style.display = 'none'
         btn.innerHTML = 'Menu'
         btn.style.backgroundColor = '#AB50FF'
         // nav.style.animationName = 'GoUp' not needed anymore
         main()
      })
   })
}
main()