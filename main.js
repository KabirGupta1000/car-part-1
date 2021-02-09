canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car_width= 100;
car_height= 90;
car_x=10;
car_y=10;
background_image = "racing.jpg";
Car_image = "car1.png"
function add() {
    car_img_tag= new Image();
    car_img_tag.onload = upload_rover;
    car_img_tag=Car_image;
 backgroung_Img_tag = new Image();
    backgroung_Img_tag.onload = upload_background;
    backgroung_Img_tag.src= background_image;
}
function upload_background() {
    ctx.drawImage(backgroung_Img_tag,0,0,canvas.width,canvas.height);
}
function upload_rover() 
 {
     ctx.drawImage(rover_img_tag,rover_x,rover_y,rover_width,rover_height);
 }