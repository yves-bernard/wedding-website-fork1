var langs = document.querySelector(".member-langs"),
     link = document.querySelectorAll("a"),
     title = document.querySelector(".title"),
     descr = document.querySelector(".description");
     first_met = document.querySelector(".first_met");
     header1 = document.querySelector(".header1");
     header2 = document.querySelector(".header2");

link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")

          title.textContent = data[attr].title
          first_met.textContent = data[attr].first_met
          header1.textContent = data[attr].header1
          header2.textContent = data[attr].header2
          //descr.textContent = data[attr].description
     })
})

var data = {
     french: {
          label:"Francais",
          title: "Le mariage de Deborah et Yves",
          header1: "La rencontre",
          header2: "Le programme",
          description: "Bienvenue sur le site de notre mariage.",
          first_met: "Deborah et moi nous sommes rencontres en Norvege pendant un echange erasmus il y a 10 ans et nous sommes depuis inseprables. Nous sommes enchantes d'invite notre famille et nos amis pour celebrer notre mariage le 4 mai 2024. Venez on va s'eclater !",
          date: "Wedding will be on the saturday 4th of may at the moulin de nartaud."
     },
     english: {
          label:"English",
          title: "Deb and Yves's wedding",
          header1: "How we met",
          header2: "Events",
          description: "Welcome to our wedding website.",
          first_met: "Deborah and I met in Norway during erasmus exactly 10 years ago and we've never left each other since. We're delighted to invite our family and friends to celebrate our wedding on the 4th of may 2024 ! It will be mighty craic.",
          date: "Le mariage aura lieu le samedi 4 mai 2024 au moulin de nartaud."
     },
}
