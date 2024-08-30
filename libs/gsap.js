window.onload = () => {
  console.log('GSAP Loaded')

  const tl = gsap.timeline()

  tl.from('h1', { duration: 1, opacity: 0, y: 20, ease: 'power2.out' })
    .from('p', { duration: 1, opacity: 0, y: 20, ease: 'power2.out' }, '-=0.5')
    .from('a', { duration: 1, opacity: 0, y: 20, ease: 'power2.out' }, '-=0.5')
}

//gsap.to()
//gsap.from("element to edit", {duration:8, x:20, eas })
//gsap.from("element to edit", {duration:2, x:20, eas delay:5})
//gsap.from("element to edit", {duration:1, x:20, eas delay:7})
