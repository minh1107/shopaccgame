var btnOne = document.querySelector('.btn__one')
var btnTwo = document.querySelector('.btn__two')
var recharge = document.querySelector('.slider__card-recharge')
var topMonth = document.querySelector('.slider__top-month')
var topMonthCount = document.querySelectorAll('.slider__top-month  span')


btnOne.style.backgroundColor = '#27272A'


btnOne.addEventListener('click', function(e) { 
    recharge.style.display = 'flex'
    topMonth.style.display = 'none'
    btnOne.style.backgroundColor = '#27272A'
    btnTwo.style.backgroundColor = '#18181B'
 })

 btnTwo.addEventListener('click', function(e) { 
    recharge.style.display = 'none'
    topMonth.style.display = 'block'    
    btnOne.style.backgroundColor = '#18181B'
    btnTwo.style.backgroundColor = '#27272A'

})

console.log(topMonthCount)

topMonthCount.forEach(function(month, index) {
    month.innerHTML = index + 1 + ','
})

// slide
var count = 1; 
var sliderImg = document.querySelector('.slider__img > img')
setInterval(() => {
    if(count == 1) {
        count = 2
    }
    if(count == 0) {
        sliderImg.setAttribute('src', `./asset/img/slider.png`)
        count++;
    }
    else if(count == 3 || count == 6 || count == 7) { 
        sliderImg.setAttribute('src', `./asset/img/slider${count++}.jpg`)
    } else sliderImg.setAttribute('src', `./asset/img/slider${count++}.png`)
    
    if(count == 8) count = 0
}, 1000);