<template>
<div id="app">
    <nav />
        {{ message }}
</div>
</template>

<script>
export default {
    el: '#app',
    components: [nav],
    data: {
        message: 'Hello Vue!'
    } 
}
</script>  