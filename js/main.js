let btns = document.querySelectorAll('button')

btns.forEach(e => {
    e.addEventListener('click', () => {
        getJoke(e.innerText)
    })
})
function getJoke(input) {
    document.querySelector('.quotes').classList.add('hidden')
    let url
    if (input === 'Random') url = `https://api.chucknorris.io/jokes/random`
    else  url = `https://api.chucknorris.io/jokes/random?category=${input.toLowerCase()}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        document.querySelector('.quotes').classList.toggle('hidden')
        document.querySelector('.quotes').innerText = data.value
    })

}