export default function decorate(block) {
  block.querySelectorAll('a').forEach((a) => {
    a.classList.add('cta-chevron', 'cta-chevron--blue');
  });
}
