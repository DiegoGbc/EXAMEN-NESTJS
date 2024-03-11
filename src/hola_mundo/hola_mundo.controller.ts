import { Controller, Get } from '@nestjs/common';

@Controller('hola-mundo')
export class HolaMundoController {
    @Get()
    getHello(): string {
        return '¡Hola Mundo!'
    }
}
