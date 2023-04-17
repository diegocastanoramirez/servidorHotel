import express from 'express'
import {ControladorHabitaciones} from '../controllers/ControladorHabitaciones.js'

let controladorHabitacion=new ControladorHabitaciones()

//VOY A SEPARAR Y PERSONALIZAR LAS RUTAS DE CADA SERVICIO
//DEL API REST
export let rutas=express.Router()

rutas.get('/buscarhabitaciones',controladorHabitacion.buscandoHabitaciones)
rutas.get('/buscarhabitacion/:idhabitacion',controladorHabitacion.buscandoHabitacion)
rutas.post('/registrarhabitacion',controladorHabitacion.registrandoHabitacion)
rutas.put('/editarhabitacion/:idhabitacion',controladorHabitacion.editandoHabitacion)
///reservas
rutas.get('/buscarreservas',controladorHabitacion.buscandoHabitaciones)
rutas.get('/buscarreserva/:idreserva',controladorHabitacion.buscandoHabitacion)
rutas.post('/registrarreserva',controladorHabitacion.registrandoHabitacion)
rutas.put('/editarreserva/:idreserva',controladorHabitacion.editandoHabitacion)