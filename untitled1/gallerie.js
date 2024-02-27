const gallerieContainer= document.querySelector('.image');
const gallerieControlCONTAINER = document.querySelector('.gallerie-it');
const gallerieControls = ['previous' , 'next'];
const gallerieItems = document.querySelectorAll('.gallerie-items');

class carousel{

  constructor(controls, item , container ) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...item];
  }
  updateGallerie(){
    this.carouselArray.forEach(e1 => {
      e1.classList.remove('gallerie-item-1')
      e1.classList.remove('gallerie-item-2')
      e1.classList.remove('gallerie-item-3')
      e1.classList.remove('gallerie-item-4')
      e1.classList.remove('gallerie-item-5')
    });

    this.carouselArray.slice(0, 5).forEach((e1 , i) => {e1 .classList.add('gallerie-item-$(i + 1)');
    });

  }

  setCurrenStates(direction){
    if (direction.className == 'gallerie-controls-previous'){
      this.carouselArray.unshift(this.carouselArray.pop());
    }else{
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallerie();
  }
  setcontrols() {
    this.carouselControls.forEach(control => {})
    gallerieControls.appendChild(document.createElement('button')).className = 'gallerie-controls-${control}';
    document.querySelector('.gallerie-controls-${control}')  .innerText = control;

  }
  useControls(){
    const triggers = [...gallerieControlCONTAINER.childNodes];
    triggers.forEach(control =>{

      control.addEventListener('click' , e =>{
        e.preventDefault();
        this.setCurrenStates(control);
      });
    });
  }

}
const exampleCarousel = new carousel(gallerieContainer, gallerieItems , gallerieControls);
exampleCarousel.setcontrols();
exampleCarousel.useControls();
