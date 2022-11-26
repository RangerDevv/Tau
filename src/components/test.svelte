<script>
 let count = 0
 function addNo() {
    count += 1
 }
</script>

<main>
    <button on:click={addNo} class=" w-20 h-10 bg-blue-700 rounded-md text-white">{count}</button>
</main>

<style>

</style>