## Batch 1 — 9 images received

Detected categories from image content:
- **Campus**: WA0015-2 (building+lawn), WA0036 (kindergarten entrance)
- **Labs**: WA0014 (library), WA0016 (physics lab), WA0017 (chem lab wide), WA0018 (chem lab prep), WA0028 (chem lab benches), WA0029 (workshop/tech lab), WA0031 (biology lab)

### Steps for this batch
1. Upload each of the 9 images via `lovable-assets create --file /mnt/user-uploads/<name> --filename <slug>.jpg > src/assets/gallery/<slug>.jpg.asset.json`. Naming: `campus-02`, `campus-03`, `lab-library-01`, `lab-physics-01`, `lab-chem-01/02/03`, `lab-tech-01`, `lab-bio-01`.
2. Keep them staged — do **not** rewrite `src/routes/gallery.tsx` yet. I'll wire everything at once after all 39 images arrive so the gallery isn't half-real / half-placeholder mid-way.
3. Reply confirming batch 1 is stored and ask for batch 2.

### Open question still pending
You haven't picked a categorization option yet. Based on what's arriving, I recommend **Option 1 (grouped by category)** keeping filters: Campus, Labs, Sports, Cultural, Events. Confirm or override in your next message.

### Technical notes
- Assets go under `src/assets/gallery/` as `.asset.json` pointers only; no binaries stored in repo.
- Final gallery wiring (after all batches): replace `items` array in `src/routes/gallery.tsx` with real image imports, swap gradient tiles for `<img>` with `loading="lazy"`, keep existing gold/royal hover + lightbox intact, add alt text per image.
