
import {modeloReserva}from "../models/modeloReserva.js";
import {modeloHabitacion}from "../models/modeloHabitacion.js";
export class ServicioRecerva{
    constructor(){}
    async registrar(datosReserva){
        let reservaNueva=new modeloReserva(datosReserva)
        return await reservaNueva.save()
    }
    async buscarTodas(){
        let reserva=await modeloReserva.find()
        return reserva
    }
    async buscarPorId(idReserva){
        let reserva=await modeloReserva.findById(idReserva)
        return reserva
    }
    async editar(idReserva,datosReserva){
        return await modeloReserva.findByIdAndUpdate(idReserva,datosReserva)
    }
    async eliminar(idReserva){
        return await modeloReserva.findByIdAndDelete(idReserva)
    }

}
