Primary call-to-action button — every CTA: espresso on light pages, glass (variant 2) on photography, light (variant 4) in nav/footer, wide (variant 3) for full-width section CTAs.
```jsx
<Component1 text1="View Projects" />
<Component1 variant="2" text1="Contact Us" />
<Component1 variant="3" block text1="Visit Blog" />
<Component1 variant="4" text1="More Templates" />
```
- Primary CTA button. variant 1 = espresso #413936 · 2 = glass (on photos) · 3 = wide 896px, 24/36 label · 4 = light off-white w/ sand border. Hover: opacity 0.8 (1–3) or sand fill (4).
- Hover follows the pointer; pass `hover` to force a state. `block` stretches to full width; `href`/`onClick` make it interactive.
