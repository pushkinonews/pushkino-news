<template>
    <span>
        <a :class="_class" @click="toggle" v-if="!event && !button">{{name}}</a>
        <a @click="toggle"><slot name="button"></slot></a>
        <transition name="modal">
            <div class="modal active" v-if="show">
            <div class="modal-overlay" @click="toggle"></div>
            <div class="modal-container">
                <div class="panel">
                    <!--div class="panel-header" :class="{'text-center':!header}">
                        <div class="modal-title btn-block" v-if="!header">{{name}}</div>
                        <slot name="header"></slot>
                    </div-->
                    <div class="panel-body">
                        <slot name="body"></slot>
                    </div>
                    <div class="panel-footer text-center" v-if="footer">
                        <slot name="footer"></slot>
                        <div @click="toggle" class="btn btn-link">Закрыть</div>
                    </div>
                </div>
            </div>
        </div>
        </transition>
    </span>
</template>


<script>
  export default {
    props: ['name', '_class', 'event'],
    data: () => ({
      show: false
    }),
    mounted () {
      if (this.event) this.$bus.$on(this.event, this.toggle)
    },
    computed: {
      button () {
        return !!this.$slots.button
      },
      header () {
        return !!this.$slots.header
      },
      footer () {
        return !!this.$slots.footer
      },
      container () {
        return !!this.$slots.container
      }
    },
    methods: {
      toggle () {
        (this.show) ? this.show = false : this.show = true
        this.$emit('open', this.show)
      }
    },
    watch: {
      show: function (val) {
        const _this = this
        if (val === true) {
          window.addEventListener('keyup', function (e) {
            if (e.keyCode === 27) _this.show = false // ESC
          })
        }
      }
    }
  }
</script>
