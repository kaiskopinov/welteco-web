Text link for the top nav (variant 4), footer lists (variant 1) and legal/credit lines (variants 2, 3); cream text, dark surfaces only.
```jsx
<Component4 variant="4" text1="Overview" />
<Component4 variant="1" block text1="Home V1" />
<Component4 variant="3" text1="Licenses" />
```
- Text link. variant 4 = top-nav link 14/19.6 · 1 = footer list link 16/24 (hover reveals 6px dot) · 2 / 3 = 12.1px credit / legal links (no hover state).
- Hover follows the pointer; pass `hover` to force a state. `block` stretches to full width; `href`/`onClick` make it interactive.
