<script>
    import Focus from "../images/animations/landing/focus.svelte";
    import Free from "../images/animations/landing/free.svelte";
    import Easy from "../images/animations/landing/easy.svelte";
</script>

<main>
    <div class="flex flex-col pt-16">
        <div class=" flex justify-center">
            <p class="w-96 text-white font-extrabold text-5xl text-center">Study freely, <span class=" underline decoration-red-600">no distraction.</span> It's our <span class=" text-yellow-300">promise!</span></p>
        </div>
        <div class="flex justify-center w-screen pt-10 ">
            <div class=" grid sm:grid-cols-3 gap-2 grid-cols-1">
                    <div class="w-96 h-72 bg-slate-900 gap-y-5 rounded-lg flex flex-col justify-center text-white items-center">
                        <Focus />
                        <p class="text-white text-center z-50">0 ads so that you can spend your time productively with no distractions.</p>
                    </div>
                    <div class="w-96 h-72 bg-slate-900 gap-y-5 rounded-lg flex flex-col justify-center text-white items-center">
                        <Free />
                        <p class="text-white text-center">Free forever so that you dont have to worry about money.</p>
                    </div>            
                    <div class="w-96 h-72 bg-slate-900 gap-y-5 rounded-lg flex flex-col justify-center text-white items-center">
                        <Easy />
                        <p class="text-white text-center">Easy to use UI so that you dont have to worry about studying the website itself.</p>
                    </div>
            </div>
            </div>
    </div>
</main>

<style>

</style>