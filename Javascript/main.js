// Mobile Menu JS

let menu = document.querySelector('.menu');
let toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function(){
    menu.classList.toggle('is-active')
})

// Preloader JS

window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    preloader.style.display = "none";
});

//Scroll top button

let calcSrollValue = () =>
{
  let scrollProgress = document.getElementById('progress');
  let progressValue = document.getElementById('progress-value');
  let position = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((position * 100)/ calcHeight);
  console.log(scrollValue);

  if(position > 100)
  {
    scrollProgress.style.display = 'grid';
  }
  else
  {
    scrollProgress.style.display = 'none';
  }

  scrollProgress.addEventListener('click', () =>
  {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#06d881 ${scrollValue}%, #fff ${scrollValue}%)`;
}

window.onscroll = calcSrollValue;
window.onload = calcSrollValue;
