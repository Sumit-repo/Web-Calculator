function display(e) {
    let value = (document.getElementById(e).innerHTML);

    document.getElementById('text1').value += (value);
    console.log(value);
}
function Del() {
    document.getElementById('text1').value = "";
    document.getElementById('text2').value = "-";
}
function back() {
    let i = document.getElementById('text1').value;
    document.getElementById('text1').value = i.toString().slice(0, -1)
    document.getElementById('text2').value = "-"
}
function percent() {
    let i = Number(document.getElementById('text1').value);
    i = (i / 100);
    console.log(i);
    document.getElementById('text2').value = i;
}

function equal() {
    let i = eval(document.getElementById('text1').value);
    document.getElementById('text2').value = i;
}
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
       equal()
    }
})
document.addEventListener('keydown', (event) => {
    if (event.key === '187') {
       display('add')
    }
})