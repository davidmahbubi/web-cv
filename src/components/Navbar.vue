<template lang="pug">
    b-navbar.py-4.bg-white(toggleable="lg" type="light" sticky)
        b-container
            b-navbar-brand.font-weight-bold(href="#")
                span.text-custom-primary David 
                | Mahbubi
            b-navbar-toggle(target="nav-collapse")
            b-collapse#nav-collapse(is-nav)            
                b-navbar-nav.ml-auto.font-weight-bold
                    b-nav-item
                        router-link(:to="{name: 'Home'}") Home
                    b-nav-item
                        router-link(:to="{name: 'ProjectStorefront'}") Proyek
                    b-nav-item
                        router-link(:to="{name: 'Home'}") Contact
</template>

<style scoped>
.nav-item a {
  text-decoration: none;
  color: gray;
  font-weight: 600;
}
</style>
