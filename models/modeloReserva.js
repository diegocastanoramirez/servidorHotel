import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Reserva = new Schema({
    idhabitacion:{
        type:String,
        require:true
    },
    nombre:{
        type:String,
        require:true
    },
    apellido:{
        type:String,
        require:true
    },
    telefono:{
        type:Number,
        require:true
    },
    fechainicio:{
        type:Date,
        require:true
    },
    fechafin:{
        type:Date,
        require:true
    },
    numpersonas:{
        type:Number,
        require:true
    },
    numniños:{
        type:Number,
        require:true
    },
    numadultos:{
        type:Number,
        require:true
    },
    costoReserva:{
        type:Number,
        require:false
    },
    
})
export const modeloReserva=mongoose.model('reservas',Reserva)