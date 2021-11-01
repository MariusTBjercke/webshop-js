<template>
  <div class="home">
    <router-link to="admin"><button>Administrer</button></router-link>
    <cat-navigation @category="getCategory"></cat-navigation>
    <div class="products" v-for="(product, index) in products" v-bind:key="index">{{ product }}</div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, updateDoc, onSnapshot, addDoc, collection, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../firebase";
import CatNavigation from '../components/CatNavigation.vue';

export default {
  name: 'Home',
  data: function() {
    return {
      chosenCategory: {
        name: null,
        id: null
      },
      products: [],
    }
  },
  created: function() {
    this.getItemsFromCategory();
  },
  methods: {
    getCategory: function(categoryData) {
      this.chosenCategory.name = categoryData.name;
      this.chosenCategory.id = categoryData.id;
      this.getItemsFromCategory();
    },
    getItemsFromCategory: function() {
      // Get data from Firestore
      onSnapshot(doc(db, "shop", "products"), (doc) => {
        let products = doc.data().items;
        this.products = []; // Reset array
        products.forEach(item => {
          if (this.chosenCategory.id === item.categoryID) {
            this.products.push(item.title);
          }
        });
      });
    }
  },
  components: {
    CatNavigation
  }
}
</script>