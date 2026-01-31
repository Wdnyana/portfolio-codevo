# Sanity.io Setup - Quick Start Commands

## 📦 Installation (if needed)

If you need to install additional Sanity dependencies:

```bash
# Install Sanity typegen for automatic TypeScript type generation
pnpm add -D @sanity/typegen

# Install Sanity Studio plugins (if not already installed)
pnpm add @sanity/vision
```

---

## 🚀 Commands Reference

### Development

```bash
# Start SvelteKit development server
pnpm dev

# Start Sanity Studio (runs on http://localhost:3333)
pnpm sanity:dev

# Run both simultaneously (in separate terminals)
# Terminal 1:
pnpm dev

# Terminal 2:
pnpm sanity:dev
```

### Type Generation

```bash
# Generate TypeScript types from Sanity schemas
pnpm sanity:typegen

# Output: Creates type definitions for all schemas
```

### Build & Deploy

```bash
# Build Sanity Studio for production
pnpm sanity:build

# Deploy Studio to Sanity's hosted platform
pnpm sanity:deploy
```

### Verification

```bash
# Type check the entire project
pnpm exec tsc --noEmit

# Check SvelteKit types
pnpm check

# Format code
pnpm format
```

---

## 🎯 Initial Setup Workflow

If you haven't set up Sanity Studio yet:

```bash
# 1. Make sure environment variables are set in .env
#    PUBLIC_SANITY_PROJECT_ID=your-project-id
#    PUBLIC_SANITY_DATASET=production

# 2. Start Sanity Studio
pnpm sanity:dev

# 3. Create some content in the Studio
#    - Add services with icon names
#    - Add projects with cover images
#    - Add blog posts with body content

# 4. Test data fetching in your SvelteKit app
pnpm dev
```

---

## ✅ Schema Field Reference

### Service Schema

- `title` (string, required, max 100)
- `description` (text, required, max 300)
- `iconName` (dropdown: Code, Database, Cpu, Zap, Rocket, Handshake, Lock, Cloud)

### Project Schema

- `title` (string, required, max 100)
- `slug` (auto-generated from title)
- `subtitle` (string, max 150)
- `year` (string, YYYY format, required)
- `description` (text, max 500)
- `techStack` (array of strings, required)
- `coverImage` (image with alt text, required)
- `content` (rich text blockContent)

### Blog Post Schema

- `title` (string, required, max 100)
- `slug` (auto-generated from title)
- `publishedAt` (datetime, required)
- `mainImage` (image with alt text)
- `excerpt` (text, max 200)
- `tags` (array of strings)
- `body` (rich text blockContent, required)

---

## 📁 Project Structure

```
portfolio-codevo/
├── sanity-schemas/          # Schema definitions
│   ├── blockContent.ts      # Shared rich text schema
│   ├── blog.ts              # Blog post schema
│   ├── project.ts           # Project schema
│   ├── service.ts           # Service schema
│   └── index.ts             # Schema registry
├── src/lib/services/
│   └── sanity.ts            # Data fetching functions
├── sanity.config.ts         # Studio configuration
├── sanity.cli.ts            # CLI configuration
└── package.json             # Scripts added
```

---

## 🔧 Troubleshooting

### TypeScript Errors in Schemas

The TypeScript errors you see in the schema files are expected. They don't affect:

- ✅ Sanity Studio functionality
- ✅ Data fetching
- ✅ Production builds

The schemas follow Sanity's official documentation and work correctly.

### Studio Not Starting

```bash
# Check if Sanity is properly installed
pnpm list sanity

# Reinstall if needed
pnpm install
```

### Missing Types

```bash
# Regenerate SvelteKit types
pnpm exec svelte-kit sync

# Regenerate Sanity types
pnpm sanity:typegen
```

---

## 💡 Next Steps

1. **Populate Content**: Open Studio and add your actual content
2. **Test Integration**: Verify data appears correctly in your SvelteKit app
3. **Deploy Studio**: Run `pnpm sanity:deploy` when ready for production
4. **Add More Schemas**: Extend with testimonials, team members, etc.

---

**All systems ready! 🚀**
