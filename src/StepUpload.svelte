<script lang="ts">
	import { ImageStatus } from '../types.d'
	import { imageStatus, modifiedImage, originalImage } from './store'
	import Dropzone from 'dropzone'
	import 'dropzone/dist/dropzone.css'
	import { backgroundRemoval } from '@cloudinary/url-gen/actions/effect'
	import { Cloudinary } from '@cloudinary/url-gen'

	import { onMount } from 'svelte'

	// Create Cloudinary instance
	const cloudinary = new Cloudinary({
		cloud: {
			cloudName: 'lamula'
		},
		url: {
			secure: true
		}
	})

	// WHen our component is mounted (rendered), then do
	onMount(() => {
		// Dropzone Setting
		const dropzone = new Dropzone('#dropzone', {
			uploadMultiple: false,
			acceptedFiles: '.jpg, .png, .webp',
			maxFiles: 1
		})

		// Listen events
		dropzone.on('sending', (file, xhr, formData) => {
			imageStatus.set(ImageStatus.UPLOADING)

			// add apiKey, settings to cloudinary
			formData.append('upload_preset', 'ml_default')
			formData.append('timestamp', Date.now() / 1000)
			formData.append('api_key', 948592785846574)
		})

		dropzone.on('success', (file, response) => {
			// public_id for retrieving image from cloudinary, url no need
			const { public_id: publicId, secure_url: url } = response

			// Create image with no Background
			const imageNoBackground = cloudinary.image(publicId).effect(backgroundRemoval())

			// Retrieve the url of this imageNoBackground posted in cloudinary
			modifiedImage.set(imageNoBackground.toURL())

			imageStatus.set(ImageStatus.DONE)
			originalImage.set(url)
		})

		dropzone.on('error', (file, response) => {
			console.log('fatal')
			console.log(response)
		})
	})
</script>

<form
	id="dropzone"
	class="shadow-2xl border-dashed border-2 border-gray-300 rounded-lg aspect-video w-full flex items-center justify-center flex-col"
	action="https://api.cloudinary.com/v1_1/lamula/image/upload"
>
	{#if $imageStatus === ImageStatus.READY}
		<button class="pointer-events-none bg-blue-600 rounded-full text-white text-sm px-6 py-4">
			Upload files
		</button>
		<strong class="text0lg mt-4 text-gray-800">or drop a file</strong>
	{/if}

	{#if $imageStatus === ImageStatus.UPLOADING}
		<strong class="text-lg mt-4 text-gray-800"> Uploading files... </strong>
	{/if}
</form>
