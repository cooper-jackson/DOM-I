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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
document.querySelector("#logo-img").setAttribute('src', siteContent["nav"]["img-src"])

let appendedChild = document.createElement("a")
let prependedChild = document.createElement("a")

document.querySelector('nav').appendChild(appendedChild)
document.querySelector('nav').prepend(prependedChild)

let anchors = document.querySelectorAll('a')
anchors[0].textContent = "Prepended Child"
anchors[1].textContent = siteContent["nav"]["nav-item-1"]
anchors[2].textContent = siteContent["nav"]["nav-item-2"]
anchors[3].textContent = siteContent["nav"]["nav-item-3"]
anchors[4].textContent = siteContent["nav"]["nav-item-4"]
anchors[5].textContent = siteContent["nav"]["nav-item-5"]
anchors[6].textContent = siteContent["nav"]["nav-item-6"]
anchors[7].textContent = "Appended Child"

for (let i = 0; i < anchors.length; i++) {
  anchors[i].style.color = "green"
}


document.querySelector(".cta h1").textContent = siteContent["cta"]["h1"]
document.querySelector(".cta button").textContent = siteContent["cta"]["h1"]
document.querySelector("#cta-img").setAttribute('src', siteContent["cta"]["img-src"])

let mainContentTopContentTextContentH4 = document.querySelectorAll(".main-content .top-content .text-content h4")
mainContentTopContentTextContentH4[0].textContent = siteContent["main-content"]["features-h4"]
mainContentTopContentTextContentH4[1].textContent = siteContent["main-content"]["about-h4"]

let mainContentTopContentTextContentP = document.querySelectorAll(".main-content .top-content .text-content p")
mainContentTopContentTextContentP[0].textContent = siteContent["main-content"]["features-content"]
mainContentTopContentTextContentP[1].textContent = siteContent["main-content"]["about-content"]

let mainContentBottomContentTextContentH4 = document.querySelectorAll(".main-content .bottom-content .text-content h4")
mainContentBottomContentTextContentH4[0].textContent = siteContent["main-content"]["services-h4"]
mainContentBottomContentTextContentH4[1].textContent = siteContent["main-content"]["product-h4"]
mainContentBottomContentTextContentH4[2].textContent = siteContent["main-content"]["vision-h4"]

document.querySelector("#middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"])

let mainContentBottomContentTextContentP = document.querySelectorAll(".main-content .bottom-content .text-content p")
mainContentBottomContentTextContentP[0].textContent = siteContent["main-content"]["services-content"]
mainContentBottomContentTextContentP[1].textContent = siteContent["main-content"]["product-content"]
mainContentBottomContentTextContentP[2].textContent = siteContent["main-content"]["vision-content"]

document.querySelector(".contact h4").textContent = siteContent["contact"]["contact-h4"]

let contactP = document.querySelectorAll(".contact p")
contactP[0].textContent = siteContent["contact"]["address"]
contactP[1].textContent = siteContent["contact"]["phone"]
contactP[2].textContent = siteContent["contact"]["email"]

document.querySelector("footer p").textContent = siteContent["footer"]["copyright"]