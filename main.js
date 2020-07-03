const bodyElement = document.querySelector('body')
const mainElement = document.createElement('main')
bodyElement.append(mainElement)
const main = document.querySelector('main')

let coin = {
    state: 0,
    flip: function () {
        this.state = Math.floor(Math.random() * 2)
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function () {
        if (this.state === 0) {
            return 'Heads'
        }
        if (this.state === 1) {
            return 'Tails'
        }

        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function () {
        let image = document.createElement('img');
        if (this.state === 0) {
            image.src = "/images/Heads.png"
            image.alt = "It's Heads"
        }
        if (this.state === 1) {
            image.src = "/images/Tails.png"
            image.alt = "It's Tails"
        }

        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};

console.log(coin.toHTML())
function display20Flips() {
    for (let flips = 0; flips < 20; flips += 1) {
        coin.flip()
        main.innerHTML += (coin.toString() + " ")
    }
}
function display20Images() {
    for (let flips = 0; flips < 20; flips += 1) {
        coin.flip()
        main.append(coin.toHTML())
    }
}