<template>
  <div class="route-animation">
    <div class="top-slide">
      <div class="slide">
      </div>
      <div class="slide">
      </div>
      <div class="slide">
      </div>
      <div class="slide">
      </div>
      <div class="slide">
      </div>
       <!--<div class="slide">
      </div>
      <div class="slide">
      </div>
      <div class="slide">
      </div>
      <div class="slide">
      </div>
      <div class="slide">
      </div> -->
    </div>
    <div class="bottom-slide">
      <div class="slide">
      </div>
      <div class="slide">
      </div>
      <div class="slide">
      </div>
      <div class="slide">
      </div>
      <div class="slide">
      </div>
     <!--  <div class="slide">
      </div>
      <div class="slide">
      </div>
      <div class="slide">
      </div>
      <div class="slide">
      </div>
      <div class="slide">
      </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.route-animation {
  position: fixed;
  z-index: 20;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  // transition: 0.1s ease;
  pointer-events: none;
  .top-slide {
    display: flex;
    height: 50vh;
    width: 100%;
    .slide {
      height: 100%;
      width: 50%;
      transform: translateY(-50vh);
      &:nth-child(odd) {
        background-color: $primary;
      }
      &:nth-child(even) {
        background-color: $secondary;
      }
    }
  }
  .bottom-slide {
    display: flex;
    height: 50vh;
    width: 100%;
    .slide {
      height: 100%;
      width: 50%;
      transform: translateY(50vh);
      &:nth-child(odd) {
        background-color: $secondary;
      }
      &:nth-child(even) {
        background-color: $primary;
      }
    }
  }
}

//####################### Top slider animations ############################################

.main-enter-active .top-slide .slide,
.main-leave-active .top-slide .slide {
  transition: transform 0.1s ease-in-out;

  &:nth-child(2) {
    transition-delay: 0.1s;
  }
  &:nth-child(3) {
    transition-delay: 0.2s;
  }
  &:nth-child(4) {
    transition-delay: 0.3s;
  }
  &:nth-child(5) {
    transition-delay: 0.4s;
  }
  &:nth-child(6) {
    transition-delay: 0.5s;
  }
  &:nth-child(7) {
    transition-delay: 0.6s;
  }
  &:nth-child(8) {
    transition-delay: 0.7s;
  }
  &:nth-child(9) {
    transition-delay: 0.8s;
  }
  &:nth-child(10) {
    transition-delay: 0.9s;
  }
}

.main-enter .top-slide .slide,
.main-leave-to .top-slide .slide {
  opacity: 1;
  transform: translateY(0);
}

//####################### Top slider animations ############################################

.main-enter-active .bottom-slide .slide,
.main-leave-active .bottom-slide .slide {
  transition: transform 0.1s ease-in-out;

  &:nth-child(2) {
    transition-delay: 0.1s;
  }
  &:nth-child(3) {
    transition-delay: 0.2s;
  }
  &:nth-child(4) {
    transition-delay: 0.3s;
  }
  &:nth-child(5) {
    transition-delay: 0.4s;
  }
  &:nth-child(6) {
    transition-delay: 0.5s;
  }
  &:nth-child(7) {
    transition-delay: 0.6s;
  }
  &:nth-child(8) {
    transition-delay: 0.7s;
  }
  &:nth-child(9) {
    transition-delay: 0.8s;
  }
  &:nth-child(10) {
    transition-delay: 0.9s;
  }
}

.main-enter .bottom-slide .slide,
.main-leave-to .bottom-slide .slide {
  opacity: 1;
  transform: translateY(0);
}
</style>
