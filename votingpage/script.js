const likeIcons = document.querySelectorAll('.bx-like');
const dislikeIcons = document.querySelectorAll('.bx-dislike');

likeIcons.forEach((likeIcon, index) => {
  likeIcon.addEventListener('click', () => {
    likeIcon.classList.toggle('active');
    likeIcon.classList.toggle('liked');

    if (likeIcon.classList.contains('liked')) {
      likeIcon.style.backgroundColor = '#33db3e';
      likeIcon.style.color = 'black';
      likeIcon.style.borderRadius = '50px';
    } else {
      likeIcon.style.backgroundColor = '';
      likeIcon.style.color = ''; // reset to original color
    }

    const correspondingDislikeIcon = dislikeIcons[index];
    correspondingDislikeIcon.classList.remove('disliked');
    correspondingDislikeIcon.style.color = ''; // reset to original color
    correspondingDislikeIcon.style.backgroundColor = '';
  });
});

dislikeIcons.forEach((dislikeIcon, index) => {
  dislikeIcon.addEventListener('click', () => {
    dislikeIcon.classList.toggle('active');
    dislikeIcon.classList.toggle('disliked');

    if (dislikeIcon.classList.contains('disliked')) {
      dislikeIcon.style.backgroundColor = '#f84040'; // assuming you want red for dislike
      dislikeIcon.style.color = 'black';
      dislikeIcon.style.borderRadius = '50px';
    } else {
      dislikeIcon.style.color = ''; 
      dislikeIcon.style.backgroundColor = '';
    }

    const correspondingLikeIcon = likeIcons[index];
    correspondingLikeIcon.classList.remove('liked');
    correspondingLikeIcon.style.backgroundColor = '';
    correspondingLikeIcon.style.color = ''; // reset to original color
  });
});


const cardWrapper = document.querySelector('.card-wrapper');
const widthToScroll = cardWrapper.children[0].offsetWidth
const arrowPrev = document.querySelector('.arrow.prev');
const arrowNext = document.querySelector('.arrow.next');
const cardBounding = cardWrapper.getBoundingClientRect()
const cardImageAndLink = cardWrapper.querySelectorAll('img, a')
let currScroll = 0;
let initPos = 0;
let clicked = false;
console.log(widthToScroll)
cardImageAndLink.forEach(item => {
    item.setAttribute('draggable',false)
})

arrowPrev.onclick = function() {
    cardWrapper.scrollLeft -= widthToScroll
}

arrowNext.onclick = function() {
    cardWrapper.scrollLeft += widthToScroll
}

cardWrapper.onmousedown = function(e) {
    cardWrapper.classList.add('grab')
    initPos = e.clientX - cardBounding.left
    currScroll = cardWrapper.scrollLeft
    clicked = true
}

cardWrapper.onmousemove = function(e) {
    if(clicked) {
        const xPos = e.clientX - cardBounding.left;
        cardWrapper.scrollLeft = currScroll + -(xPos - initPos)
        console.log(-(xPos - initPos))
    }
}

cardWrapper.onmouseup = mouseUpAndLeave
cardWrapper.onmouseleave = mouseUpAndLeave

// function mouseUpAndLeave() {
//     clicked = false;
// }
cardWrapper.onmousedown = function(e) {
    cardWrapper.classList.add('grab')
    console.log('Click');
}

function mouseUpAndLeave() {
    cardWrapper.classList.remove('grab')
}