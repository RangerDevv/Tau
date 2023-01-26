<script>
	let user = { loggedIn: false };

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}
</script>

<main>
<div class="flex justify-center pt-12">
    {#if user.loggedIn}
	<button on:click={toggle} class=" w-96 sm:w-[32rem] 2xl:w-[40rem] 2xl:h-80  h-72 bg-slate-700 text-lg text-white font-sans rounded-xl flex justify-center pt-16 ">
		<p class=' text-center text-white w-screen  text-xl 2xl:text-3xl sm:text-2xl font-bold' id='quote'>"When used correctly, flash cards allow students to interact with information in a way that makes it <u class=' underline decoration-red-500 decoration-4'> easier to retain.</u> Flash cards are strategically designed to <u class=' underline decoration-sky-500 decoration-4'>enhance</u> and <u class=' underline decoration-sky-500 decoration-4'>encourage</u> active recall."<br><i class=' underline decoration-yellow-500 decoration-4'>-carsondellosa.com</i></p>
	</button>
{:else}
	<button on:click={toggle} class=" w-96 sm:w-[32rem] 2xl:w-[40rem] 2xl:h-80  h-72 bg-slate-700 text-lg text-white font-sans rounded-xl flex justify-center pt-16 ">
        <p class="text-center w-96 text-2xl pt-12">Click <span class=" underline decoration-orange-600">on the card</span> to know how flashcards can help you <span class=" underline decoration-red-600">learn stuff faster</span></p>
	</button>
{/if}
</div>
</main>

<style>

</style>