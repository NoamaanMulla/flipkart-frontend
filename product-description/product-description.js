let Item = document.querySelectorAll(".nav-btns");

window.onload = () => {
    Item.forEach(element => {
        element.children[0].style.display = "none";
    });
    activeCategory();
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

let shop_products = document.querySelectorAll('.items');

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

activeCategory = () => {
    document.querySelectorAll(".sub-slider-categories span")[0].style.borderBottom = "2px solid rgb(40, 116, 240)";
    document.querySelectorAll(".sub-slider-categories span")[0].style.color = "rgb(40, 116, 240)";
    document.querySelectorAll(".sub-slider").forEach(element => {
        element.style.display = "none";
        document.querySelectorAll(".sub-slider")[0].style.display = "block";
    });
}

document.querySelectorAll(".sub-slider-categories span").forEach(element => {
    element.addEventListener('click', (e) => {
        document.querySelectorAll(".sub-slider-categories span").forEach(element => {
            element.style.borderBottom = "2px solid rgb(255, 255, 255)";
            element.style.color = "rgb(0, 0, 0)";
        });
        e.target.style.borderBottom = "2px solid rgb(40, 116, 240)";
        e.target.style.color = "rgb(40, 116, 240)";
        let value;
        if(e.target.innerHTML == "All Categories")
            value = 0;
        else if (e.target.innerHTML == "Media Players")
            value = 1;
        else if (e.target.innerHTML == "Mobile Cables")
            value = 2;
        else
            value = 3;
        document.querySelectorAll(".sub-slider").forEach(element => {
            element.style.display = "none";
            document.querySelectorAll(".sub-slider")[value].style.display = "block";
        });
    });
});

document.querySelectorAll(".vertical-nav i")[0].style.display = "none";

document.querySelectorAll('.vertical-nav i').forEach(element => {
    element.addEventListener('click', (e) => {
        if(e.target.className == "fas fa-angle-up") {
            document.querySelector('.product-preview-styles').style.transform = 'translateY(0rem)';
            document.querySelectorAll(".vertical-nav i")[0].style.display = "none";
            document.querySelectorAll(".vertical-nav i")[1].style.display = "block";
        }
        else {
            document.querySelector('.product-preview-styles').style.transform = 'translateY(-16.5rem)';
            document.querySelectorAll(".vertical-nav i")[1].style.display = "none";
            document.querySelectorAll(".vertical-nav i")[0].style.display = "block";
        }
    });
});

document.querySelectorAll('.product-preview-styles img').forEach(element => {
    element.addEventListener('mouseover', (e) => {
        if(e.target == document.querySelectorAll('.product-preview-styles img')[1]) {
            document.querySelector(".product-preview iframe").style.display = "inline-block";
            document.querySelector('.product-preview img').style.display = "none";
        }
        else {
            if(document.querySelector(".product-preview iframe").style.display == "inline-block") {
                document.querySelector(".product-preview iframe").style.display = "none";
            }
            document.querySelector('.product-preview img').style.display = "block";
            document.querySelector('.product-preview img').src = e.target.src;
        }
    });
});

if (document.querySelectorAll('.product-details-available-offers').length > 3) {
    for (let index = 4; index < document.querySelectorAll('.product-details-available-offers').length; index++) {
        document.querySelectorAll('.product-details-available-offers')[index].style.display = 'none';
        document.querySelector('.view-more p').style.display = 'block';
    }
    document.querySelector('.view-more p').addEventListener('click', () => {
        document.querySelectorAll('.product-details-available-offers').forEach(element => {
            element.style.display = 'block';
        });
        document.querySelector('.view-more p').style.display = 'none';
    });
}