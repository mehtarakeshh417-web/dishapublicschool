// Lovable CDN assets are served from a path that only exists on Lovable-hosted
// origins. When the site runs on another host (custom deploy target), the
// relative path 404s — so resolve every asset pointer to an absolute CDN URL.
const ASSET_ORIGIN = "https://project--bb663fb5-d302-4806-994c-44c808ee8090.lovable.app";

type AssetPointer = { url: string };

export function asset(pointer: AssetPointer | string): string {
  const url = typeof pointer === "string" ? pointer : pointer.url;
  if (url.startsWith("/__l5e/")) return ASSET_ORIGIN + url;
  return url;
}
