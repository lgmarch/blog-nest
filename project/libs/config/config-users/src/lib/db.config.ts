import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

const DEFAULT_MONGO_PORT = 27017;

export interface DbConfig {
  db: string;
  host: string;
  port: number;
  user: string;
  password: string;
  authBase: string;
}

export default registerAs('db', (): DbConfig => {
  const config: DbConfig = {
    db: process.env.MONGO_DB,
    host: process.env.MONGO_HOST,
    port: parseInt(process.env.MONGO_PORT ?? DEFAULT_MONGO_PORT.toString(), 10),
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
    authBase: process.env.MONGO_AUTH_BASE,
  };

  console.log(config);

  const validationSchema = Joi.object<DbConfig>({
    db: Joi.string().required(),
    host: Joi.string().hostname().required(),
    port: Joi.number().port().default(DEFAULT_MONGO_PORT),
    user: Joi.string().required(),
    password: Joi.string().required(),
    authBase: Joi.string().required(),
  });

  const { error } = validationSchema.validate(config, { abortEarly: true });

  if (error) {
    throw new Error(`[DB Config]: Environments validation failed. Please check .env file.
      Error message: Mongo.${error.message}`);
  }

  return config;
});
