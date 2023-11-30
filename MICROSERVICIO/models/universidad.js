const { Schema, model } = require('mongoose');

const UniversidadSchema = Schema({
    nombre: {
        type:String,
        required: [true, 'Debe colocar un nombre'],

    },
    direccion: {
        type:String,
        required:true
    },
    telefono: {
        type:Number,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }

});

module.exports = model('Universidad', UniversidadSchema);