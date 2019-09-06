// image gallery
function createImgArticle(index) {
  const article = document.createElement('article');
  article.style.background = `center/cover url(img/${index}.jpg)`;
  return article;
}

function fadeOut(elem) {
  elem.style.opacity = 0;
}

function fadeIn(elem) {
  elem.style.opacity = 1;
}

const picsSection = document.getElementById('pics');

function flipPic(
  currPic = document.querySelector('#pics article'),
  oldPic,
  picIndex = 2,
  MAX = 8
) {
  setTimeout(() => {
    // kill old pic
    if (oldPic) oldPic.parentNode.removeChild(oldPic);

    // create newPic
    const nextPic = createImgArticle(picIndex);
    picsSection.append(nextPic);

    // fade in this one
    // fadeIn(nextPic);

    // fade out existing pic
    // fadeOut(currPic);

    // recurse
    flipPic(nextPic, currPic, picIndex < MAX ? picIndex + 1 : 1);
  }, 4500);
}

function startFlipPic() {
  const nextPic = createImgArticle(1);
  picsSection.append(nextPic);
  if (document.querySelectorAll('#pics article').length < 2) flipPic();
}
