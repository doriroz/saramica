const section = document.querySelector("#products");

const callbackFunction = function(entries){
    entries.forEach(entry => {
        console.log(entry);
        let coloredNav = document.querySelectorAll(".saramic-nav__icon");
        if(entry.isIntersecting){
            coloredNav.forEach(cn=>cn.classList.add("saramic-nav-1__icon"));
        }
        else{
            coloredNav = document.querySelectorAll(".saramic-nav-1__icon");
            coloredNav.forEach(cn=>cn.classList.remove("saramic-nav-1__icon"));
        }
    })
}


const observer = new IntersectionObserver(callbackFunction,{
    threshold:0.4
});

observer.observe(section);