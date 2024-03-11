import { Controller, Get, Param } from '@nestjs/common';

@Controller('ruta-dinamica')
export class RutaDinamicaController {

    @Get(':Humano') 
    saludar(@Param('Humano') nombre: string): string {
        return `¡Hola, ${nombre}, Bienvenido a NestJS.`;
    }

}
