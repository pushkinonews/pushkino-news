<template>
  <div>
    <div class="highlight flex center h50">
      <div class="item text-center">
        <h1 class="title">Пушкинское телевидение</h1>
        <span>Первый новостной в Пушкинском районе</span>
      </div>
      <div class="ad text-gray">Реклама на телеэкранах от 400 руб. <a href="/price.pdf" target="_blank">Прайс лист</a>
      </div>
    </div>
    <!--t-carousel></t-carousel-->
    <grid></grid>
    <t-footer></t-footer>
  </div>
</template>

<script>
  // import carousel from './carousel.vue'
  import grid from './grid.vue'
  import footer from './footer.vue'

  export default {
    components: {
      // 't-carousel': carousel,
      'grid': grid,
      't-footer': footer
    }
  }
</script>
