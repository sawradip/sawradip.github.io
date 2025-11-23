const isSSR = typeof window === 'undefined';
let sr: any = null;

if (!isSSR) {
  // Dynamically import ScrollReveal only on client side
  const ScrollReveal = require('scrollreveal');
  sr = ScrollReveal.default ? ScrollReveal.default() : ScrollReveal({
    reset: false,
  });
}

export default sr;

