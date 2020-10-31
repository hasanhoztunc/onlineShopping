<template>
    <div class="carousel">
        <button
            ref="carousel__button__left"
            class="carousel__button carousel__button--left is_hidden"
        >
            <leftArrow />
        </button>
        <div class="carousel__track-container">
            <ul ref="carousel__track" class="carousel__track">
                <li class="carouse__slide current_slide">
                    <img
                        class="carousel__image"
                        src="@/assets/logo.png"
                        alt=""
                    >
                    <div class="carousel__slide__info">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ducimus odit quos veritatis fugit officia, cumque
                        maxime asperiores iste doloremque sequi, incidunt quia
                        delectus neque velit accusamus tempore voluptate a
                        itaque.
                    </div>
                </li>
                <li class="carouse__slide">
                    <img
                        class="carousel__image"
                        src="@/assets/logo.png"
                        alt=""
                    >
                    <div class="carousel__slide__info">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ducimus odit quos veritatis fugit officia, cumque
                        maxime asperiores iste doloremque sequi, incidunt quia
                        delectus neque velit accusamus tempore voluptate a
                        itaque.
                    </div>
                </li>
                <li class="carouse__slide">
                    <img
                        class="carousel__image"
                        src="@/assets/logo.png"
                        alt=""
                    >
                    <div class="carousel__slide__info">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ducimus odit quos veritatis fugit officia, cumque
                        maxime asperiores iste doloremque sequi, incidunt quia
                        delectus neque velit accusamus tempore voluptate a
                        itaque.
                    </div>
                </li>
                <li class="carouse__slide">
                    <img
                        class="carousel__image"
                        src="@/assets/logo.png"
                        alt=""
                    >
                    <div class="carousel__slide__info">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ducimus odit quos veritatis fugit officia, cumque
                        maxime asperiores iste doloremque sequi, incidunt quia
                        delectus neque velit accusamus tempore voluptate a
                        itaque.
                    </div>
                </li>
            </ul>
        </div>
        <button
            ref="carousel__button__right"
            class="carousel__button carousel__button--right"
        >
            <rightArrow />
        </button>
        <div ref="carousel_nav" class="carousel_nav">
            <button class="carousel__indicator current_slide" />
            <button class="carousel__indicator" />
            <button class="carousel__indicator" />
            <button class="carousel__indicator" />
        </div>
    </div>
</template>

<script>
import leftArrow from '@/assets/carousel/left'
import rightArrow from '@/assets/carousel/right'
export default {
    components: {
        leftArrow,
        rightArrow,
    },
    mounted () {
        const track = document.querySelector('.carousel__track')
        const slides = Array.from(track.children)
        console.log(slides)
        const nextButton = this.$refs.carousel__button__right
        const prevButton = this.$refs.carousel__button__left
        const dotsNav = this.$refs.carousel_nav
        const dots = Array.from(dotsNav.children)

        const slideWidth = slides[0].getBoundingClientRect().width

        slides.forEach((slide, index) => {
            slide.style.left = slideWidth * index + 'px'
        })

        const moveToSlide = (track, currentSlide, targetSlide) => {
            track.style.transform =
                    'translateX(-' + targetSlide.style.left + ')'
            currentSlide.classList.remove('current_slide')
            targetSlide.classList.add('current_slide')
        }

        const updateDots = (currentDot, targetDot) => {
            currentDot.classList.remove('current_slide')
            targetDot.classList.add('current_slide')
        }

        const hideShowArrows = (
            slides,
            prevButton,
            nextButton,
            targetIndex
        ) => {
            if (targetIndex === 0) {
                prevButton.classList.add('is_hidden')
                nextButton.classList.remove('is_hidden')
            } else if (targetIndex === slides.length - 1) {
                prevButton.classList.remove('is_hidden')
                nextButton.classList.add('is_hidden')
            } else {
                prevButton.classList.remove('is_hidden')
                nextButton.classList.remove('is_hidden')
            }
        }

        prevButton.addEventListener('click', () => {
            const currentSlide = track.querySelector('.current_slide')
            const prevSlide = currentSlide.previousElementSibling
            const currentDot = dotsNav.querySelector('.current_slide')
            const prevDot = currentDot.previousElementSibling
            const targetIndex = slides.findIndex(
                (slide) => slide === prevSlide
            )

            moveToSlide(track, currentSlide, prevSlide)

            updateDots(currentDot, prevDot)

            hideShowArrows(slides, prevButton, nextButton, targetIndex)
        })

        nextButton.addEventListener('click', () => {
            const currentSlide = track.querySelector('.current_slide')
            const nextSlide = currentSlide.nextElementSibling
            const currentDot = dotsNav.querySelector('.current_slide')
            const nextDot = currentDot.nextElementSibling
            const targetIndex = slides.findIndex(
                (slide) => slide === nextSlide
            )

            moveToSlide(track, currentSlide, nextSlide)
            updateDots(currentDot, nextDot)

            hideShowArrows(slides, prevButton, nextButton, targetIndex)
        })

        dotsNav.addEventListener('click', (e) => {
            const targetDot = e.target.closest('button')

            if (!targetDot) return

            const currentSlide = track.querySelector('.current_slide')
            const currentDot = dotsNav.querySelector('.current_slide')

            const targetIndex = dots.findIndex((dot) => dot === targetDot)
            const targetSlide = slides[targetIndex]

            moveToSlide(track, currentSlide, targetSlide)

            updateDots(currentDot, targetDot)

            hideShowArrows(slides, prevButton, nextButton, targetIndex)
        })
    },
}
</script>

<style scoped>
.carousel {
    position: relative;
    height: 600px;
    width: 80%;
    margin: 0 auto;
    box-shadow: 0px 5px 10px #00000040;
    border-radius: 10px;
}
.carousel__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.carousel__slide__info {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #00000075;
    color: #fff;
    height: auto;
    padding: 10px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.8px;
}
.carousel__track-container {
    background: #00000029;
    border-radius: 10px;
    height: 100%;
    position: relative;
    overflow: hidden;
}
.carousel__track {
    border-radius: 10px;
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
    height: 100%;
    width: 100%;
    transition: transform 250ms ease-in;
}
.carouse__slide {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}
.carousel__button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: 0;
    cursor: pointer;
}
.carousel__button--right {
    right: -40px;
}
.carousel__button--left {
    left: -40px;
}
.carousel_nav {
    display: flex;
    justify-content: center;
    padding: 10px 0;
}
.carousel__indicator {
    border: 0;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    background: #00000030;
    margin: 0 12px;
    cursor: pointer;
}
.carousel__indicator.current_slide {
    background: #00000075;
}
.is_hidden {
    display: none;
}
</style>
