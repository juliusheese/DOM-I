const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
ttle = document.querySelector("title");
ttle.textContent = "Great Idea!";
navbar = document.querySelectorAll(`nav a`);
navbar[0].textContent = siteContent["nav"]["nav-item-1"];
navbar[1].textContent = siteContent["nav"]["nav-item-2"];
navbar[2].textContent = siteContent["nav"]["nav-item-3"];
navbar[3].textContent = siteContent["nav"]["nav-item-4"];
navbar[4].textContent = siteContent["nav"]["nav-item-5"];
navbar[5].textContent = siteContent["nav"]["nav-item-6"];
//cta stuff
let cta = document.querySelector(".cta-text h1");
let cta1 = document.querySelector(".cta-text button");
let cta2 = document.getElementById("cta-img");
cta.textContent = siteContent["cta"]["h1"];
cta1.textContent = siteContent["cta"]["button"];
cta2.setAttribute('src', siteContent["cta"]["img-src"]);
//main content
tpconh4 = document.querySelectorAll(`.top-content .text-content h4`);
tpconp = document.querySelectorAll(`.top-content .text-content p`);
tpconh4[0].textContent = siteContent["main-content"]["features-h4"];
tpconh4[1].textContent = siteContent["main-content"]["about-h4"];
tpconp[0].textContent = siteContent["main-content"]["features-content"];
tpconp[1].textContent = siteContent["main-content"]["about-content"];
bcconh4 = document.querySelectorAll(`.bottom-content .text-content h4`);
bcconp = document.querySelectorAll(`.bottom-content .text-content p`);
bcconh4[0].textContent = siteContent["main-content"]["services-h4"];
bcconh4[1].textContent = siteContent["main-content"]["product-h4"];
bcconh4[2].textContent = siteContent["main-content"]["vision-h4"];
bcconp[0].textContent = siteContent["main-content"]["services-content"];
bcconp[1].textContent = siteContent["main-content"]["product-content"];
bcconp[2].textContent = siteContent["main-content"]["vision-content"];
let mimg = document.getElementById("middle-img");
mimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
//contact
document.querySelector(`.contact h4`).textContent = siteContent["contact"]["contact-h4"];
document.querySelectorAll(`.contact p`)[0].textContent = siteContent["contact"]["address"];
document.querySelectorAll(`.contact p`)[1].textContent = siteContent["contact"]["phone"];
document.querySelectorAll(`.contact p`)[2].textContent = siteContent["contact"]["email"];
//footer
document.querySelector(`footer p`).textContent = siteContent["footer"]["copyright"];
//additional stuff
navbar[0].style.color = "green";
navbar[1].style.color = "green";
navbar[2].style.color = "green";
navbar[3].style.color = "green";
navbar[4].style.color = "green";
navbar[5].style.color = "green";
navbar[5].appendChild(document.createTextNode(" Help"));
navbar[0].prepend(document.createTextNode("Impact "));