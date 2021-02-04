var vm = new Vue({
    el: '#example',
    data: {
      message: 'Hello',

      firstName: 'Foo',
      lastName: 'Bar',

      watchfullName: 'Foo Bar'
    },
    computed: {
      // a computed getter
      reversedMessage: function () {
        // `this` points to the vm instance
        return this.message.split('').reverse().join('')
      },

      fullName: function () {
        return this.firstName + ' ' + this.lastName
      }
    },

    watch: {
        firstName: function (val) {
          this.watchfullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
          this.watchfullName = this.firstName + ' ' + val
        }
    },
    
    methods: {
        methodnow: function () {
            return Date.now()
        }
    },
})