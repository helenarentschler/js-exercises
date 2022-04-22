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
  
  
  


        

      
    


  