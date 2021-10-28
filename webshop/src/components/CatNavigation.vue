<template>
    
    <div>
        <div class="navigation">
            <div class="navbar-container">
                <div class="category" v-for="(category, index) in categories" v-bind:key="index" @click="chooseCategory(category, index)">{{ category }}</div>
            </div>
            <h4>Valgt kategori: {{ chosenCategory }}</h4>
        </div>
    </div>

</template>

<script>
import { doc, setDoc, updateDoc, onSnapshot, addDoc, collection, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../firebase";

export default {
    data: function() {
        return {
            categories: null,
            chosenCategory: 'Ingen',
            chosenCategoryID: null,
            input: {
                addCategory: "",
            },
        }
    },
    created: function() {
        this.fetchData();
    },
    methods: {
        fetchData: function() {
            onSnapshot(doc(db, "shop", "products"), (doc) => {
                this.categories = doc.data().categories;
            });
        },
        chooseCategory: function(category, index) {
            this.chosenCategory = category;
            this.chosenCategoryID = index;
            this.$emit('category', this.chosenCategoryID);
        }
    }
}

</script>

<style lang="scss">

.navigation {
    
    .navbar-container {
        display: flex;
        flex-wrap: wrap;
        .category {
            position: relative;
            padding: 10px 20px;
            margin: 5px 5px 5px 0;
            border: 1px solid black;
            cursor: pointer;
        }
    }

}

</style>