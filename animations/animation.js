
const ulSquares = document.querySelector("ul.squares")
const ScreenWindow = screen.width

console.log(ScreenWindow)

if(ScreenWindow < 800){
    for (let i = 0; i < 25; i++){
    
        const li = document.createElement("li");
    
        const random = (min, max)=> Math.random() * (max - min) + min;
    
        const size = Math.floor(random(10, 90))
        const position = random(1, 99);
    
        const delay = random(5, 0.4)
        const duration = random(24, 12)
    
        li.style.width = `${size}px`
        li.style.height = `${size}px`
        li.style.bottom = `-${size}px`
    
        li.style.left = `${position}%` 
    
        li.style.animationDelay = `${delay}s`;
        li.style.animationDuration = `${duration}s`;
        li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`
    
        ulSquares.appendChild(li);
    }
}else{
    for (let i = 0; i < 50; i++){
    
        const li = document.createElement("li");
    
        const random = (min, max)=> Math.random() * (max - min) + min;
    
        const size = Math.floor(random(10, 90))
        const position = random(1, 99);
    
        const delay = random(5, 0.1)
        const duration = random(24, 12)
    
        li.style.width = `${size}px`
        li.style.height = `${size}px`
        li.style.bottom = `-${size}px`
    
        li.style.left = `${position}%` 
    
        li.style.animationDelay = `${delay}s`;
        li.style.animationDuration = `${duration}s`;
        li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`
    
    
        ulSquares.appendChild(li);
    }
}