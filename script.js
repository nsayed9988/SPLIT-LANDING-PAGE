const left=document.querySelector('.left')
const right=document.querySelector('.right')
const container=document.querySelector('.container')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))
const btn1=document.querySelector('.split.left .btn1');
btn1.addEventListener('click', () => {
    window.location.href = 'https://en.wikipedia.org/wiki/Android_(operating_system)#:~:text=Android%20is%20a%20mobile%20operating,such%20as%20smartphones%20and%20tablets.'; 
});
const btn2 = document.querySelector('.split.right .btn2');
btn2.addEventListener('click', () => {
    window.location.href = 'https://en.wikipedia.org/wiki/IOS'; 
});
