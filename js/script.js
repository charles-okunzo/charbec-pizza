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
  }else if(this.crust==="Glutten-free"){
    return 250;
  }else{
    return 0;
  }
}

//toppings price
Pizza.prototype.getToppingsPrice=function(){
  let sumTotal=0;
  this.toppings.forEach(item => {
     sumTotal+=parseFloat(item.value);
  });
  return sumTotal;
}

//Total price
Pizza.prototype.calcTotalPrice=function(){
  let totalPrice=(this.getSizePrice()+this.getCrustPrice()+this.getToppingsPrice())*this.units;
  return totalPrice;
}

//get output for the toppings names selected

Pizza.prototype.getToppingsNames=function(){
  let toppingsArr= this.toppings;
  let newArr=[];
  toppingsArr.forEach(item=>{
    newArr.push(item.name);
  })
  return newArr.join(', ')
}

//get delivery price

Pizza.prototype.getDeliveryPrice=function(){
  if(this.delivery==='home-d'){
    return Math.floor(Math.random()*300)
  }else{
    return 0;
  }
}


//order form submission
$('#user-order-form').submit((e)=>{
  e.preventDefault();
 
  //get user input value
  let userInputSize= $('#size').val();

  let userInputCrust=$('#crusts').val();
  //.serializeArray returns an array of input objects.
  let userInputToppings= $('form#user-order-form').serializeArray();

  let unitsOrdered= parseInt($('#noOfPizza').val());

  let delivery= $('#delivery').val();

    $('#checkoutBtn').fadeOut(1000);
      
    $('#order-display').slideDown(1000);

    $('#addBtn').slideDown(1000);

    $('#order-confirmBtn').slideDown(1000)


    //show form for home delivery && hide form for hand pickup
    if(delivery==='home-d'){
      $('#delivery-address').slideDown(1000);
    }else{
      $('#delivery-address').hide();
    }

    if(unitsOrdered===0){
      alert("Err:Enter a valid input");
      return;
    }

     //create a new user array object
    let newUserOrderedPizza= new Pizza(userInputSize, userInputCrust, userInputToppings, unitsOrdered, delivery);
    //total for each order
    let total=newUserOrderedPizza.calcTotalPrice();

    let toppingsNamesList= newUserOrderedPizza.getToppingsNames();

    $('tbody').prepend(`<tr><td>${userInputSize}</td><td>${userInputCrust}</td><td id='tNList'>${toppingsNamesList}</td><td>${unitsOrdered}</td><td class="totalVal">${total}</td></tr>`)

    $('.g-total').text(total);

    //calc delivery amout

    let deliveryAmout= newUserOrderedPizza.getDeliveryPrice();

    let totalPlusDelivery=deliveryAmout+total;

    //append delivery price
    $('#delPriceDisplay').append(`**You will be charged Ksh.${deliveryAmout} for delivery**`)




//constructor function for address

function Address(name, phoneNo, location){
  this.name=name;
  this.phoneNo=phoneNo;
  this.location=location;
}

$('#order-confirmBtn').click(()=>{
  
  //get address form fields input

  let userName=$('#fName').val();
  let userNo=$('#pNumber').val();
  let userLocation=$('#location').val();
  let delivery= $('#delivery').val();

  if (delivery==='home-d'){
    //  address input fields validation

    if(userName===""){
      alert("Enter your name");
    }else if(userNo===''){
      alert('Enter you phone number')
    }else if(userLocation===''){
      alert('Enter your location')
    }else{
      $('.oderRow').hide();
      $('#output').fadeIn(1000);
      $('#resetBtn').fadeIn(1000);
      

      $('#output').append(`<span>SUCCESS!</span> <br><div class="output-par">Dear ${userName}, Your Order has been received and will be delivered to ${userLocation} within 30min. Your total charge is Ksh.${totalPlusDelivery}</div>`)

    }
  }else{
    $('.oderRow').hide();
    $('#output').fadeIn(500);
    $('#resetBtn').fadeIn(500);

    $('#output').append(`<span>SUCCESS!</span> <br> <div class="output-par">Dear Customer, Your Order has been received. You can pick it within 30min. Your total charge is Ksh.${total}</div>`)

    // $('#resetBtn').click(()=>{
    //   $('.oderRow').fadeIn(500);
    // })

  }
  let outputSec=document.getElementById("output");

  outputSec.scrollIntoView();


  

  //address input fields validation

  // if(userName===""){
  //   alert("Enter your name");
  // }else if(userNo===''){
  //   alert('Enter you phone number')
  // }else if(userLocation===''){
  //   alert('Enter your location')
  // }else{

  // }
})






  // let checkout=0;
  // checkout= checkout+total;

  // console.log(checkout)
  //  let agsum=0;
  //  let grand=document.querySelectorAll('.totalVal');

  //  console.log(grand)

  //  grand.forEach(item=>console.log(item.value))
  //  console.log(grand)

  // userInputToppings.forEach(element => {
  //   console.log(element.name);
  // });
  // console.log(userInputToppings.length)
  // console.log($('form#user-order-form').serializeArray())
})

//Event when reset button is clicked
$('#resetBtn').click(()=>{
  $('.oderRow').fadeIn();
  $('#output').fadeOut();
  $('#resetBtn').fadeOut();

  window.location.href="index.html";

  let orderform=document.getElementById("order-form");

  orderform.scrollIntoView();


})

$('#feedback').submit((e)=>{
  let userName=$("#uName").val();
  let userEmail=$("#eMail").val();
  let message=$('#msg').val();

    alert(`Dear ${userName}, Your feedback has been received. Thank you for contacting Charbec Pizza.`)

  e.preventDefault();
})


let orderBtn= document.getElementById
$('#orderBtn').click(()=>{
  let orderform=document.getElementById("order-form");

  orderform.scrollIntoView();
})