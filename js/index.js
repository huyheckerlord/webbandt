let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pause slide when hover slider

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// enable slide when mouse leave out slider
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// slider controll

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

// setInterval(() => {
//     if (!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

// render products

let products = [
    {
        name: 'XIAOMI 12 PRO',
        image1: './images/mi12pro.png',
        image2: './images/xiaomi12pro.png',
        old_price: '27.999.000 đ',
        curr_price: '25.145.000 đ'
    },
    {
        name: 'OPPO RENO 7',
        image1: './images/OPPO-Reno7-SE-blue-removebg-preview.png',
        image2: './images/oppo-reno7-va-reno7-5g-thumb-min-removebg-preview.png',
        old_price: '10.345.000 đ',
        curr_price: '9.090.000 đ'
    },
    {
        name: 'IPHONE 13 PRO MAX',
        image1: './images/iphone-13-pro-silver-select_5ff58ddba603440ea44db84cc0cb1b81.png',
        image2: './images/iphone-13-e-1024x983-16230548876251203869154-removebg-preview.png',
        old_price: '32.312.000 đ',
        curr_price: '30.044.000 đ'
    },
    {
        name: 'XIAOMI BLACKSHARK 2 PRO',
        image1: './images/xiaomi-black-shark-2-pro-1-removebg-preview.png',
        image2: './images/600_blackshark_2_pro_silver_800x800_min-removebg-preview.png',
        old_price: '10.000.000 đ',
        curr_price: '9.456.000 đ'
    },
    {
        name: 'SAMSUNG GALAXY S22 ULTRA',
        image1: './images/s22ultra1.png',
        image2: './images/s22ultra2.png',
        old_price: '31.000.000 đ',
        curr_price: '29.454.000 đ'
    },
    {
        name: 'OPPO FIND X3 PRO',
        image1: './images/oppo find.png',
        image2: './images/oppo find3.png',
        old_price: '20.345.000 đ',
        curr_price: '18.543.000 đ'
    },
    {
        name: 'IPHONE 12',
        image1: './images/ip12.png',
        image2: './images/ip12x.png',
        old_price: '16.645.000 đ',
        curr_price: '15.000.000 đ'
    },
]

let product_list = document.querySelector('#latest-products')
let best_product_list = document.querySelector('#best-products')

products.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">mua ngay</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>${e.old_price}</del></span>
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `

    product_list.insertAdjacentHTML("beforeend", prod)
    best_product_list.insertAdjacentHTML("afterbegin", prod)
})


