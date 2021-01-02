$('#mail-susc').click((ev)=> {
    if ($('#dir-mail').val() && $('#nom-mail').val()) {
        let data = {
            nombre: $('#nom-mail').val(),
            email: $('#dir-mail').val(),
            articulo: false
        }
        let database = firebase.database()
        const key = database.ref(`a/d`).push().key
        database.ref(`a/d/${key}`).set(data)
        $('#dir-mail').val('')
        $('#nom-mail').val('')
        $('#c-o').hide()
    } else {
        $('#c-o').show()
    }
})

$('.cursor').hover(function(){
    $(this).css('cursor', 'pointer')
})