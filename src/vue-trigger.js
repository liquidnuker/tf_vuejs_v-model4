var checklist = new Vue({
  el: '#app',
  // data: {
  //   checked: true
  // }
  data: {
    itemSet1: [],
    itemSet2: []
  },
  computed: {
    totalItems: function() {
      var total = this.itemSet1.concat(this.itemSet2);
      return total.length;
    }
  }
});

