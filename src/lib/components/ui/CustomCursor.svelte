<script lang="ts">
	import { onMount } from 'svelte'
	import gsap from 'gsap'

	let cursorDot: HTMLDivElement
	let cursorRing: HTMLDivElement
	let isHovering = $state(false)
	let isDesktop = $state(false)

	onMount(() => {
		// Check if device supports hover (desktop only)
		const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
		isDesktop = mediaQuery.matches

		if (!isDesktop) return

		// Wait for elements to be bound
		const initCursor = () => {
			if (!cursorDot || !cursorRing) return

			// Initialize GSAP QuickTo for smooth cursor tracking
			const moveDot = gsap.quickTo(cursorDot, 'x', {
				duration: 0.15,
				ease: 'power2.out'
			})

			const moveDotY = gsap.quickTo(cursorDot, 'y', {
				duration: 0.15,
				ease: 'power2.out'
			})

			const moveRing = gsap.quickTo(cursorRing, 'x', {
				duration: 0.6,
				ease: 'power2.out'
			})

			const moveRingY = gsap.quickTo(cursorRing, 'y', {
				duration: 0.6,
				ease: 'power2.out'
			})

			// Mouse move handler
			const handleMouseMove = (e: MouseEvent) => {
				moveDot(e.clientX)
				moveDotY(e.clientY)
				moveRing(e.clientX)
				moveRingY(e.clientY)
			}

			// Event delegation for hover detection (more reliable)
			const handleMouseOver = (e: MouseEvent) => {
				const target = e.target as HTMLElement
				if (
					target.tagName === 'A' ||
					target.tagName === 'BUTTON' ||
					target.classList.contains('hover-trigger') ||
					target.closest('a') ||
					target.closest('button') ||
					target.closest('.hover-trigger')
				) {
					isHovering = true
				}
			}

			const handleMouseOut = (e: MouseEvent) => {
				const target = e.target as HTMLElement
				if (
					target.tagName === 'A' ||
					target.tagName === 'BUTTON' ||
					target.classList.contains('hover-trigger') ||
					target.closest('a') ||
					target.closest('button') ||
					target.closest('.hover-trigger')
				) {
					isHovering = false
				}
			}

			// Add event listeners
			document.addEventListener('mousemove', handleMouseMove)
			document.addEventListener('mouseover', handleMouseOver)
			document.addEventListener('mouseout', handleMouseOut)

			// Cleanup
			return () => {
				document.removeEventListener('mousemove', handleMouseMove)
				document.removeEventListener('mouseover', handleMouseOver)
				document.removeEventListener('mouseout', handleMouseOut)
			}
		}

		// Use requestAnimationFrame to ensure DOM is ready
		const cleanup = requestAnimationFrame(() => {
			const cleanupFn = initCursor()
			if (cleanupFn) {
				return cleanupFn
			}
		})

		// Return cleanup function
		return () => {
			if (typeof cleanup === 'function') {
				cleanup()
			}
		}
	})
</script>

{#if isDesktop}
	<!-- Cursor Dot (instant follow) -->
	<div
		bind:this={cursorDot}
		class="cursor-dot"
		class:hovering={isHovering}
		aria-hidden="true"
	></div>

	<!-- Cursor Ring (delayed follow) -->
	<div
		bind:this={cursorRing}
		class="cursor-ring"
		class:hovering={isHovering}
		aria-hidden="true"
	></div>
{/if}

<style>
	.cursor-dot,
	.cursor-ring {
		position: fixed;
		top: 0;
		left: 0;
		pointer-events: none;
		z-index: 9999;
		will-change: transform;
		transform-origin: center center;
	}

	/* Precision Dot (instant tracking) */
	.cursor-dot {
		width: 6px;
		height: 6px;
		background-color: var(--color-accent);
		border-radius: 50%;
		transform: translate(-50%, -50%);
		transition: opacity 0.2s ease;
		box-shadow: 0 0 8px rgba(59, 130, 246, 0.6);
	}

	.cursor-dot.hovering {
		opacity: 0.6;
		background-color: white;
	}

	/* Delayed Ring (smooth lag) */
	.cursor-ring {
		width: 32px;
		height: 32px;
		border: 1.5px solid var(--color-accent);
		border-radius: 50%;
		transform: translate(-50%, -50%) scale(1);
		transition:
			width 0.3s cubic-bezier(0.16, 1, 0.3, 1),
			height 0.3s cubic-bezier(0.16, 1, 0.3, 1),
			opacity 0.3s ease,
			border-color 0.3s ease;
		opacity: 0.5;
		mix-blend-mode: difference;
	}

	.cursor-ring.hovering {
		width: 48px;
		height: 48px;
		border-color: white;
		opacity: 0.8;
	}

	/* Ensure hardware acceleration */
	@media (hover: hover) and (pointer: fine) {
		.cursor-dot,
		.cursor-ring {
			backface-visibility: hidden;
			-webkit-backface-visibility: hidden;
		}
	}
</style>
