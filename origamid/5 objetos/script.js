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
      
      
      
    


  