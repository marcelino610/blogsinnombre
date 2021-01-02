let titulo = $('.titulo-articulo').text();
let database = firebase.database()
let articulos = database.ref(`a/b/`)

articulos.on('value', function(snapshot) {
    let snap = snapshot.val()
    let data = ''
    for (i in snap) {                
        
        if (titulo == snap[i].titulo) {
            let com = snap[i].comentarios
            $('#610').html(`<p id="identif" style="visibility: hidden;">${snap[i].id}</p>`)
            for (j in com) {
                data+= `<div class="coment-card">
                <p class="coment-text">${com[j].txt}</p>
                <div class="coment-footer">
                <p class="coment-f-l">${com[j].nombre}</p>
                <p class="coment-f-r">${com[j].fecha}</p>
                </div></div><br><br>`
            }
            
        }
    }
    $('.caja-comentarios').html(data)
})
$('#comentario-publicar').click((ev) => {
    if ($('#comentario-nombre').val()  && $('#comentario-email').val()  && $('#comentario').val() ) {
        let date = new Date
        let fecha = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
        let coment = {
            nombre: $('#comentario-nombre').val(),
            email: $('#comentario-email').val(),
            txt: $('#comentario').val().replace(/\n/g, '<br>'),
            fecha: fecha
        }
        let idd = $('#identif').text()
        const key = database.ref(`a/b/${idd}/comentarios`).push().key
        database.ref(`a/b/${idd}/comentarios/${key}`).set(coment)
        database.ref(`a/b/${idd}/contadorComentarios`).transaction(count => {
            if (count === null) {
                return count = 1
            } else {
                return count + 1
            }
        })
        if ($('#comentario-notificaciones').prop('checked')) {
            let arttit = $('.titulo-articulo').text()
            let d = {
                nombre: coment.nombre,
                email: coment.email, 
                articulo: arttit
            }
            const key = database.ref(`blog/notificaciones`).push().key
            database.ref(`blog/notificaciones/${key}`).set(d)
        } else {
            console.log('no está marcado')
        }
        $('#comentario-nombre').val('')
        $('#comentario-email').val('')
        $('#comentario').val('')
        $('#comentario-verif').hide()
    } else {
        $('#comentario-verif').show()
    }
    return false
})