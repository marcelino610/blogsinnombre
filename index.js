$(".nav-op").hover(function(){
    $(this).removeClass("nav-op").addClass("op-selec");},
    function(){
    $(this).removeClass("op-selec").addClass("nav-op")}
)
$('#c-n').hide()
$('#f-susc').click((ev) => {
    if ($('#f-s-name').val() && $('#f-s-mail').val()){
        let d = {
            nombre: $('#f-s-name').val(),
            email: $('#f-s-mail').val(), 
            articulo: false
        }

        let database = firebase.database()
        const key = database.ref(`a/d`).push().key
        database.ref(`a/d/${key}`).set(d)
        $('#f-s-name').val('')
        $('#f-s-mail').val('')
        $('#c-n').hide()
    } else{
        $('#c-n').show()
    }
})