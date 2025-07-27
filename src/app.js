const headerArray = document.getElementById("header-array");
const headerWords = ["teams", "culture", " experiences", " futures", " solutions", "products"]

let currentIndex = 0

function animateTextChange() {
    headerArray.classList.remove('fade-in')
    headerArray.classList.add('fade-out')

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % headerWords.length
        headerArray.textContent = headerWords[currentIndex]

        headerArray.classList.remove('fade-out')
        headerArray.classList.add('fade-in')
    }, 300)
}

setTimeout(() => {
    setInterval(animateTextChange, 3000)
}, 100)

// const intervalId = setInterval(updateHeader, 3000)