<script lang="ts">
	import Seo from '$lib/components/atoms/Seo.svelte'
	import { siteConfig } from '$lib/data/site'
</script>

<Seo title="Privacy Policy" description="How Codevo Solutions collects and protects your data." />

<div class="mx-auto max-w-4xl px-6 py-24 lg:px-8">
	<div class="mb-16 space-y-4">
		<span class="font-mono text-sm tracking-wider text-quark-beam uppercase">Legal</span>
		<h1 class="font-display text-4xl font-bold text-white sm:text-5xl">Privacy Policy</h1>
		<p class="text-zinc-400">Last updated: January 2026</p>
	</div>

	<div class="prose prose-lg max-w-none space-y-12 text-zinc-300 prose-invert">
		<section class="space-y-4">
			<h2 class="font-display text-2xl font-bold text-white">1. Introduction</h2>
			<p>
				At {siteConfig.name} ("we," "our," or "us"), we value your privacy. This policy outlines how we
				collect, use, and protect your personal information when you visit our website or use our services.
				By using our platform, you agree to the collection and use of information in accordance with this
				policy.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="font-display text-2xl font-bold text-white">2. Information We Collect</h2>
			<ul class="list-disc space-y-2 pl-5 text-zinc-400">
				<li>
					<strong>Personal Identification:</strong> Name, email address, and phone number when you fill
					out our contact form.
				</li>
				<li>
					<strong>Technical Data:</strong> IP address, browser type, and operating system for system administration
					and analytics.
				</li>
				<li>
					<strong>Usage Data:</strong> Pages visited, time spent, and other diagnostic data to improve
					performance.
				</li>
			</ul>
		</section>

		<section class="space-y-4">
			<h2 class="font-display text-2xl font-bold text-white">3. How We Use Your Data</h2>
			<p>We strictly use your data for:</p>
			<ul class="list-disc space-y-2 pl-5 text-zinc-400">
				<li>Responding to your project inquiries and requests.</li>
				<li>Improving the performance and security of our website.</li>
				<li>Compliance with legal obligations.</li>
			</ul>
			<p>We do <strong>not</strong> sell your personal data to third parties.</p>
		</section>

		<section class="space-y-4">
			<h2 class="font-display text-2xl font-bold text-white">4. Contact Us</h2>
			<p>If you have any questions about this Privacy Policy, please contact us at:</p>
			<p class="font-mono text-quark-beam">hello@codevosolutions.com</p>
		</section>
	</div>
</div>
