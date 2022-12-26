import { podeSubir } from "./ex2.js";
import { logico } from "./ex1.js";

// Declare uma variável com o nome status. Atribua a ela um valor booleano: (true ou false).

// Em seguida, faça um if que avalie o valor contido nesta variável. Se o valor armazenado for true, imprima a seguinte mensagem no console: O valor é true - verdadeiro. Caso contrário, imprima a mensagem: O valor é false - falso.

logico()

// Em um parque de diversões nos pedem um programa para verificar se os
// passageiros da montanha-russa podem entrar no brinquedo.
// 1) Crie uma função podeSubir() que receba dois parâmetros:
// - altura da pessoa;
// - se está acompanhada.

// Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode
// subir ou não, baseado nas seguintes condições:

// a) A pessoa deve medir mais de 1.40m e menos de 2 metros.
// b) Se a pessoa medir menos de 1.40m, deve vir acompanhada.
// c) Se a pessoa medir menos de 1.20m, não poderá subir, nem
// acompanhada.

// a) Em caso de autorização, exiba a mensagem: “Acesso
// autorizado” ou “Acesso autorizado somente com
// acompanhante”;
// b) Em caso de impedimento, exiba a mensagem: “Acesso
// negado.”


podeSubir(1.39, "não")