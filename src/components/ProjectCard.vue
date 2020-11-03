<template lang="pug">
    .project-card.shadow.p-3
        img.project-image.img-thumbnail.mt-2(:src="image")
        h5.my-4.font-weight-bold {{ title }}
        p.mx-2 {{ content || 'Tidak ada deskripsi' }}
        .stacks
            span.custom-badge(v-for="(stack, index) in stacks" :key="index") {{ stack }}
        a(:href="linkLeft" target="blank" v-if="linkLeft") Demo | 
        a(:href="linkRight" target="blank" v-if="linkRight") GitHub
        span(v-if="!linkLeft && !linkRight")
            i.fas.fa-lock.mr-2
            | Proyek Close Source
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: String,
    content: String,
    linkLeft: {
      type: String,
      default: '#'
    },
    linkRight: {
      type: String,
      default: '#'
    },
    stacks: Array,
    image: String
  }
};
</script>

<style scoped>
.project-card {
  text-align: center;
}

.project-image {
  width: 100%;
  max-width: 350px;
}

.stacks {
  margin-bottom: 13px;
}

.custom-badge {
  background-color: #e84855;
  color: white;
  padding: 2px 5px;
  font-size: 15px;
  margin: 0 2px;
  border-radius: 3px;
}
</style>
