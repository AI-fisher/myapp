<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss">
  @import '@/lib/reset.scss';

  html, body, #app{
    // width: 100%;height: 100%;
    @include rect(100%, 100%);
  }

  #app {
    @include flexbox();
    @include flex-direction(column);
    .footer {
      @include rect(100%, 0.5rem);
      @include background-color(#efefef);
      ul {
        @include rect(100%, 0.5rem);
        @include flexbox();
        li{
          @include flex();
          @include align-items();
          @include flex-direction(column);
          @include justify-content();
          @include text-align();
          h1 {
            @include font-size(0.3rem);
          }
          span {
            @include font-size(0.2rem);
          }
          p {
            @include font-size(0.15rem);
          }
        }
      }
    }
  }

</style>
