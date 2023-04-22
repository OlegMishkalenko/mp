const Header = () => {
    
    const ham = document.querySelector(".hamburger")
    const block = document.querySelector(".block__header")
    const nav = document.querySelector(".nav__header")
    const order = document.querySelector(".order__header")
    const linkMain = document.querySelector(".link__main")
    
    ham.addEventListener("click", e => {
        ham.classList.toggle("hamburger_act")
        block.classList.toggle("block__header_act")
    })
    
    nav.addEventListener("click", e => {
        e.preventDefault()
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({behavior: "smooth"})
    })
    order.addEventListener("click", e => {
        e.preventDefault()
        document.querySelector("#order").scrollIntoView({behavior: "smooth"})
    })
    linkMain.addEventListener("click", e => {
        e.preventDefault()
        document.querySelector("#about").scrollIntoView({behavior: "smooth"})
    })
}
export default Header