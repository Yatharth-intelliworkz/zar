# Related Products Slider Flow

## 1. Where slider data is coming from
The slider data is currently static (hardcoded) in this file:
- src/app/collections/[purity]/[category]/[style]/[id]/page.tsx

Inside that file, there is a constant array:
- RELATED_PRODUCTS

Each item has this shape:
- id
- title
- description
- image

So right now, no API call or database fetch is used for the slider.

## 2. How many cards are being fetched/rendered
Current total cards in RELATED_PRODUCTS:
- 5 cards

IDs currently present:
- dazzling-2
- dazzling-3
- dazzling-4
- dazzling-5
- dazzling-6

So the slider is rendering 5 product cards total.

## 3. Complete data flow (end-to-end)
1. Route render starts in:
   - src/app/collections/[purity]/[category]/[style]/[id]/page.tsx
2. Server component defines RELATED_PRODUCTS (static array).
3. Same file renders:
   - <RelatedProductsSlider title="You might also like" products={RELATED_PRODUCTS} basePath={...} />
4. basePath is built from route params:
   - /collections/${purity}/${category}/${style}
5. Component receives data in:
   - src/components/RelatedProductsSlider/RelatedProductsSlider.tsx
6. Slider maps products to SwiperSlide and renders card UI (matching ProductListingClient card structure).
7. Card click behavior:
   - router.push(`${basePath}/${product.id}`)
   - opens sibling detail page (same purity/category/style, different id).
8. Enquire button behavior:
   - opens EnquiryModal with selected product title
   - does not navigate because click propagation is stopped at wrapper level.

## 4. Swiper behavior and visible cards
File:
- src/components/RelatedProductsSlider/RelatedProductsSlider.tsx

Breakpoints currently configured:
- >= 1200px: 3 cards visible, 30px gap
- >= 768px and < 1200px: 2 cards visible, 20px gap
- < 768px: 1 card visible, 16px gap

Arrow controls:
- Custom previous and next arrow buttons in header
- Buttons call swiper.slidePrev() and swiper.slideNext()

## 5. Styling source
Styles are in:
- src/components/RelatedProductsSlider/RelatedProductsSlider.module.css

Card structure/styling mirrors ProductListingClient pattern:
- image wrapper
- title + description block
- Enquire button on right
- hover zoom on image
- keyboard focus outline on card

## 6. If you want dynamic data next
To switch from static to dynamic:
1. Replace RELATED_PRODUCTS constant in page.tsx with real fetch logic.
2. Keep the same data shape expected by RelatedProductsSlider.
3. Optionally filter out current product id so slider never shows currently opened product.
4. Optionally sort by business rules (same collection, weight, popularity, etc.).

## 7. Current status summary
- Data source: static constant in page.tsx
- Total cards: 5
- Rendering component: RelatedProductsSlider (client component)
- Navigation: card click goes to /collections/[purity]/[category]/[style]/[id]
- Enquiry action: opens modal from slider card
