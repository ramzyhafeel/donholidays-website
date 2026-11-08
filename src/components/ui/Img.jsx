import { photo } from "../../lib/images";

/**
 * Responsive photo from the optimised library (src/lib/images.js).
 * Below-the-fold images lazy-load by default; pass priority for the hero.
 */
export default function Img({ name, alt, sizes = "(min-width: 1024px) 33vw, 100vw", priority = false, className = "", ...rest }) {
  const p = photo(name, { alt });
  return (
    <img
      src={p.src}
      srcSet={p.srcSet}
      sizes={sizes}
      alt={p.alt}
      width={p.width}
      height={p.height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : undefined}
      className={className}
      {...rest}
    />
  );
}
