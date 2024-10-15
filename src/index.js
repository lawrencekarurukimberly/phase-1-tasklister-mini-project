document.addEventListener('DOMContentLoaded',()=>{
     let form = document.querySelector('#create-task-form')
    form.addEventListener('submit', (e)=> {
      e.preventDefault()
      let todo = document.getElementById ('new-task-description').value
      buildToDo(todo)
      form.reset()
    })

  })
  function buildToDo(todo){
    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.context = 'x'
    li.textContent = `${todo}`
    li.appendChild(btn)
    console.log(li)
    document.querySelector('#tasks').appendChild(li)
  }
  function handleDelete(e){
    e.target.paentNode.remove()
  }
