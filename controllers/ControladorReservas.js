import {ServicioRecerva}from "../services/ServicioRecerva.js"
import {ServicioHabitacion}from "../services/ServicioHabitacion.js"
export class ControladorReservas{
    constructor(){}

        /////reserva
       async registrandoReserva(peticion,respuesta){
            let objetoservicioReserva = new ServicioRecerva()
            let objetoservicioHabitacion=new ServicioHabitacion()
            let datosReserva=peticion.body


            try{     

                const fechasali=new Date(datosReserva.fechafin)
                const fechaentra=new Date(datosReserva.fechainicio)
                if(fechaentra>fechasali){
                    respuesta.status(400).json({
                    "mensaje":"La fecha de entrada no puede ser mayor a la de salida"
                })
                }else{
                    ////buscar que la habitacion exista
                    const prueba =await objetoservicioHabitacion.buscarPorId(datosReserva.idhabitacion)
                    ///separar los dias de la recerva
                    let diferenciaEnDias = Math.floor((fechasali.getTime() - fechaentra.getTime()) / (1000 * 60 * 60 * 24));
                    //calcular precio
                    datosReserva.costoReserva=diferenciaEnDias*prueba.precio

                    await objetoservicioReserva.registrar(datosReserva)
                    respuesta.status(200).json({
                        "mensaje":"la habitacion existe y se guardo la reserva correctamente"
                        
                    })
                }
            }
            catch(error){
                respuesta.status(400).json({
                    "mensaje":"fallamos en la operacion "+error.message
                })
            }
    
    
        }
       async buscandoReserva(peticion,respuesta){
            let objetoservicioReserva = new ServicioRecerva()
            try{
                let idReserva=peticion.params.idreserva
                respuesta.status(200).json({
                    "mensaje":"exito buscando la Reserva",
                    "reserva":await objetoservicioReserva.buscarPorId(idReserva)
                })
    
            }
            catch(error){
                respuesta.status(400).json({
                    "mensaje":"fallamos en la operacion "+error
                })
            }
        }
       async buscandoReservas(peticion,respuesta){
        let objetoservicioReserva = new ServicioRecerva()
            try{
                respuesta.status(200).json({
                    "mensaje":"exito buscando Reservas",
                    "habitaciones":await objetoservicioReserva.buscarTodas()
                })
    
            }
            catch(error){
                respuesta.status(400).json({
                    "mensaje":"fallamos en la operacion "+error
                })
            }
        }
       async editandoReserva(peticion,respuesta){
            let idReserva=peticion.params.idreserva
            let datosReserva=peticion.body
            let objetoservicioReserva = new ServicioRecerva()

            try{
                await objetoservicioReserva.editar(idReserva,datosReserva)
                respuesta.status(200).json({
                    "mensaje":"exito editando Reserva",
                })
    
            }
            catch(error){
                respuesta.status(400).json({
                    "mensaje":"fallamos en la operacion "+error
                })
            }
        }

        async eliminarReserva(peticion,respuesta){
            let idReserva=peticion.params.idreserva
            let objetoservicioReserva = new ServicioRecerva()
            try{
                await objetoservicioReserva.eliminar(idReserva)
                respuesta.status(200).json({
                    "mensaje":"exito eliminando reserva",
                })
    
            }
            catch(error){
                respuesta.status(400).json({
                    "mensaje":"fallamos en la operacion "+error
                })
            }
        }

}