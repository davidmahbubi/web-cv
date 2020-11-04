<template lang="pug">
    b-navbar.py-4.bg-white(toggleable="lg" type="light" sticky)
        b-container
            b-navbar-brand.font-weight-bold(href="/")
                span.text-custom-primary David 
                | Mahbubi
            b-navbar-toggle(target="nav-collapse")
            b-collapse#nav-collapse(is-nav)            
                b-navbar-nav.ml-auto.font-weight-bold
                    b-nav-item.mr-3(v-for="(link, index) in navLinks" :key="index")
                        router-link(:to="{name: link.pathName}") {{ link.label }}
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navLinks: [
        {
          label: 'Home',
          pathName: 'Home'
        },
        {
          label: 'Proyek',
          pathName: 'ProjectStorefront'
        },
        {
          label: 'Kontak',
          pathName: 'Contact'
        }
      ]
    };
  }
};
</script>

<style scoped>
.nav-item a {
  text-decoration: none;
  color: gray;
  font-weight: 600;
}

.router-link-exact-active {
  color: #e84855 !important;
  padding-bottom: 8px;
}
</style>
