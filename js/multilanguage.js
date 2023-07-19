let idiom = localStorage.getItem('idiomchoose');
let langs = document.querySelector(".langs");
     link = document.querySelectorAll("li");
     title = document.querySelector(".title");
     home = document.querySelector("#home");
     about = document.querySelector("#about");
     project = document.querySelector("#project");
     contact = document.querySelector("#contact");
     offer = document.querySelector("#offer");
     card1 = document.querySelector(".card1");
     card2 = document.querySelector(".card2");
     card3 = document.querySelector(".card3");
     card1_txt = document.querySelector(".card1_txt");
     card2_txt = document.querySelector(".card2_txt");
     card3_txt = document.querySelector(".card3_txt");
     b1 = document.querySelector(".b1");
     b2 = document.querySelector(".b2");
     b3 = document.querySelector(".b3");
     b4 = document.querySelector(".b4");
     b5 = document.querySelector(".b5");
     benefits = document.querySelector("#benefits");
     benefits1 = document.querySelector("#benefits1");
     benefits2 = document.querySelector("#benefits2");
     benefits3 = document.querySelector("#benefits3");
     benefits4 = document.querySelector("#benefits4");
     benefits5 = document.querySelector("#benefits5");
     benefits6 = document.querySelector("#benefits6");
     benefits7 = document.querySelector("#benefits7");
     benefits8 = document.querySelector("#benefits8");
     benefits9 = document.querySelector("#benefits9");
     viewmore = document.querySelector("#viewmore");
     viewmore2 = document.querySelector("#viewmore2");
     viewmore3 = document.querySelector("#viewmore3");
     mission = document.querySelector("#mission");
     vision = document.querySelector("#vision");
     values = document.querySelector("#values");
   
let data = {
     spanish: {
          title: "HAZ CRECER TU DINERO",
          home: "INICIO",
          about: "NOSOTROS",
          project: "PROYECTOS",
          contact: "CONTACTO",
          b1: "Con más de 10 años de experiencia.",
          b2: "Empresa 100% mexicana.",
          b3: "Creamos un plan de estrategia financiera<br>deacuerdo a tus intereses y necesidades.",
          b4: "Inversión inteligente.",
          b5: "Integridad y confianza.",
          card1:"¿Buscas hacerte de una propiedad en la CDMX a mediano plazo?<br><br>Nosotros lo hacemos posible",
          card2:"¿Necesitas un prestamo para hacer crecer tu dinero?<br><br>Nosotros te ayudamos",
          card3:"¿Deseas invertir activamente en bienes raíces?<br>(Credit casa es administrado por Fibra Cero)<br><br>Nosotros te asesoramos",
          card1_txt:"Ahorro",
          card2_txt:"Financiamiento",
          card3_txt:"Inversión",
          offer:"¿Qué ofrecemos?",
          benefits:"¿Que beneficios obtengo?",
          benefits1:"<b>Asesoría personalizada</b><br><br>Nuestro compromiso con todos nuestros clientes es otorgar una atención personalizada por lo que desde el momento en que te contactas con nosotros, recibirás una atención de calidad durante todo el proceso.",
          benefits2:"<b>Asesoría legal</b><br><br>Nos enorgullece ser de las pocas empresas que te acompañará con un equipo de expertos jurídicos, brindando seguridad legal durante todo tu proceso.",
          benefits3:"<b>Oportunidades únicas</b><br><br>Aprovecha nuestras exclusivas oportunidades de inversión y conviértete en miembro exclusivo del CLUB IBR.",
          benefits4:"<b>Altos rendimientos</b><br><br>Uno de nuestros principales objetivos es ser una de las empresas que ofrece mayor rendimiento en comparación a las demás instituciones bancarias y/o financieras.<br><br>Para comprobarlo te invitamos a calcular tus rendimientos de inversión.",
          benefits5:"<b>Intereses bajos</b><br><br>Al ser una SOFOM estamos comprometidos con ofrecer una tasa de interés competitiva en comparación con las instituciones bancarias.",
          benefits6:"<b>Financiamiento</b><br><br>Sabemos que para obtener un crédito hipotecario es necesario cumplir con requisitos indispensables como lo son no estar en buró de crédito y comprobante de gastos, con nosotros todo eso no existe.",
          benefits7:"<b>Préstamos con garantía hipotecaria</b><br><br>¿Sin liquidez para poder abrir el negocio?<br>Nosotros te otorgamos hasta el 30% del valor de tu propiedad.",
          benefits8:"Formarás parte de un club de inversionistas",
          benefits9:"Descubre como ser miembro del exclusivo Club IBR",
          viewmore:"Ver más",
          calculate:"Calcula tus ganancias",
          mission:"Misión",
          vision:"Visión",
          values:"Valores",
     },
     english: {
          title: "MAKE YOUR MONEY GROW",
          home: "HOME",
          about: "ABOUT US",
          project: "PROJECTS",
          contact: "CONTACT",
          b1: "With more than 10 years of experience.",
          b2: "100% Mexican company.",
          b3: "We create a financial strategy plan<br>according to your interests and needs.",
          b4: "Smart investment.",
          b5: "Integrity and trust.",
          card1:"Are you looking to get a property in CDMX in the medium term?<br><br>We make it possible",
          card2:"Do you need a loan to make your money grow?<br><br>We help you",
          card3:"Do you want to actively invest in real estate?<br>(Credit Casa is managed by Fibra Cero)<br><br>We advise you",
          card1_txt:"Saving",
          card2_txt:"Financing",
          card3_txt:"Investment",
          offer:"What we offer?",
          benefits:"What benefits do I get?",
          benefits1:"<b>Personalized advice</b><br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est in reiciendis, sapiente labore enim distinctio, qui ex rerum eum quam facilis eveniet assumenda dolores fuga aut harum. Recusandae possimus maxime ipsa qui voluptas? Ipsam aperiam, at asperiores quam expedita optio dignissimos similique repellat perferendis, laborum quia nam, rerum dolorum sed.",
          benefits2:"<b>Legal Security</b><br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est in reiciendis, sapiente labore enim distinctio, qui ex rerum eum quam facilis eveniet assumenda dolores fuga aut harum. Recusandae possimus maxime ipsa qui voluptas? Ipsam aperiam, at asperiores quam expedita optio dignissimos similique repellat perferendis, laborum quia nam, rerum dolorum sed.",
          benefits3:"<b>Unique Real Estate Opportunities</b><br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est in reiciendis, sapiente labore enim distinctio, qui ex rerum eum quam facilis eveniet assumenda dolores fuga aut harum. Recusandae possimus maxime ipsa qui voluptas? Ipsam aperiam, at asperiores quam expedita optio dignissimos similique repellat perferendis, laborum quia nam, rerum dolorum sed.",
          benefits4:"<b>High yields</b><br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est in reiciendis, sapiente labore enim distinctio, qui ex rerum eum quam facilis eveniet assumenda dolores fuga aut harum. Recusandae possimus maxime ipsa qui voluptas? Ipsam aperiam, at asperiores quam expedita optio dignissimos similique repellat perferendis, laborum quia nam, rerum dolorum sed.",
          benefits5:"<b>Low interest rate</b><br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est in reiciendis, sapiente labore enim distinctio, qui ex rerum eum quam facilis eveniet assumenda dolores fuga aut harum. Recusandae possimus maxime ipsa qui voluptas? Ipsam aperiam, at asperiores quam expedita optio dignissimos similique repellat perferendis, laborum quia nam, rerum dolorum sed.",
          benefits6:"<b>Financing</b><br><br>We know that to obtain a mortgage loan it is necessary to meet essential requirements such as not being in a credit bureau and proof of expenses, with us all that does not exist.",
          benefits7:"<b>Loans with mortgage</b><br><br>No liquidity to open the business?<br>We give you up to 30% of the value of your property.",
          benefits8:"You will be part of an investor club",
          benefits9:"Discover how to become a member of the exclusive IBR Club",
          viewmore:"View more",
          calculate:"Calculate your earnings",
          mission:"Mission",
          vision:"Vision",
          values:"Values",
     },
     french: {
          title: "FAIRE CROÎTRE VOTRE ARGENT",
          home: "ACCUEIL",
          about: "PRÈS DE NOUS",
          project: "PROJETS",
          contact: "CONTACT",
          b1: "Avec plus de 10 ans d’expérience.",
          b2: "Société 100% mexicaine.",
          b3: "Nous créons un plan de stratégie financière<br>en fonction de vos intérêts et de vos besoins.",
          b4: "Investissement intelligent.",
          b5: "Intégrité et confiance.",
          card1:"Cherchez-vous à obtenir une propriété à CDMX à moyen terme?<br><br>Nous le rendons possible",
          card2:"Avez-vous besoin d'un prêt pour faire fructifier votre argent?<br><br>Nous vous aidons",
          card3:"Vous souhaitez investir activement dans l'immobilier?<br>(Crédit Casa est géré par Fibra Cero)<br><br>Nous vous conseillons",
          card1_txt:"Épargne",
          card2_txt:"Financement",
          card3_txt:"Investissement",
          offer:"Ce que nous offrons?",
          benefits:"Quels avantages puis-je obtenir?",
          benefits1:"<b>Conseils personnalisés</b><br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est in reiciendis, sapiente labore enim distinctio, qui ex rerum eum quam facilis eveniet assumenda dolores fuga aut harum. Recusandae possimus maxime ipsa qui voluptas? Ipsam aperiam, at asperiores quam expedita optio dignissimos similique repellat perferendis, laborum quia nam, rerum dolorum sed.",
          benefits2:"<b>Sécurité juridique</b><br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est in reiciendis, sapiente labore enim distinctio, qui ex rerum eum quam facilis eveniet assumenda dolores fuga aut harum. Recusandae possimus maxime ipsa qui voluptas? Ipsam aperiam, at asperiores quam expedita optio dignissimos similique repellat perferendis, laborum quia nam, rerum dolorum sed.",
          benefits3:"<b>Opportunités immobilières uniques</b><br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est in reiciendis, sapiente labore enim distinctio, qui ex rerum eum quam facilis eveniet assumenda dolores fuga aut harum. Recusandae possimus maxime ipsa qui voluptas? Ipsam aperiam, at asperiores quam expedita optio dignissimos similique repellat perferendis, laborum quia nam, rerum dolorum sed.",
          benefits4:"<b>Rendements élevés</b><br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est in reiciendis, sapiente labore enim distinctio, qui ex rerum eum quam facilis eveniet assumenda dolores fuga aut harum. Recusandae possimus maxime ipsa qui voluptas? Ipsam aperiam, at asperiores quam expedita optio dignissimos similique repellat perferendis, laborum quia nam, rerum dolorum sed.",
          benefits5:"<b>Faible taux d’intérêts</b><br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est in reiciendis, sapiente labore enim distinctio, qui ex rerum eum quam facilis eveniet assumenda dolores fuga aut harum. Recusandae possimus maxime ipsa qui voluptas? Ipsam aperiam, at asperiores quam expedita optio dignissimos similique repellat perferendis, laborum quia nam, rerum dolorum sed.",
          benefits6:"<b>Financement</b><br><br>Nous savons que pour obtenir un prêt hypothécaire, il est nécessaire de répondre à des exigences essentielles telles que ne pas être dans une agence d’évaluation du crédit et une preuve de dépenses, avec nous tout ce qui n’existe pas.",
          benefits7:"<b>Prêts hypothécaires</b><br><br>Pas de liquidités pour ouvrir l’entreprise?<br>Nous vous donnons jusqu’à 30% de la valeur de votre propriété.",
          benefits8:"Vous ferez partie d’un club d’investisseurs",
          benefits9:"Découvrez comment devenir membre du Club IBR exclusif",
          viewmore:"Voir plus",
          calculate:"Calculez vos gains",
          mission:"Mission",
          vision:"Vision",
          values:"Valeurs",
     }
}   
link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");
          let attr = el.getAttribute("language")
          if(attr!==idiom){
               idiom=attr;
          }
           localStorage.setItem('idiomchoose',attr)
           title.innerHTML = data[idiom].title
           home.innerHTML = data[idiom].home
           about.innerHTML = data[idiom].about
           project.innerHTML = data[idiom].project
           contact.innerHTML = data[idiom].contact
           b1.innerHTML = data[idiom].b1
           b2.innerHTML = data[idiom].b2
           b3.innerHTML = data[idiom].b3
           b4.innerHTML = data[idiom].b4
           b5.innerHTML = data[idiom].b5
           offer.innerHTML = data[idiom].offer
           card1.innerHTML = data[idiom].card1
           card2.innerHTML = data[idiom].card2
           card3.innerHTML = data[idiom].card3
           card1_txt.innerHTML = data[idiom].card1_txt
           card2_txt.innerHTML = data[idiom].card2_txt
           card3_txt.innerHTML = data[idiom].card3_txt
           benefits.innerHTML = data[idiom].benefits
           benefits1.innerHTML = data[idiom].benefits1
           benefits2.innerHTML = data[idiom].benefits2
           benefits3.innerHTML = data[idiom].benefits3
           benefits4.innerHTML = data[idiom].benefits4
           benefits5.innerHTML = data[idiom].benefits5
           benefits6.innerHTML = data[idiom].benefits6
           benefits7.innerHTML = data[idiom].benefits7
           benefits8.innerHTML = data[idiom].benefits8
           benefits9.innerHTML = data[idiom].benefits9
           viewmore.innerHTML = viewmore2.innerHTML = viewmore3.innerHTML = data[idiom].viewmore
           calculate.innerHTML = data[idiom].calculate
           mission.innerHTML = data[idiom].mission
           vision.innerHTML = data[idiom].vision
           values.innerHTML = data[idiom].values
      
     })
})
          title.innerHTML = data[idiom].title
          home.innerHTML = data[idiom].home
          about.innerHTML = data[idiom].about
          project.innerHTML = data[idiom].project
          contact.innerHTML = data[idiom].contact
          b1.innerHTML = data[idiom].b1
          b2.innerHTML = data[idiom].b2
          b3.innerHTML = data[idiom].b3
          b4.innerHTML = data[idiom].b4
          b5.innerHTML = data[idiom].b5
          offer.innerHTML = data[idiom].offer
          card1.innerHTML = data[idiom].card1
          card2.innerHTML = data[idiom].card2
          card3.innerHTML = data[idiom].card3
          card1_txt.innerHTML = data[idiom].card1_txt
          card2_txt.innerHTML = data[idiom].card2_txt
          card3_txt.innerHTML = data[idiom].card3_txt
          benefits.innerHTML = data[idiom].benefits
          benefits1.innerHTML = data[idiom].benefits1
          benefits2.innerHTML = data[idiom].benefits2
          benefits3.innerHTML = data[idiom].benefits3
          benefits4.innerHTML = data[idiom].benefits4
          benefits5.innerHTML = data[idiom].benefits5
          benefits6.innerHTML = data[idiom].benefits6
          benefits7.innerHTML = data[idiom].benefits7
          benefits8.innerHTML = data[idiom].benefits8
          benefits9.innerHTML = data[idiom].benefits9
          viewmore.innerHTML = viewmore2.innerHTML = viewmore3.innerHTML = data[idiom].viewmore
          calculate.innerHTML = data[idiom].calculate
          mission.innerHTML = data[idiom].mission
          vision.innerHTML = data[idiom].vision
          values.innerHTML = data[idiom].values