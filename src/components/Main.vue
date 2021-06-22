<template>
<div id="main-container">
  <h1> Store </h1>
<v-card  v-for="item in this.$store.state.itemList" :key="item.id" class="mx-auto mt-1" max-width="98%" elevation="4" rounded style="background: #824E1A">
    <v-list-item three-line @click="setSelectedIndex(item.id)">
        <v-list-item-avatar
        tile
        left
        max-height="50"
        size="20%"
        color="grey">
        <v-img color='grey' class="fill-height grey"
            :src="require(`@/assets/${item.name}.jpg`)"
            ></v-img>
        </v-list-item-avatar>
    <v-list-item-content>
        <v-list-item-title class="mb-2 "> {{item.name}} </v-list-item-title>
        <v-list-item-subtitle >¥{{item.price}}</v-list-item-subtitle>
    </v-list-item-content>

        
    </v-list-item>
    
    <v-card-actions>
     
     <v-btn icon @click="setSelectedIndex(item.id)">
     <v-icon>{{ item.id === selectedIndex ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    <v-spacer></v-spacer>
  <v-btn color="blue white--text" small elevation="2" @click="addToCart(item, 0)"> Add to Cart 
      <v-icon
        right
        dark
      >
        mdi-cart
      </v-icon>
  </v-btn>
  <v-btn color="green white--text" small elevation="2" @click="addToCart(item, 1)"> +tip 
      <v-icon
        right
        dark
      >
        mdi-hand-heart
      </v-icon>
  </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="item.id === selectedIndex">
        <v-card-text>{{item.description}}</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </div>
</template>

<script>
export default {
    name: 'Main',
    methods: {
        addToCart(item, tier) {
          this.$store.commit("addToCart", {...item, tier: tier} )
        },
        setSelectedIndex(id) {
            if (this.flag === false) {
                this.selectedIndex = id
                this.flag = true;
            } else {
                this.flag = false
                if (id === this.selectedIndex) {
                this.selectedIndex = null
                } else {
                this.selectedIndex = id
                }
            }
        }
        // getImages() {
        //     this.images.push(require(`@/assets/${}`))
        // }
    },
    data: () => ({
      selectedIndex: null,
      flag: false,
      images: []
    }),
    mounted(){
        this.$store.dispatch("fetchItemList");
        // this.getImages();
    },
    
}
</script>

<style scoped>
#scroll-up {
    background: url("../assets/up-arrow.png");
}
</style>



