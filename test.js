var pics = [
    {
        name: 'bag',
        img: 'img/bag.jpg',
        repeat: 0,
    },
    {
        name: 'banana',
        img: 'img/banana.jpg',
        repeat: 0,
    },
    {
        name: 'bathroom',
        img: 'img/bathroom.jpg',
        repeat: 0,
    },
    {
        name: 'boots',
        img: 'img/boots.jpg',
        repeat: 0,
    },
    {
        name: 'breakfast',
        img: 'img/breakfast.jpg',
        repeat: 0,
    },
    {
        name: 'bubblegum',
        img: 'img/bubblegum.jpg',
        repeat: 0,
    },
    {
        name: 'chair',
        img: 'img/chair.jpg',
        repeat: 0,
    },
    {
        name: 'cthulhu',
        img: 'img/cthulhu.jpg',
        repeat: 0,
    },
    {
        name: 'dog-duck',
        img: 'img/dog-duck.jpg',
        repeat: 0,
    },
    {
        name: 'dragon',
        img: 'img/dragon.jpg',
        repeat: 0,
    },
    {
        name: 'pen',
        img: 'img/pen.jpg',
        repeat: 0,
    },
    {
        name: 'pet-sweep',
        img: 'img/pet-sweep.jpg',
        repeat: 0,
    },
    {
        name: 'scissors',
        img: 'img/scissors.jpg',
        repeat: 0,
    },
    {
        name: 'shark',
        img: 'img/shark.jpg',
        repeat: 0,
    },
    {
        name: 'sweep',
        img: 'img/sweep.png',
        repeat: 0,
    },
    {
        name: 'tauntaun',
        img: 'img/tauntaun.jpg',
        repeat: 0,
    },
    {
        name: 'unicorn',
        img: 'img/unicorn.jpg',
        repeat: 0,
    },
    {
        name: 'usb',
        img: 'img/usb.gif',
        repeat: 0,
    },
    {
        name: 'water can',
        img: 'img/water-can.jpg',
        repeat: 0,
    },
    {
        name: 'wine glass',
        img: 'img/wine-glass.jpg',
        repeat: 0,
    }
];
function render() {
    // Get 3 Random numbers
    var numofpic = [];
    for (var i = 0; i < 3; i++) {
        var radom = Math.floor(Math.random() * 19);
        numofpic.push(radom);
    }

    // Render HTML
    for (var i = 0; i < 3; i++) {
        var ul = document.getElementById('ur-choice');
        var li = document.createElement('li');
        var myrand = numofpic[i];
        li.innerHTML = "<button onclick=addrepeat(" + myrand + ")><img src=" + pics[myrand].img + ">" + "<h3>" + pics[myrand].name + "</h3>" + "<h3>" + pics[myrand].repeat + "</h3></button>";
        ul.appendChild(li);
    }
}
render();

function addrepeat(x) {
    pics[x].repeat++;
    document.getElementById('ur-choice').innerHTML ='';
    render();
}

// Console log
console.log(ul);
console.log(numofpic);
