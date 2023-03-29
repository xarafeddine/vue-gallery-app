<template>
  <router-link
    class=""
    :to="{ name: 'item-details', params: { id: item.id } }"
  >
    <div class="gallery">
      <a target="_blank" :href="item.src">
        <img :src="item.image" :alt="item.name" width="600" height="400" />
      </a>
      <div class="desc">{{ item.name }}</div>
    </div>
    
  </router-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
div.gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
}

div.gallery:hover {
  border: 1px solid #777;
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2) 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 15px;
  text-align: center;
}
</style>
