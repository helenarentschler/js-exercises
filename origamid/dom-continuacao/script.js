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


        







