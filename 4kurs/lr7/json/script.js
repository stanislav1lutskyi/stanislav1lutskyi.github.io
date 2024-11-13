const header = document.querySelector('header');
const section = document.querySelector('section');
const requestURL = 'https://semegenkep.github.io/json/example.json';
const request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  const superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};

// Функція для заповнення заголовка
function populateHeader(superHeroes) {
  const myH1 = document.createElement('h1');
  myH1.textContent = superHeroes['squadName'];
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = `Hometown: ${superHeroes['homeTown']} // Formed: ${superHeroes['formed']}`;
  header.appendChild(myPara);
}

// Функція для відображення інформації про героїв
function showHeroes(superHeroes) {
  const heroes = superHeroes['members'];

  heroes.forEach(hero => {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = 'Superpowers:';

    hero.powers.forEach(power => {
      const listItem = document.createElement('li');
      listItem.textContent = power;
      myList.appendChild(listItem);
    });

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  });
}
