import { FastifyInstance } from 'fastify'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
import { generateCode } from '../script/generator.js'
import dayjs from "dayjs"

var dominio = "http://localhost:5173/"

const prisma = new PrismaClient()

export async function appRoutes(app: FastifyInstance) {
    
    app.post('/shortlink', async (request) => {
        const createCodeBody = z.object({
            code: z.string()
        })

        const { code } = createCodeBody.parse(request.body)

        //verificar se ele existe
        const findCode = prisma.url.findMany({
            where: {
                code: code
            }
        })

        return findCode
    })

    app.post('/createlink', async (request) => {
        const createUrlBody = z.object({
            url: z.string()
        })

        const { url } = createUrlBody.parse(request.body)
        const code = generateCode()
        const shortUrl = `${dominio}${code}`
        const today = dayjs().startOf('day').toDate()

        await prisma.url.create({
            data: {
                code: code,
                url: url,
                created_at: today
            }
        })

        return shortUrl
    })    

}