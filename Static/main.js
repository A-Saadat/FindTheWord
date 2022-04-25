let strat_btn = document.querySelector('#start');
let seconds = document.querySelector('.sec');
let minutes = document.querySelector('.min');
let i = 0, j = 0;

function Interval(index, value, num, limit){
    setInterval(() => {
        index++;
        value.innerHTML = index;

        if(index > limit){
            index = -1;
        }

    }, num);
}

let strat_game = strat_btn.addEventListener('click', () => {
    Interval(i, seconds, 1000, 10)
    Interval(j, minutes, (1000 * 59), 4)

    
})  




