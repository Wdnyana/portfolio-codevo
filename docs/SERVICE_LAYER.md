# ✅ Service Layer Sanity - Complete Implementation

## 📁 File Structure

```
src/lib/
├── services/
│   └── sanity.ts          # Main service layer dengan GROQ queries
└── utils/
    └── sanity.ts          # Image helper utilities
```

---

## 1️⃣ Image Helper (`src/lib/utils/sanity.ts`)

### **Fungsi `urlFor(source)`**

Menghasilkan URL gambar yang dioptimalkan dari Sanity dengan auto-format (WebP, AVIF, dll).

**Usage:**

```typescript
import { urlFor } from '$lib/utils/sanity'

// Basic usage
const imageUrl = urlFor(project.coverImage).width(800).url()

// Responsive dengan crop
const heroUrl = urlFor(post.mainImage)
  .width(1200)
  .height(630)
  .fit('crop')
  .url()

// Auto-format (picks best format)
const optimizedUrl = urlFor(image).auto('format').url()
```

### **Fungsi `getImageDimensions(source)`**

Ekstrak dimensi asli gambar dari asset reference Sanity.

**Usage:**

```typescript
const dims = getImageDimensions(coverImage)
if (dims) {
  console.log(dims.width, dims.height, dims.aspectRatio)
}
```

---

## 2️⃣ Service Layer (`src/lib/services/sanity.ts`)

### **Configuration**

```typescript
const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  useCdn: false,           // Fresh data (dev)
  apiVersion: '2024-03-01'
})
```

### **Fungsi-Fungsi Fetch Data**

#### **`getProjects()`**

Fetch semua project, diurutkan berdasarkan year (descending).

```typescript
const projects = await getProjects()
// Returns: SanityProject[] or []
```

**GROQ Query:**

```groq
*[_type == "project"] | order(year desc) {
  _id, title, slug, subtitle, year,
  description, techStack, coverImage
}
```

---

#### **`getProject(slug)`**

Fetch single project by slug, termasuk full content.

```typescript
const project = await getProject('my-awesome-project')
// Returns: SanityProject or null
```

**GROQ Query:**

```groq
*[_type == "project" && slug.current == $slug][0] {
  _id, title, slug, subtitle, year,
  description, techStack, coverImage, content
}
```

---

#### **`getPosts()`**

Fetch semua blog posts, diurutkan by publishedAt (descending).

```typescript
const posts = await getPosts()
// Returns: SanityPost[] or []
```

**GROQ Query:**

```groq
*[_type == "post"] | order(publishedAt desc) {
  _id, title, slug, publishedAt,
  mainImage, excerpt, tags
}
```

---

#### **`getPost(slug)`**

Fetch single blog post by slug, termasuk full body.

```typescript
const post = await getPost('my-blog-post')
// Returns: SanityPost or null
```

**GROQ Query:**

```groq
*[_type == "post" && slug.current == $slug][0] {
  _id, title, slug, publishedAt,
  mainImage, excerpt, tags, body
}
```

---

#### **`getServices()`**

Fetch semua services.

```typescript
const services = await getServices()
// Returns: SanityService[] or []
```

**GROQ Query:**

```groq
*[_type == "service"] {
  _id, title, description, iconName
}
```

---

## 🛡️ Error Handling

Semua fungsi menggunakan `try-catch` untuk mencegah crash:

```typescript
try {
  return await client.fetch<T>(query, params)
} catch (error) {
  console.error('Failed to fetch:', error)
  return [] // or null untuk single item
}
```

**Behavior:**

- ✅ Jika fetch sukses → return data
- ✅ Jika error → log error + return `[]` (array) atau `null` (single item)
- ✅ App tidak akan crash karena missing data

---

## 📝 TypeScript Interfaces

### **SanityProject**

```typescript
interface SanityProject {
  _id: string
  title: string
  slug: { current: string }
  subtitle?: string
  year?: string
  description?: string
  techStack?: string[]
  coverImage?: SanityImageSource
  content?: PortableTextBlock[]
}
```

### **SanityPost**

```typescript
interface SanityPost {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  mainImage?: SanityImageSource
  excerpt?: string
  tags?: string[]
  body?: PortableTextBlock[]
}
```

### **SanityService**

```typescript
interface SanityService {
  _id: string
  title: string
  description?: string
  iconName?: string
}
```

---

## 🎯 Usage Example di SvelteKit

### **+page.server.ts**

```typescript
import { getProjects } from '$lib/services/sanity'

export const load = async () => {
  const projects = await getProjects()
  return { projects }
}
```

### **+page.svelte**

```svelte
<script lang="ts">
	import { urlFor } from '$lib/utils/sanity'

	let { data } = $props()
</script>

{#each data.projects as project}
	<img src={urlFor(project.coverImage).width(800).url()} alt={project.title} />
	<h2>{project.title}</h2>
{/each}
```

---

## ✅ Best Practices Implemented

1. **Efficient GROQ Queries** - Hanya fetch field yang dibutuhkan, bukan `*[]`
2. **Error Handling** - Semua fungsi pakai try-catch
3. **Type Safety** - Full TypeScript interfaces
4. **Performance** - CDN untuk images, fresh data untuk content
5. **Separation of Concerns** - Image utils terpisah dari service layer
6. **Documentation** - JSDoc comments untuk setiap fungsi

---

**Status: ✅ Production Ready**
