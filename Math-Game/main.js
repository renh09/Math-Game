//game load page and game music
var snd = new Audio('music/Title.mp3');
var snd1 = new Audio('music/game.mp3');
var sndGe = new Audio('music/woody.wav');
var sndRe = new Audio('music/woody.wav');
var sndCo = new Audio('music/funny.wav');
var sndNo = new Audio('music/rough.wav');
var sndOv = new Audio('music/good.wav');

function loadMusic() {
  snd.load();
  snd.play();

}

function begin() {
  $('.load-scr').css('display', 'none');
  snd.pause();
  snd1.load();
  snd1.play();
  snd1.setAttribute('loop', 'true');
}

var audioStatus = 'playing';
$('#sound').click(function() {
  if (audioStatus == 'playing') {
    snd1.pause();
    audioStatus = 'no';
    $('#soundImg').attr('src', 'speaker.png');
  } else {
    snd1.play();
    audioStatus = 'playing';
    $('#soundImg').attr('src', 'nospeaker.png');
  }
});

//questions and choices
var c1 = [
  {
    text: 'circle',
    judge: true
  }, {
    text: 'square'
  }, {
    text: 'hexagon'
  }, {
    text: 'octagon'
  }
];
var c2 = [
  {
    text: 'square'
  }, {
    text: 'pentagon',
    judge: true
  }, {
    text: 'circle'
  }, {
    text: 'decagon'
  }
];
var c3 = [
  {
    text: 'hexagon'
  }, {
    text: 'circle'
  }, {
    text: 'square',
    judge: true
  }, {
    text: 'octagon'
  }
];
var c4 = [
  {
    text: 'square',
    judge: true
  }, {
    text: 'pentagon'
  }, {
    text: 'circle'
  }, {
    text: 'triangle'
  }
];

var c5 = [
  {
    text: 'circle',
    judge: true
  }, {
    text: 'square'
  }, {
    text: 'hexagon'
  }, {
    text: 'octagon'
  }
];
var c6 = [
  {
    text: 'hexagon'
  }, {
    text: 'circle'
  }, {
    text: 'pentagon',
    judge: true
  }, {
    text: 'decagon'
  }
];
var c7 = [
  {
    text: 'hexagon',
    judge: true
  }, {
    text: 'circle'
  }, {
    text: 'square'
  }, {
    text: 'octagon'
  }
];
var c8 = [
  {
    text: 'pentagon',
    judge: true
  }, {
    text: 'square'
  }, {
    text: 'hexagon'
  }, {
    text: 'triangle'
  }
];

var c9 = [
  {
    text: 'circle',
    judge: true
  }, {
    text: 'square'
  }, {
    text: 'octagon'
  }, {
    text: 'hexagon'
  }
];
var c10 = [
  {
    text: 'triangle',
    judge: true
  }, {
    text: 'square'
  }, {
    text: 'hexagon'
  }, {
    text: 'circle'
  }
];
var c11 = [
  {
    text: 'square'
  }, {
    text: 'triangle',
    judge: true
  }, {
    text: 'circle'
  }, {
    text: 'hexagon'
  }
];
var c12 = [
  {
    text: 'hexagon'
  }, {
    text: 'circle'
  }, {
    text: 'square',
    judge: true
  }, {
    text: 'triangle'
  }
];

var c13 = [
  {
    text: 'circle'
  }, {
    text: 'square',
    judge: true
  }, {
    text: 'hexagon'
  }, {
    text: 'octagon'
  }
];
var c14 = [
  {
    text: 'square'
  }, {
    text: 'triangle',
    judge: true
  }, {
    text: 'circle'
  }, {
    text: 'decagon'
  }
];
var c15 = [
  {
    text: 'hexagon'
  }, {
    text: 'circle'
  }, {
    text: 'pentagon',
    judge: true
  }, {
    text: 'triangle'
  }
];
var c16 = [
  {
    text: 'hexagon'
  }, {
    text: 'circle'
  }, {
    text: 'pentagon',
    judge: true
  }, {
    text: 'triangle'
  }
];

var c17 = [
  {
    text: 'square',
    judge: true
  }, {
    text: 'pentagon'
  }, {
    text: 'circle'
  }, {
    text: 'decagon'
  }
];
var c18 = [
  {
    text: 'square'
  }, {
    text: 'triangle',
    judge: true
  }, {
    text: 'circle'
  }, {
    text: 'decagon'
  }
];
var c19 = [
  {
    text: 'triangle',
    judge: true
  }, {
    text: 'square'
  }, {
    text: 'hexagon'
  }, {
    text: 'circle'
  }
];
var c20 = [
  {
    text: 'triangle'
  }, {
    text: 'square',
    judge: true
  }, {
    text: 'hexagon'
  }, {
    text: 'circle'
  }
];
var figures = [
  "images/cone.png",
  "images/cone(1).png",
  'images/cube.png',
  "images/cube(1).png",
  "images/cylinder.png",
  "images/cylinder(1).png",
  "images/cylinder(2).png",
  "images/cylinder(3).png",
  "images/cylinder(4).png",
  "images/dodecahedron.png",
  "images/dodecahedron(1).png",
  "images/hexahedron.png",
  "images/hexahedron(1).png",
  "images/octahedron.png",
  "images/prism.png",
  "images/prism(1).png",
  "images/pyramid.png",
  "images/tetrahedron.png",
  "images/tetrahedron(1).png",
  "images/triangular-prism.png"
];
var correctAnswer = [
  'circle',
  'pentagon',
  'square',
  'square',
  'circle',
  'pentagon',
  'hexagon',
  'pentagon',
  'circle',
  'triangle',
  'triangle',
  'square',
  'square',
  'triangle',
  'pentagon',
  'pentagon',
  'square',
  'triangle',
  'triangle',
  'square'
];
var choices = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
  c13,
  c14,
  c15,
  c16,
  c17,
  c18,
  c19,
  c20
];

function initial() {
  $('.imageset').attr('src', figures[0]);
  $('#box1').text(choices[0][0].text);
  $('#box2').text(choices[0][1].text);
  $('#box3').text(choices[0][2].text);
  $('#box4').text(choices[0][3].text);

  $('#correct').css('display', 'none');
  $('#wrong').css('display', 'none');
  $('#game-over').css('display', 'none');
  $('#answer').css('display', 'none');
  $('#boyface').attr('src', 'write.jpg');

  //judge first question and answer
  for (var i = 1; i < 5; i++) {
    if (choices[0][i - 1].judge == true) {
      $('#box' + i).click(function() {
        $('#correct').css('display', 'block');
        $('#wrong').css('display', 'none');
        $('#answer').css('display', 'none');
        $('#boyface').attr('src', 'correct.jpg');
        sndCo.play();
        sndNo.pause();
      });
    } else {
      $('#box' + i).click(function() {
        $('#wrong').css('display', 'block');
        $('#correct').css('display', 'none');
        $('#answer-value').text(correctAnswer[0]);
        $('#answer').css('display', 'block');
        $('#boyface').attr('src', 'wrong.jpg');
        sndNo.play();
        sndCo.pause();
      });
    }
  }

}

initial();

//console.log(choices[0][0].play);
//$('#correct').css('display','block');

// for(var i = 0;i<4;i++){
//   $('#box' + i).click(function(){
//     if(i)
//     $('#box' + i).css('color','#7cd2a6');
//   })
// }

//generate
var count = 0;
$('#generate').click(function() {
  sndGe.play();
  $('#correct').css('display', 'none');
  $('#wrong').css('display', 'none');
  $('#answer').css('display', 'none');
  $('#boyface').attr('src', 'write.jpg');
  count++;
  if (count < 20) {
    console.log(count);
    $('.imageset').attr('src', figures[count]);
    $('#box1').text(choices[count][0].text);
    $('#box2').text(choices[count][1].text);
    $('#box3').text(choices[count][2].text);
    $('#box4').text(choices[count][3].text);
    $('#question-value').text(count + 1);

    //questions and answers
    for (var i = 1; i < 5; i++) {
      if (choices[count][i - 1].judge == true) {
        $('#box' + i).click(function() {
          $('#correct').css('display', 'block');
          $('#wrong').css('display', 'none');
          $('#answer').css('display', 'none');
          $('#boyface').attr('src', 'correct.jpg');
          sndCo.play();
          sndNo.pause();
        });
      } else {
        $('#box' + i).click(function() {
          $('#wrong').css('display', 'block');
          $('#correct').css('display', 'none');
          $('#answer-value').text(correctAnswer[count]);
          $('#answer').css('display', 'block');
          $('#boyface').attr('src', 'wrong.jpg');
          sndNo.play();
          sndCo.pause();

        });
      }
    }
  } else {
    $('#game-over').css('display', 'block');
    snd1.pause();
    sndOv.play();
  }
});

//judge questions
//set the correct answers

//restart
$('#start-reset').click(function() {
  sndRe.play();
  initial();
  begin();
  count = 0;
  $('#question-value').text(count + 1);
})
