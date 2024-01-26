export const HOST = process.env.HOST || '0.0.0.0';

export const PORT = process.env.PORT || 8080;

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

export const SERVER_URL = `http://${HOST}:${PORT}`;
