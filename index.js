function adicionar(){
    let button = document.getElementById('button');
    let list = document.getElementById('list');
    let task = document.getElementById('task').value;
    let novoItem =[ ];

    if(task == ""){
        alert('Adicione uma tarefa');
    }else if(task.includes(list)){
        alert('Tarefa já inclusa')
    }

    novoItem.push(task);
    list.innerText = novoItem + ',' + novoItem;
    console.log(task);
}