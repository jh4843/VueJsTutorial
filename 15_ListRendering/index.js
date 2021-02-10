var example1 = new Vue({
    el: '#example-1',
    data: {
      names: [
        { message: 'Foo1' },
        { message: 'Bar1' }
      ],

      parentMessage: 'Parent',
      items: [
        { message: 'Foo2' },
        { message: 'Bar2' }
      ],

      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }

    }
  })