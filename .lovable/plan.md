## Plan: Replace gallery placeholders with your 39 real photos

### Step 1 — Receive images
You'll send the 39 photos in 4 chat batches (max 10 images per message). I can accept JPG, PNG, and WebP.

### Step 2 — Upload to Lovable CDN
For each image I will:
- Copy it into the project
- Run `lovable-assets create` to upload it to the Lovable CDN
- Create a `.asset.json` pointer file
- Import the CDN URLs into the gallery page

This keeps the repo light and serves the images globally via CDN.

### Step 3 — Categorize
The current gallery has 5 filters: **Campus, Sports, Cultural, Labs, Events**. Since 39 images does not divide evenly, choose one approach:

1. **Send images in batches grouped by category** — I keep all 5 filters and assign each image to its category.
2. **Auto-distribute into 5 categories** — I place 7-8 images per category based on filenames or the order you send them.
3. **Single gallery, no filters** — Remove the filter bar and show all 39 images in one masonry grid.

Please tell me which approach you prefer. If you have captions or descriptions for any images, include them with the batch.

### Step 4 — Update the gallery code
- Replace the 40 generated gradient tiles with the real image data
- Update the `Tile` component to render `<img>` instead of a gradient background
- Update the lightbox to show the full-resolution image
- Keep the existing gold/royal hover overlays and captions
- Add `alt` text from captions or filenames

### Step 5 — Verify
- Run the build
- Check the gallery filters and lightbox work
- Restart the dev server if needed

Let me know which categorization option you prefer, then start uploading the first batch.