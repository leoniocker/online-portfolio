var imagesGal1 = ['img/dog-korea.jpg', 'img/donkeys.jpg', 'img/eagle-in-langkawi.JPG']

var imagesGal2 = ['img/human1.jpg','img/human2.jpg','img/human3.jpg','img/human4.jpg','img/human5.jpg']

var imagesGal3 = ['img/sunset.jpg','img/sunset2.JPG','img/sunset3.JPG','img/sunset4.JPG','img/sunset5.JPG']

var imagesGal4 = ['img/boat-water.JPG','img/swan.JPG','img/house-switzerland.JPG','img/fruits_korea.JPG']

// listen to next button
$('.next-btn').click(whenUserClicksNext)
function whenUserClicksNext() {

  // get current item shown
  var listImg1 = $('img').attr('src')
  // find the index of the item from the list(imagesGal1)
  var currentIndex = imagesGal1.indexOf(listImg1)
  var nextIndex = undefined
    // if current index is last index
      if (currentIndex === imagesGal1.length - 1) {
        nextIndex = 0
      } else {
        nextIndex = currentIndex + 1
      }
  // load next image
  $('img').attr('src', imagesGal1[nextIndex] )
}


	// second function
  $('.next-btn2').click(whenUserClicksNext2)
  function whenUserClicksNext2() {
  var listImg2 = $('img').attr('src')
   var currentIndex = imagesGal2.indexOf(listImg2)
   var nextIndex = undefined

  if (currentIndex === imagesGal2.length -1) {
    nextIndex =0
  } else {
    nextIndex = currentIndex + 1
  }
$('img').attr('src', imagesGal2[nextIndex] )
}

// third function
$('.next-btn3').click(whenUserClicksNext3)
function whenUserClicksNext3() {

  // get current item shown
  var listImg3 = $('img').attr('src')
  // find the index of the item from the list(imagesGal1)
  var currentIndex = imagesGal3.indexOf(listImg3)
  var nextIndex = undefined
    // if current index is last index
      if (currentIndex === imagesGal3.length - 1) {
        nextIndex = 0
      } else {
        nextIndex = currentIndex + 1
      }
  // load next image
  $('img').attr('src', imagesGal3[nextIndex] )
}

// fourth function
$('.next-btn4').click(whenUserClicksNext4)
function whenUserClicksNext4() {

  // get current item shown
  var listImg4 = $('img').attr('src')
  // find the index of the item from the list(imagesGal1)
  var currentIndex = imagesGal4.indexOf(listImg4)
  var nextIndex = undefined
    // if current index is last index
      if (currentIndex === imagesGal4.length - 1) {
        nextIndex = 0
      } else {
        nextIndex = currentIndex + 1
      }
  // load next image
  $('img').attr('src', imagesGal4[nextIndex] )
}
