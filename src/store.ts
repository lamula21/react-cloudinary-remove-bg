// Store is a Global State cna be use anywhere

import { writable } from 'svelte/store'
import { ImageStatus } from '../types.d'

// Global states that can be imported anywhere => Substan from React
export const imageStatus = writable(ImageStatus.READY)
export const originalImage = writable(null)
export const modifiedImage = writable(null)
