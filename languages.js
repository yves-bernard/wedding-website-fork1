var langs = document.querySelector(".member-langs"),
     link = document.querySelectorAll("a"),
     title = document.querySelector(".title"),
     descr = document.querySelector(".description");
     first_met = document.querySelector(".first_met");
     header = document.querySelector(".header");

link.forEach(el=>{
     print("OK")
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")

          title.textContent = data[attr].title
          descr.textContent = data[attr].description
          first_met.textContent = data[attr].first_met
          header.textContent = data[attr].header
     })
})

var data = {
     french: {
          label:"Francais",
          title: "Le mariage de Deborah et Yves",
          description: "Bienvenue sur le site de notre mariage.",
          first_met: "When we first met.",
          header: "When we first met.",
          date: "Le mariage aura lieu le samedi 4 mai 2024 au moulin de nartaud."
     },
     english: {
          label:"English",
          title: "Deb and Yves's wedding",
          description: "Welcome to our wedding website.",
          first_met: "Quand on s'est rencontre.",
          header: "Comment s'est on rencontre.",
          date: "Wedding will be on the saturday 4th of may at the moulin de nartaud."
     },
}
