export default function decorate(block) {
  const [react1Wrapper] = block.children;
  const react1 = document.createElement('react1');
  react1.textContent = react1Wrapper.textContent.trim();
  react1Wrapper.replaceChildren(react1);
}
