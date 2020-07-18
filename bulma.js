Vue.component("modal",{
    template: `
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            
            <div class="box">
                <slot></slot>
            </div>
                
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
    `
 }),
// ,
// Vue.component("message",{
//     props:[
//         "title","body"
//     ],
//     data() {
//         return {
//             isVisible: true
//         }
//     },
//     template: `
//     <article class="message" v-show="isVisible">
//         <div class="message-header">
//             <p>{{ title }}</p>
//             <button class="delete" aria-label="delete" v-on:click="hideModal"></button>
//         </div>
//         <div class="message-body">
//             {{ body }}   
//         </div>
//     </article>
//     `,
//     methods: {
//         hideModal(){
//             this.isVisible = false
//         }
//     },
// }),


new Vue({
    el: "#root",
    data: {

        showmodal: false
        
    },
});