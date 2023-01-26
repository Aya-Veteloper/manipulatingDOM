/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const list = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const fragment = document.createDocumentFragment();




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// loop over sections
sections.forEach(section => {
    // section id and section nav attribute
    const sectionId = section.getAttribute("id");  // section.id
    const sectionTitle = section.getAttribute("data-nav");  // section.dataset.nav
    const listItem = document.createElement("li");
    const listLink = document.createElement("a");
    // add href, title and class attribute for links
    listLink.href = `#${sectionId}`
    listLink.textContent = sectionTitle
    listLink.classList.add("menu__link")
    // add smooth scroll to anchors
    listLink.addEventListener("click", evt => {
        evt.preventDefault();
        section.scrollIntoView({
            behavior: "smooth"
        });
    });
    listItem.appendChild(listLink);
    fragment.appendChild(listItem);
    
    });
    list.appendChild(fragment);


// Add class "active" to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
const links = document.querySelectorAll("a.menu__link")
const callback = (entries) => {
    let section = entries[0];
    section.target.classList.remove("your-active-class");
    if (section.isIntersecting) {
        section.target.classList.add("your-active-class");
        links.forEach(link => {
            if (link.textContent === section.target.dataset.nav) {
                link.classList.add("active-class");
            } else {link.classList.remove("active-class");}
        })
    } else {section.target.classList.remove("your-active-class");}
}

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
}
const observer = new IntersectionObserver(callback , options);


// Build menu 

// Scroll to section on link click
window.addEventListener("scroll", evt => {
    sections.forEach(section => {
        observer.observe(section);
    })
})

// Set sections as active
/*
Window.addEventListener("scroll", evt => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        section.classList.remove("your-active-class");
        if (sectionTop >=0 && sectionTop < 250) {
            section.classList.add("your-active-class");
            links.forEach(link => {
                if (link.textContent === section.target.dataset.nav) {
                    section.classList.add("active-class");
                } else {section.classList.remove("active-class");}
            })
        } else {section.classList.remove("your-active-class");}
    })
})
*/
