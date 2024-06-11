$(document).ready(function(){
    $('ul').on('click' , 'li', function(){
        $(this).css('text-decoration', 'line-through');
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const tarefa = $('#nova-tarefa').val().trim();

        if(tarefa === ''){
            alert('Preencha o campo!')
        } else {
            const novaTarefa = $('<li class="li">' + tarefa + '</li>');
            $(novaTarefa).appendTo('ul');
            $('#nova-tarefa').val('');
        }

    })
})
