<template>
    <div class="container py-5">
        <div class="row text-center text-white mb-5">
            <div class="col-lg-7 mx-auto">
                <h1 class="display-4">Panier</h1>
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
                                    <h6 class="font-weight-bold my-2">{{data.productPrice/100}} €</h6>
                                </div>
                                <div class="d-flex align-items-right justify-content-between mt-1">
                                    <b-button variant="primary" @click="removeQuantity(data)">-</b-button>
                                    <h6 class="font-weight-bold ">{{data.quantity}}</h6>
                                    <b-button variant="primary" @click="addQuantity(data)">+</b-button>
                                    <b-button variant="danger" @click="deleteProduct(data)">Supprimer</b-button>
                                    
                                </div>
                            </div>
                            <img :src="data.productPicture" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2">
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-lg-8 mx-auto">
                <ul class="list-group shadow">
                    <li class="list-group-item">
                        <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                            <div class="media-body order-2 order-lg-1">
                                <h5 class="mt-0 font-weight-bold mb-2">total: {{totalPrice}} €</h5>
                            </div>
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
    methods:{
        /**
         * Cette méthode permet d'appeler la procédure d'incrémentation de quantité
         * 
         *  @param {*} product 
         */
        addQuantity (product) {
            this.$store.dispatch('addproductToCart', product)
        },
        /**
         * Cette méthode permet d'appeler la procédure de décrémentation de quantité
         * 
         *  @param {*} product 
         */
        removeQuantity (product) {
            this.$store.dispatch('removeQuantity', product)
        },
        /**
         * Cette méthode permet d'appeler la procédure de suppression d'un produit
         * 
         *  @param {*} product 
         */
        deleteProduct (product) {
            this.$store.dispatch('deleteProduct', product)
        }
        
    },
    
    computed: {
        /**
         * Cette fonction permet de changer le prix et de le passer en décimale car les données sont stockés en centimes (ex 150 => 1,50)
         * 
         *  @param {*} product
         *  @returns newPrice
         */
        price (oldPrice) {
            return oldPrice/100
        },
        /**
         * Cette fonction permet de changer le prix et de le passer en décimale et de faire le total du panier
         * 
         *  @returns total
         */
        totalPrice () {
            let total = 0
            this.$store.state.products.forEach(p => total = total + (p.productPrice * p.quantity));
            total = total/100
            return total
        }
    }

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
