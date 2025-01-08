const body = document.querySelector('body');

const randomColorGenerator = () => {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0;i < 6;i++)
    {
        let pos = Math.floor(Math.random() * 16);
        color += hex[pos];
    }
    return color;

    // return randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
}

const changeBackground = () => {
    body.style.backgroundColor = randomColorGenerator();
}
let intervalId;
const startChaningColor = () => {
    if(!intervalId){
        intervalId = setInterval(changeBackground,1000);
    }
}
const stopChaningColor = () => {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChaningColor);
document.querySelector('#stop').addEventListener('click', stopChaningColor);