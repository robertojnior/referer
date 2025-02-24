import { z } from 'zod';

const envVariables = z.object({
  PORT: z.string().default('3000'),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
