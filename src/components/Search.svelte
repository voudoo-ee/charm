<script>
    import './Search.css';
</script>


<div class="pt-16">
    <div class="form-control w-96 group relative">
        <div class="translate-y-7 right-[3.3rem] bottom-[3.35rem] z-20 absolute">
            <div class="el transition opacity-0 group-focus-within:opacity-100 duration-300"></div>
            <div class="el transition opacity-0 group-focus-within:opacity-100 duration-500"></div>
            <div class="el transition opacity-0 group-focus-within:opacity-100 duration-1000"></div>
        </div>
        <input type="text" placeholder="Otsi tooteid, nt juust, mahl..."
               pattern={"[a-zA-Z0-9]{2,}[']{0,}[a-zA-Z0-9]"} minLength={1} maxLength={35}
               class="input font-monaSans rounded-2xl input-bordered focus:outline-0 z-10 focus:shadow-xl" />
    </div>
</div>
