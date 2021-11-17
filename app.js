const URL = 'https://rickandmortyapi.com/api/character/';
const img_info = document.getElementById('img');
const name_info = document.getElementById('name');
const oneCharater = document.getElementById('one');
const allCharater = document.getElementById('all');
const select_charater = document.getElementById('select');
const allCard = document.getElementById('allCards');
const characterTitle = document.getElementById('character');

select_charater.addEventListener('change',getcard)

function getinfo() {
    fetch(URL)
    .then(response => response.json())
    .then(data =>{
        data.results.map(element => {
            const options = document.createElement('option')
            options.setAttribute('id', element.id)
            options.setAttribute('value',element.name)
            options.textContent = element.name;
            select_charater.appendChild(options)
            
        });
    })
    .catch(error => console.error(error));
}
getinfo();

function getcard() {
    fetch(URL)
    .then(response => response.json())
    .then(data =>{
        data.results.map(element => {
            if(select_charater.value == element.name){
                allCard.innerHTML = '';
                characterTitle.textContent='Rick and Morty Character';
                const card = document.createElement('div')
                const cardName = document.createElement('div')
                card.classList.add('cards');
                cardName.classList.add('cardname');
                const card_img = document.createElement('img')
                const card_name = document.createElement('h2')
                card_img.setAttribute('src', element.image)
                card_name.textContent = element.name;
                card.appendChild(card_img);
                card.appendChild(cardName);
                cardName.appendChild(card_name);
                allCard.appendChild(card);
            }
            if(select_charater.value == oneCharater.value){
                allCard.innerHTML = '';
            }
            if (select_charater.value == allCharater.value) {
                allCard.innerHTML = '';
                data.results.map(element =>{ 
                    characterTitle.textContent='Rick and Morty Characters';
                    const card = document.createElement('div')
                    const cardName = document.createElement('div')
                    card.classList.add('cards');
                    cardName.classList.add('cardname');
                    const card_img = document.createElement('img')
                    const card_name = document.createElement('h2')
                    card_img.setAttribute('src', element.image)
                    card_name.textContent = element.name;
                    card.appendChild(card_img);
                    card.appendChild(cardName);
                    cardName.appendChild(card_name);
                    allCard.appendChild(card);
                })
            }
        });
    })
    .catch(error => console.error(error));
}