// DOM continuação
// Seleção de elementos
    // por ID
        const animais = document.getElementById('animais');
        console.log(animais);

        const aleatorio = document.getElementById('aleatorio');
        console.log(aleatorio); //null
    
    // por Classe e Tag (seleciona lista de todos elementos com aquela classe ou tag)
        // a lista de elementos atualiza automaticamente dentro da variável quando você adiciona mais um elemento com a classe/tag

        const gridSection = document.getElementsByClassName('grid-section')
        console.log(gridSection); //htmlcollection

        const contato = document.getElementsByClassName('grid-section contato') //seleciona apenas os que contém as duas classes
        const ul = document.getElementsByTagName('ul');

        console.log(ul[0]);

    //querySelector
        // retona o primeiro elemento com o seletor css
        const primeiraUl = document.querySelector('ul');
        const primeiroLi = primeiraUl.querySelector('li'); // seleciona primeiro li dentro da primeira Ul
        const primeiroLinkInterno = document.querySelector('[href^="#"]') // retorna primeiro link interno
        console.log(primeiroLinkInterno.innerText);
        console.log(primeiroLinkInterno.href);

    //querySelectorAll
        // retorna uma lista com todos os elementos compativeis com o seletor (a lista é ESTÁTICA: não acompanha atualizações)
        const gridElements = document.querySelectorAll('.grid-section');
        console.log(gridElements); //nodelist

        if (gridSection[1] === gridElements[1]) {
            console.log(true)
            console.log(gridElements[1])
        } else {
            console.log(false)
        }

        const animaisImg = document.querySelectorAll('.animais img') 
        console.log(animaisImg);
    
    // HTMLCollection vs NodeList
    //    ao vivo        estático
    //   2 métodos       mais métodos (forEach, ...)
    //   getElements      querySelectorAll
        
        const gridSectionHTML = document.getElementsByClassName('grid-section');
        const gridSectionNode = document.querySelectorAll('.grid-section');
        
        //primeiraUl.classList.add('grid-section');

        console.log(gridSectionHTML);
        console.log(gridSectionNode);

        gridSectionNode.forEach(function(grid){
            console.log(grid);
        });

        /*gridSectionHTML.forEach(function(grid){
            console.log(grid);
        }); */ //ERRO: objeto HTMLCollection não tem esse método
        
    //Transformar arrayLike em array
        //Objeto Array
        const arrayGrid = Array.from(gridSectionHTML); //array estática
        console.log(arrayGrid);
        arrayGrid.pop();
        console.log(arrayGrid);
    
    //exercicios
        // Retorne no console todas as imagens do site
            const imgList = document.querySelectorAll('img');
            console.log(imgList);

            imgList.forEach(function(img){
                console.log(img);
            });
            
        // Retorne no console apenas as imagens que começaram com a palavra imagem
            const img = document.querySelectorAll('img[src^="img/imagem"]');
            console.log(img);

            img.forEach(function(img){
                console.log(img);
            });

        // Selecione todos os links internos (onde o href começa com #)
            const linksInternos = document.querySelectorAll('[href^="#"]');
            console.log(linksInternos);

        // Selecione o primeiro h2 dentro de .animais-descricao
            const primeiroh2 = document.querySelector('.animais-descricao h2');
            console.log(primeiroh2);

        // Selecione o último p do site
            const paragrafos = document.querySelectorAll('p');
            console.log(paragrafos);

            const ultimoP = paragrafos[paragrafos.length - 1];
            console.log(ultimoP);

            //ou 

            console.log(paragrafos[--paragrafos.length]);

            //ou

            // console.log(paragrafos[-1]); só funciona em array
    
// ForEach e Arrow function
    const imgs = document.querySelectorAll('img');

    imgs.forEach(function(item, index, array){
        //console.log(item, index, array);
    });

    const titulos = document.getElementsByClassName('titulo'); //HTMLcollection
    const titulosArray = Array.from(titulos);
    console.log(titulosArray);

    titulosArray.forEach(function(titulo){
        console.log(titulo);
    });
    
    //Arrow function
        //encurta a function expression anonima:
        //nodelist
        imgs.forEach((item, index, array) => {
            console.log(item, index, array);
        });

        // 1 param:
        titulosArray.forEach(titulo => {
            console.log(titulo);
        });

        // sem param:

        let i = 0;

        titulosArray.forEach(() => {
            console.log(i++);
        });
        
        // 1 linha de código:
        titulosArray.forEach(item => console.log(item));

        //boa prática usar parenteses nos parametros

    //exercicios
        // Mostre no console cada parágrado do site
            const p = document.querySelectorAll('p');
            p.forEach((item) => {
                console.log(item)
            });

        // Mostre o texto dos parágrafos no console
            p.forEach((item) =>{
                console.log(item.innerText);
            });

        // Como corrigir os erros abaixo?
            //const imgs = document.querySelectorAll('img');

            imgs.forEach((item, index) => {
            console.log(item, index);
            });

            let j = 0;
            
            imgs.forEach(() => {
            console.log(j++);
            });

            imgs.forEach(() => j++);

//Classes e atributos
    //classlist: propriedade do Element e também objetos com seus próprios métodos:
        const menu = document.querySelector('.menu');

        console.log(menu.classList); //retorna DOMTokenList = arraylike
        console.log(menu.classList[0]);

        menu.classList.add('ativo', 'teste');
        console.log(menu.classList);

        menu.classList.remove('azul');
        console.log(menu.classList);

        menu.classList.toggle('azul'); //adiciona azul
        menu.classList.toggle('teste'); //remova teste
        console.log(menu.classList);
        console.log(menu.classList.contains('azul')); //true

        if (menu.classList.contains('ativo')) {
            console.log('tem a classe')
        } else {
            console.log('Não tem a classe')
    }

    //className: método antigo de add classes
        console.log(menu.className); // retorna string com todas as classes;
        // menu.className = 'ativo'; //sobrescreve todas as classes como ativo
        menu.className += ' verde'; //precisa te o espaço antes

    //attributes
        const animaisSection = document.querySelector('.animais');

        console.log(animaisSection.attributes); // arraylike NamedNodeMap
        console.log(animais.attributes[0]); //classes
        console.log(animais.attributes[1]); //id
        console.log(animais.attributes.class); //classes - posse acessar como objeto também
        console.log(animais.attributes.id);

        animais.attributes = 'class="animais"'; //não funciona, attributes é read-only, difernte da className que é writable
        
        //quando o atributo tem hifen:
            //console.log(animais.attributes.data-texto); // ERRO
            console.log(animais.attributes['data-texto']);
    
    //getAttribute e setAttribute
        const image = document.querySelector('img');

        console.log(image.getAttribute('src'));
        image.setAttribute('alt', 'Texto alternativo'); //cria ou atualiza
        console.log(image.getAttribute('alt'));
        console.log(image.hasAttribute('id')); // false
        image.removeAttribute('alt'); 
        console.log(image.getAttribute('alt')); //null
    
    //exercicios
        // Adicione a classe ativo a todos os itens do menu
            const menuLi = document.querySelectorAll('.menu li');
            menuLi.forEach((li) => {
                li.classList.add('ativo');
            });

        // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
            menuLi.forEach((li) => {
                li.classList.remove('ativo');
            });

            menuLi[0].classList.add('ativo');

        // Verifique se as imagens possuem o atributo alt
            const images = document.querySelectorAll('img');

            images.forEach(img => {
                const possuiuAtributo = img.hasAttribute('alt');
                console.log(img, possuiuAtributo);
            });

        // Modifique o href do link externo no menu
            const linkExterno = document.querySelector('a[href^="https"]');
            console.log(linkExterno);

            linkExterno.setAttribute('href', 'https://helenarentschler.github.io/');

// Dimensões e distâncias
    // Height e width
    // métodos do Element e HTMLElemnt, a maioria readOnly
        const animaisUl = document.querySelector('.animais-lista');
        console.log(animaisUl);

        console.log(animaisUl.clientHeight); //height + padding
        console.log(animaisUl.offsetHeight); //height + padding + border
        console.log(animaisUl.scrollHeight); //height total, mesmo dentro do scroll
        console.log(animaisUl.clientWidth); 
        console.log(animaisUl.offsetWidth); 
        console.log(animaisUl.scrollWidth); 
    
    //offset
        console.log(animaisUl.offsetTop); //dist entre o topo do elemento e o topo da página
        console.log(animaisUl.offsetLeft); // dist entre o canto esquerdo do elemnto e o canto esquerdo da página
    
    //getBoundingClientRect: retorna objeto com informações de distância
        const primeiroH2 = document.querySelector('h2'); 
        const h2distancias = primeiroH2.getBoundingClientRect();
        
        console.log(h2distancias);
        console.log(h2distancias.height);

        if (h2distancias.top < 0) {
            console.log('Passou do elemento')
        };
    
    //window
        console.log(
            window.innerWidth,
            window.outerWidth, //soma devtools
            window.innerHeight, 
            window.outerHeight, //soma barra de endereço
            window.pageXOffset, //distancia do scroll horizontal
            window.pageYOffset // distancia do scroll vertical
        );

        if(window.innerWidth < 600) {
            console.log('Tela menor que 600px')
        };

        //matchMedia - mediaQuerie no Js como no CSS para verificar tamanho da janela
            const small = window.matchMedia('(max-width: 600px)') // retorna mediaQueryList
            console.log(small); 

            // Uma das propriedades da mediaQueryList é o 'matches', que pode valer true ou false dependendo da condição satisfeita.

            if (small.matches) {
                console.log('Tela é menor que 600px');
            } else {
                console.log('Tela é maior que 600px');
            }
    
    //exercicios
        // Verifique a distância da primeira imagem em relação ao topo da página
            const firstImg = document.querySelector('img')

            const offsetTopo = firstImg.offsetTop;
            console.log(offsetTopo);

            const firstImgDist = firstImg.getBoundingClientRect();
            console.log(firstImgDist.top);

        // Retorne a soma da largura de todas as imagens
            // codigo não funciona por si só porque o javascript carrega antes das imagens, então nada é selecionado
            
            function somaLarguraImagens() {
                const allImg = document.querySelectorAll('img');
                let soma = 0;

                allImg.forEach((img) => {
                    let imgWidth = img.offsetWidth;
                    soma += imgWidth;
                });
                
                console.log(soma);
            }

            // propriedade do objeto window a qual você pode atribuir uma função que só será executada depois da página html carregar completamente
             window.onload = function() {
                console.log('Página carregada');
                somaLarguraImagens()
             };
             

        // Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
            const aMobile = document.querySelectorAll('a');
            
            aMobile.forEach((a) => {
                let aDimentions = a.getBoundingClientRect();
                if (aDimentions.width >= 48 && aDimentions.height >= 48) {
                    console.log(`${a} possui acessibilidade`);
                } else {
                    console.log(`${a} não possui acessibilidade`);
                }
                console.log(aDimentions.height);
                console.log(aDimentions.width);
            });

        // Se o browser for menor que 720px, +adicione a classe menu-mobile ao menu
            const isMobile = window.matchMedia('(max-width: 720px)').matches

            if (isMobile) {
                const menuEl = document.querySelector('.menu');
                menuEl.classList.add('menu-mobile');
                console.log('adicionada classe menu-mobile ao menu');
            };

// Eventos
    // addEventListener: método do Element que recebe dois argumentos: um evento e uma função (callback que será executada logo após o evento ocorrer)
        const fotos = document.querySelectorAll('.animais img');

        // elemento.addEventListener(event, callback, options)
        fotos[0].addEventListener('click', function(){
            console.log('Clicou na raposa');
        });

        //ou

        fotos[1].addEventListener('click', () => {
            console.log('Clicou no esquilo');
        });

        //ou (Boa prática:)

        function callback() {
            console.log('Clicou no urso')
        };

        fotos[2].addEventListener('click', callback);
    
    // Event
        // 1° Argumento do callback, quando ocorrer o evento é retornado este objeto event dinamicamente

        function callbackClick(event) {
            console.log(event);
        };

        fotos[3].addEventListener('click', callbackClick); // retorna o objeto click (é como se o evento fosse o argumento da função que retorna este objeto)

        // Propriedades do Event
            const animaisLista = document.querySelector('.animais-lista');

            function callbackLista(event) {
                console.log(this); //(ul selecionada)
                console.log(event.currentTarget); //this (ul selecionada)
                console.log(event.target); // exatamente o elemnto clicado (uma das img)
                console.log(event.type); // string com o tipo de evento ('click')
                console.log(event.path); // ()
                console.log(this.getAttribute('class')); // retorna classes do animaisLista, posso usar todos metodos de elemento aqui também
            };

            animaisLista.addEventListener('click', callbackLista);
        
        // Metodos do Event
            const aExterno = document.querySelector('a[href^="https"');

            function callbackLinkExterno(event) {
                event.preventDefault(); // previne o padrão do clique, no caso do link externo ele não irá redirecionar

            };

            aExterno.addEventListener('click', callbackLinkExterno);
        
        // Diferentes eventos
            // podem ser relacionados a um element específico, ao document ou ao window, por exemplo.
            const h1 = document.querySelector('h1');

            function handleEvent(event) {
                console.log(event.type, event);
            };

            // h1.addEventListener('click', handleEvent);
            // h1.addEventListener('mouseenter', handleEvent); // passar o cursor
            // h1.addEventListener('mousemove', handleEvent); // a cada micro movimento do cursor no elemento
            // window.addEventListener('scroll', handleEvent); 
            // window.addEventListener('resize', handleEvent); // redimensionar a tela
            // window.addEventListener('keydown', handleEvent); // clicar numa tecla

            //cada evento tem seus métodos e propriedades

            // Manipular o keyboard (teclado)
                
                function handleKeyboard(event) {
                    console.log(event.key) // tecla clicada
                    if (event.key === 'Escape') {
                        document.body.classList.toggle('noturno');
                    }
                };

                window.addEventListener('keydown', handleKeyboard);
        
        // ForEach e eventos
            const listas = document.querySelectorAll('ul');
            
            function listasHadler(event) {
                const classes = event.currentTarget.getAttribute('class');
                console.log(classes);
            };

            listas.forEach((lista) => {
                lista.addEventListener('click', listasHadler);
            });
        
        // Exercicios
        
        // Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links
            const aInternos = document.querySelectorAll('a[href^="#"]');

            function handleLink(event) {
                aInternos.forEach((link) => {
                    link.classList.remove('ativo');
                });
                this.classList.add('ativo');
                event.preventDefault();
            };

            aInternos.forEach((link) => {
                link.addEventListener('click', handleLink)
            });


        // Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados
            const todosElementos = document.querySelectorAll('body > *');
            console.log(todosElementos);

            function mostrarElemento(event) {
                console.log(event.target);
                event.target.remove();
            };

            todosElementos.forEach((elemento) => {
                elemento.addEventListener('click', mostrarElemento)
            });


        // Utilizando o código anterior, ao invés de mostrar no console,remova o elemento que está sendo clicado, o método remove() remove um elemento
            


        // Se o usuário clicar na tecla (t), aumente todo o texto do site. 
            
            function aumentarTexto(event) {
                if(event.key === 't') {
                    document.body.classList.toggle('bodyFonteMaior')
                };
            };

            window.addEventListener('keydown', aumentarTexto);
            


        




        







