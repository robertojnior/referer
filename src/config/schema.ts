import fp from 'fastify-plugin';
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod';

const schema = fp((fastify, _opts, done) => {
  fastify.setValidatorCompiler(validatorCompiler);

  fastify.setSerializerCompiler(serializerCompiler);

  done();
});

export { schema };
