import * as Settings from '@server/settings';
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions = {
  type: 'postgres',
  host: Settings.DB_HOST,
  port: Settings.DB_PORT,
  database: Settings.DB_NAME,
  username: Settings.DB_USER,
  password: Settings.DB_PASS,
  ssl: Settings.DB_SSL,
  entities: [Settings.DB_PATH_ENTITIES]
} as DataSourceOptions;
