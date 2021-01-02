let database = firebase.database()
let articulos = database.ref(`a/b/`)
let comentarios = database.ref(`a/c/`)


articulos.once('value', function(snapshot){
    var listaart = snapshot.val()
    var arrellenar = ''

    for (i in listaart) {
        
        let art = listaart[i]
        arrellenar += `<div class="art-card">
        <div class="card-sect"><div class="contenedor-centrar card-t"><a href="/post/${art.link}"><p><b>${art.titulo}</b></p></a></div>
        <p class="card-p">${art.parrafo}</p></div>
        <div class="card-f">
          <p class="card-f-l">${art.autor}</p>
          <p class="card-f-r"><img src="39414.png" style="width: 10px; height: 10px;"> ${art.contadorComentarios}</p>
        </div></div>¿?¿?`
    }
    var def = arrellenar.split(`¿?¿?`).reverse().join().replace(/\>,/g, '>').replace(/\,/, '')
    $('#articles-grid').html(def)
})


var dataart = {}
function goTo(id) {
  //console.log(id)
  
  articulos.once('value', function(snapshot){
    const listaart = snapshot.val()
    
    for (i in listaart) {
      if (listaart[i].id == id) {
        dataart.titulo = listaart[i].titulo
        dataart.texto = listaart[i].texto
      }
    }
    
    location.href=`posts.html`
  })
  
}