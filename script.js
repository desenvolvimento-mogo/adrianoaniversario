$(document).ready(function () {
  //setup multiple rows of colours, can also add and remove while spinning but overall this is easier.
  initWheel();

  $('button').on('click', function () {
    var outcome = parseInt($('input').val());
    spinWheel(outcome);
  });
});

function initWheel() {
  var $wheel = $('.roulette-wrapper .wheel'),
    row = "";

  row += "<div class='row'>";
  row += `  <div class='card red'>1</div>`;
  row += "  <div class='card black'>14<\/div>";
  row += "  <div class='card red'>2<\/div>";
  row += "  <div class='card black'>13<\/div>";
  row += "  <div class='card red'>3<\/div>";
  row += "  <div class='card black'>12<\/div>";
  row += "  <div class='card red'>4<\/div>";
  row += "  <div class='card green'>0<\/div>";
  row += "  <div class='card black'>11<\/div>";
  row += "  <div class='card red'>5<\/div>";
  row += "  <div class='card black'>10<\/div>";
  row += "  <div class='card red'>6<\/div>";
  row += "  <div class='card black'>9<\/div>";
  row += "  <div class='card red'>7<\/div>";
  row += "  <div class='card black'>8<\/div>";
  row += "<\/div>";

  for (var x = 0; x < 29; x++) {
    $wheel.append(row);
  }
}

function spinWheel(roll) {
  const audio = document.querySelector('#peao')
  audio.play()
  var $wheel = $('.roulette-wrapper .wheel'),
    order = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4]

  if (!roll) {
    roll = Math.floor(Math.random() * 15);
  }

  position = order.indexOf(roll);

  //determine position where to land
  var rows = 12,
    card = 75 + 3 * 2,
    landingPosition = (rows * 15 * card) + (position * card);

  var randomize = Math.floor(Math.random() * 75) - (75 / 2);

  landingPosition = landingPosition + randomize;

  var object = {
    x: Math.floor(Math.random() * 50) / 100,
    y: Math.floor(Math.random() * 20) / 100
  };

  $wheel.css({
    'transition-timing-function': 'cubic-bezier(0,' + object.x + ',' + object.y + ',1)',
    'transition-duration': '6s',
    'transform': 'translate3d(-' + landingPosition + 'px, 0px, 0px)'
  });

  setTimeout(function () {
    $wheel.css({
      'transition-timing-function': '',
      'transition-duration': '',
    });

    var resetTo = -(position * card + randomize);
    $wheel.css('transform', 'translate3d(' + resetTo + 'px, 0px, 0px)');

    const randomImg = imgs[Math.floor(Math.random() * imgs.length)];
    const img = `
 
    <img src="./${randomImg}" alt="" /></div>
    <button>Fechar</button>`;


    const wrapper = document.createElement('div')
    wrapper.style = `
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999;
    flex-direction: column;
    `

    wrapper.classList.add('wrapper')
    wrapper.innerHTML = img

    const button = wrapper.querySelector('button')
    button.addEventListener('click', () => {
      wrapper.remove()
    })

    document.body.appendChild(wrapper)

  }, 6 * 1000);
}

const imgs = [
  `que-mir??s-bobo-messi.gif`,
  `shoppe.png`,
  `classeaa.png`,
]