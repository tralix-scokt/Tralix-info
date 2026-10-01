/**
 * ============================================================
 *  SITE CONFIG — the one file you edit to personalise the site
 * ============================================================
 *  Everything marked "PLACEHOLDER" is sample text. Replace it with
 *  your real details. No other file needs to change for normal edits.
 *
 *  Profile photo: replace  src/assets/profile.jpg  with your photo
 *  (square, at least 800×800 px). It is optimised automatically.
 *  Social-share image: replace  public/og-image.jpg  (1200×630 px).
 */
import profilePhoto from '../assets/profile.jpg';

/* ---------- Site / SEO ---------- */
export const site = {
  // PLACEHOLDER: your live website address (no trailing slash). Used for share previews.
  url: 'https://your-domain.example',
  lang: 'en',
  // Page title + meta description. Leave `title` empty to auto-build it from your name + title.
  title: '',
  description:
    'Personal portfolio and contact page. Get in touch by phone, WhatsApp, email, YouTube or TikTok.', // PLACEHOLDER
  ogImage: '/og-image.jpg',
  themeColor: '#0b0d1a',
};

/* ---------- You ---------- */
export const profile = {
  name: 'Your Name', // PLACEHOLDER
  title: 'Your Professional Title', // PLACEHOLDER
  shortBio:
    'A short introduction about who you are and how you can help. Replace this sentence with one or two lines in your own words.', // PLACEHOLDER
  photo: profilePhoto,
  photoAlt: 'Portrait of Your Name', // PLACEHOLDER: describe your photo
};

/* ---------- Contact methods ---------- */
export const contact = {
  phone: {
    display: '+000 000 000 0000', // PLACEHOLDER: how the number is shown
    number: '+0000000000000', // PLACEHOLDER: international format, "+" then digits only
  },
  whatsapp: {
    number: '0000000000000', // PLACEHOLDER: international format, digits only, no "+"
    message: 'Hello! I found you through your website.', // pre-filled first message (optional, can be '')
  },
  email: {
    address: 'hello@example.com', // PLACEHOLDER
    subject: 'Website enquiry', // pre-filled subject (optional)
  },
};

/* ---------- Social links ----------
 * To add a platform: copy a line, set label + url, and choose an icon:
 * youtube, tiktok, github, instagram, facebook, x, telegram, whatsapp
 * (any other value shows a generic link icon).
 * Remove a line to hide that platform everywhere.
 */
export const socials = [
  { label: 'YouTube', icon: 'youtube', url: 'https://www.youtube.com/' }, // PLACEHOLDER: your channel URL
  { label: 'TikTok', icon: 'tiktok', url: 'https://www.tiktok.com/' }, // PLACEHOLDER: your profile URL
  { label: 'GitHub', icon: 'github', url: 'https://github.com/' }, // PLACEHOLDER: your profile URL
  // { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/yourhandle' },
  // { label: 'X', icon: 'x', url: 'https://x.com/yourhandle' },
];

/* ---------- About ---------- */
export const about = {
  heading: 'A bit about me',
  // Each string is one paragraph. PLACEHOLDER text.
  bio: [
    'This is where your story goes. Share who you are, where you come from and what drives your work.',
    'Add a second paragraph about your experience, what you care about, or what people can expect when they work with you.',
  ],
  // PLACEHOLDER lists: replace with your real skills and interests.
  skills: ['Skill one', 'Skill two', 'Skill three', 'Skill four', 'Skill five', 'Skill six'],
  interests: ['Interest one', 'Interest two', 'Interest three', 'Interest four'],
  whatIDo:
    'A short summary of what you do and who you do it for. Replace this with a sentence or two in your own words.',
};

/* ---------- What I Do (cards) ----------
 * icons available: code, video, layout, star, zap, edit, globe, phone, mail
 */
export const services = {
  heading: 'What I do',
  intro: 'A quick look at the main things I can help you with.',
  items: [
    { title: 'Service or skill 1', icon: 'code', description: 'Describe this service or skill in one or two sentences.' },
    { title: 'Service or skill 2', icon: 'video', description: 'Describe this service or skill in one or two sentences.' },
    { title: 'Service or skill 3', icon: 'layout', description: 'Describe this service or skill in one or two sentences.' },
    { title: 'Service or skill 4', icon: 'zap', description: 'Describe this service or skill in one or two sentences.' },
  ],
};

/* ---------- Contact form ----------
 * The form is wired and validated, but NO messages are delivered until you
 * add a real endpoint. See README.md → "Connect the contact form".
 *
 *   endpoint: 'https://formspree.io/f/xxxxxxx'   (Formspree)
 *   endpoint: 'https://api.web3forms.com/submit'  (Web3Forms; also set accessKey)
 *   endpoint: '/api/contact'                      (your own backend / serverless function)
 *
 * While `endpoint` is empty, the form says so honestly and offers an
 * "Open in email app" fallback instead of pretending to send.
 */
export const form = {
  endpoint: '',
  accessKey: '', // only needed for Web3Forms
  successMessage: 'Thank you! Your message has been sent.',
  errorMessage: 'Sorry, something went wrong. Please try again or use one of the contact buttons above.',
};

/* ---------- Navigation ---------- */
export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'What I Do', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

/* ---------- Helpers (don't edit) ---------- */
export const links = {
  tel: `tel:${contact.phone.number.replace(/[^+\d]/g, '')}`,
  whatsapp: `https://wa.me/${contact.whatsapp.number.replace(/\D/g, '')}${
    contact.whatsapp.message ? `?text=${encodeURIComponent(contact.whatsapp.message)}` : ''
  }`,
  mailto: `mailto:${contact.email.address}${
    contact.email.subject ? `?subject=${encodeURIComponent(contact.email.subject)}` : ''
  }`,
};
export const pageTitle =
  site.title || (profile.title ? `${profile.name} | ${profile.title}` : profile.name);
