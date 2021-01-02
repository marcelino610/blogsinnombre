$('#uber-us').click(function(){
    $(this).addClass('invisible')
})
$('#u-u').click(function(e){
    e.stopPropagation()
})
$('#s-pr').click(function(){
    $('#uber-us').removeClass('invisible')
})
$('#s-pr').hover(function(){
    $(this).css('cursor', 'pointer')
})
$('.close').hover(function(){
    $(this).removeClass('color').addClass('dark-color').css('color', 'white').css('cursor', 'pointer')},
    function(){
        $(this).removeClass('dark-color').addClass('color').css('color', 'black')
})
$('.close').click(function(){
    $('#uber-us').addClass('invisible')
})



$('#pol-com').click(function(){
    $(this).addClass('invisible')
})
$('#p-c').click(function(e){
    e.stopPropagation()
})
$('#p-com').click(function(){
    $('#pol-com').removeClass('invisible')
})
$('#p-com').hover(function(){
    $(this).css('cursor', 'pointer')
})
$('.close').hover(function(){
    $(this).removeClass('color').addClass('dark-color').css('color', 'white').css('cursor', 'pointer')},
    function(){
        $(this).removeClass('dark-color').addClass('color').css('color', 'black')
})
$('.close').click(function(){
    $('#pol-com').addClass('invisible')
})

$('.aut-aside>ul>li').hover(function() {
    $(this).css('color', 'black')
},
    function() {
        $(this).css('color', 'inherit')
})


$('.aut-art').click(function() {
    let autn = $(this).siblings('h2').text()
    let database = firebase.database()
    let articulos = database.ref(`a/b/`)
    $('#l-a>header>h3').text(`Artículos de ${autn}`)

    articulos.once('value', function(snapshot) {
        let z = snapshot.val()
        let data = ''

        for (i in z) {  
            console.log(z[i].autor, z[i].titulo, z[i].link)          
            if (z[i].autor == autn) {
                data += `<li class="art-li" style="margin-bottom: 5px;"><a class="black white b-w" href="post/${z[i].link}">${z[i].titulo}</a></li>`
            }
        }
        
        $('#aut-art-li').html(data)
    })
    
})
$('.aut-art').click((ev) => {
    $('#lista-art').removeClass('invisible')
    return false
})
$('#lista-art').click(function(){
    $(this).addClass('invisible')
})
$('#l-a').click(function(e){
    e.stopPropagation()
})
$('.close').hover(function(){
    $(this).removeClass('color').addClass('dark-color').css('color', 'white').css('cursor', 'pointer')},
    function(){
        $(this).removeClass('dark-color').addClass('color').css('color', 'black')
})
$('.close').click(function(){
    $('#lista-art').addClass('invisible')
})
$('.aut-art').hover(function(){
    $(this).css('cursor', 'pointer')
})
$('.art-li>a').hover(function(){
    $(this).css('background-color', 'red')
},
function(){
    $(this).css('background-color', 'inherit')
})


$('.b-w').hover(function(){
    $(this).removeClass('black').addClass('blue')
},
    function(){
        $(this).removeClass('blue').addClass('black')
})
