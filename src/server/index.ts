import { NestFactory } from '@nestjs/core';

import { AppModule } from '../app/app-module';
import { PORT, SERVER_URL } from './settings';

async function bootstrap(): Promise<unknown> {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*'
  });

  return app.listen(PORT, () => {
    console.log(`\n  🔥🔥  Server is running: \x1b[36m${SERVER_URL}\x1b[0m\n`);
  });
}

const server = { bootstrap };

export default server;
