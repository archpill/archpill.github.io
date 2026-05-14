const translations = {
    en: {
        
        navAbout : "Home",
        navServices: "Services",
        navContact : "Contact",
        
        subtitle1 : "Architect's Portfolio",
        par1 : "Hello, I am a visual and technical representation designer with a main focus in BIM-based software.",

        services_modeling_title : "MODELING" ,
        services_modeling_description : "Architectural 3d modeling based on plans or on-site measurements. I use a wide range of industry-standard software to deliver detailed models.",
        services_modeling_contact : "Contact me for more information.",

        services_render_title : "ARCHVIZ" ,
        services_render_description : "Bring your architectural ideas to life with realistic renderings. You can choose the look and feel from camera angles to materials. I specialize in both interior and exterior visualizations.",
        services_render_contact : "Contact me for more information.",

        services_mep_description : "Mechanical, electrical, and plumbing systems modeled in Autodesk Revit, based on architectural drawings and ready for scheduling and quantity takeoff.",
        services_mep_contact : "Contact me for more information.",

        services_details_title : "DETAILING" ,
        services_details_description : "Construction-ready documentation of architectural elements and components.",
        services_details_contact : "Contact me for more information.",

        contact_description : "Bachelor of Architecture from <br> Universidad de Lima.",
        contact_cv : "Download CV",
        contact_dossier : "Download Projects Dossier",
        contact_email_title : "Contact Me",

        contact_email_name : "Your Name",
        contact_email_email : "Your Email",
        contact_email_message : "Your Message",

        contact_email_send : "Send",


    },
    es: {
        
        navAbout : "Inicio",
        navServices: "Servicios",
        navContact : "Contacto",

        subtitle1 : "Portafolio de Arquitecto",
        par1 : "Hola, soy un diseñador de representaciones visuales y técnicas basadas principalmente en software BIM.",

        services_modeling_title : "MODELADO" ,
        services_modeling_description : "Levantamiento de modelos arquitectónicos a partir de planos o mediciones en campo. Manejo una amplia gama de software de la industria para producir modelos detallados.",
        services_modeling_contact : "Contáctame para más información.",

        services_render_title : "RENDERS" ,
        services_render_description : "Dale vida a tus diseños con renders fotorrealistas. Puedes escoger ángulos de cámara, materiales e iluminación. Me especializo en renderizados interiores y exteriores.",
        services_render_contact : "Contáctame para más información.",

        services_mep_description : "Sistemas mecánicos, eléctricos y sanitarios modelados en Autodesk Revit, a partir de planos arquitectónicos y listos para metrados y planificación.",
        services_mep_contact : "Contáctame para más información.",

        services_details_title : "DETALLES" ,
        services_details_description : "Documentación de elementos y componentes arquitectónicos, lista para obra.",
        services_details_contact : "Contáctame para más información.",

        contact_description : "Bachiller en Arquitectura por la <br> Universidad de Lima.",
        contact_cv : "Descargar CV",
        contact_dossier : "Descargar Dossier de Proyectos",
        contact_email_title : "Contáctame",

        contact_email_name : "Tu Nombre",
        contact_email_email : "Tu Correo Electrónico",
        contact_email_message : "Tu Mensaje",

        contact_email_send : "Enviar",


    }
}

const LanguageSelectop = document.querySelector("select");

let navAbout = document.getElementById("navAbout");
let navServices = document.getElementById("navServices");
let navContact = document.getElementById("navContact");

let subtitle1 = document.getElementById("subtitle1");
let par1 = document.getElementById("par1");

let services_modeling_title = document.getElementById("services_modeling_title");
let services_modeling_description = document.getElementById("services_modeling_description");
let services_modeling_contact = document.getElementById("services_modeling_contact");

let services_render_title = document.getElementById("services_render_title");
let services_render_description = document.getElementById("services_render_description");
let services_render_contact = document.getElementById("services_render_contact");

let services_mep_description = document.getElementById("services_mep_description");
let services_mep_contact = document.getElementById("services_mep_contact");

let services_details_title = document.getElementById("services_details_title");
let services_details_description = document.getElementById("services_details_description");
let services_details_contact = document.getElementById("services_details_contact");

let contact_description = document.getElementById("contact_description");
let contact_cv = document.getElementById("contact_cv");
let contact_dossier = document.getElementById("contact_dossier");
let contact_email_title = document.getElementById("contact_email_title");

let contact_email_name = document.getElementById("contact_email_name");
let contact_email_email = document.getElementById("contact_email_email");
let contact_email_message = document.getElementById("contact_email_message");

let contact_email_send = document.getElementById("contact_email_send");


LanguageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value);
    localStorage.setItem("siteLanguage", event.target.value); // ✅ Save chosen language
});

// Load saved language on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("siteLanguage") || "en"; // Default to "en"
    LanguageSelectop.value = savedLang; // Make dropdown reflect saved value
    setLanguage(savedLang);
});

const setLanguage = (language) => {
    if(language == "es"){

        navAbout.innerText = translations.es.navAbout;
        navServices.innerText = translations.es.navServices;
        navContact.innerText = translations.es.navContact;

        subtitle1.innerText = translations.es.subtitle1;
        par1.innerText = translations.es.par1;

        services_modeling_title.innerText = translations.es.services_modeling_title;
        services_modeling_description.innerText = translations.es.services_modeling_description;
        services_modeling_contact.innerText = translations.es.services_modeling_contact;

        services_render_title.innerText = translations.es.services_render_title;
        services_render_description.innerText = translations.es.services_render_description;
        services_render_contact.innerText = translations.es.services_render_contact;

        services_mep_description.innerText = translations.es.services_mep_description;
        services_mep_contact.innerText = translations.es.services_mep_contact;
      
        services_details_title.innerText = translations.es.services_details_title;
        services_details_description.innerText = translations.es.services_details_description;
        services_details_contact.innerText = translations.es.services_details_contact;

        contact_description.innerHTML = translations.es.contact_description;
        contact_cv.innerText = translations.es.contact_cv;
        contact_dossier.innerText = translations.es.contact_dossier;
        contact_email_title.innerText = translations.es.contact_email_title;

        contact_email_name.placeholder = translations.es.contact_email_name;
        contact_email_email.placeholder = translations.es.contact_email_email;
        contact_email_message.placeholder = translations.es.contact_email_message;

        contact_email_send.innerText = translations.es.contact_email_send;

    }else if(language == "en"){

        navAbout.innerText = translations.en.navAbout;
        navServices.innerText = translations.en.navServices;
        navContact.innerText = translations.en.navContact;

        subtitle1.innerText = translations.en.subtitle1;
        par1.innerText = translations.en.par1;

        services_modeling_title.innerText = translations.en.services_modeling_title;
        services_modeling_description.innerText = translations.en.services_modeling_description;
        services_modeling_contact.innerText = translations.en.services_modeling_contact;

        services_render_title.innerText = translations.en.services_render_title;
        services_render_description.innerText = translations.en.services_render_description;
        services_render_contact.innerText = translations.en.services_render_contact;

        services_mep_description.innerText = translations.en.services_mep_description;
        services_mep_contact.innerText = translations.en.services_mep_contact;

        services_details_title.innerText = translations.en.services_details_title;
        services_details_description.innerText = translations.en.services_details_description;

        contact_description.innerHTML = translations.en.contact_description;
        contact_cv.innerText = translations.en.contact_cv;
        contact_dossier.innerText = translations.en.contact_dossier;
        contact_email_title.innerText = translations.en.contact_email_title;

        contact_email_name.placeholder = translations.en.contact_email_name;
        contact_email_email.placeholder = translations.en.contact_email_email;
        contact_email_message.placeholder = translations.en.contact_email_message;

        contact_email_send.innerText = translations.en.contact_email_send;

    }
}





document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav');
  const contactSection = document.querySelector('#contact');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        nav.classList.add('color-change');
      } else {
        nav.classList.remove('color-change');
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(contactSection);
});

document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('select');
  const contactSection = document.querySelector('#contact');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        nav.classList.add('color-change');
      } else {
        nav.classList.remove('color-change');
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(contactSection);
});


document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector("#about");
  const contactSection = document.querySelector("#contact");

  const navAbout = document.querySelector('.nav-link[href="#about"]');
  const navServices = document.querySelector('.nav-link[href="#services"]');
  const navContact = document.querySelector('.nav-link[href="#contact"]');

  function setActive(link) {
    [navAbout, navServices, navContact].forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  }

  function updateActiveLink() {
    const scrollPos = window.scrollY + window.innerHeight / 2; // middle of viewport

    if (
      scrollPos >= aboutSection.offsetTop &&
      scrollPos < aboutSection.offsetTop + aboutSection.offsetHeight
    ) {
      setActive(navAbout);
    } 
    else if (
      scrollPos >= contactSection.offsetTop &&
      scrollPos < contactSection.offsetTop + contactSection.offsetHeight
    ) {
      setActive(navContact);
    } 
    else {
      setActive(navServices);
    }
  }

  document.addEventListener("scroll", updateActiveLink);

  // Run once on page load so About is active immediately
  updateActiveLink();
}); 






// MODEL BROWSER

const modelBrowserBtn = document.getElementById("modelBrowserBtn");
const modelBrowser = document.getElementById("modelBrowser");
const modelSearch = document.getElementById("modelSearch");
const modelList = document.getElementById("modelList");

/* MANUAL MODEL LIST */

const models = [

{
name:"DR_Dormitorio",
file:"models/DR_Dormitorio.glb"
},

{
name:"AR_Minibar",
file:"models/AR_Minibar.glb"
},

{
name:"AR_Pasadizo",
file:"models/AR_Pasadizo.glb"
},

{
name:"PV_Tocador",
file:"models/PV_Tocador.glb"
},

];

/* OPEN BROWSER */

modelBrowserBtn.onclick = (e)=>{
e.preventDefault();
modelBrowser.style.display = "block";
renderList(models);
};

/* RENDER MODEL LIST */

function renderList(list){

modelList.innerHTML = "";

list.forEach(model=>{

const li = document.createElement("li");
li.textContent = model.name;

li.onclick = ()=>{

window.location.href =
`3dExplorer.html?model=${encodeURIComponent(model.file)}`;

};

modelList.appendChild(li);

});

}

/* SEARCH */

modelSearch.addEventListener("input",()=>{

const query = modelSearch.value.toLowerCase();

const filtered = models.filter(m =>
m.name.toLowerCase().includes(query)
);

renderList(filtered);

});

const closeBrowser = document.getElementById("closeBrowser");

if(closeBrowser){
closeBrowser.onclick = ()=>{
modelBrowser.style.display = "none";
};
}

window.addEventListener("click",(e)=>{

if(
!modelBrowser.contains(e.target) &&
!modelBrowserBtn.contains(e.target)
){
modelBrowser.style.display = "none";
}

});