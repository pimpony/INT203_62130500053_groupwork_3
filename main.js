const profile = {
    data() {
        return {
            tasks: [
                { img: "./images/download.jpg", name: 'Pinjang ' },
                { img: "./images/download2.jpg", name: 'xpxiixn ' },
                { img: "./images/download3.jpg", name: 'CAT ' },
            ],


        }
    },
    methods: {
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done
        },
        toggleShow(index) {
            this.tasks[index].show = !this.tasks[index].show
        },
       
    },
    computed: {
        countdone() {
            return this.tasks.filter(t => !t.done).length
        },
       
    }

}
var mounteApp = Vue.createApp(profile).mount('#profile')