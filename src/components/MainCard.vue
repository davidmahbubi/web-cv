<template lang="pug">
b-card.text-center
    img.photo.rounded-circle.my-4(src="/img/david.jpg")
    h4.font-weight-bold.mt-3 David Mahbubi
    hr.separator.my-4
    span.font-weight-bold.job.d-block.mb-5 WEB DEVELOPER
    .custom-card-footer.bg-white
        a(href="https://github.com/davidmahbubi" target="blank")
            i.fab.fa-github
        a(href="https://davidmahbubi.my.id" target="blank")
            i.fas.fa-globe
        a(href="https://www.linkedin.com/in/david-mahbubi-2702b1190/" target="blank")
            i.fab.fa-linkedin-in
        a(href="https://www.instagram.com/david_mhb.id/" target="blank")
            i.fab.fa-instagram
</template>

<style scoped>
.card-body {
  padding: 0 !important;
}

.photo {
  margin: 0 65px;
  max-width: 200px;
  width: 100%;
}

.card {
  border: none;
  border-radius: 0;
  margin: 60px 0;
  background-color: #efbbcf;
  box-shadow: -5px 0 100px rgba(0, 0, 0, 0.2);
  display: inline-block;
  margin-right: -120px;
  padding-top: 25px;
}

.separator {
  max-width: 50px;
  border-width: 2px;
  border-radius: 10px;
  background-color: #8675a9;
}

.job {
  letter-spacing: 5px;
}

.custom-card-footer {
  padding: 10px 0;
}

.custom-card-footer a {
  color: black;
  display: inline-block;
  margin: 0 10px;
  transition: 0.1s;
}

.custom-card-footer a:hover {
  transform: scale(1.2);
}

@media (max-width: 767px) {
  .card {
    width: 100%;
    margin-right: 0;
    box-shadow: none;
  }

  .custom-card-footer {
    box-shadow: -5px 0 100px rgba(0, 0, 0, 0.2);
    display: inline-block;
    border-radius: 50px;
    padding: 10px 20px;
  }
}
</style>
