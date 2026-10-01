/**
 * Contact form behaviour.
 *
 * - Validates name / email / message in the browser.
 * - If a real endpoint is configured (src/config/site.ts → form.endpoint), POSTs the data as JSON.
 * - If NOT configured, it does NOT pretend to send anything: it explains that and offers an
 *   "Open in email app" fallback with the message pre-filled.
 *
 * To use your own backend, only `sendToBackend()` below needs to change.
 */
type Fields = { name: string; email: string; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function sendToBackend(endpoint: string, accessKey: string, data: Fields): Promise<boolean> {
  const payload: Record<string, string> = { ...data };
  if (accessKey) payload.access_key = accessKey; // Web3Forms
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.ok;
}

export function initContactForm() {
  const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
  if (!form) return;

  const endpoint = form.dataset.endpoint ?? '';
  const accessKey = form.dataset.accessKey ?? '';
  const status = form.querySelector<HTMLElement>('[data-status]')!;
  const submit = form.querySelector<HTMLButtonElement>('[data-submit]')!;
  const label = form.querySelector<HTMLElement>('[data-submit-label]')!;

  const showStatus = (type: 'success' | 'error' | 'info', content: string | Node) => {
    status.hidden = false;
    status.dataset.type = type;
    status.replaceChildren(content instanceof Node ? content : document.createTextNode(content));
  };

  const setError = (name: keyof Fields, message: string) => {
    const input = form.elements.namedItem(name) as HTMLInputElement;
    const out = form.querySelector<HTMLElement>(`[data-err-for="${name}"]`)!;
    out.textContent = message;
    input.setAttribute('aria-invalid', message ? 'true' : 'false');
  };

  const validate = (): Fields | null => {
    const v = (n: string) => ((form.elements.namedItem(n) as HTMLInputElement).value || '').trim();
    const data: Fields = { name: v('name'), email: v('email'), message: v('message') };
    setError('name', data.name ? '' : 'Please enter your name.');
    setError('email', !data.email ? 'Please enter your email address.' : EMAIL_RE.test(data.email) ? '' : 'Please enter a valid email address.');
    setError('message', data.message.length >= 10 ? '' : 'Please write a message (at least 10 characters).');
    const firstBad = form.querySelector<HTMLElement>('[aria-invalid="true"]');
    if (firstBad) {
      firstBad.focus();
      return null;
    }
    return data;
  };

  // Clear an error as soon as the user edits that field
  form.addEventListener('input', (e) => {
    const t = e.target as HTMLInputElement;
    if (t.getAttribute('aria-invalid') === 'true') setError(t.name as keyof Fields, '');
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.hidden = true;
    const data = validate();
    if (!data) return;

    // Honeypot: silently stop bots
    if ((form.elements.namedItem('_gotcha') as HTMLInputElement).value) return;

    if (!endpoint) {
      const to = form.dataset.fallbackEmail ?? '';
      const href = `mailto:${to}?subject=${encodeURIComponent('Message from ' + data.name)}&body=${encodeURIComponent(
        data.message + '\n\n— ' + data.name + ' (' + data.email + ')',
      )}`;
      const wrap = document.createElement('span');
      wrap.append('Your message has not been sent. This form is not connected to an email service yet. ');
      const a = document.createElement('a');
      a.href = href;
      a.textContent = 'Open it in your email app instead';
      wrap.append(a, '.');
      showStatus('info', wrap);
      return;
    }

    submit.disabled = true;
    label.textContent = 'Sending…';
    try {
      const ok = await sendToBackend(endpoint, accessKey, data);
      if (!ok) throw new Error('Request failed');
      form.reset();
      showStatus('success', form.dataset.success ?? 'Message sent.');
    } catch {
      showStatus('error', form.dataset.error ?? 'Something went wrong.');
    } finally {
      submit.disabled = false;
      label.textContent = 'Send Message';
    }
  });
}
