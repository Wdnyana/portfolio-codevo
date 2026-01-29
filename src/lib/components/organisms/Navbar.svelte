<script lang="ts">
	import { page } from '$app/stores'
	import { navItems } from '$lib/data/navigation'
	import Logo from '$lib/components/organisms/Logo.svelte'
	import { cn } from '$lib/utils/cn'
	import { Menu, X } from 'lucide-svelte'
	import { fly, fade } from 'svelte/transition'

	let isMenuOpen = false

	function toggleMenu() {
		isMenuOpen = !isMenuOpen
	}

	function closeMenu() {
		isMenuOpen = false
	}
</script>

<header
	class="fixed top-0 z-50 w-full border-b border-white/5 bg-void/80 backdrop-blur-md transition-all duration-300"
>
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
		<!-- Logo -->
		<div class="shrink-0">
			<Logo className="text-2xl" />
		</div>

		<!-- Desktop Navigation -->
		<nav class="hidden md:flex md:gap-8">
			{#each navItems as item (item.href)}
				<a
					href={item.href}
					class={cn(
						'text-sm font-medium tracking-wider transition-colors duration-200 hover:text-quark-beam font-display',
						$page.url.pathname === item.href ? 'text-quark-beam' : 'text-primary/80',
					)}
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<!-- Mobile Menu Button -->
		<div class="flex md:hidden">
			<button
				type="button"
				class="text-primary hover:text-white focus:outline-none"
				onclick={toggleMenu}
				aria-label="Toggle menu"
			>
				{#if isMenuOpen}
					<X aria-hidden="true" class="h-6 w-6" />
				{:else}
					<Menu aria-hidden="true" class="h-6 w-6" />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Navigation Menu -->
	{#if isMenuOpen}
		<div
			class="absolute top-16 left-0 w-full border-b border-white/5 bg-void/95 backdrop-blur-xl md:hidden"
			transition:fly={{ y: -10, duration: 200 }}
		>
			<div class="space-y-1 px-4 py-6 sm:px-6">
				{#each navItems as item (item.href)}
					<a
						href={item.href}
						class={cn(
							'block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-white/5 hover:text-quark-beam',
							$page.url.pathname === item.href ? 'bg-white/5 text-quark-beam' : 'text-primary',
						)}
						onclick={closeMenu}
					>
						{item.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</header>
