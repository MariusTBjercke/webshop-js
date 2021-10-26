<template>
    
    <div>
        <div class="navigation">
            <div class="navbar-container">
                <div class="category" v-for="(category, index) in categories" v-bind:key="index">{{ category }}</div>
            </div>
        </div>
    </div>

</template>

<script>
import { doc, setDoc, updateDoc, onSnapshot, addDoc, collection, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../firebase";

export default {
    data() {
        return {
            categories: null,
            input: {
                addCategory: "",
            },
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            onSnapshot(doc(db, "shop", "products"), (doc) => {
                this.categories = doc.data().categories;
            });
        },
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
        }
    }

}

</style>