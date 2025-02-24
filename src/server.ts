import { join } from 'node:path';

import Fastify from 'fastify';
import Autoload from '@fastify/autoload';

import { schema } from './config/schema';

const server = Fastify({
  logger: true,
});

server.register(Autoload, {
  dir: join(import.meta.dirname, 'routes'),
});

server.register(schema);

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);

    process.exit(1);
  }

  console.log(`Server listening at ${address}`);
});
