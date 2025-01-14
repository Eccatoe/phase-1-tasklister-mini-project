document.addEventListener("DOMContentLoaded", () => {  
  let form=document.querySelector("#form")
  form.addEventListener('submit', (e)=>{
    e.preventDefault()
    buildToDo(e.target.task.value)
    form.reset()
  })
});


function buildToDo(todo){
  console.log(todo)
  let p=document.createElement('p')
  let btn=document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent="x"
  p.textContent=todo
  p.appendChild(btn)
  document.querySelector("#form").appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove();
}

