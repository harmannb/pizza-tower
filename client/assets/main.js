// var ctx, //context
//     imgBg, //background Image
//      x = 0,
//      y = 0,
//      noOfPizzas = 10,
//      fallingPizzas = [],
//      stack =[], //Stack of Pizza
//      xpt,      //x point where pizza has to stack
//      chefimgx,
//      pushed = false, //pushed to stack[]
//      endpt=350, //The line to end
//      pizza_itvl; //setinterval function

//     function createPizza(){
//       for (var i = 0; i < noOfPizzas; i++) {
//           var fallingDr = new Object();
//           fallingDr["image"] =  new Image();
//       fallingDr.image.src = '/img/pizza2.png';

//           fallingDr["x"] = Math.random() * 600;
//           fallingDr["y"] = Math.random() * 5;
//           fallingDr["speed"] = 3 + Math.random() * 5;
//           fallingPizzas.push(fallingDr);
//             xpt = fallingPizzas[0].x;

//           }
//     }
//     function drawBackground(){
//         ctx.drawImage(imgBg, 0, 0); //Background
//     }

// // Falling of pizzas
//     function draw() {
//     drawBackground();  //draws background Img
//         for (var i=0; i< noOfPizzas; i++) {
//         ctx.drawImage (fallingPizzas[i].image, fallingPizzas[i].x, fallingPizzas[i].y); //The rain drop
//         fallingPizzas[i].y += fallingPizzas[i].speed; //Set the falling speed
//           if(fallingPizzas[i].x >xpt-10 && fallingPizzas[i].x <xpt+10){
//             if(fallingPizzas[i].y > endpt){ //stack pizza when it reached endpt.
//               stack.push(true);
//               pushed = true;
//               fallingPizzas[i].y = -25;
//               fallingPizzas[i].x = Math.random() * 600;
//             }
//           }
//         if (fallingPizzas[i].y > 350) {  //Repeat the pizzadrop when it falls out of view
//             fallingPizzas[i].y = -25;
//             fallingPizzas[i].x =  Math.random() * 600;
//           }
//       }

// // Clone and Stack Pizzas
//       if(pushed = true){
//           for(var j = 0; j< stack.length; j++){
//           var s = fallingPizzas[0].image.cloneNode(true);
//           ctx.drawImage(s, xpt, 350-(j*15));
//           endpt = 350-(j*15);
//           if(endpt <= 0){
//             console.log("ending setinterval");
//             clearInterval(pizza_itvl);
//           }
//         }
//         pushed = false;
//       }
//     }

//     function setup() {
//         var canvas = document.getElementById('canvasRegn');
//         if (canvas.getContext) {
//                 ctx = canvas.getContext('2d');

//                     imgBg = new Image();
//             imgBg.src = "/img/trolltunga.jpg";
//           pizza_itvl = setInterval(draw, 10);
//           createPizza();
//         }
//     }

// setup();
