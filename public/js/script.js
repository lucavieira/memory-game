let cards = document.querySelector('.cards')

let score = 0
let clicks = []
let cards_images_easy = [
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
    'public/images/cards/zombie.png',
]

$('#dificult').on('change', () => {
    score = 0
    let dificult = $('#dificult')[0].value
    if(dificult == 'easy') {
        shuffleArray(cards_images_easy)
        createCards(18, dificult)
    }

    if(dificult == 'medium') {
        createCards(24, dificult)
    }

    if(dificult == 'hard') {
        createCards(30, dificult)
    }
})

function createCards(quantity, dificult) {
    if(cards.hasChildNodes()) {
        let cards_length = cards.childNodes.length
        for(let index = 0; index < cards_length; index++) {
            $(`#${index}`).remove(`#${index}`)
        }

        setTimeout(() => {
            for(let index = 0; index < quantity; index++) {
                if(dificult == 'easy') {
                    $('.cards').append(`<div class="card" id="${index}" onClick=showCard(this.id)> <img src="${cards_images_easy[index]}" /> </div>`)
                }

                // if(dificult == 'medium') {
                //     $('.cards').append(`<div class="card" id="${index}" onClick=showCard(this.id)> <img src="${cards_images_medium[index]}" /> </div>`)
                // }

                // if(dificult == 'hard') {
                //     $('.cards').append(`<div class="card" id="${index}" onClick=showCard(this.id)> <img src="${cards_images_hard[index]}" /> </div>`)
                // }

                $('.card').css('background-image', "url(public/images/cards/card.png)")
            }
        }, 200)
        
    } else {
        for(let index = 0; index < quantity; index++) {
            $('.cards').append(`<div class="card" id="${index}" onClick=showCard(this.id)> <img src="${cards_images_easy[index]}" /> </div>`)
            $('.card').css('background-image', "url(public/images/cards/card.png)")
        }
    }
}

// Embaralha o array de imagens
function shuffleArray(cards_array){
    cards_array.sort(()=> Math.random() - 0.5);
}

// Função para esconder o card
function hideCard(clicks) {
    clicks.forEach(id => {
        $(`#${id}`).css('background-image', 'url(public/images/cards/card.png)')
        $(`#${id} img`).css('display', 'none') 
    });
}

// Limpa o array de clicks
function removeClicks(clicks) {
    clicks.pop()
    clicks.pop()
}

function showCard(id) {
    if(clicks.length < 2) {
        $(`#${id}`).css('background-image', 'url()')
        $(`#${id} img`).css('display', 'block')
        clicks.push(id)
    }

    if(clicks.length == 2) {
        if(clicks[0] != clicks[1]) {
            if(($(`#${clicks[0]} img`)[0].src == $(`#${clicks[1]} img`)[0].src) == false) {
                setTimeout(() => {
                    hideCard(clicks)
                    removeClicks(clicks)
                }, 1000)
            } else {
                score += 1
                console.log(score)
                if($('#dificult')[0].value == 'easy' && score == 9) {
                    console.log('FINISHED')
                }
                removeClicks(clicks)
            }
        } else {
            hideCard(clicks)
            removeClicks(clicks)
        }
    }

}