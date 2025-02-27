

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu")
const menuIcon = document.querySelector(".menu")

const email = document.querySelector(".navbar-email")

const shopButton = document.querySelector(".navbar-shopping-cart")
const shopMenu = document.querySelector("#shoppingCartContainer")

const productDetail = document.querySelector("#productDetail")
const productDetailsCloseButton = document.querySelector(".product-detail-close")

email.addEventListener("click", toggleDesktopMenu)
menuIcon.addEventListener("click",toggleMobileMenu)
shopButton.addEventListener("click", toggleShopMenu)
productDetailsCloseButton.addEventListener("click",closeProductDetail)

function toggleDesktopMenu(event){
    productDetail.classList.add("inactive")
    shopMenu.classList.add("inactive")
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(event) {
    shopMenu.classList.add("inactive")
    productDetail.classList.add("inactive")
    mobileMenu.classList.toggle("inactive")
}

function toggleShopMenu(event){
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    productDetail.classList.add("inactive")
    shopMenu.classList.toggle("inactive")
}

function openProductDetail(event){
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    shopMenu.classList.add("inactive")
    productDetail.classList.remove("inactive")

    const img = document.querySelector("#productDetail img:nth-child(2)")
    const price = document.querySelector("#productDetail .product-info p:nth-child(1)")
    const name = document.querySelector("#productDetail .product-info p:nth-child(2)")

    img.setAttribute("src", event.target.src);
    //Need to set the price and name
    price.innerText = event.target.nextElementSibling.innerText
}

function closeProductDetail(event){
    productDetail.classList.add("inactive")
}

const productList = []
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 

const itemContainer = document.querySelector(".cards-container");

function loadItems(array){
    for (product of array){
        const element = document.createElement('div');
        element.classList.add("product-card");
        
        const img = document.createElement("img");
        img.setAttribute("src",product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
        const productPrice = document.createElement("p");
        productPrice.innerText = "$"+product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name
    
        productInfoDiv.append(productPrice,productName)
    
        const productInfoFigure = document.createElement("figure");
        const img2 = document.createElement("img");
        img2.setAttribute("src","./icons/bt_add_to_cart.svg");
    
        productInfoFigure.append(img2);
    
        productInfo.append(productInfoDiv,productInfoFigure);
        element.append(img,productInfo)
        itemContainer.append(element)
        img.addEventListener("click",openProductDetail)
    }
}

loadItems(productList);