//Reusable mixin that toggles a border on click. Turn the border on when the user clicks the image and turn the border off when they click again

export default {
  data() {
    return {
      hasBorder: false
    };
  },
  methods: {
    toggleBorder() {
      this.hasBorder = !this.hasBorder;
    }
  }
};
