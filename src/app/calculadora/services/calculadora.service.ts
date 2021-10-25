import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = "+";
  static readonly SUBSTRACAO: string = "-";
  static readonly MULTIPLICACAO: string = "*";
  static readonly DIVISAO: string = "/";

  constructor() { }

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBSTRACAO:
        resultado = num1 - num2;
      break
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }

    return resultado;
  }
}
