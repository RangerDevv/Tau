<script>
import Brain from "../images/brain.svelte";

export let title;
export let Desc;

</script>

<main>
   <div class="flex flex-col sm:flex-row justify-center mt-12 gap-80">
    <div class="flex flex-col gap-y-3 pt-12 w-[26rem] 2xl:w-[40rem] order-2 sm:order-1">
        <p class="sm:text-left text-center text-2xl 2xl:text-6xl text-white font-bold">{title}</p>
        <p class="sm:text-left text-center text-lg 2xl:text-3xl text-white">{Desc}</p>
    </div>
    <div class="self-center sm:self-end order-1 sm:order-2 flex justify-center sm:justify-end">
        <Brain />
    </div>
   </div> 
</main>