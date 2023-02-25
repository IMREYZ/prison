document.addEventListener('click', (event) => {

    type = event.target.tagName
    let CurMine1 = event.srcElement.className.replace('N', '')
    if (type === 'BUTTON' && (CurMine1 === '1' || CurMine1 === '2' || CurMine1 === '3')){
        CurMine1 = Number(CurMine1)
        if (item[CurMine1] <= 3){
            if (money >= price[CurMine1][item[CurMine1] + 1]){
                error.innerHTML = ''
                document.getElementsByClassName('error')[0].style.color = 'rgb(91, 2, 2)'

                money -= price[CurMine1][item[CurMine1] + 1]
                money = rounded(money)

                infoMoney.innerHTML = money
                if (CurMine1 == 1){
                    item[1] ++
                    img1.innerHTML = `
                    <img src="1.${item[1]}.png">`
                    
                    btn1.textContent = nameItem[1][item[1] + 1]
                    pr1.innerHTML = `${price[1][item[1] + 1]}$`
                    document.getElementsByClassName('error')[0].style.color = 'green'
                    error.innerHTML = `у тебя теперь ${nameItem[1][item[1]]}`

                    lvl2.textContent = `Землянка (лопата) [${rounded(MinePlus[2][0] * (1 + (item[1]-1)/4))}б., ${rounded(MinePlus[2][1] * (1 + (item[1]-1)/4))}$]`
                    lvl9.textContent = `Песок (лопата) [${rounded(MinePlus[9][0] * (1 + (item[1]-1)/4))}б., ${rounded(MinePlus[9][1] * (1 + (item[1]-1)/4))}$]`
                }
                if (CurMine1 == 2){
                    item[2] ++
                    img2.innerHTML = `
                    <img src="2.${item[2]}.png">`
                    
                    btn2.textContent = nameItem[2][item[2] + 1]
                    pr2.innerHTML = `${price[2][item[2] + 1]}$`
                    document.getElementsByClassName('error')[0].style.color = 'green'
                    error.innerHTML = `у тебя теперь ${nameItem[2][item[2]]}`

                    lvl3.textContent = `Каменная (кирка) [${rounded(MinePlus[3][0] * (1 + (item[2]-1)/4))}б., ${rounded(MinePlus[3][1] * (1 + (item[2]-1)/4))}$]`
                    lvl4.textContent = `Бурмалда (кирка) [${rounded(MinePlus[4][0] * (1 + (item[2]-1)/4))}б., ${rounded(MinePlus[4][1] * (1 + (item[2]-1)/4))}$]`
                    lvl6.textContent = `Кварц (кирка) [${rounded(MinePlus[6][0] * (1 + (item[2]-1)/4))}б., ${rounded(MinePlus[6][1] * (1 + (item[2]-1)/4))}$]`
                    lvl7.textContent = `Лёд (кирка) [${rounded(MinePlus[7][0] * (1 + (item[2]-1)/4))}б., ${rounded(MinePlus[7][1] * (1 + (item[2]-1)/4))}$]`
                    lvl8.textContent = `Изумруды (кирка) [${rounded(MinePlus[8][0] * (1 + (item[2]-1)/4))}б., ${rounded(MinePlus[8][1] * (1 + (item[2]-1)/4))}$]`
                    lvl10.textContent = `Кирпич (кирка) [${rounded(MinePlus[10][0] * (1 + (item[2]-1)/4))}б., ${rounded(MinePlus[10][1] * (1 + (item[2]-1)/4))}$]`

                }
                if (CurMine1 == 3){
                    item[3] ++
                    img3.innerHTML = `
                    <img src="3.${item[3]}.png">`
                    
                    btn3.textContent = nameItem[3][item[3] + 1]
                    pr3.innerHTML = `${price[3][item[3] + 1]}$`
                    document.getElementsByClassName('error')[0].style.color = 'green'
                    error.innerHTML = `у тебя теперь ${nameItem[3][item[3]]}`

                    lvl1.textContent = `Арбузы (топор) [${rounded(MinePlus[1][0] * (1 + (item[3]-1)/4))}б., ${rounded(MinePlus[1][1] * (1 + (item[3]-1)/4))}$]`
                    lvl5.textContent = `Дерево (топор) [${rounded(MinePlus[5][0] * (1 + (item[3]-1)/4))}б., ${rounded(MinePlus[5][1] * (1 + (item[3]-1)/4))}$]`
                }
        } else {
            document.getElementsByClassName('error')[0].style.color = 'rgb(91, 2, 2)'
            error.innerHTML = `До апа не хватает ${rounded(price[CurMine1][item[CurMine1] + 1] - money)}` 
            }
        }
    }
})