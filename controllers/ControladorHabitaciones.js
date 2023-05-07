
import {ServicioHabitacion}from "../services/ServicioHabitacion.js"
export class ControladorHabitaciones{
    constructor(){}
    async registrandoHabitacion(peticion,respuesta){
        let objetoservicioHabitacion=new ServicioHabitacion()
        let datosHabitacion=peticion.body
        
        try{
            if(datosHabitacion.precio<100 && datosHabitacion.numpersonas<2){
                respuesta.status(400).json({
                    "mensaje":"Revisa el precio por noche y la cantidd maxima de personas ingresadas"
                })

            }else if(datosHabitacion.precio<100){
                respuesta.status(400).json({
                    "mensaje":"revisa el precio por noche"
                })
            }else if(datosHabitacion.numpersonas<2){
                respuesta.status(400).json({
                    "mensaje":"muy poca gente en esta habitacion"
                })
            }
            else{
                await objetoservicioHabitacion.registrar(datosHabitacion)
                respuesta.status(200).json({
                    "mensaje":"exito agregando datos",
                })

            }


        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion "+error
            })
        }


    }
    async buscandoHabitacion(peticion,respuesta){
        let objetoservicioHabitacion=new ServicioHabitacion()
        try{
            let idHabitacion=peticion.params.idhabitacion
            respuesta.status(200).json({
                "mensaje":"exito buscando la habitacion",
                "habitacion":await objetoservicioHabitacion.buscarPorId(idHabitacion)
            })

        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion "+error
            })
        }
    }
    async buscandoHabitaciones(peticion,respuesta){
        let objetoservicioHabitacion=new ServicioHabitacion()
        try{
            respuesta.status(200).json({
                "mensaje":"exito buscando habitaciones",
                "habitaciones":await objetoservicioHabitacion.buscarTodas()
            })

        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion "+error
            })
        }
    }
    async editandoHabitacion(peticion,respuesta){
        let idHabitacion=peticion.params.idhabitacion
        let datosHabitacion=peticion.body
        let objetoServicioHabitacion=new ServicioHabitacion()
        try{
            await objetoServicioHabitacion.editar(idHabitacion,datosHabitacion)
            respuesta.status(200).json({
                "mensaje":"exito editando habitacion",
            })

        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion "+error
            })
        }
    }

    async eliminarHabitacion(peticion,respuesta){
        let idHabitacion=peticion.params.idhabitacion
        let objetoServicioHabitacion=new ServicioHabitacion()
        try{
            await objetoServicioHabitacion.eliminar(idHabitacion)
            respuesta.status(200).json({
                "mensaje":"exito eliminando habitacion",
            })

        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion "+error
            })
        }
    }

}

