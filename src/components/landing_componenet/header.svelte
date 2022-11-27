<script>
    import Headeranim from "../images/animations/landing/Headeranim.svelte";
</script>

<main>
    <div class="text-white flex flex-row gap-32 pt-10 h-screem justify-center 2xl:h-96 w-screen">
    <div class=" flex flex-col gap-7">
        <p class=" text-5xl sm:text-5xl 2xl:text-7xl font-bold text-left">Work <span class=" underline decoration-red-600">Smarter</span>, <br>Not Harder.</p>
        <p class=" text-xl text-left 2xl:text-2xl">With Tau, you can study faster, and smarter.</p>
        <div class="flex flex-row gap-4 pt-1 justify-left">
            <button class=" w-20 h-10 2xl:w-32 2xl:h-16 bg-blue-700 text-base rounded-md 2xl:text-xl 2xl:rounded-xl">Sign Up</button>
            <button class=" w-20 h-10 2xl:w-32 2xl:h-16 bg-green-700 text-base rounded-md 2xl:text-xl 2xl:rounded-xl">Login</button>
        </div>
    </div>
    <div class="flex justify-end items-end">
        <Headeranim />
    </div>
</div>

</main>

<style>

</style>