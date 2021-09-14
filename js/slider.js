const Images = [

    './image/1.jpg',
    './image/2.jpg',
    './image/3.jpg',
    './image/4.jpg',
    './image/5.jpg',
]

let imgIndex = 0;
const imgElement = document.getElementById('slider-img')
setInterval(()=>{
    if(imgIndex >= Images.length){
        imgIndex = 0;
    }
    const imageURL = Images[imgIndex];
    imgElement.setAttribute('src', imageURL)
    imgIndex ++
},1000)

console.log("hello")