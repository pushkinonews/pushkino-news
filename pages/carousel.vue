<template>
  <div class="container grid-md carousel">
    <h5 class="text-center text-normal text-gray">Наши клиенты и партнеры:</h5>
    <ul class="my-slider">
      <li>
        <div class="flex center eldorado logo"></div>
      </li>
      <li>
        <div class="flex center globus logo"></div>
      </li>
      <li>
        <div class="flex center vozrochdenie logo"></div>
      </li>
      <li>
        <div class="flex center crosst logo"></div>
      </li>
      <li>
        <div class="flex center rts logo"></div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {tns} from 'tiny-slider/src/tiny-slider.module'

  export default {
    mounted () {
      tns({
        container: '.my-slider',
        items: 3,
        slideBy: 'page',
        mouseDrag: true,
        controls: false,
        nav: false,
        'responsive': {
          '350': {
            'items': 1
          },
          '500': {
            'items': 2
          },
          '900': {
            'items': 3
          }
        }
      })
    }
  }
</script>
