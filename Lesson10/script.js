const getS = selector => document.querySelector(selector);
// start function for button 'edit' 
getS('.btn-edit').onclick = function () {
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    getS('.edit-area').value = getS('.top-block').innerHTML; //move the value in text area
}
// start function for button 'save' 
getS('.btn-save').onclick = function () {
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value; // move value in top-block
}
// start function for button 'style' 
getS('.btn-style').onclick = function () {
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');
}
// start function for fontSize 'radio' buttons
function fontSize() {
    getS('.top-block').style.fontSize = event.target.value;
}
//start function for select 'Font family'
getS('#fontFamily').onchange = function () {
    getS('.top-block').style.fontFamily = this.value;
}
// start function for button 'color of text'
getS('.btn-text-color').onclick = function () {
    getS('.colors').classList.remove('hide');
    getS('.colors').classList.remove('bk-col');
}
// start function for button 'background color' 
getS('.btn-bg-color').onclick = function () {
    getS('.colors').classList.remove('hide');
    getS('.colors').classList.add('bk-col');
}
// start function add colors for 'color of text' button and 'background color' button
let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'gray', 'black', 'white', 'deeppink'];

for (let i = 0; i < getS('.colors').children.length; i++) {
    getS('.colors').children[i].style.backgroundColor = colors[i];
    getS('.colors').children[i].onclick = function () {
        if (getS('.colors').classList.contains('bk-col')) {
            getS('.top-block').style.backgroundColor = this.style.backgroundColor;
            getS('.colors').classList.add('hide');
        } else {
            getS('.top-block').style.color = this.style.backgroundColor;
            getS('.colors').classList.add('hide');
        }
    }
}
// end function add colors
// start function in checkboxes 'Bold text','Cursive text' 
function fontWeight() {
    if (event.target.checked && event.target.className == 'bTx') {
        getS('.top-block').classList.add('bold');
    }
    if (event.target.checked && event.target.className == 'cTx') {
        getS('.top-block').classList.add('cursive');
    }
    if (event.target.checked == false && event.target.className == 'bTx') {
        getS('.top-block').classList.remove('bold');
    }
    if (event.target.checked == false && event.target.className == 'cTx') {
        getS('.top-block').classList.remove('cursive');
    }
}
// start function for button 'add' 
getS('.btn-add').onclick = function () {
    getS('.first').classList.remove('show');
    getS('.second').classList.add('show');
}
// start function for button 'Create list' 
const list = document.forms['form-list'];
getS('.btn-create-list').onclick = function () {
    const countLi = list.count.value;
    const typeLi = list.type.value;
    getS('.edit-area').value += `<ul style="list-style-type: ${typeLi}">`;
    for (let i = 0; i < countLi; i++) {
        getS('.edit-area').value += `<li>item ${i+1}</li>`;
    }
    getS('.edit-area').value += '</ul>';
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
    list.reset()
}
// end function for button 'Create list' 
// start function for radio buttons 'list', 'table' 
getS('.choose-list').onclick = function () {
    getS('.create-list').classList.remove('hide');
    getS('.create-table').classList.add('hide');
}
getS('.choose-table').onclick = function () {
    getS('.create-table').classList.remove('hide');
    getS('.create-list').classList.add('hide');
}
// start function for button 'Create table'
const table = document.forms['form-table'];
getS('.btn-create-table').onclick = function () {
    const countTr = table.countTr.value;
    const countTd = table.countTd.value;
    const widthTd = table.widthTd.value;
    const heightTd = table.heightTd.value;
    const widthBorder = table.widthBorder.value;
    const typeBorder = table.typeBorder.value;
    const colorBorder = table.colorBorder.value;
    getS('.edit-area').value += '<table>';
    for (let i = 0; i < countTr; i++) {
        getS('.edit-area').value += '<tr>';
        for (let i = 0; i < countTd; i++) {
            getS('.edit-area').value += `<td style="width:${widthTd}px; 
            height:${heightTd}px; border:${widthBorder}px ${typeBorder}
             ${colorBorder}">TD</td>`;
        }
        getS('.edit-area').value += '</tr>';
    }
    getS('.edit-area').value += '</table>';
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
    table.reset()
}