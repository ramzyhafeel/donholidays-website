import { Link } from "react-router-dom";
import { Star, Quote, MessageSquareHeart, ArrowUpRight } from "lucide-react";
import { PageHero, CtaBanner } from "../components/ui/Sections";
import { GuestMoments } from "../components/home/HomeSections";
import { reviews, reviewProfiles } from "../data/reviews";
import { createWhatsAppLink } from "../lib/whatsapp";
import { WhatsAppGlyph } from "../components/ui/Icon";

function Stars({ rating }) {
  return (
    <p className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} className={`h-4 w-4 ${n <= rating ? "fill-brand text-brand" : "text-line"}`} aria-hidden="true" />
      ))}
    </p>
  );
}

const formatDate = (ym) => {
  if (!ym) return "";
  const [y, m] = ym.split("-");
  return m ? new Date(Number(y), Number(m) - 1).toLocaleString("en-GB", { month: "long", year: "numeric" }) : y;
};

export default function Reviews() {
  const profiles = [
    reviewProfiles.google && { label: "Review us on Google", url: reviewProfiles.google },
    reviewProfiles.tripadvisor && { label: "Review us on TripAdvisor", url: reviewProfiles.tripadvisor },
  ].filter(Boolean);
  const wa = createWhatsAppLink("Hello DON HOLIDAYS, I'd like to share a review of my trip.");

  return (
    <>
      <PageHero
        image="elephants-river"
        eyebrow="Reviews"
        title="What our guests say"
        text="Honest feedback from travellers who explored Sri Lanka with DON HOLIDAYS."
        crumbs={[{ label: "Home", to: "/" }, { label: "Reviews" }]}
      />

      <section className="container-narrow mt-14" aria-label="Guest reviews">
        {reviews.length > 0 ? (
          <ul className="columns-1 gap-5 md:columns-2 lg:columns-3">
            {reviews.map((r) => (
              <li key={`${r.name}-${r.date}`} className="mb-5 break-inside-avoid">
                <article className="rounded-card border border-line bg-white p-6">
                  <div className="flex items-center justify-between gap-3">
                    <Stars rating={r.rating} />
                    <Quote className="h-6 w-6 text-brand/35" aria-hidden="true" />
                  </div>
                  {r.title && <h2 className="mt-4 text-lg font-semibold text-ink">{r.title}</h2>}
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{r.text}</p>
                  <footer className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4 text-sm">
                    <span>
                      <span className="block font-semibold text-ink">{r.name}</span>
                      <span className="text-xs text-ink-muted">{[r.country, formatDate(r.date)].filter(Boolean).join(" · ")}</span>
                    </span>
                    {r.source && (
                      r.sourceUrl ? (
                        <a href={r.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline">
                          {r.source} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      ) : (
                        <span className="text-xs text-ink-muted">via {r.source}</span>
                      )
                    )}
                  </footer>
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-panel bg-panel px-6 py-14 text-center sm:px-12">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-white text-navy-900">
              <MessageSquareHeart className="h-8 w-8" aria-hidden="true" />
            </span>
            <h2 className="mx-auto mt-5 max-w-xl text-2xl font-semibold text-ink sm:text-3xl">Travelled with us? We'd love to hear from you</h2>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-ink-soft">
              Guest reviews will appear here as they come in. If you've explored Sri Lanka with DON HOLIDAYS, sharing your experience helps other travellers plan their trip.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {profiles.map((p) => (
                <a key={p.url} href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{p.label}</a>
              ))}
              {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><WhatsAppGlyph className="h-4 w-4" /> Send us your feedback</a>}
              {!profiles.length && !wa && <Link to="/contact" className="btn btn-primary">Send us your feedback</Link>}
            </div>
          </div>
        )}

        {reviews.length > 0 && profiles.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {profiles.map((p) => <a key={p.url} href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">{p.label}</a>)}
          </div>
        )}
      </section>

      <GuestMoments />
      <CtaBanner />
    </>
  );
}
