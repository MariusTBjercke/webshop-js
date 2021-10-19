<template>
    
    <div class="box">
        
        <p>

            <slot></slot>

        </p>

    </div>

</template>

<script>
export default {
    
}
</script>

<style lang="scss">

.box {
    background: red;
    padding: 20px;
    border: 1px solid black;

    p {
        border: 1px solid black;
    }
}

</style>