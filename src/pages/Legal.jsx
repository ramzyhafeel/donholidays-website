import { Link } from "react-router-dom";
import { Breadcrumbs } from "../components/ui/Sections";
import { site } from "../data/site";

/*
 * NOTE FOR THE CLIENT: these pages are a plain-English starting point that
 * reflect how this website currently works (no accounts, no payments, no
 * tracking cookies, enquiries via WhatsApp/email). Have them reviewed before
 * launch and add your booking, payment and cancellation terms.
 */

function LegalLayout({ title, updated, crumb, children }) {
  return (
    <div className="container-narrow max-w-3xl pt-10">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: crumb }]} />
      <h1 className="mt-6 text-4xl font-semibold text-ink">{title}</h1>
      <p className="mt-2 text-sm text-ink-muted">Last updated: {updated}</p>
      <div className="prose-don mt-8">{children}</div>
    </div>
  );
}

const contactLine = () => {
  const c = site.contact;
  if (c.email) return <>by email at <a href={`mailto:${c.email}`}>{c.email}</a></>;
  if (c.phone) return <>by phone on {c.phone}</>;
  return <>through our <Link to="/contact">contact page</Link></>;
};

export function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updated="2 November 2026" crumb="Privacy Policy">
      <p>This policy explains how {site.name} ("we", "us") handles personal information when you use {site.domain.replace("https://", "")} or contact us about a holiday in Sri Lanka.</p>
      <h2>Information you share with us</h2>
      <p>When you send an enquiry we receive the details you choose to provide, such as your name, email address, phone or WhatsApp number, travel dates, number of travellers, interests and any message you write.</p>
      <h2>How enquiries are sent</h2>
      <p>This website does not store your enquiry on our servers. When you submit the enquiry form, your details are passed to WhatsApp or your own email app so that you can send them to us directly. Those services process the message under their own privacy policies.</p>
      <h2>How we use your information</h2>
      <ul>
        <li>To reply to your enquiry and plan or quote your trip.</li>
        <li>To arrange the services you ask us to book, which may involve sharing necessary details with hotels, drivers or other suppliers.</li>
        <li>To meet legal or accounting obligations.</li>
      </ul>
      <p>We do not sell your personal information.</p>
      <h2>Cookies and analytics</h2>
      <p>This website does not currently use advertising or analytics cookies. If that changes, we will update this policy.</p>
      <h2>How long we keep information</h2>
      <p>We keep enquiry and booking details only for as long as needed to handle your trip and meet legal requirements.</p>
      <h2>Your choices</h2>
      <p>You can ask us to access, correct or delete the personal information we hold about you. Contact us {contactLine()}.</p>
    </LegalLayout>
  );
}

export function Terms() {
  return (
    <LegalLayout title="Terms & Conditions" updated="2 November 2026" crumb="Terms & Conditions">
      <p>These terms apply to your use of the {site.name} website. By using the site you agree to them.</p>
      <h2>Website content</h2>
      <p>Itineraries, descriptions and photographs on this website are for general information and inspiration. Sample itineraries show what is possible in a given number of days and can be changed to suit you. Opening times, seasonal conditions, train availability and national park access can change, and we will confirm the details that apply to your trip when we plan it.</p>
      <h2>Quotes and bookings</h2>
      <p>Prices are not shown as fixed offers on this website. Each trip is quoted individually. Your written quote and booking confirmation will set out what is included, payment arrangements and the cancellation terms that apply to your booking.</p>
      <h2>Links to other websites</h2>
      <p>This site may link to third-party services such as WhatsApp. We are not responsible for the content or practices of other websites.</p>
      <h2>Intellectual property</h2>
      <p>The {site.name} name, logo and website content may not be copied or reused without permission.</p>
      <h2>Contact</h2>
      <p>Questions about these terms? Contact us {contactLine()}.</p>
    </LegalLayout>
  );
}
