import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HolaMundoController } from './hola_mundo/hola_mundo.controller';
import { PostController } from './post/post.controller';
import { RutaDinamicaController } from './ruta_dinamica/ruta_dinamica.controller';

@Module({
  imports: [],
  controllers: [AppController, HolaMundoController, PostController, RutaDinamicaController],
  providers: [AppService],
})
export class AppModule {}
