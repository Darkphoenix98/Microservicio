

const { request, response } = require('express');
const Proyecto = require('../models/proyecto');
const Cliente = require('../models/cliente')
const TipoProyecto = require('../models/tipoProyecto')
const Etapa = require('../models/etapa')
const Universidad = require('../models/universidad')

/**
 * crear
 */
const createProyecto = async (req = request, res = response) => {
    try{
         const { cliente, tipoProyecto, etapa, universidad  } = req.body;
         console.log(req.body)

        
         // tipo proyecto
         const tipoProyectoBD = await TipoProyecto.findOne({
            _id: tipoProyecto._id
        });
        if(!tipoProyectoBD){
            return res.status(400).json({
                msj: 'No existe tipo Proyecto'
            })
        }
        //  cliente
        const clienteBD = await Cliente.findOne({
            _id: cliente._id
        });
        if(!clienteBD){
            return res.status(400).json({
                msj: 'No existe cliente'
            })

            
        }
        // etapa
        const etapaBD = await Etapa.findOne({
            _id: etapa._id
        });
        if(!etapaBD){
            return res.status(400).json({
                msj: 'No existe etapa'
            })

        
            
        }
        
        //uiversidad
        const universidadBD = await Universidad.findOne({
            _id: universidad._id
        });
        if(!universidadBD){
            return res.status(400).json({
                msj: 'No existe universidad'
            })

            
        }
 
        // Agregar campos adicionales
        const { numero, titulo, fechaIniciacion, fechaEntrega, valor } = req.body;
        const datos = {
            numero,
            titulo,
            fechaIniciacion,
            fechaEntrega,
            valor
            
        };

        // Crear instancia de Proyecto con los datos
        const proyecto = new Proyecto({ ...datos, ...req.body });

        // Guardar el proyecto en la base de datos
        await proyecto.save();

        // Retornar la respuesta con el objeto proyecto creado
        return res.status(201).json(proyecto);
    } catch (e) {
        // Manejar errores
        return res.status(500).json({
            msj: e.message || 'Error interno del servidor'
        });
    }
};


/**
 * Consultar Proyectso
 * 
 */
const getProyectos = async (req, res = response) => {
    console.log('calling getProyectos!')
    try{
        const proyectosBD = await Proyecto.find()
        .populate({
            path: 'cliente'
        })
        .populate({
            path: 'tipoProyecto'
        }) .populate({
            path: 'etapa'
        }) .populate({
            path: 'universidad'
        })
       
        return res.json(proyectosBD);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}


// actualizar por ID
const updateProyectoPorId = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const data = req.body;
        data.fechaActualizacion = new Date()
        const proyecto = await Proyecto.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(proyecto);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}



module.exports = { 
    createProyecto,
    getProyectos,
    updateProyectoPorId
}