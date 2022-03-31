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

            console.log(paragrafos[-1]);


