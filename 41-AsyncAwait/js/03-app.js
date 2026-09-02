function descargarClientes(){

    return new Promise((resolve,reject)=>{
        const error = true;

        setTimeout(()=> {
            if(!error) {
                resolve('El listado de Clientes se descrago correctamnete');
            }else{
                reject ('Error en la conexion');
            }
        },3000);
    })
}

async function ejecutar(){}


//Async await
const ejectuar =async () =>{
    try{
        console.log(1+1);
        const respuesta = await descargarClientes();

        console.log(2+2);
        console.log(respuesta);
    }catch(error){
        console.log(error);
    }
}

ejecutar();