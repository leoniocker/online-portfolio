var imagesGal1 = ['img/dog-korea.jpg', 'img/donkeys.jpg', 'img/eagle in langkawi.JPG']

var images = ['img/human1.jpg','img/human2.jpg','img/human3.jpg','img/human4.jpg','img/human5.jpg']

var imagesGal3 = ['img/sunset.jpg','img/sunset2.JPG','img/sunset3.JPG','img/sunset4.JPG','img/sunset5.JPG']

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



	// second function
	      // get current item shown
  var listImg = $('img').attr('src')
   // find the index of the item from the list (images)
   var currentIndex = images.indexOf(listImg)
   var nextIndex = undefined

//   var nextIndex = currentIndex + 1
  // $('.img-holder').attr('src', listImg[nextIndex] )
  if (currentIndex === images.length -1) {
    nextIndex =0
  } else {
    nextIndex = currentIndex + 1
  }
  // load next image
$('img').attr('src', images[nextIndex] )
}
