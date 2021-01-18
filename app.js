'use strict';


function Pics(picname, source) {
    this.picname = picname;
    this.source = source;
    this.vote = 0;
    this.show = 0;
    Pics.prototype.allpic.push(this);

}
Pics.prototype.allpic = [];
new Pics('bag', 'img/bag.jpg');
new Pics('banana', 'img/banana.jpg');
new Pics('bathroom', 'img/bathroom.jpg');
new Pics('boots', 'img/boots.jpg');
new Pics('breakfast', 'img/breakfast.jpg');
new Pics('bubblegum', 'img/bubblegum.jpg');
new Pics('chair', 'img/chair.jpg');
new Pics('cthulha', 'img/cthulha.jpg');
new Pics('dog-duck', 'img/dog-duck.jpg');
new Pics('dragon', 'img/dragon.jpg');
new Pics('pen', 'img/pen.jpg');
new Pics('pet-sweep', 'img/pet-sweep.jpg');
new Pics('scissors', 'img/scissors.jpg');
new Pics('shark', 'img/shark.jpg');
//  console.log(Pics.prototype.allpic[13]);
new Pics('sweep', 'img/sweep.png');
new Pics('tauntaun', 'img/tauntaun.jpg');
new Pics('unicorn', 'img/unicorn.jpg');
new Pics('usb', 'img/usb.gif');
new Pics('water-can', 'img/water-can.jpg');
//  console.log(Pics.prototype.allpic[19])
new Pics('wine', 'img/wine-glass.jpg');

console.log(Pics.prototype.allpic)
function randomthreepic() {
    console.log(Math.floor(Math.random() * (Pics.prototype.allpic.length)))
    return Math.floor(Math.random() * (Pics.prototype.allpic.length));
}
var leftpic = document.getElementById('leftpic');
var middlepic = document.getElementById('middlepic');
var rightpic = document.getElementById('rightpic');
var picdiv = document.getElementById('pics-div');
var showbottom = document.getElementById('ur-choice');
var maxround = document.getElementById('formlop');
var final = document.getElementById('final')

var leftpicindex;
var middlepicindex;
var rightpicindex;
var attempt = 25;
var attempttry = 0;

// for(var i=0;i<pics.prototype.allpic.length;i++){
//     console.log(pics.prototype.allpic[i]);
// }
//  console.log(pics.prototype.allpic);

function renderThreePic() {
    leftpicindex = randomthreepic();
    do {
        rightpicindex = randomthreepic();
        middlepicindex = randomthreepic();
    } while (leftpicindex === rightpicindex || leftpicindex === middlepicindex || middlepicindex === rightpicindex);
    console.log(Pics.prototype.allpic[leftpicindex].source)
    leftpic.src = Pics.prototype.allpic[leftpicindex].source;
    Pics.prototype.allpic[leftpicindex].vote++;
    Pics.prototype.allpic[leftpicindex].show++
    
    middlepic.src = Pics.prototype.allpic[middlepicindex].source;
    
    Pics.prototype.allpic[middlepicindex].vote++;
    Pics.prototype.allpic[leftpicindex].show++
    rightpic.src = Pics.prototype.allpic[rightpicindex].source;
    Pics.prototype.allpic[rightpicindex].vote++;
    Pics.prototype.allpic[leftpicindex].show++
}
renderThreePic();
picdiv.addEventListener('click', userclick);
showbottom.addEventListener('click', showresults);
maxround.addEventListener('submit', setmaxround);
final.addEventListener('click',showresults);

function userclick(event) {

    if (attempttry < attempt) {
        if (event.target.id === 'leftpic') {
            attempttry++;
            Pics.prototype.allpic[leftpicindex].numofshow++;
            renderThreePic();
        } else if (event.target.id === 'middlepic') {
            attempttry++;
            Pics.prototype.allpic[middlepicindex].numofshow++;
            renderThreePic();
        } else if (event.target.id === 'rightpic') {
            attempttry++;
            Pics.prototype.allpic[rightpicindex].numofshow++;
            renderThreePic();
        }
    } else {
        picdiv.removeEventListener('click', userclick)
        showbottom.disabbled = false;
    }
}
function showresults() {
    var list = document.getElementById('ur-choice');
    var endlist;
    for (var i = 0; i < Pics.prototype.allpic.length; i++) {
        endlist = document.createElement('li');
        endlist.textContent = Pics.prototype.allpic[i].picname + ' has been choosen  ' + Pics.prototype.allpic[i].vote + ' its been seen ' + Pics.prototype.allpic[i].show;
        list.appendChild(endlist);
    }

}
function setmaxround(event){
    event.preventDefault();
    attempt = event.target.rounds.value;
   
}
//         for(var i =0; i <pics.prototype.allpic.length; i++){
//             picresult = document.createElement('li');
//             picresult.textContent = pics.prototype.allpic[i].name + 'has '+ pics.prototype.allpic[i].numofshow + ' votes';
//         urchoice.appendChild(picresult);
//         }
//         rightpic.removeEventListener('click',handleUserClick);
//        leftpic.removeEventListener('click',handleUserClick);  
//         middlepic.removeEventListener('click',handleUserClick);
//     }
// }

// function renderThreePic(){
//     leftpic = generateRandomIndex();

//     do{
//         middlepic = generateRandomIndex();
//       rightpic = generateRandomIndex();
//     } while(leftpic === rightpic|| leftpic === middlepic || rightpic === middlepic );

//     leftpic.src = pics.prototype.allpic[leftpic].source;
//     rightpic.src = pics.prototype.allpic[rightpic].source;
//     middlepic.src = pics.prototype.allpic[middlepic].source;  
// }

//   function generateRandomIndex(){
//     return Math.floor(Math.random() * (pics.prototype.allpic.length));
//   }
// hi

