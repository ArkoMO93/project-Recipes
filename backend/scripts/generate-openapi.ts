import 'dotenv/config';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from '../src/app.module';

async function generateOpenApi() {
  const app = await NestFactory.create(AppModule, { logger: false });
  const config = new DocumentBuilder()
    .setTitle('Project Recipes API')
    .setDescription('API for recipes and future meal planning features.')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const outPath = resolve(process.cwd(), 'openapi.json');
  writeFileSync(outPath, JSON.stringify(document, null, 2), 'utf8');
  await app.close();
  console.log(`OpenAPI schema written to ${outPath}`);
}

void generateOpenApi();
