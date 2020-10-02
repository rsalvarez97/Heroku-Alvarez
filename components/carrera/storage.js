const { response } = require('express');
const db = require('mongoose')
const model = require('./model')

function addCarrera(Objeto){
    const carrera = new model(Objeto)
    carrera.save()
}

async function getCarrera(filtroCarrera){
    let filtro = {}
    if(filtroCarrera != null){
        filtro = {nombre : filtroCarrera}
    }
    const carreraList = await model.find(filtro)
    return carreraList
}

async function updateCarrera(idCarrera, Objeto){
    const foundCarrera = await model.findOne({ _id: idCarrera })
    foundCarrera.nombre = Objeto.nombre
    foundCarrera.abreviatura = Objeto.abreviatura
    foundCarrera.descripcion = Objeto.descripcion

    const result = await foundCarrera.save()
    return(result)
}

function deleteCarrera(idCarrera){
    return model.deleteOne({_id: idCarrera})
}

module.exports = {
    add: addCarrera,
    get: getCarrera,
    update: updateCarrera,
    delete: deleteCarrera,
}