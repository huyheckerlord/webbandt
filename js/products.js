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
        image2: './images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_BACK.png',
        old_price: '20.345.000 đ',
        curr_price: '18.543.000 đ'
    },
]

let product_list = document.querySelector('#products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">mua ngay</a>
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
    })
}

renderProducts(products)
renderProducts(products)

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))