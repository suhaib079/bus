'use strict';
var leftpic = document.getElementById('left-pic');
var middlepic = document.getElementById('middle-pic');
var rightpic = document.getElementById('right-pic');
var attempt = 25;
var attempttry = 0;
 var leftpicindex;
 var middlepicindex;
 var rightpicindex;
 function pics(picname,source){
     this. picname = picname ;
     this. source = source ;
     this. numofshow = 0 ;
     pics.prototype.allpic.push(this);
    
 }
 pics.prototype.allpic = [];
 new pics('bag','img/bag.jpg');
 new pics('banana','img/banana.jpg');
 new pics('bathroom','img/bathroom.jpg');
 new pics('boots','img/boots.jpg');
 new pics('breakfast','img/breakfast.jpg');
 new pics('bubblegum','img/bubblegum.jpg');
 new pics('chair','img/chair.jpg');
 new pics('cthulha','img/cthulha.jpg');
 new pics('dog-duck','img/dog-duck.jpg');
 new pics('dragon','img/dragon.jpg');
 new pics('pen','img/pen.jpg');
 new pics('pet-sweep','img/pet-sweep.jpg');
 new pics('scissors','img/scissors.jpg');
 new pics('shark','img/shark.jpg');
 console.log(pics.prototype.allpic[13]);
 new pics('sweep','img/sweep.png');
 new pics('tauntaun','img/tauntaun.jpg');
 new pics('unicorn','img/unicorn.jpg');
 new pics('usb','img/usb.gif');
 new pics('water-can','img/water-can.jpg');
 console.log(pics.prototype.allpic[19])
 new pics('wine','img/wine-glass.jpg');
for(var i=0;i<pics.prototype.allpic.length;i++){
    console.log(pics.prototype.allpic[i]);
}
 console.log(pics.prototype.allpic);

 renderThreePic();
 leftpic.addEventListener('click',handleUserClick);
middlepic.addEventListener('click',handleUserClick);
rightpic.addEventListener('click',handleUserClick);

function userclick(event){
    attempttry++;
    if(attempttry <= attempt){
        if(event.target.id === 'left-pic'|| 'middle-pic' || 'right-pic'){
            pics.prototype.allpic[leftpicindex].numofshow++;
        }else {
            pics .prototype.allpic[middlepicindex].numofshow++;
            pics .prototype.allpic[rightpicindex].numofshow++;
        }
        renderThreePic();
    }else {
        var urchoice = document.getElementById('ur-choice');
        var picresult;
        for(var i =0; i <pics.prototype.allpic.length; i++){
            picresult = document.createElement('li');
            picresult.textContent = pics.prototype.allpic[i].name + 'has '+ pics.prototype.allpic[i].numofshow + ' votes';
        urchoice.appendChild(picresult);
        }
        rightpic.removeEventListener('click',handleUserClick);
       leftpic.removeEventListener('click',handleUserClick);  
        middlepic.removeEventListener('click',handleUserClick);
    }
}

function renderThreePic(){
    leftpic = generateRandomIndex();
  
    do{
        middlepic = generateRandomIndex();
      rightpic = generateRandomIndex();
    } while(leftpic === rightpic|| leftpic === middlepic || rightpic === middlepic );
  
    leftpic.src = pics.prototype.allpic[leftpic].source;
    rightpic.src = pics.prototype.allpic[rightpic].source;
    middlepic.src = pics.prototype.allpic[middlepic].source;  
}
  
  function generateRandomIndex(){
    return Math.floor(Math.random() * (pics.prototype.allpic.length));
  }


