
//var
    var nome = 'Helena',
        sobrenome = 'Rentschler',
        idade = 19,
        possuiFaculdade = false;

    console.log(nome, idade, possuiFaculdade);
    console.log(nome, sobrenome);

    var semDefinir;
    console.log(semDefinir); // sem valor atribuido, retorna undefined

    // console.log(naoDeclarada); // retorna ERRO "is not Defined"

    /* comentario
        em 
        bloco */

    //Hoisting
        console.log(comida); // retorna undefined, e não erro, pois num já existe (Hoisting)
        var comida = 'pizza'; // atribuição só ocorre aqui
        console.log(comida);

        // var vs let vs const
            var time = 'Vasco';
            var time = 'Flamengo'; // consigo redeclarar
            console.log(time)
            time = 'Santos'; // consigo atribuir um novo valor

            let salada = 'alface';
            // let salada = 'tomate'; ERRO não consigo redeclarar
            salada = 'pepino'; // consigo atribuir um novo valor
            console.log(salada)

            const lado = 2;
            // lado = 3; ERRO não consigo atribuir um novo valor
            
            var comida;
            comida = 'frango';
            var time,
                cidade = 'Manaus',
                estado,
                pais;
            console.log(cidade);

// tipos de dados
    var num = 10;
    console.log(typeof num);
    var email;
    console.log(typeof email); //undefined
    var resposta = null;
    console.log(typeof resposta); //object
    var simbolo = Symbol();
    console.log(typeof simbolo); 
    var verificarTipo = typeof num;
    console.log(verificarTipo);
    console.log(typeof verificarTipo);

    //concatenação de strings
        var nomeCompleto = nome + ' ' + sobrenome;
        console.log(nomeCompleto)
        console.log(nomeCompleto + ' tem ' + idade +' anos'); // string + qualquer coisa retorna string
        console.log("Esse é o \"grande\" momento") // Esse é o "grande" momento

    //template string
        var gols = 1000;
        console.log(`Romário fez ${gols} gols`);
        var frase = `Romário fez ${gols * 2} gols`;
        console.log(typeof frase);
        nomeCompleto = `${nome} ${sobrenome}`;
        console.log(nomeCompleto);
        var frase2 = 'It\'s time!',
            frase3 = `It's time!`,
            frase4 = "It's time!";

        console.log(frase2, frase3, frase4);
    
    //numeros
        var exp = 2e10; //20000000000
        exp = 2e-2; //0.02
        console.log(exp);

        var num = 2.345678901234567891234;
        console.log(num); // arredonda para no máxima 15 digitos (precisão máxima do js)

         //operações aritméticas

            var potencia = 2 ** 4; // dois elevado a quatro = 16
            console.log(potencia);

            var modulo = 16 % 5; // resto dessa divisão = 4
            console.log(modulo);

            var op = '50' - 25; // transforma string em numero
            op = '50' / 10;
            op = '50' * '2'
            console.log(op)

            var div = 'comprei 10' / 2; // retorna Nan (not a number)
            console.log(div);
            console.log(isNaN(div))
        
            //operadores aritméticos unários 
                var x = 5;
                console.log(x++) //5 (x = x + 1)
                console.log(x) //6 

                var y = 5;
                console.log(++y) //6 (y = y + 1)
                console.log(--y) //5 (y - 1)

                var idade = '28';
                console.log(+idade); // 28
                console.log(-idade); // -28
                console.log(idade + 5); // '285'
                console.log(+idade + 5); // 33

                idade = +'28'; //trasforma string direto em numero
                console.log(idade)
                
                // Qual o resultado da seguinte expressão?
                    var total = 10 + 5 * 2 / 2 + 20; //35
                    console.log(total);

                // Crie duas expressões que retornem NaN
                    var n = +'Olá';
                    console.log(n);
                    var n2 = 'olá' / 2;
                    console.log(n2)

                // Somar a string '200' com o número 50 e retornar 250
                    var a = '200';
                    console.log(+a + 50);

                // Incremente o número 5 e retorne o seu valor incrementado
                    var i = 1;
                    console.log(++i)
                
                // Como dividir o peso por 2?
                    var numero = +'80' / 2;
                    var unidade = 'kg';
                    var peso = numero + unidade; // '80kg'
                    console.log(peso)

// Condicionais e Booleans
    var possuiFaculdade = false;

    if (possuiFaculdade) {
        console.log('Possui faculdade');
        var j = 1;
        let k = 1;
    } else {
        console.log('Não possui faculdade')
    }

    console.log(j) //undefined ou 1
    //console.log(k) // Erro, k não existe

    var possuiGraduacao = true,
        possuiDoutorado = false;

    if (possuiDoutorado) {
        console.log('Possui graduação e doutorado')
    } else if (possuiGraduacao) {
        console.log('Possui apenas graduação')
    } else {
        console.log('Não possui graduação')
    }

    // Valores FALSY: retornam false quando verificados em uma expressão booleana
    // São eles: false, 0, NaN, nulll, undefined, '', "", ``
    // todos os outros valores são truthy
    var nome; 
    if (nome) {
        console.log(nome);
    } else {
        console.log("nome não existe"); // como '' retorna falso, esse bloco executará
    }

    //negação
        if (!possuiGraduacao) {
            console.log('Não possui graduação');
        }

        // conferir se um valor é truthy ou falsy: !!
        console.log(!!"");
        console.log(!!null);
        console.log(!!5);

    // Operadores de comparação
        console.log(10 == '10') //true
        console.log(10 === '10') //false
        console.log(10 != '10') //false
        console.log(10 !== '10') ///true
    
    // Operador lógicos && - e
        console.log(true && true); //true
        console.log(true && false); //false
        console.log(false && true); //false
        console.log(false && false); //false
        console.log('gato' && 'cão'); // 'cão' - se ambos forem truthy, retorna o ultimo verificado
        console.log((5 - 5) && (5 + 5)); // 0 - retona o primeiro valor falsy que ler e não continua a leitura a partir daí
        console.log('Gato' && false); // false
        console.log((5>=5) && (3 < 4)); //true

        if ((5 - 5) && (5 + 5)) {
            console.log('verdadeiro')
        } else {
            console.log('falso')
        }

        // (5 - 5) && (5 + 5) retorna 0 que é falsy.
        // if (0) -> 0 retona falso, que é lido pelo if e cai no else

    // Operador lógico || - ou
        console.log(true || true); //true
        console.log(true || false); //true
        console.log(false || true); //true
        console.log(false || false); //false
        console.log('gato' || 'cão'); // 'gato' - retorna o primeiro valor truthy e não continua a leitura a partir daí
        console.log((5 - 5) || (5 + 5)); // 10
        console.log('gato' || false); // 'gato'
        console.log((5>=5) || (3 < 4)); //true
    
    //switch
        var corFavorita = 'roxo'

        switch (corFavorita) {
            case 'azul':
                console.log('Olhe para o céu!')
                break;
            case 'verde':
                console.log('O gramado é belo.')
                break;
            case 'vermelho':
                console.log('Morangos são gostosos.')
                break;
            default:
                console.log('Feche os olhos.')
        }

    // Verifique se a sua idade é maior do que a de algum parente
    // Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
        var idadeParente = 19;
        var minhaIdade = 19;

        if (idadeParente > minhaIdade) {
            console.log('é maior');
        } else if (idadeParente === minhaIdade) {
            console.log('é igual');
        } else {
            console.log('é menor');
        }

    // Qual valor é retornado na seguinte expressão?
        var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // 3, (5 - ' ') transforma ' ' em number
        console.log(expressao)

    // Verifique se as seguintes variáveis são Truthy ou Falsy
        var nome = 'Andre'; //truthy
        var idade = 28; //truthy
        var possuiDoutorado = false; //falsy
        var empregoFuturo; //falsy (undefined)
        var dinheiroNaConta = 0; //falsy

        console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

    // Compare o total de habitantes do Brasil com China (valor em milhões)
        var brasil = 207;
        var china = 1340;
        console.log(china > brasil);

    // O que irá aparecer no console?
        if(('Gato' === 'gato') && (5 > 2)) {
            console.log('Verdadeiro');
        } else {
            console.log('Falso');
        }

        // Falso, pois a primeira expressão já retorna false, caindo no else

    // O que irá aparecer no console?
        if(('Gato' === 'gato') || (5 > 2)) {
            console.log('Gato' && 'Cão');
        } else {
            console.log('Falso');
        }

        // bloco if é executado pois 5 > 2 retorna true, aparecerá Cão no console pois é o ultimo valor truthy.

// Funções
    function digaOi() {
        console.log("Oi!");
    }

    digaOi();
    
    function areaQuadrado(lado) {
        return console.log(lado * lado);
    }

    areaQuadrado(1);
    areaQuadrado(2);

    function pi() {
        return 3.14;
    }

    console.log(pi); //mostra a função inteira

    var total = 5 * pi();
    console.log(total);

    // Parâmetros e argumentos
        //ao criar uma função, você define parâmetros
        //ao executar uma função, você pode passar argumentos

                     //parametros
        function imc(peso, altura) {
            var imc = peso / (altura ** 2);
            return imc;
        }
                        //argumentos
        console.log(imc(50, 1.6));

        function cores(cor) {
            if (cor === 'amarelo') {
                return 'O sol está radiante!';
            } else if (cor === 'azul') {
                return 'O céu está lindo!';
            } else {
                return 'Que bela cor!';
            }
        }

        console.log(cores());

        // Função como parâmetro
            // função nativa do js, ela liga um evento (como um clique no documento) a uma função.
                            //evento  função anônima
            addEventListener('click', function() {
                console.log('Oi!');
            });

            // Esta função anonima e chamada de callback, pois ela ocorre depois de um evento
            function mostrarTudoBem() {
                console.log('Tudo bem?');
            };

            addEventListener('click', mostrarTudoBem);

    //retorno - se não definir return, retorna undefined

        function imc2(peso, altura) {
            var imc = peso / (altura ** 2);
            console.log(imc);
        };

        imc2(70, 1.7); // é undefined
        console.log(imc2(70, 1.7)); // retorna undefined e o código da função

        function terceiraIdade(idade) {
            if (typeof idade !== 'number') {
                return 'Informe sua idade!'; //cancela a função, já que o codigo abaixo do return é ignorado
            } else if (idade >= 60) {
                return true;
            } else {
                return false;
            }
        };
        // retornar diferentes tipos de dado é uma má prática 
        console.log(terceiraIdade(67));

        function faltaVisitar(paisesVisitados) {
            var totalPaises = 193;
            return `Falta visitar ${totalPaises - paisesVisitados} paises.`;
        };

        console.log(faltaVisitar(12));
        // console.log(totalPaises); // ERRO: totalPaises existe apenas dentro do escopo da função.

        var profissao = 'Designer';

        function dados() {
            var nome = 'André';
            var idade = 28;
            function outrosDados() {
                var endereco = 'Rio de Janeiro'
                var idade = 29;
                return `${nome}, ${idade}, ${endereco}, ${profissao}`;
            }
            return outrosDados();
        }

        console.log(dados());
        // console.log(outrosDados()); ERRO - escopo

        //Hoisting: acontece também com funções

            digaTchau('Helena');

            function digaTchau(nome) {
                console.log(`Tchau, ${nome}!`);
            }

    //exercicios
        // Crie uma função para verificar se um valor é Truthy
            function verificarTruthy(valor) {
                if (valor) {
                    console.log('É truthy');
                } else {
                    console.log('É falsy');
                }
            };

            verificarTruthy(NaN);

            function isTruthy(valor) {
                return !!valor;
            };


        // Crie uma função matemática que retorne o perímetro de um quadrado
            function perimetro(lado) {
                return lado * 4;
            };

            console.log(perimetro(1));

        // Crie uma função que retorne o seu nome completo
            function nomeCompleto(nome, sobrenome) {
                return `${nome} ${sobrenome}`;
            };

            console.log('Helena', 'Rentschler');

        // Crie uma função que verifica se um número é par
            function par(num) {
                var resto = num % 2;
                if (resto === 0) {
                    return 'O número é par';
                } else {
                    return 'O número é ímpar';
                };
            };

            console.log(par(1091));

        // Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
            function tipo(dado) {
                return typeof dado;
            };

            console.log(tipo(90));

        // addEventListener é uma função nativa do JavaScript
        // o primeiro parâmetro é o evento que ocorre e o segundo o Callback
        // utilize essa função para mostrar no console o seu nome completo
        // quando o evento 'scroll' ocorrer.

        /* addEventListener('scroll', function(){
            console.log('Helena Rentschler');
        }); */

        // Corrija o erro abaixo

        var totalPaises = 193;

        function precisoVisitar(paisesVisitados) {
            return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
        }

        function jaVisitei(paisesVisitados) {
            return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
        }

        console.log(precisoVisitar(20));
        console.log(jaVisitei(20)); 

// Objetos
    //possuem propriedades

    var pessoa = {
        nome: 'Helena',
        idade: 19,
        profissao: 'desenvolvedora',
        possuiFaculdade: true,
    };

    console.log(pessoa.idade);

    // se o valor da propriedade é uma função, a função é chamada de MÉTODO
        var quadrado = {
            lados: 4,
            area: function(lado) {
                return lado * lado;
            },
            perimetro: function(lado) {
                console.log(this)
                return lado * this.lados;
            },
        }

        console.log(quadrado.area(3));
        console.log(quadrado.perimetro(3));

    // outra maneira de escrever os métodos omitindo o function:
        var pessoa2 = {
            nome: 'José',
            peso: 70,
            altura: 1.80,
            imc() {
                return this.peso / (this.altura ** 2);
            },
        }

        console.log(pessoa2.imc());

    //objetos nativos 
        console.log(Math.PI);
        console.log(Math.random());
        console.table(quadrado);

    // adicionar propriedades e reassimilar valores
        
        var menu = {
            width: 800,
            height: 50,
            backgroundColor: '#834',
            metadeHeight() {
                return this.height / 2;
            },
        }

        menu.backgroundColor = '#209'; //reassimilando (set)
        menu.color = '#409'; // criando propriedade nova
        menu.esconder = function() {
            console.log('escondi');
        };
        var bg = menu.backgroundColor; //get
    
    // Protótipo e Herança
        //O objeto herda propriedades e métodos do objeto que foi utilizado para cria-lo.
        var menu2 = {
            width: 800,
        }

        console.log(Object); // todo objeto herda funções de Object
        menu2.hasOwnProperty('width'); // true, menu tem propriedade unica width
        menu2.hasOwnProperty('Height');
    
    //exercicios
        // Crie um objeto com os seus dados pessoais
        // Crie um método no objeto anterior, que mostre o seu nome completo

            var eu = {
                nome: 'Helena',
                sobrenome: 'Rentschler',
                idade: 19,
                temEnsinoMedio: true,
                profissao: 'desenvolvedora web',
                raca: 'branca',
                mostrarNome() {
                    return `${this.nome} ${this.sobrenome}`;
                },
            }

        // Modifique o valor da propriedade preco para 3000
            var carro = {
                preco: 1000,
                portas: 4,
                marca: 'Audi',
            }
            carro.preco = 3000;

        // Crie um objeto de um cachorro que represente um labrador preto com 10 anos, que late ao ver um homem
            var cachorro = {
                raca: 'labrador',
                cor: 'preto',
                idade: 10,
                latir(pessoa) {
                    if (pessoa === 'homem') {
                        return 'au au au';
                    };
                }
            }

            console.log(cachorro.latir('homem'));
  
  



        
    




