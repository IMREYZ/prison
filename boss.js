bossBtn.addEventListener('click', () => {
    if (lvl === 11){
        if (money >= 1000){
            money -= 1000
            infoMoney.innerHTML = money

            if (Math.random() >= 0.5){
                document.getElementsByClassName('error')[0].style.color = 'green'
                error.innerHTML = 'Ты прошел эту игру'
            }
            else{
                document.getElementsByClassName('error')[0].style.color = 'rgb(91, 2, 2)'
                error.innerHTML = 'Босс одолел тебя'
            }

        } else {
            document.getElementsByClassName('error')[0].style.color = 'rgb(91, 2, 2)'
            error.innerHTML = `Тебе не хватает ${1000 - money}$`
        }
    } else {
        document.getElementsByClassName('error')[0].style.color = 'rgb(91, 2, 2)'
        error.innerHTML = `Для начала апни 11 лвл`
    }
})