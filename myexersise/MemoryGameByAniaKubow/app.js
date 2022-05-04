document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'car1',
            img: 'style/images/car1.png'
        },
        {
            name: 'car1',
            img: 'style/images/car1.png'
        },
        {
            name: 'car2',
            img: 'style/images/car2.jpg'
        },
        {
            name: 'car2',
            img: 'style/images/car2.jpg '
        },
        {
            name: 'car3',
            img: 'style/images/car3.png'
        },
        {
            name: 'car3',
            img: 'style/images/car3.png'
        },
        {
            name: 'car4',
            img: 'style/images/car4.jpg'
        },
        {
            name: 'car4',
            img: 'style/images/car4.jpg'
        },
        {
            name: 'car5',
            img: 'style/images/car5.webp'
        },
        {
            name: 'car5',
            img: 'style/images/car5.webp'
        },
        {
            name: 'car6',
            img: 'style/images/car6.webp'
        },
        {
            name: 'car6',
            img: 'style/images/car6.webp'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', ' style/images/white4.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click',)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('you found a match')
            cards[optionOneId].setAttribute('src', 'style/images/white4.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'style/images/bl')
            cards[optionTwoId].setAttribute('src', 'style/images/blank')
            alert('try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations you found them all!'
        }
    }

    function flipCard() {
        var cardid = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardid].name)
        cardsChosenId.push(cardid)
        this.setAttribute('src', cardArray[cardid].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }

    }



    createBoard()



})