import { Ariza, Publish } from "@prisma/client";
import { Router } from "express";
import arizaService from "../service/service";

const router = Router()

router
    .get('/', (req, res) => {
        res.render('yangiliklar')
    })
    .get('/admin', (req, res) => {
        res.render('enter')
    })
    .get('/boglanish', (req, res) => {
        res.render('boglanish')
    })
    .get('/rahbariyat', (req, res) => {
        res.render('rahbariyat')
    })
    .get('/vazifalari', (req, res) => {
        res.render('vazifalari')
    })
    .get('/bolimlar', (req, res) => {
        res.render('bolimlar')
    })
    .get('/muassasa', (req, res) => {
        res.render('muas')
    })
    .get('/haqida', (req, res) => {
        res.render('haqida')
    })

    // admin
    .get('/newsadmin', (req, res) => {
        res.render('news', {
            layout: 'index',
        })
    })
    .get('/admin4868', (req, res) => {
        arizaService.findAll()
            .then((arizalar) => res.render('arizalar', { layout: 'index', arizalar }))
            .catch((error) => res.render('arizalar', { error }))
    })
    .get('/yangiliklar', (req, res) => {
        arizaService.getAllNews()
            .then((all_news) => {
                res.render('yangiliklar', {layout: 'main', all_news } )                
            })
    })

    .post('/admin4868', (req, res) => {
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
    .post('/yangiliklar', (req, res) => {
        try {
            let news: Publish = {
                id: 0,
                title: req.body.title,
                date: req.body.date,
                message: req.body.message
            }
    
            arizaService.createNews(news)
            
            res.redirect('/newsadmin')
        } catch (error) {
            console.log(error);
        }
    })

    .get('/delete/:id', (req, res) => {
        arizaService.RemoveAriza(+req.params.id)
            .then(data => res.redirect('/admin4868'))
            .catch(error => res.render('index', { error }))
    })

export default router
