import { FastifyInstance } from 'fastify'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
import { generateCode } from '../script/generator.js'

var dominio = "http://localhost:3333/"


const prisma = new PrismaClient()

export async function appRoutes(app: FastifyInstance) {
    

    app.post('/createlink', async (request) => {
        const createUrlBody = z.object({
            url: z.string()
        })

        const { url } = createUrlBody.parse(request.body)
        const code = generateCode()
        const shortUrl = `${dominio}${code}`

        return shortUrl
    })

    
}