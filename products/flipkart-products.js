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

changeColor = (target) => {
    target.style.backgroundColor == 'rgb(40, 116, 240)' ? target.style.backgroundColor = 'rgb(255, 255, 255)' : target.style.backgroundColor = 'rgb(40, 116, 240)';
}

dropdown = (target) => {
    target.parentElement.nextElementSibling.style.display == 'block' ? target.parentElement.nextElementSibling.style.display = 'none' : target.parentElement.nextElementSibling.style.display = 'block';
}

let Item = [
    document.querySelectorAll(".nav-btns")[0],
    document.querySelectorAll(".nav-btns")[1]
]

Item.forEach(element => {
    element.onclick = (e) => {
        let tgt = e.target;
        let possibleParent = tgt.closest("span")
        if (possibleParent) tgt = possibleParent; // we clicked the <i>
        e.target.closest('div').previousElementSibling.style.transform = tgt.id === "prev" ? 'translateX(-44vw)' : 'translateX(0vw)';
    }
});

// document.getElementsByClassName("nav-btns")[0].addEventListener("click", function(e) {  
//   let shopItems = document.querySelector(".shop_items");
//   let tgt = e.target;
//   let possibleParent = tgt.closest("span")
//   if (possibleParent) tgt = possibleParent; // we clicked the <i>
//   shopItems.style.transform = tgt.id === "prev" ? 'translateX(-44vw)' : 'translateX(0vw)';
// })