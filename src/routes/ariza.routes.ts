import { Ariza, PrismaClient } from "@prisma/client";
import { Router } from "express";
import arizaService from "../service/ariza.service";

const router = Router()

router.get('/', (req,res) => {
    res.render('yangiliklar'), {
        layout: 'main'
     }
    
})

router.get('/boglanish', (req,res) => {
    res.render('boglanish' , {
        layout: 'main'
     })
})


router.get('/yangiliklar', (req,res) => {
    res.render('yangiliklar' , {
        layout: 'main'
     })
})


router.get('/haqida', (req,res) => {
    res.render('haqida' , {
        layout: 'main'
     })
})

router.get('/newsadmin', (req,res) => {
    res.render('news' , {
        layout: 'index'
     })
})


router.get('/admin4868', (req,res) => {
    arizaService.findAll()
    .then((arizalar) => res.render('arizalar',  { layout: 'index', arizalar }))
    .catch((error) => res.render('arizalar', { error }))
})

router.post('/admin', (req,res) => {
    let ariza: Ariza = {
        id: 0,
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        gender: req.body.gender,
        number: req.body.number,
        text: req.body.text
    } 

    arizaService.create(ariza)
    .then(data => res.redirect('/boglanish'))
    .catch(error => res.render('arizalar', { error }))
})

router.get('/delete/:id', (req, res) => {
    arizaService.RemoveAriza(+req.params.id)
      .then(data => res.redirect('/admin4868'))
      .catch(error => res.render('index', { error }))
  })

export default router