<template>
  <div class="container">
    <div class="gallery">
      <a target="_blank" :href="item.src">
        <img :src="item.image" :alt="item.name" width="600" height="400" />
      </a>
      <div class="desc">{{ item.name }}</div>
    </div>
    <div>
      <img
        v-for="type in item.types"
        :key="type.image"
        :src="type.image"
        width="40"
        height="auto"
      />
    </div>
    <p>{{ item.description }}</p>
  </div>
</template>

<script>
import GalleryService from "@/services/GalleryService";
export default {
  props: ["id"],
  data() {
    return {
      item: {},
    };
  },
  created() {
    console.log(this.id);
    GalleryService.getItem(this.id)
      .then((response) => {
        this.item = response.data;
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
};
</script>

<style>
.container {
  margin: auto;
  padding: 50px 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
