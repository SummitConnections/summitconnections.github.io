export const scrollToSection = (ref?: any) => {
    if (!ref) { 
        window.scroll({ top: 0, left: 0, behavior: 'smooth'})
        return
    }
    window.scroll({ 
        top: (ref.current.offsetTop - 64), 
        left: 0, 
        behavior: 'smooth'
    })
}