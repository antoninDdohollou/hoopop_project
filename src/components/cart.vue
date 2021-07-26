<template>
    <div class="container py-5">
        <div class="row text-center text-black mb-5">
            <div class="col-lg-7 mx-auto">
                <h1 class="display-4">Product List</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8 mx-auto"  v-for="data in $store.state.products" v-bind:key="data.productId">
                <ul class="list-group shadow">
                    <li class="list-group-item">
                        <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                            <div class="media-body order-2 order-lg-1">
                                <h5 class="mt-0 font-weight-bold mb-2">{{data.productName}}</h5>
                                <div class="d-flex align-items-center justify-content-between mt-1">
                                    <h6 class="font-weight-bold my-2">{{data.productPrice}}</h6>
                                    <h6 class="font-weight-bold my-2">{{data.quantity}}</h6>
                                </div>
                            </div>
                            <img :src="data.productPicture" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
//import json from '../../products.json'

export default {
    name: 'cart',
    props: {
    },

    // data(){
    //     return{
    //         productsList: json
    //     }
    // },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    background: linear-gradient(to right, #c04848, #480048);
    min-height: 100vh
}


img {
    height: 170px;
    width: 140px
}
</style>
