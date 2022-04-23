//Funções construtoras

//carro é o construtor
function Carro(marcaAtribuida, precoAtribuido) {
    // this = objeto Carro
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

// palavra chave new gera outros objetos do tipo carro
const honda = new Carro('Honda', 2000);
const fiat = new Carro('Fiat', 3000);

// Exercícios
// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function() {
        console.log(nome + ' andou');
    };
};
  
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
    const joao = new Pessoa('João', 20);
    //joao.andar();

    const maria = new Pessoa('Maria', 25);
    const bruno = new Pessoa('Bruno', 15);

  // Crie uma Constructor Function (Dom) para manipulação de listas de elementos do dom. Deve conter as seguintes propriedades e métodos:
    // elements, retorna NodeList com os elementos selecionados
    // addClass(classe), adiciona a classe a todos os elementos
    // removeClass(classe), remove a classe a todos os elementos

    function Dom(selector) {
        this.selector = selector // selector: 'li',
        this.elements = document.querySelectorAll(selector) // elements: nodeList(li, li, li ...),
        // addClass(classe) = {...},
        this.addClass = function(classe) {
            this.elements.forEach((element) => {
                element.classList.add(classe)
            })
        }
        // addClass(classe) = {...},
        this.removeClass = function(classe) {
            this.elements.forEach((element) => {
                element.classList.remove(classe)
            })
        }
    };

    const sectionParagraphs = new Dom('section p');

//Prototype - propriedade de uma função que é na verdade um objeto.
    //propriedade APENAS de funções

    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    };

    const andre = new Pessoa('André', 19);

    Pessoa.prototype.andar = function() {
            return `${this.nome} andou`;
    }

    console.log(Pessoa.prototype); // object 
    console.log(Pessoa.prototype.andar()); // object 
    console.log(andre.prototype); //undefined, andre não é função
    console.log(andre);
    //objeto criado usando o construtor tem acesso as propriedades do prototipo do construtor
    console.log(andre.andar());
    console.log(andre.hasOwnProperty('nome')); // object Andre tem acesso a metodos do prototipo do constructor Object

    const cidade = new String('Rio'); // cidade é um objeto a partir do constructor String

    const paragrafos = document.querySelectorAll('p');

    //transforma em array
    const paragrafosArray = Array.prototype.slice.call(paragrafos); 
    console.log([1,2,3].slice()); //funciona - metodo do protótipo de array
    const paragrafosArray2 = Array.from(paragrafos);
    //console.log([1,2,3].from()); //ERRO - metodo do contructor array
    console.log(Object.getOwnPropertyNames(Array));
    console.log(Object.getOwnPropertyNames(Array.prototype)); // muito mais propriedades e métodos

    const Carro2 = {
        marca: 'Ford',
        preco: 2000,
        acelerar() {
          return true;
        }
      }
      
     console.log(Carro2.acelerar.constructor);
      
    //Exercicios
    // Crie uma função construtora de Pessoas Deve conter nome, sobrenome e idade Crie um método no protótipo que retorne
    // o nome completo da pessoa
    function Pessoas(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    Pessoas.prototype.nomeCompleto = function() {
        return `${this.nome} ${this.sobrenome}`
    }

    const renan = new Pessoas('Renan', 'Stelle', 19);
    console.log(renan.nomeCompleto());

    // Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document
    console.log(Object.getOwnPropertyNames(NodeList.prototype));
    console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
    console.log(Object.getOwnPropertyNames(Document.prototype));


    // Liste os construtores dos dados abaixo
    const li = document.querySelector('li');

    li; //HTMLLIElement
    li.click; //function
    li.innerText; // string
    li.value; // number
    li.hidden; // boolean
    li.offsetLeft; // number
    li.click(); // undefined, retorno não definido

    // Qual o construtor do dado abaixo:
    li.hidden.constructor.name; //string

    // Objetos Nativos da linguagem Js
        //construtores:
        Object
        String
        Array
        Function

    // Objetos do Host: implementados pelo ambiente como os do DOM (queryselector, HTMLCollection...) e os do Node.Js()

    // Verificar de objeto existe
        const lista = document.querySelectorAll('li');

        if(typeof Array.from !== 'undefined') {
            const listaArray = Array.from(lista);
        } else {
            console.log('PolyFill');
        }

    //Object String - métodos e propriedades
    //os dois abaixo tem mesmas propriedades e métodos:
        const comida = 'pizza';
        const liquido = new String('água');

        console.log(comida[0]);
        console.log(comida.charAt(0));
        console.log(liquido[0]);
        console.log(liquido.charAt(0));

        const frase = 'A melhor linguagem é ';
        const linguagem = 'JavaScript';

        const fraseFinal = frase.concat(linguagem, '!!');
        console.log(fraseFinal);

        const fruta = 'Banana';
        const listaFrutas = 'Melancia, Banana, Laranja';

        console.log(listaFrutas.includes(fruta, 8)); // procura a partir do index 1 
        console.log(listaFrutas.includes(fruta, 15));

        console.log(fruta.startsWith('ba')); //false
        console.log(fruta.startsWith('Ba')); //true
        console.log(fruta.endsWith('na')); //TRUE

        const transacao1 = 'Depósito de cliente';

        console.log(transacao1.slice(0,3)); //dep
        console.log(transacao1.slice(0,-3)); //Depósito de clie
        console.log(transacao1.slice(3)); //ósito de cliente
        console.log(transacao1.slice(-3)); //nte

        console.log(transacao1.substring(0,3)); //dep - funciona igual o slice, só não com negativos

        const instrumento = 'Guitarra';

        console.log(instrumento.indexOf('r'))// 5
        console.log(instrumento.lastIndexOf('r'))// 6

        const preco = 'R$99,00'
        console.log(preco.padStart(10)); //completa string até 10 caracteres
        console.log(preco.padEnd(10, '*'));

        //alinhar conteudo
        const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

        listaPrecos.forEach((preco) => {
            console.log(preco.padStart(15, "*"));
        });

        const frase1 = "ta";

        console.log(frase1.repeat(4));

        let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias Camisas';
        listaItens = listaItens.replace('Camisas', 'Shirts'); // só substitui o primeiro que achar
        listaItens = listaItens.replace(/[ ]+/g, ', '); 
        console.log(listaItens);

        const arrayLista = listaItens.split(','); // quebra a string toda vez que encontra o padrão passado, retornando um array com os pedaços
        console.log(arrayLista);

        const ul = document.querySelector('ul');

        const ulInnerHTML = ul.innerHTML;
        console.log(ulInnerHTML);
        
        const templateArray = ulInnerHTML.split('li');
        console.log(templateArray);

        const sectionLista = templateArray.join('section');
        console.log(sectionLista);

        ul.innerHTML = sectionLista;

        //verificar input de user
        const sexo1 = 'Feminino';
        const sexo2 = 'feminino';
        const sexo3 = 'FEMININO';

        if(sexo1.toLowerCase() === 'feminino') {
            console.log("logar");
        };

        if(sexo2.toLowerCase() === 'feminino') {
            console.log("logar");
        };

        if(sexo3.toLowerCase() === 'feminino') {
            console.log("logar");
        };

        const valor = '   R$ 23.00   ' ;
        console.log(valor.trim());
        console.log(valor.trimStart());
        console.log(valor.trimEnd());

        //exercicios
        // Utilizando o foreach na array abaixo, some os valores de Taxa e os valores de Recebimento

        const transacoes = [
            {
            descricao: 'Taxa do Pão',
            valor: 'R$ 39',
            },
            {
            descricao: 'Taxa do Mercado',
            valor: 'R$ 129',
            },
            {
            descricao: 'Recebimento de Cliente',
            valor: 'R$ 99',
            },
            {
            descricao: 'Taxa do Banco',
            valor: 'R$ 129',
            },
            {
            descricao: 'Recebimento de Cliente',
            valor: 'R$ 49',
            },
        ];

        let totalTaxas = 0;
        let totalRecebimento = 0;

        transacoes.forEach((transacao) => {
            let valorNum = +transacao.valor.slice(3);
            if(transacao.descricao.includes('Taxa')) {
                totalTaxas += valorNum;
            } else if(transacao.descricao.includes('Recebimento')) {
                totalRecebimento += valorNum;
            }
        });

        console.log(totalTaxas);
        console.log(totalRecebimento);

        // Retorne uma array com a lista abaixo
        const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
        const transportesArray = transportes.split(';');
        console.log(transportesArray);
        
        // Substitua todos os span's por a's
        const html = `<ul>
                        <li><span>Sobre</span></li>
                        <li><span>Produtos</span></li>
                        <li><span>Contato</span></li>
                        </ul>`;

        const templateHtmlArray = html.split('span');
        console.log(templateHtmlArray);

        const htmlWithLinks = templateHtmlArray.join('a');
        console.log(htmlWithLinks);

        
        // Retorne o último caracter da frase
        const frase2 = 'Melhor do ano!';
        const caracter = frase2.charAt(frase2.length - 1);
        console.log(caracter);
        
        // Retorne o total de taxas
        const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

        let quantasTaxas = 0;
        transacoes2.forEach((transacao) =>{
            transacao = transacao.toLowerCase();
            if(transacao.includes('taxa')){
                quantasTaxas ++;
            }
        });
        console.log(quantasTaxas);
  
  
// Objeto Number
    console.log(Number.isNaN(NaN)); // true
    console.log(Number.isInteger(20.20)) //false
    console.log(Number.parseFloat('12.3')) // 12.3
    console.log(parseFloat('12.3')) // também funciona
    console.log(parseFloat('12.3 reais')) // também funciona
    console.log(parseFloat('   12.3')) // também funciona
    console.log(parseFloat('R$12.3')) // não funciona
    console.log(parseInt('12.3')) // 12
    console.log(parseInt(12.3)) // 12 - decimal por padrão
    console.log(parseInt(12.3, 10)) // 12 (arg 10 - base decimal)

    const numero = 2.657;
    console.log(numero.toFixed()); //'3' - retorna string
    console.log(numero.toFixed(2)) //'2.66'
    console.log(+numero.toFixed());

    const num = 29.87;

    console.log(num.toString(10))// '29.87'

    //formatação de número
    
    let preco2 = 59.49;
    preco2 = preco2.toLocaleString('pt-BR', {style: 'currency', 
                                             currency: 'BRL'}
                                  );
    console.log(preco2);

    let preco3 = 60000015.89
    preco3 = preco3.toLocaleString('en-US', {style: 'currency', 
                                             currency: 'USD'}
                                  );
    console.log(preco3);

//Objeto Math (objeto, não construtor)
        console.log(Math.abs(-5)); //5
        console.log(Math.ceil(3.3)); //4
        console.log(Math.floor(3.9)); //3
        console.log(Math.round(10.7)); //11
        console.log(Math.max(1,2,3,4,5,6)); //6
        console.log(Math.min(1,2,3,4,5,6)); //1
        console.log(Math.random()); // aletorio de 0 a 1

        //aleatorio de 0 a 10
        console.log(Math.floor((Math.random()*10)));

//exercicios
    // Retorne um número aleatório
    // entre 1050 e 2000
    //formula: Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050);


    // Retorne o maior número da lista abaixo
    const numeros = '4, 5, 20, 8, 9';
    const arrayNumeros = numeros.split(', ');
    const numeroMax = Math.max(...arrayNumeros); // '...' (spread) passa cada item da array como argumento

    console.log(numeroMax);


    // Crie uma função para limpar os preços e retornar os números com centavos arredondados
    // depois retorne a soma total
    const listaPrecos2 = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

    totalPreco = 0;
    function limparPreco(preco) {
        preco = preco.toUpperCase().replace('R$', '').replace(',', '.')
        preco = +Number.parseFloat(preco).toFixed(2);
        return preco;
    }
    

    listaPrecos2.forEach((preco) => {
        totalPreco += limparPreco(preco);
    });

    console.log(totalPreco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

// Objeto Array
    // const carros = new Array('Corola', 'Mustang', 'Honda');

    // carros[1] 
    // carros[2] = 'Ferrari';
    // carros[10] = 'Parati';
    // carros.length; // 11
    // console.log(carros);

    //arraylike
    const obj = {
        0: 'Andre',
        1: 'Helena',
        2: 'Carlos',
        length: 3
    }

    const arrayObj = Array.from(obj);
    console.log(arrayObj);
    console.log(Array.isArray(obj))
    console.log(Array.of(1,2,3,4));
    console.log(Array.of(10));
    console.log(new Array(5));
    console.log(Array(5));
    console.log(Array(1,2,3,4));

    //Métodos modificadores
    const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
    instrumentos.sort() // ordem alfabetica

    console.log(instrumentos);

    //Unshift: coloca no começo e retorna lenght
    //Push: coloca no final e retorna length

    const carros = ['Ford', 'Fiat', 'VW'];

    console.log(carros.unshift('Astra', 'Ferrari'));
    console.log(carros.push('Uno'));

    console.log(carros);


    //Shift: tira do começo e retorna o item
    //Push: tira do final e retorna o item
    console.log(carros.shift());
    console.log(carros.pop());

    console.log(carros);

    console.log(carros.reverse());

    console.log(carros);

    console.log(carros.splice(3, 1, 'Kia', 'Logan'))

    console.log(carros);

    const itens = ['item0', 'item1', 'item2', 'item3', 'item4'];
    console.log(itens);
    itens.copyWithin(3,0,2);
    console.log(itens);

    const frutas = ['banana', 'laranja', 'maçã', 'mamão'];
    console.log(frutas.fill('abacate', 1, 3));

    //métodos de acesso
    const transporte1 = ['Barco', 'Aviao'];
    const transporte2 = ['Carro', 'Moto'];

    const meios = transporte1.concat(transporte2);

    console.log(meios);

    const maisMeios = [].concat(transporte1, transporte2, 'Moto');
    console.log(maisMeios);

    const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

    console.log(linguagens.includes('html'))
    console.log(linguagens.indexOf('php'))
    console.log(linguagens.indexOf('js'))
    console.log(linguagens.lastIndexOf('js'))

    console.log(linguagens.slice(3));
    console.log(linguagens.slice(2,4));

    const cloneLinguagens = linguagens.slice();

    //Exercícios
    
    const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
    // Remova o primeiro valor de comidas e coloque em uma variável
    const pizza = comidas.shift();
    // Remova o último valor de comidas e coloque em uma variável
    const macarrao = comidas.pop();
    // Adicione 'Arroz' ao final da array
    comidas.push('Arroz');
    // Adicione 'Peixe' e 'Batata' ao início da array
    comidas.unshift('Peixe', 'Batata');

    console.log(comidas);

    const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
    // Arrume os estudantes em ordem alfabética
    estudantes.sort();
    // Inverta a ordem dos estudantes
    estudantes.reverse();
    // Verifique se Joana faz parte dos estudantes
    console.log(estudantes.includes('Joana'));
    // Verifique se Juliana faz parte dos estudantes
    console.log(estudantes.includes('Juliana'));
    console.log(estudantes);

    let html2 = `<section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contato</div>
                </section>`
    // Substitua section por ul e div com li,
    // utilizando split e join
    html2 = html2.split('section').join('ul').split('div').join('li');
    console.log(html2);

    const carros2 = ['Ford', 'Fiat', 'VW', 'Honda'];
    // Remova o último carro, mas antes de remover salve a array original em outra variável
    const carrosCopia = carros2.slice();

    carros2.pop();

    console.log(carros2);
    console.log(carrosCopia);

//Array e Iteração
    const nomes = ['amanda', 'julia', 'carla', 'ana']

    //array é uma referncia a nomes, se modificar modifico nomes também 
    // item não modifica a array
    nomes.forEach((nome, index, array) =>{
        array[index] = 'nome é ' + nome;
    });

    console.log(nomes);

    const retornoForEach = nomes.forEach((nome) => {
        console.log(nome);
    });
    
    console.log(retornoForEach); //undefined

    const flores = ['tulipa', 'rosa', 'girassol', 'copo de leite']

    //map retorna uma array com o retorno de cada iteração
    const retornoMap = flores.map((flor) => {
        return `minha flor preferida é ${flor}.`
    });

    console.log(flores);
    console.log(retornoMap);

    const numbers = [1, 2, 3, 4, 5];
                                // sem chaves e 1 linha não precisa da palavra return
    const numbersX2 = numbers.map(n => n*2);
    console.log(numbersX2);

    const aulas = [
        {
          nome: 'HTML 1',
          min: 15
        },
        {
          nome: 'HTML 2',
          min: 10
        },
        {
          nome: 'CSS 1',
          min: 20
        },
        {
          nome: 'JS 1',
          min: 25
        },
      ]

      const tempoAulas = aulas.map(aula => aula.min);
      console.log(tempoAulas)

      //ou
      
      function nomeAula(aula) {
        return aula.nome;
      }

      const nomeAulas = aulas.map(nomeAula);
      console.log(nomeAulas)

      //ou

      const aulasNome = function(aula) {
          return aula.nome;
      };

      const arrayAulas = aulas.map(aulasNome);
      console.log(arrayAulas);

      //ou

      const aulasTempo = aula => aula.min;
      const arrayTempo = aulas.map(aulasTempo);
      console.log(arrayTempo);

    // reduce
        const nums = [10, 25, 30]

        const reduceValor = nums.reduce((acumulador, item, index) =>{
            console.log(`${index}: ${item} ${acumulador}`);
            return acumulador + item;
        }, 0);

        console.log(reduceValor);

        const videos = [
            {
            nome: 'HTML 1',
            min: 15
            },
            {
            nome: 'HTML 2',
            min: 10
            },
            {
            nome: 'CSS 1',
            min: 20
            },
            {
            nome: 'JS 1',
            min: 25
            },
        ]

        const listaVideos = videos.reduce((videoAnterior, video, index) => {
            videoAnterior[index] = video.nome;
            return videoAnterior;
        }, {} );
        //acumulador é um objeto vazio, que vai recebendo uma propriedade a cada teração de acordo com o index do array

        console.log(listaVideos);

        const fruits = ['uva', 'pera', 'banana'];

        const stringFruits = fruits.reduce((acc, fruta, index) => {
            console.log(index);
            return `${acc} ${fruta}`
        });

        console.log(stringFruits);

        // 1°
        // acc: 'uva'
        // return 'uva pera'

        //2°
        // acc: 'uva pera'
        // return: 'uva pera banana'

    //itera ao contrario, comaçando do index 2
        const stringFruits2 = fruits.reduceRight((acc, fruta, index) => {
            console.log(index);
            return `${acc} ${fruta}`
        });

        console.log(stringFruits2);

    //some() - faz verificaçao pelo array e retorna true ou false dependendo da expressão
        fruits.reverse();

        const temUva = fruits.some((fruta) => {
            return fruta === 'uva';
        });

        console.log(temUva); //TRUE
        
    //find findIndex
        const retorneUva = fruits.find((fruta) => {
            return fruta === 'uva';
        });

        console.log(retorneUva);

        const retorneIndexUva = fruits.findIndex((fruta) => {
            return fruta === 'uva';
        });

        console.log(retorneIndexUva);

        fruits.fill('abacate')
        
    //every 

        const todosAbacate = fruits.every((fruta) => {
            return fruta === 'abacate';
        });

        console.log(todosAbacate);

        const numerosArray = [5, 3, 6, 9, 19, 40];

        const maiorQue3 = numerosArray.every(n => n > 3);
        console.log(maiorQue3)

    //filter() - retorna array com todos que são truthy

        const items = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

        const arrayItems = items.filter((item) => {
            return item
        });

        console.log(arrayItems);

        const numeros_array = [6, 43, 22, 88, 101, 29];

        const maioresQue30 = numeros_array.filter(n => n > 30);

        console.log(maioresQue30);

        const classes = [
            {
              nome: 'HTML 1',
              min: 15
            },
            {
              nome: 'HTML 2',
              min: 10
            },
            {
              nome: 'CSS 1',
              min: 20
            },
            {
              nome: 'JS 1',
              min: 25
            },
          ]
          
          const classesMaisQue20 = classes.filter(classe => classe.min >= 20);
          console.log(classesMaisQue20);

    //exercicios
        // Selecione cada curso e retorne uma array com objetos contendo o título, descricao, aulas e horas de cada curso
          const cursos = document.querySelectorAll('.curso');
          const arrayCursos = Array.from(cursos);

          
          const listaCursos = arrayCursos.map((section) => {
              const curso = {
                titulo: section.querySelector('h1').innerText,
                descricao: section.querySelector('p').innerText,
                aulas: section.querySelector('.aulas').innerText,
                duracao: section.querySelector('.horas').innerText,
              }
              return curso;
          });

          console.log(listaCursos);

        // Retorne uma lista com os
        // números maiores que 100
        const numeros2 = [3, 44, 333, 23, 122, 322, 33];
        const arraynums = numeros2.filter(n => n > 100);
        console.log(arraynums);


        // Verifique se Baixo faz parte da lista de instrumentos e retorne true
        const instruments = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
        const temBaixo = instruments.some((item) => item === 'Baixo');
        console.log(temBaixo);

        // Retorne o valor total das compras
        const compras = [
            {
                item: 'Banana',
                preco: 'R$ 4,99'
            },
            {
                item: 'Ovo',
                preco: 'R$ 2,99'
            },
            {
                item: 'Carne',
                preco: 'R$ 25,49'
            },
            {
                item: 'Refrigerante',
                preco: 'R$ 5,35'
            },
            {
                item: 'Quejo',
                preco: 'R$ 10,60'
            }
        ]

        const totalCompras = compras.reduce((acc, compra) =>{
            compra = +compra.preco.replace('R$ ', '').replace(',', '.');
            return acc + compra;
        }, 0);

        console.log(compras);
        console.log(totalCompras);









        

    


  
    


  