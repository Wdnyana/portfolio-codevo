import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger' // Gunakan /dist/ agar aman di Vite

export function animate(
	node: HTMLElement,
	{ type = 'slide', delay = 0, duration = 1, y = 30 } = {},
) {
	// Guard: Hanya jalankan di browser
	if (typeof window === 'undefined') return

	// Register plugin di dalam action untuk memastikan window tersedia
	gsap.registerPlugin(ScrollTrigger)

	let tween: gsap.core.Tween

	if (type === 'slide' || type === 'fade' || type === 'scale') {
		// FORCE animasi dari invisible ke visible
		tween = gsap.fromTo(
			node,
			{
				y: type === 'slide' ? y : 0,
				opacity: 0,
				scale: type === 'scale' ? 0.95 : 1,
			},
			{
				scrollTrigger: {
					trigger: node,
					start: 'top 85%', // Mulai saat elemen masuk 85% viewport
					toggleActions: 'play none none reverse', // Animasi ulang saat scroll balik? ubah 'reverse' jadi 'none' jika ingin sekali saja
				},
				y: 0,
				opacity: 1,
				scale: 1,
				duration: duration,
				delay: delay,
				ease: 'power3.out',
				overwrite: 'auto',
			},
		)
	} else if (type === 'reveal') {
		// Efek Reveal (Masking)
		gsap.set(node, { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' })

		tween = gsap.to(node, {
			scrollTrigger: {
				trigger: node,
				start: 'top 80%',
			},
			clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
			duration: duration * 1.2,
			delay: delay,
			ease: 'power4.inOut',
		})
	}

	return {
		destroy() {
			if (tween) tween.kill()
		},
	}
}
