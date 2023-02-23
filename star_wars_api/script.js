const section = document.querySelector("#zabraks");
let zabraks, i;

const getStarWars = async (source) => {
    const result = await fetch(source);
    const data = await result.json();

    return data;
};

getStarWars(`https://swapi.dev/api/people/`).then(people => {
    let nPeople = people.count;

    while (i < nPeople) {
        getStarWars(`https://swapi.dev/api/people/${i}`).then(person => {
            console.log(person);
        });
        i++;
    }
});



  

