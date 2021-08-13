const animDelay = 2000;
(new Typed('#mainTypo', {
    strings: [
        'improving the life',
        'finding vulnerability',
        'running awesome projects',
        'trendy researchers',
        'Dropper Lab'
    ],
    typeSpeed: 30,
    backSpeed: 30,
    loop: false
}));
document.getElementById("closeNavbar").addEventListener("click", ()=>{
    document.getElementById("BrandNavbar").classList.add("fadeOutDown");
    console.log("[Navbar Handler] Asked for close.")
    if (confirm("Close navigation bar?")) {
        document.getElementById("BrandNavbar").classList.remove("fadeInUp");
        document.getElementById("BrandNavbar").classList.add("fadeOutDown");
        setTimeout(()=>{
            document.getElementById("BrandNavbar").hide();
            console.log("[Navbar Handler] Closed.");
        }, 600);
    }else{
        console.log("[Navbar Handler] Answer : Negative.");
    }
});
let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("BrandNavbar").classList.remove("fadeOutDown");
        document.getElementById("BrandNavbar").classList.add("fadeInUp");
    } else {
        document.getElementById("BrandNavbar").classList.remove("fadeInUp");
        document.getElementById("BrandNavbar").classList.add("fadeOutDown");
    }
    prevScrollPos = currentScrollPos;
}