# Migration Status: Gatsby to Next.js

## ✅ Completed

1. **Dependencies & Configuration**
   - Updated `package.json` with required dependencies (styled-components, gray-matter, react-transition-group, scrollreveal, animejs, remark, remark-html)
   - Configured `next.config.ts` for styled-components
   - Set up TypeScript configuration

2. **Core Utilities & Hooks**
   - ✅ `src/config.ts` - Site configuration
   - ✅ `src/utils/index.ts` - Utility functions
   - ✅ `src/utils/sr.ts` - ScrollReveal utility
   - ✅ `src/hooks/useScrollDirection.ts`
   - ✅ `src/hooks/usePrefersReducedMotion.ts`
   - ✅ `src/hooks/useOnClickOutside.ts`

3. **Styles**
   - ✅ `src/styles/variables.ts` - CSS variables
   - ✅ `src/styles/mixins.ts` - Styled-components mixins
   - ✅ `src/styles/theme.ts` - Theme configuration
   - ✅ `src/styles/fonts.ts` - Font face declarations
   - ✅ `src/styles/TransitionStyles.ts` - Transition animations
   - ✅ `src/styles/PrismStyles.ts` - Code syntax highlighting
   - ✅ `src/styles/GlobalStyle.ts` - Global styles

4. **Icons**
   - ✅ All icon components created in `src/components/icons/`
   - ✅ Icon component and index exports

5. **Layout Components**
   - ✅ `src/components/side.tsx` - Side navigation element
   - ✅ `src/components/social.tsx` - Social media links
   - ✅ `src/components/email.tsx` - Email sidebar
   - ✅ `src/components/footer.tsx` - Footer component
   - ✅ `src/components/menu.tsx` - Mobile menu

## 🚧 In Progress / To Do

1. **Remaining Layout Components**
   - [ ] `src/components/nav.tsx` - Main navigation
   - [ ] `src/components/loader.tsx` - Loading animation
   - [ ] `src/components/head.tsx` - SEO/Metadata (use Next.js Metadata API instead)

2. **Section Components**
   - [ ] `src/components/sections/hero.tsx`
   - [ ] `src/components/sections/about.tsx`
   - [ ] `src/components/sections/jobs.tsx`
   - [ ] `src/components/sections/education.tsx`
   - [ ] `src/components/sections/competitions.tsx`
   - [ ] `src/components/sections/contact.tsx`

3. **Content Processing**
   - [ ] Set up markdown processing for jobs, education, competitions
   - [ ] Create utility functions to read and parse markdown files
   - [ ] Copy content from Gatsby site to `content/` directory

4. **Assets**
   - [ ] Copy fonts from Gatsby to `public/fonts/`
   - [ ] Copy images from Gatsby to `public/images/` or `src/images/`
   - [ ] Copy resume PDF to `public/resume.pdf`

5. **Next.js App Structure**
   - [ ] Update `src/app/layout.tsx` with GlobalStyle and ThemeProvider
   - [ ] Update `src/app/page.tsx` with all sections
   - [ ] Set up metadata in layout.tsx

6. **Component Index**
   - [ ] Create `src/components/index.ts` for easy imports

## Notes

- All components need to be converted from Gatsby-specific APIs (Link, StaticImage, useStaticQuery) to Next.js equivalents
- Markdown processing needs to be set up using gray-matter and remark
- Images should use Next.js Image component or regular img tags
- ScrollReveal animations need to be initialized client-side
- The site uses styled-components with TypeScript

## Next Steps

1. Complete the remaining layout components (Nav, Loader)
2. Create all section components
3. Set up markdown content processing
4. Copy assets (fonts, images, resume)
5. Create the main page layout
6. Test and refine

