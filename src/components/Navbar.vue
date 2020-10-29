<template lang="pug">
    b-navbar.py-4(toggleable="lg" type="light")
        b-container
            b-navbar-brand.font-weight-bold(href="#") David Mahbubi
            b-navbar-toggle(target="nav-collapse")
            b-collapse#nav-collapse(is-nav)            
                b-navbar-nav.ml-auto.font-weight-bold
                    b-nav-item(href="#") Home
                    b-nav-item(href="#") About
                    b-nav-item(href="#") Contact
</template>
