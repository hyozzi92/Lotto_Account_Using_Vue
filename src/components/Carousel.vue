<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div  class="d-block w-100" alt="...">1</div>
      </div>
      <div class="carousel-item">
        <div  class="d-block w-100" alt="...">2</div>
      </div>
      <div class="carousel-item">
        <div  class="d-block w-100" alt="..."></div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "TheCarousel"
}
</script>

<style scoped>
#carouselExampleControls {
  width: 100%;
  height: 400px;
  margin-top: 30px;
  background-color: pink;
}
</style>