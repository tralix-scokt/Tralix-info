/**
 * ============================================================
 *  SITE CONFIG — the one file you edit to update the website
 * ============================================================
 *  Profile photo: replace  src/assets/profile.jpg  with your photo
 *  (square, at least 800×800 px). It is optimised automatically.
 *  Social-share image: replace  public/og-image.jpg  (1200×630 px).
 */
import profilePhoto from '../assets/profile.jpg';

/* ---------- Site / SEO ---------- */
export const site = {
  // Your live website address with no trailing slash, e.g. 'https://tralixscott.com'.
  // Leave empty until you have a domain; once set, canonical + share-preview image tags are added.
  url: '',
  lang: 'en',
  title: 'Tralix Scott | Web Designer & Developer',
  description:
    'Tralix Scott is a web designer and developer, and the founder and CEO of Tralix AI. Modern, responsive websites for businesses and individuals. Contact by WhatsApp or email.',
  ogImage: '/og-image.jpg',
  themeColor: '#0b0d1a',
};

/* ---------- You ---------- */
export const profile = {
  name: 'Tralix Scott',
  title: 'Web Designer & Developer',
  company: 'Tralix AI',
  // Roles shown on the site
  roles: ['Web Designer', 'Web Developer', 'Founder of Tralix AI', 'CEO of Tralix AI'],
  // Short badge shown in the hero
  badge: 'Founder & CEO of Tralix AI',
  shortBio:
    'I design and build modern, responsive websites for businesses and individuals, helping them establish a strong online presence and grow digitally.',
  photo: profilePhoto,
  // Describe your photo for screen readers. (Currently a "TS" monogram until you add your photo.)
  photoAlt: 'Tralix Scott',
};

/* ---------- Contact methods ---------- */
export const contact = {
  // Optional: leave `number` empty to hide the "Call Me" button everywhere.
  // Format: international, "+" then digits only, e.g. '+2348012345678'
  phone: { display: '', number: '' },
  whatsapp: {
    display: '+234 815 895 5478',
    number: '2348158955478', // international format, digits only, no "+"
    message: 'Hello Tralix, I found you through your website.', // pre-filled first message (can be '')
  },
  email: {
    address: 'tralixscokt@gmail.com',
    subject: 'Website enquiry', // pre-filled subject (can be '')
  },
};

/* ---------- Social links ----------
 * To add a platform: copy a line, set label + handle + url, and choose an icon:
 * youtube, tiktok, github, instagram, facebook, x, telegram, whatsapp
 * (any other value shows a generic link icon). Remove a line to hide it everywhere.
 */
export const socials = [
  { label: 'GitHub', icon: 'github', handle: 'tralix-scokt', blurb: 'Code and projects', url: 'https://github.com/tralix-scokt' },
  { label: 'TikTok', icon: 'tiktok', handle: '@ladyofdeath999', blurb: 'Short videos', url: 'https://www.tiktok.com/@ladyofdeath999' },
  { label: 'YouTube', icon: 'youtube', handle: '@tralix_scoktshorts', blurb: 'Videos and shorts', url: 'https://youtube.com/@tralix_scoktshorts' },
];

/* ---------- Hero buttons ---------- */
export const heroButtons = {
  primary: { label: 'Contact Me', href: '#contact' },
  // "View My Work" opens your GitHub profile. Change href to '#services' or a portfolio page if you prefer.
  secondary: { label: 'View My Work', href: 'https://github.com/tralix-scokt', external: true },
};

/* ---------- About ---------- */
export const about = {
  heading: 'Building a strong online presence',
  // Each string is one paragraph.
  bio: [
    'I’m Tralix Scott, a web designer and developer focused on creating modern, responsive websites for businesses and individuals.',
    'I build professional websites that help businesses establish a strong online presence, connect with customers, and grow digitally.',
    'I also provide digital services including social media solutions, VPN services, and phone number solutions.',
  ],
  companyNote: {
    title: 'Founder & CEO of Tralix AI',
    text: 'I’m the founder and CEO of Tralix AI.',
  },
  rolesHeading: 'My roles',
};

/* ---------- What I Do (cards) ----------
 * icons available: code, layout, briefcase, smartphone, pen-tool, share, shield, phone, mail, globe, video, star, zap, edit
 */
export const services = {
  heading: 'What I do',
  intro: 'Web design and development, plus a few digital services to help you get online and stay connected.',
  items: [
    { title: 'Website Design', icon: 'layout', description: 'Clean, modern website designs that look professional and reflect your brand.' },
    { title: 'Web Development', icon: 'code', description: 'Fast, reliable websites built with clean, well-organised code.' },
    { title: 'Business Websites', icon: 'briefcase', description: 'Professional websites that help your business get online and connect with customers.' },
    { title: 'Responsive Websites', icon: 'smartphone', description: 'Sites that look and work great on phones, tablets and desktop computers.' },
    { title: 'UI/UX Design', icon: 'pen-tool', description: 'User-friendly interfaces and layouts that are easy and pleasant to use.' },
    { title: 'Social Media Solutions', icon: 'share', description: 'Digital solutions to help you grow your presence on social media.' },
    { title: 'VPN Services', icon: 'shield', description: 'VPN services for private and secure internet access.' },
    { title: 'Phone Number Solutions', icon: 'phone', description: 'Phone number solutions to keep you connected. Message me for details.' },
  ],
};

/* ---------- Social section text ---------- */
export const socialSection = {
  heading: 'Find me online',
  intro: 'Follow along or say hello on any of these platforms.',
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
  errorMessage: 'Sorry, something went wrong. Please try again, or use the WhatsApp or Email buttons.',
};

/* ---------- Navigation ---------- */
export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Social', href: '#social' },
  { label: 'Contact', href: '#contact' },
];

/* ---------- Helpers (don't edit) ---------- */
export const hasPhone = Boolean(contact.phone.number);
export const links = {
  tel: hasPhone ? `tel:${contact.phone.number.replace(/[^+\d]/g, '')}` : '',
  whatsapp: `https://wa.me/${contact.whatsapp.number.replace(/\D/g, '')}${
    contact.whatsapp.message ? `?text=${encodeURIComponent(contact.whatsapp.message)}` : ''
  }`,
  mailto: `mailto:${contact.email.address}${
    contact.email.subject ? `?subject=${encodeURIComponent(contact.email.subject)}` : ''
  }`,
};
export const pageTitle = site.title;
