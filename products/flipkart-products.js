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

let Item = document.querySelectorAll(".nav-btns");

window.onload = () => {
    Item.forEach(element => {
        element.children[0].style.display = "none";
    });
}

Item.forEach(element => {
    element.onclick = (e) => {
        let tgt = e.target;
        let possibleParent = tgt.closest("span");
        if (possibleParent) tgt = possibleParent;
        e.target.closest('div').previousElementSibling.style.transform = tgt.id === "prev" ? 'translateX(-15vw)' : 'translateX(2vw)';
        if (tgt.style.display == "none") 
            tgt.style.display = "block"
        else
            tgt.style.display = "none"
        if(tgt.className == "item_carousel_right_arrow")
            tgt.previousElementSibling.style.display = "block";
        else
            tgt.nextElementSibling.style.display = "block";
    }
});

let shop_products = document.querySelectorAll('.product-display-area .items');

shop_products.forEach(element => {
    element.addEventListener('mouseover', (e) => {
        items = e.target.closest('.items');
        items.children[1].children[0].style.color = 'rgb(40, 116, 240)';
    });
    element.addEventListener('mouseout', (e) => {
        items = e.target.closest('.items');
        items.children[1].children[0].style.color = 'rgb(0, 0, 0)';
    });
 });
