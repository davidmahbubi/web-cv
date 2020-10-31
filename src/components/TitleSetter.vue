<script>
export default {
  props: {
    title: String
  },
  created() {
    document.title = this.title;
  }
};
</script>
