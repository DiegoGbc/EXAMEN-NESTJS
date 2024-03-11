import { Controller, Post } from '@nestjs/common';

@Controller('post-route')
export class PostController {
    
    @Post('ruta')
    create(): string {
        
        const mensaje = '¡Hello World desde Nestjs!';
        return mensaje;

    }
}
