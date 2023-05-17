import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

// HTTP METHODS: GET: listar, POST: criar, PUT: atualizar,
// PATCH: atualizar uma informação específica, DELETE: deletar
// API RESTFUL: existem padrões a serem seguidos

app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
