const app = Vue.createApp({
    data() {
        return {
            names: []
        }
    },
    methods: {
        getRandomEmail() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    this.names.push(response.data.response)
                })
        }
    },
    mounted(){
        for (let i = 0; i < 10; i++ ) {
            this.getRandomEmail();
        }
    }
});

app.mount("#root")