document.addEventListener('click', (event) => {
    let CurMine = event.srcElement.className.replace('lvl', '')
    if (event.target.tagName === 'BUTTON' && 1 <= Number(CurMine) <= 10 && Number(CurMine) <= lvl){
        CurMine = Number(CurMine)
        error.innerHTML = ''

        if (CurMine === 1 || CurMine === 5){
            money += MinePlus[CurMine][1] * (1 + (item[3]-1)/4) 
            blocks += MinePlus[CurMine][0] * (1 + (item[3]-1)/4)
        }
        if ((CurMine === 2 || CurMine === 9) ){
            if (item[1] != 0){
            money += MinePlus[CurMine][1] * (1 + (item[1]-1)/4) 
            blocks += MinePlus[CurMine][0] * (1 + (item[1]-1)/4)
            } else {
                document.getElementsByClassName('error')[0].style.color = 'rgb(91, 2, 2)'
                error.innerHTML = 'Для данной шахты купи лопату'
            }
        }

        if ((CurMine === 3 || CurMine === 4 || CurMine === 6 || CurMine === 7 || CurMine === 8 || CurMine === 10) ){
            if (item[2] != 0){
            money += MinePlus[CurMine][1] * (1 + (item[2]-1)/4) 
            blocks += MinePlus[CurMine][0] * (1 + (item[2]-1)/4)
            } else {
                document.getElementsByClassName('error')[0].style.color = 'rgb(91, 2, 2)'
                error.innerHTML = 'Для данной шахты купи кирку'
            }
        }

        lvl1.textContent = `Арбузы (топор) [${rounded(MinePlus[1][0] * (1 + (item[3]-1)/4))}б., ${rounded(MinePlus[1][1] * (1 + (item[3]-1)/4))}$]`
        lvl5.textContent = `Дерево (топор) [${rounded(MinePlus[5][0] * (1 + (item[3]-1)/4))}б., ${rounded(MinePlus[5][1] * (1 + (item[3]-1)/4))}$]`
        if (item[1] != 0){
        lvl2.textContent = `Землянка (лопата) [${rounded(MinePlus[2][0] * (1 + (item[1]-1)/4))}б., ${rounded(MinePlus[2][1] * (1 + (item[1]-1)/4))}$]`
        lvl9.textContent = `Песок (лопата) [${rounded(MinePlus[9][0] * (1 + (item[1]-1)/4))}б., ${rounded(MinePlus[9][1] * (1 + (item[1]-1)/4))}$]`
        }
        if (item[2] != 0){
        lvl3.textContent = `Каменная (кирка) [${rounded(MinePlus[3][0] * (1 + (item[2]-1)/4))}б., ${rounded(MinePlus[3][1] * (1 + (item[2]-1)/4))}$]`
        lvl4.textContent = `Бурмалда (кирка) [${rounded(MinePlus[4][0] * (1 + (item[2]-1)/4))}б., ${rounded(MinePlus[4][1] * (1 + (item[2]-1)/4))}$]`
        lvl6.textContent = `Кварц (кирка) [${rounded(MinePlus[6][0] * (1 + (item[2]-1)/4))}б., ${rounded(MinePlus[6][1] * (1 + (item[2]-1)/4))}$]`
        lvl7.textContent = `Лёд (кирка) [${rounded(MinePlus[7][0] * (1 + (item[2]-1)/4))}б., ${rounded(MinePlus[7][1] * (1 + (item[2]-1)/4))}$]`
        lvl8.textContent = `Изумруды (кирка) [${rounded(MinePlus[8][0] * (1 + (item[2]-1)/4))}б., ${rounded(MinePlus[8][1] * (1 + (item[2]-1)/4))}$]`
        lvl10.textContent = `Кирпич (кирка) [${rounded(MinePlus[10][0] * (1 + (item[2]-1)/4))}б., ${rounded(MinePlus[10][1] * (1 + (item[2]-1)/4))}$]`
        }

        money = rounded(money)
        blocks = rounded(blocks)
        infoMoney.innerHTML = money 
        infoBlocksMined.innerHTML = blocks

    }
    if (event.target.tagName === 'BUTTON' && 1 <= Number(CurMine) <= 10 && CurMine > lvl){
        document.getElementsByClassName('error')[0].style.color = 'rgb(91, 2, 2)'

    
        error.innerHTML = `Для данной шахты нужен ${CurMine} LvL`
    }
})
