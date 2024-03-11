import { Test, TestingModule } from '@nestjs/testing';
import { RutaDinamicaController } from './ruta_dinamica.controller';

describe('RutaDinamicaController', () => {
  let controller: RutaDinamicaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RutaDinamicaController],
    }).compile();

    controller = module.get<RutaDinamicaController>(RutaDinamicaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
