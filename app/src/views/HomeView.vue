<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<GameCard v-for="event in events" :key="event.id" :event="event" />
	</div>
</template>

<script>
// @ is an alias to /src
import GameCard from "@/components/GameCard.vue";

export default {
	name: "HomeView",
	components: {
		GameCard,
	},
	data() {
		return {
			events: [
				{
					game: "USA vs Netherlands",
					id: 123,
				},
				{
					game: "Japan vs Korea",
					id: 234,
				},
			],
		};
	},
};
</script>
