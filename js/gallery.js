var imagesGal1 = ['img/dog-korea.jpg', 'img/heart.JPG', 'img/jeans.JPG', 'img/donkeys.jpg', 'img/eagle-in-langkawi.JPG', 'img/heart2.JPG',]

var imagesGal2 = ['img/women-in-Vietnam.JPG','img/human1.jpg','img/human2.jpg','img/human3.jpg','img/human4.jpg','img/human5.jpg']

var imagesGal3 = ['img/sunset.jpg','img/sunset6.jpg', 'img/sunset2.JPG','img/sunset3.JPG','img/sunset4.JPG','img/sunset5.JPG']

var imagesGal4 = ['img/nature1.JPG', 'img/boat-water.JPG','img/nature2.JPG','img/nature3.JPG','img/house-switzerland.JPG','img/fruits_korea.JPG' 'img/nature4.JPG',]


displayImage($('#imagesGal1 img'), imagesGal1, 0)
displayImage($('#imagesGal2 img'), imagesGal2, 0)
displayImage($('#imagesGal3 img'), imagesGal3, 0)
displayImage($('#imagesGal4 img'), imagesGal4, 0)

$('.next-btn').click(function () {
  var selection =
  $(this).parent().attr('id')
    var gallery =
  gallerySelector(selection)

    var image =
  $(this).parent().find('img')
    var currentIndex =
  gallery.indexOf(image.attr('src'))

  var nextIndex = incrementIndex(gallery, currentIndex)
    displayImage(image, gallery, nextIndex)
  })

  function incrementIndex (gallery, index) {
    return (index >= gallery.length -1) ?
    0 : index +1
  }

function displayImage (image, gallery, index) {
  image.attr.('src', gallery[index])
}

function gallerySelector (gallery) {
  return (gallery === 'imagesGal1') ?
  imagesGal1 : imagesGal2 : imagesGal3 : imagesGal3
}








// listen to next button
$('.next-btn').click(function () {

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
})


	// second function
  $('.next-btn2').click(function () {
  var listImg2 = $('img').attr('src')
   var currentIndex = imagesGal2.indexOf(listImg2)
   var nextIndex = undefined

  if (currentIndex === imagesGal2.length -1) {
    nextIndex =0
  } else {
    nextIndex = currentIndex + 1
  }
$('img').attr('src', imagesGal2[nextIndex] )
})

// third function
$('.next-btn3').click(function () {

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
})

// fourth function
$('.next-btn4').click(function () {

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
      })
  // load next image
  $('img').attr('src', imagesGal4[nextIndex] )
}


// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "navigation") {
//         x.className += " responsive";
//     } else {
//         x.className = "navigation";
//     }
// }
