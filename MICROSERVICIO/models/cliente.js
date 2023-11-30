const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Debe colocar un nombre'],
       
    },

    email:{
        type: String,
        required: [true, 'Debe colocar un correo'],
        unique:[true, 'Debe colocar un email unico'],
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

module.exports = model('Cliente', ClienteSchema);