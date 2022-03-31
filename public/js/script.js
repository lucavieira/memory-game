let cards = document.querySelector('.cards')
let select = document.querySelector('#dificult')

let cards_images = [
    'public/images/cards/book_angle.png', 
    'public/images/cards/coffin.png', 
    'public/images/cards/eye_angle.png',
    'public/images/cards/pumpkin.png',
    'public/images/cards/scarecrow.png',
    'public/images/cards/voodoo_doll.png',
    'public/images/cards/witch.png',
    'public/images/cards/witchs_hat.png',
    'public/images/cards/zombie.png',
    'public/images/cards/book_angle.png', 
    'public/images/cards/coffin.png', 
    'public/images/cards/eye_angle.png',
    'public/images/cards/pumpkin.png',
    'public/images/cards/scarecrow.png',
    'public/images/cards/voodoo_doll.png',
    'public/images/cards/witch.png',
    'public/images/cards/witchs_hat.png',
    'public/images/cards/zombie.png'
]

select.addEventListener('change', () => {
    if(select.value == 'easy') {
        shuffleArray(cards_images)
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
            for(let index = 0; index < new_quantity; index++) {
                var card = document.createElement('div')
                card.classList.add('card')
                card.id = index
                cards.appendChild(card)
            }
        }

        if(cards.childElementCount > quantity) {
            let new_quantity = cards.childElementCount - quantity
            for(let index = 0; index < new_quantity; index++) {
                cards.removeChild(cards.lastChild)
            }
        }
        
    } else {
        for(let index = 0; index < quantity; index++) {
            $('.cards').append(`<div class="card" id="${index}" onClick=showCard(this.id)> <img src="${cards_images[index]}" /> </div>`)
            // var card = document.createElement('div')
            // var image = document.createElement('img')
            // card.classList.add('card')
            // card.id = index
            $('.card').css('background-image', "url(public/images/cards/card.png)")
            // card.style.backgroundImage = "url('public/images/cards/card.png')"
            // image.src = cards_images[index]
            // card.addEventListener('click', () => showCard(id))
            // card.appendChild(image)
            // cards.appendChild(card)
        }
    }
}

function shuffleArray(cards_array){
    cards_array.sort(()=> Math.random() - 0.5);
}

let clicks = []
function showCard(id) {
    if(clicks.length < 2) {
        $(`#${id}`).css('background-image', 'url()')
        $(`#${id} img`).css('display', 'block')
        clicks.push(id)
    }

    if(clicks.length == 2) {
        if(($(`#${clicks[0]} img`)[0].src == $(`#${clicks[1]} img`)[0].src) == false) {
            setTimeout(() => {
                $(`#${clicks[0]}`).css('background-image', 'url(public/images/cards/card.png)')
                $(`#${clicks[0]} img`).css('display', 'none')
                $(`#${clicks[1]}`).css('background-image', 'url(public/images/cards/card.png)')
                $(`#${clicks[1]} img`).css('display', 'none')
                clicks.pop()
                clicks.pop()
            }, 1000)
        } else {
            clicks.pop()
            clicks.pop()
        }
    }

}