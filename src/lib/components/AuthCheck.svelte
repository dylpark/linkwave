<script>
    import { user } from '$lib/firebase';
</script>

{#if user}
    <slot />
{:else}
    <p class="text-error my-10">Log in to view this page</p>
    <a class="btn btn-primary" href="/login">
        Sign in
    </a>
{/if}