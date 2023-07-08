<script lang="ts">
	import 'two-up-element'
	import { originalImage, modifiedImage } from './store'

	// Fixing error 423: image is rendered before imageNoBackground is done in cloudinary
	// Possible fixing: Promise
	let processingImage = true
	let tries = 0
	let intervalId: any

	// useEffect
	$: {
		if (processingImage) {
			clearInterval(intervalId)
			intervalId = setInterval(() => {
				tries++
			}, 500)
		}
	}
</script>

<two-up>
	<img src={$originalImage} alt="con fondo" />
	<img
		on:load={() => (processingImage = false)}
		on:error={() => (processingImage = true)}
		src={`${$modifiedImage}&t=${tries}`}
		alt="sin fondo"
	/>
</two-up>

<a
	download
	href={$modifiedImage}
	class="block bg-blue-500 hover:bg-blue-700 text-xl text-center w-full font-bold text-white rounded-full px-4 py-2 mt-10"
>
	Download Image with No Background
</a>
