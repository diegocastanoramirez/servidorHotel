import express from 'express'
import {ControladorHabitaciones} from '../controllers/ControladorHabitaciones.js'
import {ControladorReservas} from '../controllers/ControladorReservas.js' 


let controladorHabitacion=new ControladorHabitaciones()
let controladorReservas=new ControladorReservas()
//VOY A SEPARAR Y PERSONALIZAR LAS RUTAS DE CADA SERVICIO
//DEL API REST
export let rutas=express.Router()

rutas.get('/buscarhabitaciones',controladorHabitacion.buscandoHabitaciones)
rutas.get('/buscarhabitacion/:idhabitacion',controladorHabitacion.buscandoHabitacion)
rutas.post('/registrarhabitacion',controladorHabitacion.registrandoHabitacion)
rutas.put('/editarhabitacion/:idhabitacion',controladorHabitacion.editandoHabitacion)
rutas.delete('/eliminarhabitacion/:idhabitacion',controladorHabitacion.eliminarHabitacion)
///reservas
rutas.get('/buscarreservas',controladorReservas.buscandoReservas)
rutas.get('/buscarreserva/:idreserva',controladorReservas.buscandoReserva)
rutas.post('/registrarreserva',controladorReservas.registrandoReserva)
rutas.put('/editarreserva/:idreserva',controladorReservas.editandoReserva)
rutas.delete('/eliminarreserva/:idreserva',controladorReservas.eliminarReserva)