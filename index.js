const localStorageKey = 'to-do-list-fo';
const list = document.getElementById('list')

function adicionar(){
    let task = document.getElementById('task').value;
    //validação de tarefa adicionada
    if(!task){
        alert('Adicione uma tarefa');
    }else{
        //incremento no localStorage
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
         name: task
        });
        localStorage.setItem(localStorageKey,JSON.stringify(values))
        showValues()
    }
}   

function showValues(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    list.innerHTML ='';
    for(i = 0;i < values.length; i++){
        list.innerHTML += `<li>${values[i]['name']} <button id = "btn-ok" onclick="removeItem('${values[i]['name']}')">ok</button></li>`
    }
    console.log(values)
}

function removeItem(data){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let index = values.findIndex(x => x.name == data);
    values.splice(index,1);
    localStorage.setItem(localStorageKey,JSON.stringify(values))
    showValues()
}
showValues()
