# Plant Match

Getting to Know Plants matching variant. Run `npm start`, then choose Plant Match in the library or open `/plant-match/`.

Same shared engine, visual worlds, preview-before-flip, Practice/Beat Sparky, hints, pause/audio, compact XP and independent saves. Easy uses 4 cards (2 pairs), Medium 6 (3 pairs), Hard 8 (4 pairs).

Easy has two pools covering all eight plant parts/functions. Medium has two pools covering all eight plant examples/types. Hard combines each part pool with a plant-type pool for mixed review. Each replay shuffles and samples pairs from its pool, and Next board cycles within that difficulty.

Rose and Tulsi both match Shrub; Mint and Tomato both match Herb. They are deliberately placed in different pools, so no board contains visually identical type cards with different hidden match IDs. All provided relationships and exact short phrases are retained. No extra sentences appear on gameplay cards.

The plants are complete identifiable botanical illustrations (a mango tree, not just a mango fruit). Plant-part images isolate the relevant part. Art uses the built-in image-generation tool; prompts and paths are in ASSET_PROMPTS.md. Phrase cards use two lines when appropriate to fit the shared card layout. Rebuild text with `node plant-match/scripts/generate-word-art.mjs`.

200 XP: three worlds × six boards × (Practice 7 + Beat Sparky 4), plus a 2 XP journey-completion bonus. First clears only; replays do not duplicate XP.
