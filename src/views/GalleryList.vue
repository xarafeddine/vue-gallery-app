<template>
  <div>
    <h1>Gallery</h1>
    <ImageCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import ImageCard from "@/components/ImageCard.vue";
import GalleryService from "@/services/GalleryService";
export default {
  components: { ImageCard },
  data() {
    return {
      items: [],
    };
  },
  created() {
    GalleryService.getItems()
      .then((r) => {
        console.log(r.data);
        this.items = r.data;
      })
      .catch((error) => console.error(error.message));
  },
};
</script>

<style></style>
