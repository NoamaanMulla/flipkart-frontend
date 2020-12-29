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

// document.getElementsByClassName('more-less-button')[0].style.backgroundColor = "black";