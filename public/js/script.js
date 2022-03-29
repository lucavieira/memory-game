let cards = document.querySelector('.cards')
let select = document.querySelector('#dificult')

select.addEventListener('change', () => {
    if(select.value == 'easy') {
        createCards(18)
    }

    if(select.value == 'medium') {
        createCards(24)
    }

    if(select.value == 'hard') {
        createCards(30)
    }
})

function createCards(quantity) {
    if(cards.hasChildNodes()) {
        if(cards.childElementCount < quantity) {
            let new_quantity = quantity - cards.childElementCount
            for(let index = 1; index <= new_quantity; index++) {
                var card = document.createElement('div')
                card.classList.add('card')
                cards.appendChild(card)
            }
        }

        if(cards.childElementCount > quantity) {
            let new_quantity = cards.childElementCount - quantity
            for(let index = 1; index <= new_quantity; index++) {
                cards.removeChild(cards.lastChild)
            }
        }
        
    } else {
        for(let index = 1; index <= quantity; index++) {
            var card = document.createElement('div')
            card.classList.add('card')
            cards.appendChild(card)
        }
    }
}