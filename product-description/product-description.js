
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