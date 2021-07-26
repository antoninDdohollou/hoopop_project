import {createStore} from 'vuex'



export default createStore({
  state: {
    products: [
      
    ]
  },
  actions: {
        addproductToCart (context, product) {
          
          let trouve=false
          for (let i = 0; i < context.state.products.length; i++) {
            console.log(i)
            if (context.state.products[i].productId === product.productId) {
              console.log("qte +1")
              context.commit('incrementItemQuantity', context.state.products[i])
              trouve = true
              break;  
            }
              
            
          }
          console.log(trouve)
          if(trouve === false){
            //ajout du produit dans le panier
            console.log("ajout")
            context.commit('pushProductToCart', product)
          }

      
    }
  },
  mutations: {
    pushProductToCart (state,product ) {
      state.products.push({
        productId: product.productId,
        productName: product.productName,
        productPicture: product.productPicture,
        productPrice: product.productPrice,
        quantity: 1
      })
    },

    incrementItemQuantity (state, cartItem) {
      cartItem.quantity++
    }

    }
})