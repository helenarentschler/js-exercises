//DOM
    //window.alert('Olá!')
    //alert('Tudo bem?'); // funciona, pois objeto window é global
    // window e doument: objetos pais do DOM
        
        const href = window.location.href;
        console.log(href);

        const h1Selecionado = document.querySelector('h1');
        console.log(h1Selecionado);

    //toda tag html herda propriedades de um objeto Element
        console.log(h1Selecionado.classList); // retorna uma array-like
        console.log(h1Selecionado.classList[0]);

        const h1Classes = h1Selecionado.classList;

        h1Selecionado.addEventListener('click', function() {
            console.log('Clicou em ', h1Selecionado.innerText);
        });
    
    // Exercicios
        // Retorne o url da página atual utilizando o objeto window
            const url = window.location.href;
            console.log(href);

        // Seleciona o primeiro elemento da página que possua a classe ativo
            const elAtivo = document.querySelector('.ativo'); //seleciona apenas o primeiro elemento ativo
            console.log(elAtivo);

            const ativos = document.querySelectorAll('.ativo'); //retona arraylike
            console.log(ativos);

        // Retorne a linguagem do navegador
            const linguagem = navigator.language;
            console.log(linguagem);

        // Retorne a largura da janela 
            const larguraJanela = window.innerWidth;
            console.log(larguraJanela);
    
    
        
