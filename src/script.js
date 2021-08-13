
function handleSubmit(e) {
    console.log(e)
    e.preventDefault();


}
carouselItems = document.querySelectorAll('.carousel-item .row div')
console.log(carouselItems)
let child = document.createElement('div');
child.innerHTML = `
<div class="web-development card ">

<img class="icon" src="./src/icons/icon.svg" alt="">


<h5 class="white">web development</h5>
<p class="white">Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
<button type="button" class="btn btn-light" data-mdb-ripple-color="dark">read
    more
    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="10"
        viewBox="0 0 37 10">
        <defs>
            <style>
                .a {
                    fill: #ff3147;
                }
            </style>
        </defs>
        <g transform="translate(-352 -742)">
            <path class="a" d="M5,0l5,8H0Z"
                transform="translate(389 742) rotate(90)" />
            <rect class="a" width="29" height="2" transform="translate(352 746)" />
        </g>
    </svg>
</button>
</div>

`

carouselItems.forEach((item) => {

    item.addEventListener('mouseenter', () => {

        item.appendChild(child)
    })
    item.addEventListener('mouseleave', () => {
        item.removeChild(child)
    })

})

// 
