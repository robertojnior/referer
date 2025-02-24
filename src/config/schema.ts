import fp from 'fastify-plugin';
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod';

export default fp((fastify, _opts, done) => {
  fastify.setValidatorCompiler(validatorCompiler);

  fastify.setSerializerCompiler(serializerCompiler);

  done();
});
