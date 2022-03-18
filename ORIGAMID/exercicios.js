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

    var nome = 'Helena';
    var idade = 19;
    var comida;
    comida = frango;
    v


