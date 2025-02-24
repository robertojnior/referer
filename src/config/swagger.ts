import Swagger from '@fastify/swagger';
import SwaggerUI from '@fastify/swagger-ui';
import type { FastifyPluginCallback } from 'fastify';
import { jsonSchemaTransform } from 'fastify-type-provider-zod';

const swagger: FastifyPluginCallback = (fastify, _opts, done) => {
  fastify.register(Swagger, {
    openapi: {
      openapi: '3.1.1',
      info: {
        title: 'Refer-A-Friend API',
        version: '1.0.0',
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Dev server',
        },
      ],
    },
    transform: jsonSchemaTransform,
  });

  fastify.register(SwaggerUI, {
    routePrefix: '/docs',
  });

  done();
};

export default swagger;
