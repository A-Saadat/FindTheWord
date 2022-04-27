let qu = (selector) => document.querySelector([selector]);
let Interval = (selector) => {
    let t = setInterval(() => {
        i--;
        selector.innerHTML = i;
        if(i == 0){
            i = 60;
        }
    }, 1000);
}
let Interval2 = (selector) => {
    let t1 = setInterval(() => {
        j--;
        selector.innerHTML = j;

        if(j == 0){
            clearInterval(t1)
        }

    }, 1000 * 61);
}

let i = 60, j = 4;

let strat_game = qu('.start').addEventListener('click', () => {
    setTimeout(() => {
        qu('.min').innerHTML = 4;
    }, 1000);

    Interval(qu('.sec'));
    Interval2(qu('.min'))
    qu('.start').classList.add('go_out')
    qu('.timer').classList.add('go_up')
    qu('.title1').classList.add('open')
})

let strat_game2 = qu('.start2').addEventListener('click', () => {
    i = 60, j = 4;
    setTimeout(() => {
        qu('.min2').innerHTML = 4;
    }, 1000);

    Interval(qu('.sec2'));
    Interval2(qu('.min2'))
    qu('.start2').classList.add('go_out')
    qu('.timer2').classList.add('go_up')
    qu('.title2').classList.add('open')
})

let strat_game3 = qu('.start3').addEventListener('click', () => {
    i = 60, j = 4
    setTimeout(() => {
        qu('.min3').innerHTML = 4;
    }, 1000);

    Interval(qu('.sec3'));
    Interval2(qu('.min3'))
    qu('.start3').classList.add('go_out')
    qu('.timer3').classList.add('go_up2')
    qu('.title3').classList.add('open')
})  

qu('.next').addEventListener('click', () => {
    qu('.container2').classList.toggle('open');
    qu('body').classList.toggle('change_bg');
})

qu('#next2').addEventListener('click', () => {
    qu('.container3').classList.toggle('open');
    qu('body').classList.toggle('change_bg2');
})

qu('.info').addEventListener('click', () => {
    qu('.dstp').classList.add('open')

    setTimeout(() => {
        qu('.dstp').classList.remove('open')
    }, 10000)
})

