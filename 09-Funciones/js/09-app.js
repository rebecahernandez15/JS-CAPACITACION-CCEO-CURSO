const reproductor = {
    reporoducir: function (id){
        console.log(`Reproduciendo cacnción con el id ${id}`)
    },
    pausar:function(){
        console.log('pausando');
    },
    borar: function(id){
    console.log(`Borrando canción... ${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo: ${nombre}`);
    }

}

reproductor.reporoducir(30);
reproductor.reporoducir(20);
reproductor.pausar();
reproductor.borar(30);
reproductor.crearPlaylist('Country');
reproductor.crearPlaylist('Rock');
reproductor.reporoducir('Country');