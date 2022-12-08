
import { Ariza, PrismaClient, Publish } from "@prisma/client";

const client = new PrismaClient()

async function create(ariza: Ariza): Promise<Ariza> {
    return await client.ariza.create({
        data: {
            name: ariza.name,
            surname: ariza.surname,
            email: ariza.email,
            gender: ariza.gender,
            number: ariza.number,
            text: ariza.text
        }
    })
}

async function findAll() {
    return await client.ariza.findMany()
}

async function RemoveAriza(id: number): Promise<Ariza> {
    return await client.ariza.delete({
        where: {
            id: id
        }
    })
}

async function createNews(news: Publish) {
    return await client.publish.create({
        data: {
            title: news.title,
            date: news.date,
            message: news.message
        }
    })
}

async function getAllNews(){
    return await client.publish.findMany()
}

export default {
    create,
    findAll,
    RemoveAriza,
    createNews,
    getAllNews
}