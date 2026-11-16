const toggle = document.querySelector('[data-nav-toggle]');
const navigation = document.querySelector('[data-primary-nav]');

if (toggle && navigation) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    navigation.dataset.open = String(!expanded);
  });

  navigation.querySelectorAll('a').forEach((anchor) => {
    anchor.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      navigation.dataset.open = 'false';
    });
  });
}

/* Datenschutzhinweis: informiert und fragt keine Einwilligung ab, weil ERP.Contact keine Cookies,
   kein Tracking und keine Drittdienste nutzt. Gespeichert wird nur, dass der Hinweis geschlossen
   wurde (Schlüssel NOTICE_KEY, beschrieben unter /datenschutz/). */
const NOTICE_KEY = 'erpcontact.datenschutzhinweis.v1';

function showPrivacyNotice() {
  let closed = null;
  try { closed = window.localStorage.getItem(NOTICE_KEY); } catch { closed = null; }
  if (closed === 'geschlossen' || !document.body) return;
  const box = document.createElement('aside');
  box.className = 'privacy-notice';
  box.setAttribute('aria-label', 'Datenschutzhinweis');
  box.innerHTML = '<p>ERP.Contact setzt keine Cookies und kein Tracking ein und lädt keine Inhalte von Drittanbietern. '
    + 'Wenn Sie diesen Hinweis schließen, wird nur das in Ihrem Browser vermerkt.</p>'
    + '<div class="privacy-notice-actions"><a href="/datenschutz/">Datenschutzerklärung</a>'
    + '<button type="button">Verstanden</button></div>';
  document.body.appendChild(box);
  document.body.style.paddingBottom = `${box.offsetHeight + 24}px`;
  box.querySelector('button').addEventListener('click', () => {
    try { window.localStorage.setItem(NOTICE_KEY, 'geschlossen'); } catch { /* nur für diesen Aufruf */ }
    box.remove();
    document.body.style.paddingBottom = '';
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', showPrivacyNotice);
else showPrivacyNotice();
