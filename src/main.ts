import 'dotenv/config';

import server from './server';

server
  .bootstrap()
  .catch(err =>
    console.error('Starting server error', JSON.stringify(err, Object.getOwnPropertyNames(err), 2))
  );
