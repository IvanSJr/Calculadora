import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be 4 + 5 = 9', () =>{
    let soma = service.calcular(4, 5, CalculadoraService.SOMA);
    expect(soma).toEqual(9);
  });

  it('should be 4 - 5 = -1', () =>{
    let substracao = service.calcular(4, 5, CalculadoraService.SUBSTRACAO);
    expect(substracao).toEqual(-1);
  });

  it('should be 1 * -1 = -1', () =>{
    let multiplicacao = service.calcular(1, -1, CalculadoraService.MULTIPLICACAO);
    expect(multiplicacao).toEqual(-1);
  });

  it('should be 1 / 4 = 0.25', () =>{
    let divisao = service.calcular(1, 4, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(0.25);
  });

  it('should be invalide operation', () =>{
    let operacao = '%'
    let divisao = service.calcular(1, 4, operacao);
    expect(divisao).toEqual(0);
  });
});
