<template>
  <v-card class="mx-auto mt-1" max-width="98%" elevation="4" rounded>
    <v-list-item>
    <v-list-item-title class="text-truncate"> Royale with Cheese </v-list-item-title>
    <v-list-item-avatar
    tile
    size="20%"
    color="grey">
      <v-img class="fill-height"
      
  lazy-src="https://picsum.photos/id/11/10/6"
  src="https://picsum.photos/id/11/500/300"
></v-img>
    </v-list-item-avatar>
    </v-list-item>
    
    <v-card-actions>
      <v-btn color="blue white--text" small elevation="2" @click="addToCart"> Add to Cart </v-btn>
      <v-spacer></v-spacer>
       <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
         [JULES]

They don't call it a Quarter Pounder with Cheese?
No, they got the metric system there, they wouldn't know what the fuck a Quarter Pounder is.
What'd they call it?
They call it Royale with Cheese.
Royale with Cheese. What'd they call a Big Mac?
Big Mac's a Big Mac, but they call it Le Big Mac.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
  export default {
    methods:{
      addToCart(){
        console.log('item added to cart!')
      }
    },
    data: () => ({
      show: false,
    }),
  }
</script>