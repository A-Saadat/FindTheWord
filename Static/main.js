let strat_btn = document.querySelector('.start');
let seconds = document.querySelector('.sec');
let minutes = document.querySelector('.min');
let next = document.querySelector('#next');
let pre = document.querySelector('#pre2');
let cont2 = document.querySelector('.container2');
let body = document.querySelector('body')

let i = 0, j = 0;

function Interval(index, value, num, limit){
    let t = setInterval(() => {
        index++;
        value.innerHTML = index;

        if(index >= limit){
            index = -1;
        }

        if(j >= 4){
            clearInterval(t);
        }

    }, num);
}

let strat_game = strat_btn.addEventListener('click', () => {
    Interval(i, seconds, 1000, 59)
    Interval(j, minutes, (1000 * 61), 4)
})  

next.addEventListener('click', () => {
    cont2.classList.toggle('open');
    body.classList.toggle('change_bg')
})

pre.addEventListener('click', () => {
    cont2.classList.remove('open');
    cont2.classList.add('close');
    body.classList.remove('change_bg')
    body.classList.add('pre_bg')
})


