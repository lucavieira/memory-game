const cards = document.querySelector('.cards')
const window_finished = $('.finished')
const body = $('main')

let score = 0
const clicks = []
const images_easy = [
    'public/images/cards/easy/broom.png', 
    'public/images/cards/easy/ghost.png', 
    'public/images/cards/easy/mummy.png',
    'public/images/cards/easy/pumpkin.png',
    'public/images/cards/easy/skull.png',
    'public/images/cards/easy/candy.png',
    'public/images/cards/easy/web.png',
    'public/images/cards/easy/witchs_hat.png',
    'public/images/cards/easy/potion.png',
]

const images_medium = [
    'public/images/cards/medium/black_cat.png',
    'public/images/cards/medium/broom.png',
    'public/images/cards/medium/cemetery.png',
    'public/images/cards/medium/eye.png',
    'public/images/cards/medium/insect.png',
    'public/images/cards/medium/knife.png',
    'public/images/cards/medium/owl.png',
    'public/images/cards/medium/phantom.png',
    'public/images/cards/medium/poison.png',
    'public/images/cards/medium/red_skull.png',
    'public/images/cards/medium/skeleton.png',
    'public/images/cards/medium/vampire.png'
]
const images_hard = [
    'public/images/cards/hard/bat.png',
    'public/images/cards/hard/candy.png',
    'public/images/cards/hard/frankenstein.png',
    'public/images/cards/hard/freddy_krueger.png',
    'public/images/cards/hard/pennywise.png',
    'public/images/cards/hard/poison.png',
    'public/images/cards/hard/ghost.png',
    'public/images/cards/hard/grave.png',
    'public/images/cards/hard/scary_hand.png',
    'public/images/cards/hard/scary_tree.png',
    'public/images/cards/hard/demon.png',
    'public/images/cards/hard/spider.png',
    'public/images/cards/hard/zombie.png',
    'public/images/cards/hard/murder.png',
    'public/images/cards/hard/jason.png'
]

const cards_images = {
    easy: [...images_easy, ...images_easy],

    medium: [...images_medium, ...images_medium],

    hard: [...images_hard, ...images_hard]
}

// Identifica a dificuldade que foi selecionada
$('#dificult').on('change', () => {
    score = 0
    const dificult = $('#dificult')[0].value
    shuffleArray(cards_images[dificult])
    if(dificult == 'easy') {
        createCards(18, dificult)
    }

    if(dificult == 'medium') {
        createCards(24, dificult)
    }

    if(dificult == 'hard') {
        createCards(30, dificult)
    }
})

// Função que cria os cards
function createCards(quantity, dificult) {
    if(cards.hasChildNodes()) {
        const cards_length = cards.childNodes.length
        for(let index = 0; index < cards_length; index++) {
            $(`#${index}`).remove(`#${index}`)
        }

        setTimeout(() => {
            for(let index = 0; index < quantity; index++) {
                $('.cards').append(`<div class="card" id="${index}" onClick=showCard(this.id)> <img src="${cards_images[dificult][index]}" /> </div>`)
                $('.card').css('background-image', "url(public/images/cards/card.png)")
            }
        }, 200)
        
    } else {
        for(let index = 0; index < quantity; index++) {
            $('.cards').append(`<div class="card" id="${index}" onClick=showCard(this.id)> <img src="${cards_images[dificult][index]}" /> </div>`)
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

// Função de finalização do game
function finishGame() {
    window_finished.css('display', 'flex')
    body.css('opacity', '0.2')
}

// Função para mostrar os cards
function showCard(id) {
    if(clicks.length < 2) {
        $(`#${id}`).css('background-image', 'url()')
        $(`#${id} img`).css('display', 'flex')
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
                const finish_easy = $('#dificult')[0].value == 'easy' && score == 9
                const finish_medium = $('#dificult')[0].value == 'medium' && score == 12
                const finish_hard = $('#dificult')[0].value == 'hard' && score == 15
                if(finish_easy || finish_medium || finish_hard) {
                    finishGame()
                }
                removeClicks(clicks)
            }
        } else {
            hideCard(clicks)
            removeClicks(clicks)
        }
    }

}