submitName.addEventListener('click', () => {
    inputName.value.replaceAll(' ', '') != '' ? infoNick.innerHTML = inputName.value : error.innerHTML = 'Введи ник нормально!'
    inputName.value = ''
})

inputName.addEventListener('click', () => {
    error.innerHTML = ''
})

let money = Number(infoMoney.innerHTML)
let blocks = Number(infoBlocksMined.innerHTML)
let lvl = Number(infoLvl.innerHTML)

lvlUp.addEventListener('click', () => {
    if (lvl <= 10){
        money = rounded(money)
        blocks = rounded(blocks)
        if (blocks >= uslMine[lvl][0] && money >= uslMine[lvl][1]){
            money -= rounded(uslMine[lvl][1])
            money = rounded(money)
            infoMoney.innerHTML = money
            lvl ++
            infoLvl.innerHTML = lvl
            if (lvl <= 10){
                document.getElementsByClassName(`lvl${lvl}`)[0].style.color = 'green'
                lvlText.innerHTML = `Нужно: ${uslMine[lvl][0]} блоков и ${uslMine[lvl][1]}$`}
            document.getElementsByClassName('error')[0].style.color = 'green'
            console.log(lvl)
            error.innerHTML = `Ты апнул ${lvl} лвл`
        } else {
            document.getElementsByClassName('error')[0].style.color = 'rgb(91, 2, 2)'
            error.innerHTML = `Посмотри условия апгрейда` 
        }
    }
})




