let more_less = document.getElementsByClassName('more-less-button')[0];
document.getElementsByClassName('more-less-display')[0].style.display = 'none';
document.getElementsByClassName('more-less-button')[0].innerHTML = "Show 40+ More";

more_less.onclick = () => {
    if(document.getElementsByClassName('more-less-display')[0].style.display == 'none')
        {
            document.getElementsByClassName('more-less-display')[0].style.display = 'block';
            document.getElementsByClassName('more-less-button')[0].innerHTML = "Show Less";
    }
    else
        {
            document.getElementsByClassName('more-less-display')[0].style.display = 'none';
            document.getElementsByClassName('more-less-button')[0].innerHTML = "Show 40+ More";
    }
}

// let assured = document.querySelector('.assured-radio-check');

// assured.onclick = () => {
//     assured.style.backgroundColor == 'rgb(40, 116, 240)' ? assured.style.backgroundColor = 'rgb(255, 255, 255)' : assured.style.backgroundColor = 'rgb(40, 116, 240)';
// }

changeColor = (target) => {
    target.style.backgroundColor == 'rgb(40, 116, 240)' ? target.style.backgroundColor = 'rgb(255, 255, 255)' : target.style.backgroundColor = 'rgb(40, 116, 240)';
}

dropdown = (target) => {
    target.parentElement.nextElementSibling.style.display == 'block' ? target.parentElement.nextElementSibling.style.display = 'none' : target.parentElement.nextElementSibling.style.display = 'block';
}