const list = document.querySelector('ul');
const beforeWho = document.querySelector('.introduction')

const heading_title = document.querySelector('header');
const buttonDetector = document.querySelector('i');
buttonDetector.addEventListener('click', () => {
    list.style.flexDirection = 'column'
    document.body.insertBefore(list, beforeWho)
})