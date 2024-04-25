const certificateContainer = document.querySelector('.certificate-container');
const certificateControlsContainer = document.querySelector('.certificate-controls');
const certificateControls = ['previous', 'next'];
const certificateItems = document.querySelectorAll('.certificate-item');

class Carousel {

    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateCertificate(){
        this.carouselArray.forEach(el => {
            el.classList.remove('certificate-item-1');
            el.classList.remove('certificate-item-2');
            el.classList.remove('certificate-item-3');
            el.classList.remove('certificate-item-4');
            el.classList.remove('certificate-item-5');
        });

        this.carouselArray.slice(0, 5).forEach((el , i) => {
            el.classList.add(`certificate-item-${i+1}`);
        });
    }

    setCurrentState(direction){
        if (direction.className == 'certificate-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateCertificate();
    }


    setControls() {
        this.carouselControls.forEach(control => {
            certificateControlsContainer.appendChild(document.createElement('button')).className = `certificate-controls-${control}`;
            document.querySelector(`.certificate-controls-${control}`).innerText = control;

        });
    }

    useControls(){
        const triggers = [...certificateControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(certificateContainer, certificateItems, certificateControls);

exampleCarousel.setControls();
exampleCarousel.useControls();

document.addEventListener("DOMContentLoaded", function() {
    var readMores = document.querySelectorAll('.read-more');
    readMores.forEach(function(readMore) {
      readMore.addEventListener('click', function() {
        var details = readMore.parentElement.querySelector('.details');
        var isVisible = details.classList.contains('expanded');
        if (isVisible) {
          details.classList.remove('expanded');
          readMore.textContent = 'Read more';
        } else {
          details.classList.add('expanded');
          readMore.textContent = 'Read less';
        }
      });
    });
  });