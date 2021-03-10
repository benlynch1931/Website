let scheme = [
  { source: "hero_photo1.jpeg", photoBackground: '#8717A3', aboutBackground: '#75DDFF', projectsBackground: '#CC4AFF', displayProjectsBackground: '#152947', hobbiesBackground: '#5817E6', attribute: 'width', value: '100vw' },
  { source: "hero_photo2.jpeg", photoBackground: '#EDFCFC', aboutBackground: '#C9FEFF', projectsBackground: '#2CDBD3', displayProjectsBackground: '#152947', hobbiesBackground: '#152947', attribute: 'height', value: '100vh' }
]

const knittingChartInfo = '<p></p>';
const leChickenInfo = '<p>Over the duration of 2 weeks, my final project of Makers Academy\'s Software Development Bootcamp involved myself and 4 other peers building an app of our choice. Le Chicken is a language-learning Role-Playing Game designed to help the user learn a new language of their choice. The application is built using React Native - a framework that was new to us - as to give us a greater challenge</p>';

$(window).on('beforeunload', () => {
  $(window).scrollTop(0);
});

$(document).ready(() => {

  let idx = Math.floor(Math.random() * scheme.length)
  $('.hero_img').attr('src', scheme[idx].source)
  $('.hero_img').css(scheme[idx].attribute, scheme[idx].value)
  $('.photo').css('background-color', scheme[idx].photoBackground)
  $('.about').css('background-color', scheme[idx].aboutBackground)
  $('.projects').css('background-color', scheme[idx].projectsBackground)
  $('.display-projects').css('background-color', scheme[idx].displayProjectsBackground)
  $('.hobbies').css('background-color', scheme[idx].hobbiesBackground)

  $(window).scroll((event) => {

    if ($(window).scrollTop().valueOf() < 8) {
      $('.navbar').css('z-index', '0')
    } else {
      $('.navbar').css('z-index', '10')
    }

    // if scroll more than 10 down
    if ($(window).scrollTop().valueOf() > 10) {
      if ($('.navbar').css('opacity') == '0') {
        $('.navbar').css('opacity', '1')
        $('.my-name').css('cursor', 'pointer')
      }
      if ($('.my-name.hero-div').css('opacity') == '1') {
        $('.my-name.hero-div').css('opacity', '0')
        $('.my-name.hero-div').css('cursor', 'default')
      }
    }

    // if scroll after first page
    if ($(window).scrollTop().valueOf() >= $(window).height() - 70) {
      $('.about').addClass('fixing')
    }

    // if scroll is first page
    if ($(window).scrollTop().valueOf() < $(window).height() - 70) {
      $('.about').removeClass('fixing')
      $('.section-name.nav').text('About')
    } else if ($(window).scrollTop().valueOf() < (2 * $(window).height()) - 140) {
      $('.projects').removeClass('fixing')
      $('.section-name.nav').text('Projects')
    }

    // if scroll after second page
    if ($(window).scrollTop().valueOf() >= (2 * $(window).height()) - 140) {
      $('.projects').addClass('fixing')
    }
    // if scroll right at top of page
    if ($(window).scrollTop().valueOf() <= 10) {
      $('.my-name').css('opacity', '1')
      $('.my-name.hero-div').css('cursor', 'pointer')
      $('.my-name').css('cursor', 'default')
      $('.navbar').css('opacity', '0')
    }
    let scrollValue = $(window).scrollTop().valueOf()
    // if scroll is on second page
    // if (scrollValue < 60 && scrollValue < (2 * $(window).height()) - 130)) {
    //   $('.section-name.nav').text('Projects')
    // }
  })

  $('.my-name.hero-div').hover(() => {
    if ($(window).scrollTop().valueOf() <= 10) {
      $('.hero_img').css('filter', 'blur(5px)')
      $('.caption').css('opacity', '1')
    }
  }, () => {
    $('.hero_img').css('filter', '')
    $('.caption').css('opacity', '0')
  })

  $('.contact-link').hover(() => {
    if ($(window).scrollTop().valueOf() > 10) {
      $('.contact-caption').css('opacity', '1')
      $('.my-name').css('filter', 'blur(5px)')
      $('.section-name.nav').css('filter', 'blur(5px)')
    }
  }, () => {
    $('.contact-caption').css('opacity', '0')
    $('.contact-caption').html("<h5>Need my email?</h5><div style='display: none'><input id='email-to-copy' value='ben.lynch1931@gmail.com' /></div>")
    $('.my-name').css('filter', '')
    $('.section-name.nav').css('filter', '')
  })

  $('.github-link').hover(() => {
    if ($(window).scrollTop().valueOf() > 10) {
      $('.github-caption').css('opacity', '1')
      $('.contact').css('filter', 'blur(5px)')
      $('.section-name.nav').css('filter', 'blur(5px)')
    }
  }, () => {
    $('.github-caption').css('opacity', '0')
    $('.contact').css('filter', '')
    $('.section-name.nav').css('filter', '')
  })

  $('.contact-link').click(() => {
    $('#testing').select()
    document.execCommand("copy");
    $('.contact-caption').html("<h5>Email copied!</h5><div style='display: none'><input id='email-to-copy' value='ben.lynch1931@gmail.com' /></div>")
  })

  $('#le-chicken-project').hover(() => {
    $('.projects-info').html('<h2>Project: Le Chicken RPG</h2>')
    $('.dp-text').html(leChickenInfo)
    $('.dp-text').css('opacity', '1')
  }, () => {
    $('.projects-info').html('<h3>Testing</h3>')
    $('.dp-text').css('opacity', '0')
  })
  $('#knitting-chart-project').hover(() => {
    $('.projects-info').html('<h2>Project: Knitting Chart App</h2>')
    $('.dp-text').html(knittingChartInfo)
    $('.dp-text').css('opacity', '1')
  }, () => {
    $('.projects-info').html('<h3>Testing</h3>')
    $('.dp-text').css('opacity', '0')
  })
  $('#-project').hover(() => {
    $('.projects-info').html('<h2>Project: </h2>')
  }, () => {
    $('.projects-info').html('<h3>Testing</h3>')
  })
})
