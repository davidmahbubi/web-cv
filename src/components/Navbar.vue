<template lang="pug">
    b-navbar.py-4.bg-white(toggleable="lg" type="light" sticky)
        b-container
            b-navbar-brand.font-weight-bold(href="#")
                span.text-custom-primary David 
                | Mahbubi
            b-navbar-toggle(target="nav-collapse")
            b-collapse#nav-collapse(is-nav)            
                b-navbar-nav.ml-auto.font-weight-bold
                    b-nav-item(href="#") Home
                    b-nav-item(href="#") Proyek
                    b-nav-item(href="#") Contact
</template>
