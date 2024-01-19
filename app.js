const no = document.getElementById('no')
const yes = document.getElementById('yes')
const text = document.getElementById('text')
const options = document.getElementById('options')
const textYes = document.getElementById('textYes')
const back = document.getElementById('back');

no.addEventListener('click',()=>{
    let altura = Math.floor(Math.random() * 200 + 1);
    let largura = Math.floor(Math.random() * 100 + 1);

    no.style.bottom = `${altura}px`;
    no.style.top= `${altura}px`;
    no.style.left= `${largura}px`;
    no.style.right = `${largura}px`;
})
yes.addEventListener('click',()=>{
    text.style.display = 'none';
    options.style.display = 'none'
    textYes.style.display = 'flex'
})
back.addEventListener('click',()=>{
    text.style.display = 'flex';
    options.style.display = 'flex';
    textYes.style.display = 'none'
    no.style.top ='0px'
    no.style.left = '0px'
})
