<template>
    <div>
    	我是about
	  	<ul class="nav">
	        <router-link to="/about/" tag="li" active-class="active" exact>about1</router-link>
	        <router-link to="/about/about2" tag="li">about2</router-link>
	    </ul>
	    <router-view class="center" mode="out-in"></router-view>
    </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
