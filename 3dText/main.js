let btn = document.querySelector('.btn')
let btn1 = document.querySelector('.btn1')
let input = document.querySelector('.input')
let text = document.querySelector('.text')
let ism = document.querySelector('.ism')
let malumot = document.querySelector('.matn')
let savat = [
    'Bekzodbek',
    "",
    " "
]

btn.addEventListener('click', function () {
    text.textContent = input.value
    if (text.textContent == savat[0]) {
        ism.textContent = "Beklar Avlodiga mansub bola"
    } else if (text.textContent == savat[1]) {
        text.textContent = "Xato"
        text.style.color = "red"
        text.style.marginLeft = "200px"
    } else if (text.textContent == savat[2]) {
        text.textContent = "Xato"
        text.style.color = "red"
        text.style.marginLeft = "200px"
    }
    else {
        text.style.marginLeft = "0px"
        text.style.color = "#3d3d3d"
        ism.textContent = "Ismingizni to`g`ri yozilganini tekshiring yoki ismingizni ma'nosi topilmadi "
    }
})

btn1.addEventListener('click', function () {
    if (text.textContent == savat[0]) {
        malumot.textContent = "Tabriklaymiz Sizning ismingzini ma`noisi bizning xotirada bor Uni o`ish uchun  pastga tushing"
    } else {
        malumot.textContent = "Sizning ismingizni ma'nosi topilmadi"
    }
})