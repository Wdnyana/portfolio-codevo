import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event)

	// Enterprise Security Headers
	response.headers.set('X-Frame-Options', 'DENY')
	response.headers.set('X-Content-Type-Options', 'nosniff')
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
	response.headers.set(
		'Permissions-Policy',
		'accelerometer=(), camera=(), microphone=(), geolocation=(), gyroscope=(), magnetometer=(), payment=(), usb=()',
	)
	response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
	response.headers.set('X-XSS-Protection', '1; mode=block')

	return response
}
