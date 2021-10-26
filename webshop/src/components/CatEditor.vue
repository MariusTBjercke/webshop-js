<template>
    
    <div>
        <div class="editor-navigation">
            <h5>Kategorier:</h5>
            <h6>Du kan slette kategorier ved å holde musepekeren over en kategori, for så å trykke på X.</h6>
            <div class="navbar-container">
                <div class="category" v-for="(category, index) in categories" v-bind:key="index" @mouseover="showDel(index)" @mouseleave="hideDel(index)"><div ref="delBtn" class="delete-category" @click="delCat(category)">x</div>{{ category }}</div>
            </div>
            <input type="text" v-model="input.addCategory">
            <input @click="addCategory" type="submit" value="Legg til kategori">
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
        addCategory: function() {
            const categoriesRef = doc(db, "shop", "products");
            updateDoc(categoriesRef, {
                categories: arrayUnion(this.input.addCategory),
            });
            // Clear input after submit
            this.input.addCategory = "";
        },
        fetchData() {
            onSnapshot(doc(db, "shop", "products"), (doc) => {
                this.categories = doc.data().categories;
            });
        },
        showDel: function(index) {
            this.$refs.delBtn[index].style.display = "block";
        },
        hideDel: function(index) {
            this.$refs.delBtn[index].style.display = "none";
        },
        delCat: function(category) {
            const categoriesRef = doc(db, "shop", "products");
            updateDoc(categoriesRef, {
                categories: arrayRemove(category)
            });
        }
    }
}

</script>

<style lang="scss">

.editor-navigation {
    
    .navbar-container {
        display: flex;
        flex-wrap: wrap;
        .category {
            position: relative;
            padding: 10px 20px;
            margin: 5px 5px 5px 0;
            border: 1px solid black;

            .delete-category {
                position: absolute;
                right: 5px;
                top: 0px;
                color: red;
                font-weight: bold;
                cursor: pointer;
                display: none;
            }
        }
    }

    h5 {
        margin: 10px 0 10px 0;
    }

    h6 {
        margin: 10px 0 10px 0;
    }

    input {
        margin: 10px 0 10px 0;
        padding: 5px;
    }

}

</style>