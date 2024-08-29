window.onload = () => {
  console.log('GSAP Loaded')
  const tl = gsap.timeline()

  tl.from('h1', { duration: 1, opacity: 0, y: 20, ease: 'power2.out' })
    .from('p', { duration: 1, opacity: 0, y: 20, ease: 'power2.out' }, '-=0.5')
    .from('a', { duration: 1, opacity: 0, y: 20, ease: 'power2.out' }, '-=0.5')
}
