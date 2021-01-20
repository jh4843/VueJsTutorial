// index.js



let model = {
    message: "Hello Vue!"
};

let vueInstance = new Vue({
    el: '#app',
    data: model
});

vueInstance.message = 'Welcome to my world!!';

