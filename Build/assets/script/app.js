//buat ngambil berdasarkan classnya
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//items
const title = document.querySelector('.title');
const gue = document.querySelector('.gue img');
//const title = document.querySelector('.$title');
//const title = document.querySelector('.$title');
//const title = document.querySelector('.$title');

//fungsi perpindahan animasi
container.addEventListener('mousemove', (e)=>{
let xAxis = (window.innerWidth / 2 - e.pageX)/25;
let yAxis = (window.innerHeight / 2 - e.pageY)/25;
card.style.transform   =  `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

//fungsi  animasi ketika mouse mendekat ke kartu
container.addEventListener('mouseenter', e=>{
    card.style.trasition = "none";
    title.style.transform = "translateZ(100px)";
    //popout 
    gue.style.transform = "translateZ(100px)" //rotateX(-30deg)";
 });

//fungsi  animasi ketika mouse menjauh dr kartu
container.addEventListener('mouseleave', e =>{
    card.style.trasition = "all  0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateX(0px)";
    //popin 
    gue.style.transform = "translateZ(0px)"// rotateX(0deg)";
});


