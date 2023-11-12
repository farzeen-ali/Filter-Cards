let filterButtons = document.querySelectorAll('.filter-buttons button');
let filterableCards = document.querySelectorAll('.filterable-cards .card');
console.log(filterButtons,filterableCards);

let filterCards = (e) => {
    document.querySelector('.active').classList.remove('active')
    e.target.classList.add('active');

    filterableCards.forEach(card => {
        card.classList.add('hide');
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all'){
            card.classList.remove('hide');
        }
    })
}

filterButtons.forEach(button => button.addEventListener('click', filterCards))