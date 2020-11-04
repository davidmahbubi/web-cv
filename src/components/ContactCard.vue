<template lang="pug">
    b-card.shadow.border-0
        b-card-body
            h1.contact-icon.text-custom-primary-alt
                i(:class="icon")
            h1.font-weight-bold.my-3 {{ title }}
            h5.my-3 {{ content }}
            a.btn.btn-custom-primary.btn-primary-rounded.btn-dimension-primary.mt-2.contact-bt(:href="link" target="blank")
                | {{ buttonText }}
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    content: String,
    link: String,
    buttonText: String
  }
};
</script>

<style scoped>
.contact-icon {
  font-size: 100px;
}

.contact-bt {
  font-family: 'Nunito';
}
</style>
