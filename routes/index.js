const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
	res.render('index', {title:'Inicio'});
});

router.get('/mision',(req,res)=>{
	res.render('mision', {title:'Misión'});
});

router.get('/vision',(req,res)=>{
	res.render('vision', {title:'Visión'});
});

router.get('/quienessomos',(req,res)=>{
	res.render('quienessomos', {title:'¿Quienes Somos? '});
});

router.get('/fuentes',(req,res)=>{
	res.render('fuentes', {title:'Fuentes de consulta'});
});

router.get('/portafolio',(req,res)=>{
	res.render('portafolio', {title:'Portafolio de proyectos'});
});

router.get('/contacto',(req,res)=>{
	res.render('contacto', {title:'Contacto'});
});

module.exports = router;