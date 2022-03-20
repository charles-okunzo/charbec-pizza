//slideshow effect
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

//constructor function

function Pizza(size, crust, toppings, units, delivery){
  this.size=size;
  this.crust=crust;
  this.toppings=toppings;
  this.units=units;
  this.delivery=delivery;
}

//prototypes to get the prices

//size price
Pizza.prototype.getSizePrice= function(){
  if(this.size==='Large'){
    return 1500;
  }else if(this.size==="Medium"){
    return 900;
  }else{
    return 650;
  }
}

//crust price
Pizza.prototype.getCrustPrice=function(){
  if(this.crust==="Crispy"){
    return 200;
  }else if(this.crust==="Stuffed"){
    return 300;
  }else{
    return 250;
  }
}

Pizza.prototype.getToppingsPrice=function(){
  let arr =[];
  arr.push(this.toppings);
  let toppingsAmt= arr.length;
  return toppingsAmt*200;
}


//order form submission
$('#user-order-form').submit((e)=>{
  e.preventDefault();
  // $('#checkoutBtn').fadeToggle(1000);
  
  $('#order-display').slideToggle(1000);

  $('#addBtn').slideToggle(1000);

  $('#order-confirmBtn').slideToggle(1000)

  let delivery= $('#delivery').val();
  if(delivery==='home-d'){
    $('#delivery-address').slideToggle(1000);
  }else{
    $('#delivery-address').hide();
  }

  //get user input value
let userInputSize= $('#size').val();

let userInputCrust=$('')
// console.log($('form#user-order-form').serializeArray())
})