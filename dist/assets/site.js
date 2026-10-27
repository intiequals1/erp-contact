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
