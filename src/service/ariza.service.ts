// AddAriza
// findAll
// RemoveAriza

import { Ariza, PrismaClient } from "@prisma/client";

const client = new PrismaClient()


async function create(ariza: Ariza): Promise<Ariza> {
return client.ariza.create( {
        data: {
            name:    ariza.name,
            surname: ariza.surname,
            email:   ariza.email,
            gender:  ariza.gender,
            number:  ariza.number,
            text:    ariza.text
        }
    } )
}

async function findAll(): Promise<Ariza[]> {
    return client.ariza.findMany()
}

async function RemoveAriza(id:number): Promise<Ariza>{
    return client.ariza.delete({
        where: { 
        id: id
    }})}

    export default {
        create,
        findAll,
        RemoveAriza 
    }