import { join } from 'node:path';

import Autoload from '@fastify/autoload';
import Fastify from 'fastify';

import schema from './config/schema';
import swagger from './config/swagger';

const server = Fastify({
  logger: true,
});

server.register(schema);

server.register(swagger);

server.register(Autoload, {
  dir: join(import.meta.dirname, 'routes'),
});

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);

    process.exit(1);
  }

  console.log(`Server listening at ${address}`);
});
