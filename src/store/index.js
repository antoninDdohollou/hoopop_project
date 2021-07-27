import {createStore} from 'vuex'



export default createStore({
  state: {
    products: [
      
    ]
  },
  actions: {
    /**
     * Cette procédure permet d'ajouter un objet dans le panier
     * 
     * @param {*} context 
     * @param {*} product 
     */
    addproductToCart (context, product) {
      let productToAdd = context.state.products.find(p => p.productId === product.productId)
      if (!productToAdd) {
        context.commit('pushProductToCart', product)
      } else {
        context.commit('incrementItemQuantity', productToAdd)
      }
    },
    /**
     * Cette procédure permet de décrémenter la quantité d'un objet dans le panier
     * 
     * @param {*} context 
     * @param {*} product 
     */
    removeQuantity (context, product) {
      let productToRemove = context.state.products.find(p => p.productId === product.productId)
      context.commit('decrementQuantity', productToRemove)
    },
    /**
     * Cette procédure permet de supprimer un objet dans le panier
     * 
     * @param {*} context 
     * @param {*} product 
     */
    deleteProduct (context, product) {
      for (let i = 0; i < context.state.products.length; i++) {
        if (context.state.products[i].productId === product.productId) {
          context.commit('deleteProduct', i)
        }
      }
    }
  },
  mutations: {
    /**
     * Cette procédure permet d'ajouter un nouveau produit dans le panier
     * 
     * @param {*} state 
     * @param {*} product 
     */
    pushProductToCart (state,product ) {
      state.products.push({
        productId: product.productId,
        productName: product.productName,
        productPicture: product.productPicture,
        productPrice: product.productPrice,
        quantity: 1
      })
    },
    /**
     * Cette procédure permet d'incrémenter la quantité d'un objet dans le panier
     * 
     * @param {*} state 
     * @param {*} cartItem 
     */
    incrementItemQuantity (state, cartItem) {
      cartItem.quantity++
    },
    /**
     * Cette procédure permet de décrémenter la quantité d'un objet dans le panier
     * 
     * @param {*} state 
     * @param {*} cartItem 
     */
    decrementQuantity (state, cartItem) {
      cartItem.quantity--
    },
    /**
     * Cette procédure permet de supprimer un objet dans le panier
     * 
     * @param {*} state 
     * @param {*} cartItem 
     */
    deleteProduct (state, index) {
      state.products.splice(index, 1);
    }

    }
})