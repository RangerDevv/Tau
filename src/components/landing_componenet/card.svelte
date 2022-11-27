<script>
	let user = { loggedIn: false };

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}
</script>

<main>
<div class="flex justify-center pt-12">
    {#if user.loggedIn}
	<button on:click={toggle} class=" w-96 sm:w-[32rem] h-72 bg-slate-700 text-lg text-white font-sans rounded-xl flex justify-center pt-32">
		<p class=" text-center w-96"></p>
	</button>
{:else}
	<button on:click={toggle} class="w-96 sm:w-[32rem] h-72 bg-slate-700 text-xl text-white font-sans rounded-xl flex justify-center pt-32">
        <p class="text-center w-96">Click <span class=" underline decoration-orange-600">on the card</span> to know how flashcards can help you <span class=" underline decoration-red-600">learn stuff faster</span></p>
	</button>
{/if}
</div>
</main>

<style>

</style>