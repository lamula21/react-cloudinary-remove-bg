<script lang="ts">
	import { ImageStatus } from '../types.d'
	import CloudinaryLogo from './CloudinaryLogo.svelte'
	import StepEdit from './StepEdit.svelte'
	import StepUpload from './StepUpload.svelte'
	import { imageStatus } from './store'
</script>

<div class="max-w-xl m-auto grid grid-cols-1 place-content-center w-full h-screen p-4">
	<header class="lex justify-center py-10">
		<h1 class="text-center text-3xl font-bold text-blue-900 tracking-tighter">
			remove<span class="text-blue-600">bg</span>
		</h1>
	</header>

	<main class="">
		{#if $imageStatus === ImageStatus.READY || $imageStatus === ImageStatus.UPLOADING}
			<StepUpload />
		{:else if $imageStatus === ImageStatus.DONE}
			<StepEdit />
		{/if}
	</main>

	<footer class="flex justify-center items-center gap-x-2 font-semibold pt-10">
		Made by <a href="https://cloudinary" target="_blank" rel="noreferrer"> <CloudinaryLogo /></a>
	</footer>
</div>
