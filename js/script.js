
let i=0;
let images=[];
const time=3000;
images[0]='assets/pizza-01.jpg';
images[1]='assets/pizza-02.jpg';
images[2]='assets/pizza-03.jpg';
images[3]='assets/pizza-04.jpg';
images[4]='assets/pizza-05.jpg';
images[5]='assets/pizza-06.jpg';
images[6]='assets/pizza-08.jpg';
images[7]='assets/pizza-09.jpg';
images[8]='assets/pizza-10.jpg';
images[9]='assets/pizza-14.jpg';

function mySlideshow(){

  document.querySelector('img#img-tag').src= images[i];
  if(i<images.length-1){
    i++;
  }else{
    i=0;
  }

  setTimeout("mySlideshow()", time);
};

window.onload=mySlideshow();

$('#user-order-form').submit((e)=>{
  e.preventDefault();
  $('#checkoutBtn').toggle();
})