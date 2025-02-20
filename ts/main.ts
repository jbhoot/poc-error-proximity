import Fastify from 'fastify'

type Params = {
  num: number;
}

const fastify = Fastify({
  logger: true
})

fastify.get<{ Params: Params }>('/increment/:num', async function handler(request, _reply) {
  const params = request.params;
  return params.num + 1;
});

type Op = {
  operation: string;
  operand: string;
}

fastify.post<{ Body: Op }>('/change-case', async function handler(request, _reply) {
  const body = request.body;
  switch (body.operation) {
    case 'upper':
      return body.operand.toUpperCase();

    case 'lower':
      return body.operand.toLowerCase();

    default:
      return body.operand;
  }
});

try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
