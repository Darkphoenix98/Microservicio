const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({
    numero: {
        type: String,
        required: [true, 'Debe colocar un número'],
        unique: true
    },
    titulo:{
        type:String,
        required:true
    },
    fechaIniciacion:{
        type:Date,
        required:true
    },
    fechaEntrega:
    {
    type:Date,
    required:true    
    },
    valor:{
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
    },

    // resto de atributos fk
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
     },
     cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
     },
     universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        required: true
     },
     etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
        required: true
     },
     

});

module.exports = model('Proyecto', ProyectoSchema);
/*
{
    "serial": "",
    "modelo": "",
    "descripcion": "",
    "foto": "",
    "color": "",
    "fechaCompra": "",
    "precio", 0,
    "usuario": "",
    "marca": "",
    "estado": "",
    "tipoEquipo": ""
}*/