
import {createStore} from 'vuex'



export default createStore({
  state: {
    products: [
      { id: '1', name: 'user 1',},
    ]
  },
  actions: {
        addproductToCart (context, product) {
    //    const cartItem = context.state.cart.find(item => item.id === product.productId)
    //   if(!cartItem){
    //     //ajout du produit dans le panier
        context.commit('pushProductToCart', product.productId)
      // } else {
      //   //incrementation du nombre d'objet dans le panier
      //   context.commit('incrementItemQuantity', cartItem)
      // }
    }
  },
  mutations: {
    pushProductToCart (state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1
      })
    },

    incrementItemQuantity (state, cartItem) {
      cartItem.quantity++
    }

    }
})