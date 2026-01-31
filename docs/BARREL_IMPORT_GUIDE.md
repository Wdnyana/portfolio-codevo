# 📦 Barrel File Pattern - Import Guide

## ✅ Clean Import Pattern

Sebelum menggunakan barrel file pattern, import terlihat seperti ini:

```typescript
// ❌ SEBELUM: Import panjang dan verbose
import Seo from '$lib/components/atoms/Seo.svelte'
import BentoCard from '$lib/components/molecules/BentoCard.svelte'
import Hero from '$lib/components/organisms/Hero.svelte'
import Footer from '$lib/components/organisms/Footer.svelte'
import { cn } from '$lib/utils/cn'
import { animate } from '$lib/actions/animate'
```

Dengan barrel file (`src/lib/index.ts`), import menjadi:

```typescript
// ✅ SESUDAH: Clean dan concise
import { Seo, BentoCard, Hero, Footer, cn, animate } from '$lib'
```

---

## 📋 Available Exports

### **Atoms**

```typescript
import { Seo, PortableText, SkipLink } from '$lib'
import { PortableTextComponents } from '$lib'
```

### **Molecules**

```typescript
import { BentoCard } from '$lib'
```

### **Organisms**

```typescript
import {
  ContactForm,
  Footer,
  Hero,
  Logo,
  Navbar,
  PortableTextRenderer
} from '$lib'
```

### **Utils**

```typescript
import {
  cn,                      // Class name utility
  urlFor,                  // Sanity image URLs
  getImageDimensions,      // Image dimension extractor
  generateSchemas,         // SEO schema generator
  organizationSchema,      // Organization schema
  websiteSchema,           // Website schema
  serviceSchema,           // Service schema
  articleSchema            // Article schema
} from '$lib'
```

### **Actions**

```typescript
import { animate, spotlight } from '$lib'
```

---

## 🚫 Server-Side Exclusions

**PENTING:** Barrel file `$lib/index.ts` **TIDAK** me-re-export file server-side seperti:

- ❌ `services/sanity.ts` (Sanity client untuk server-side)
- ❌ Code lain yang hanya untuk server

**Untuk server-side imports, gunakan path langsung:**

```typescript
// ✅ CORRECT: Server-side import langsung
import { getProjects, getPosts } from '$lib/services/sanity'
```

```typescript
// ❌ WRONG: Jangan import dari barrel file
import { getProjects } from '$lib' // Error! Not exported
```

---

## 📝 Migration Examples

### **1. Homepage (`src/routes/+page.svelte`)**

**Sebelum:**

```svelte
<script lang="ts">
	import Seo from '$lib/components/atoms/Seo.svelte'
	import BentoCard from '$lib/components/molecules/BentoCard.svelte'
	import Hero from '$lib/components/organisms/Hero.svelte'
	import { animate } from '$lib/actions/animate'
</script>
```

**Sesudah:**

```svelte
<script lang="ts">
	import { Seo, BentoCard, Hero, animate } from '$lib'
</script>
```

---

### **2. Services Page (`src/routes/services/+page.svelte`)**

**Sebelum:**

```svelte
<script lang="ts">
	import BentoCard from '$lib/components/molecules/BentoCard.svelte'
	import Seo from '$lib/components/atoms/Seo.svelte'
	import { animate } from '$lib/actions/animate'
</script>
```

**Sesudah:**

```svelte
<script lang="ts">
	import { BentoCard, Seo, animate } from '$lib'
</script>
```

---

### **3. Server Load Function (`+page.server.ts`)**

**Tetap gunakan import langsung untuk server-side code:**

```typescript
// ✅ CORRECT
import { getProjects } from '$lib/services/sanity'

export const load = async () => {
  const projects = await getProjects()
  return { projects }
}
```

---

## ⚙️ Portable Text Components

Untuk komponen Portable Text, gunakan namespace import:

```svelte
<script lang="ts">
	import { PortableText } from '@portabletext/svelte'
	import { PortableTextComponents } from '$lib'

	let { content } = $props()
</script>

<PortableText
	value={content}
	components={{
		marks: {
			strong: PortableTextComponents.Strong,
			em: PortableTextComponents.Em,
			code: PortableTextComponents.Code,
			link: PortableTextComponents.Link,
		},
		block: {
			normal: PortableTextComponents.Normal,
			h2: (props) => PortableTextComponents.Heading({ level: 'h2', ...props }),
			h3: (props) => PortableTextComponents.Heading({ level: 'h3', ...props }),
			blockquote: PortableTextComponents.Blockquote,
		},
	}}
/>
```

---

## 🎯 Best Practices

1. **Client Components:** Import dari `$lib`

   ```typescript
   import { Seo, BentoCard } from '$lib'
   ```

2. **Server-Side Services:** Import langsung

   ```typescript
   import { getProjects } from '$lib/services/sanity'
   ```

3. **Type Imports:** Tetap gunakan path langsung jika needed

   ```typescript
   import type { SanityProject } from '$lib/services/sanity'
   ```

4. **Group Imports:** Grup berdasarkan kategori

   ```typescript
   // Components
   import { Seo, Hero, Footer } from '$lib'

   // Utils & Actions
   import { cn, animate } from '$lib'
   ```

---

## ✅ Benefits

- ✨ **Cleaner Code:** Imports lebih singkat dan readable
- 🚀 **Better DX:** Auto-completion lebih mudah
- 🔒 **Security:** Server-side code tidak accidentally leaked ke client
- 📦 **Centralized:** Satu titik export untuk semua client code
- 🛠️ **Maintainable:** Mudah track dependencies

---

**Status: Ready to Use! 🚀**
