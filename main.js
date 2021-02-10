const profile = {
    data() {
        return {
            tasks: [
                { img: "./images/download.jpg", name: 'pinjang' },
                { img: "./images/download2.jpg", name: 'xxpxiixn' },

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