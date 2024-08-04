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
     titlebenefits1 = document.querySelector("#titlebenefits1");
     titlebenefits2 = document.querySelector("#titlebenefits2");
     titlebenefits3 = document.querySelector("#titlebenefits3");
     titlebenefits4 = document.querySelector("#titlebenefits4");
     titlebenefits5 = document.querySelector("#titlebenefits5");
     titlebenefits6 = document.querySelector("#titlebenefits6");
     titlebenefits7 = document.querySelector("#titlebenefits7");
     titlebenefits8 = document.querySelector("#titlebenefits8");
     benefits = document.querySelector("#benefits");
     benefits1 = document.querySelector("#benefits1");
     benefits2 = document.querySelector("#benefits2");
     benefits3 = document.querySelector("#benefits3");
     benefits4 = document.querySelector("#benefits4");
     benefits5 = document.querySelector("#benefits5");
     benefits6 = document.querySelector("#benefits6");
     benefits7 = document.querySelector("#benefits7");
     benefits8 = document.querySelector("#benefits8");
     viewmore = document.querySelector("#viewmore");
     viewmore2 = document.querySelector("#viewmore2");
     viewmore3 = document.querySelector("#viewmore3");
     discover = document.querySelector("#discover");
     mission = document.querySelector("#mission");
     missiond = document.querySelector("#mission-d");
     vision = document.querySelector("#vision");
     visiond = document.querySelector("#vision-d");
     values = document.querySelector("#values");
     valuesd = document.querySelector("#values-d");
     aboutus = document.querySelector("#about-us");
     trust = document.querySelector("#trust");
     carousel1 = document.querySelector("#carousel1");
     carousel2 = document.querySelector("#carousel2");
     carousel3 = document.querySelector("#carousel3");
     carousel4 = document.querySelector("#carousel4");
     carousel5 = document.querySelector("#carousel5");
     carousel6 = document.querySelector("#carousel6");
     team = document.querySelector("#team");
     teamjoin = document.querySelector("#team-join");
     chancetitle = document.querySelector("#chance-title");
     calculate = document.querySelector("#calculate");
     locate = document.querySelector("#locate");
     formdoubt = document.querySelector("#form-doubt");
     formcontact = document.querySelector("#form-contact");
     formdata = document.querySelector("#form-data");
     formsavetxt = document.querySelector("#form-save-txt");
     formfinancingtxt = document.querySelector("#form-financing-txt");
     formchancetxt = document.querySelector("#form-chance-txt");
     formtalktxt = document.querySelector("#form-talk-txt");
     formsend = document.querySelector("#form-send");
     formconfidential = document.querySelector("#form-confidential");

     legaltitle = document.querySelector("#legal-title");
     legaladvise = document.querySelector("#legal-advise");
     privacyadvise = document.querySelector("#privacy-advise");
     ethicalpolicies = document.querySelector("#ethical-policies");
     corporatetitle = document.querySelector("#corporate-title");
     ouroffices = document.querySelector("#our-offices");
     advisors = document.querySelector("#advisors");
     socialmedia = document.querySelector("#social-media");
     contacttitle = document.querySelector("#contact-title");
     rightsreserved = document.querySelector("#rights-reserved");

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
          card3:"¿Deseas invertir activamente en bienes raíces?<br><br>Nosotros te asesoramos",
          card1_txt:"Ahorro",
          card2_txt:"Financiamiento",
          card3_txt:"Inversión",
          offer:"¿Qué ofrecemos?",
          titlebenefits1:"<b>Asesoría personalizada</b>",
          titlebenefits2:"<b>Asesoría legal</b>",
          titlebenefits3:"<b>Oportunidades únicas</b>",
          titlebenefits4:"<b>Altos rendimientos</b>",
          titlebenefits5:"<b>Intereses bajos</b>",
          titlebenefits6:"<b>Financiamiento</b>",
          titlebenefits7:"<b>Préstamos con garantía hipotecaria</b>",
          titlebenefits8:"<b>Club IBR</b>",
          benefits:"¿Que beneficios obtengo?",
          benefits1:"Nuestro compromiso con todos nuestros clientes es otorgar una atención personalizada por lo que desde el momento en que te contactas con nosotros, recibirás una atención de calidad durante todo el proceso.",
          benefits2:"Nos enorgullece ser de las pocas empresas que te acompañará con un equipo de expertos jurídicos, brindando seguridad legal durante todo tu proceso.",
          benefits3:"Aprovecha nuestras exclusivas oportunidades de inversión y conviértete en miembro exclusivo del CLUB IBR.",
          benefits4:"Somos una empresa que ofrece mayor rendimiento en comparación a las demás instituciones bancarias y/o financieras.<br><br>Para comprobarlo te invitamos a calcular tus rendimientos de inversión.",
          benefits5:"Al ser una SOFOM estamos comprometidos con ofrecer una tasa de interés competitiva en comparación con las instituciones bancarias.",
          benefits6:"Sabemos que para obtener un crédito hipotecario es necesario cumplir con requisitos indispensables como lo son no estar en buró de crédito y comprobante de gastos, con nosotros todo eso no existe.",
          benefits7:"¿Sin liquidez para poder abrir el negocio?<br>Nosotros te otorgamos hasta el 30% del valor de tu propiedad.",
          benefits8:"Formarás parte de un club de inversionistas",
          viewmore:"Ver más",
          discover:"Descubre cómo ser miembro",
          calculate:"Calcula tus ganancias",
          aboutus:"Acerca de nosotros",
          mission:"Misión",
          missiond:"Buscamos ayudar a más familias de México y Estados Unidos a conseguir el sueño de poder tener un hogar propio a través de nuestros financiamientos y/o préstamos hipotecarios con una tasa competitiva.",
          vision:"Visión",
          visiond:"Buscamos posicionarnos dentro de las mejores empresas para otorgar un financiamiento con una tasa de interés muy competitiva en el mercado.",
          values:"Valores",
          valuesd:"Empoderamiento compromiso y honestidad son los pilares de nuestra corporación al encaminar tanto a clientes como a empleados, por un crecimiento constante en su realización individual y/o financiera.",
          trust:"<b>¿Porqué confiar en nosotros?</b><br>Ellos te lo dirán...",
          carousel1:"Hace mucho tiempo que buscaba un lugar donde tuviera la seguridad que mi dinero rindiera frutos verazmente.",
          carousel2:"El asesoramiento que recibi todo el tiempo, fue claro y honesto, me encaminaron por todo el proceso para que así, pudiera tomar las mejores decisiones.",
          carousel3:"Las tazas son muy competitivas y no me arrepiento de haber invertido con ellos.",
          carousel4:"Lo beneficios que obtuve son mayores a lo que esperaba, realmente me siento muy satisfecho con el trato y los avances de los proyectos en los que eh invertido.",
          carousel5:"El sentido de pertecer a un grupo de inversionistas, me brindo mucha más seguridad y confianza, pues compartimos el interés porque nuestro dinero trabaje y rinda frutos.",
          carousel6:"Como todos, es dificil confiar en cualquier empresa para invertir tu dinero, pero haciendo las correspondientes investigaciones y las comparativas, estoy convencido que son la mejor opción para hacer trabajar mi dinero.",
          team:"<b>Equipo capacitado</b>",
          teamjoin:"¿Quieres formar parte de nuestro equipo?",
          chancetitle:"Oportunidades inmobiliarias únicas",
          locate:"Ubicación",
          formdoubt:"¿Tienes alguna duda?",
          formcontact:"Contáctanos",
          formdata:"Dejanos tus datos y en breve un asesor se pondrá en contacto contigo",
          formsavetxt:"Me interesa saber más sobre ahorrar, para obtener un bien inmobiliario",
          formfinancingtxt:"Me interesa obtener un financiamiento",
          formchancetxt:"Deseo saber más sobre una oportunidad inmobiliaria",
          formtalktxt:"Me gustaría hablar con un asesor para resolver otras dudas",
          formsend:"ENVIAR",
          formconfidential:"Cualquier información que nos brindes será confidencial",
          legaltitle:"<b>LEGALES</b>", 
          legaladvise:"Aviso Legal", 
          privacyadvise:"Avisos de privacidad", 
          ethicalpolicies :"Políticas éticas",
          corporatetitle :"<b>CORPORATIVO</b>",
          ouroffices:"Nuestras oficinas", 
          advisors:"Asesores", 
          socialmedia:"<b>REDES SOCIALES</b>",
          contacttitle:"<b>CONTACTO</b>", 
          rightsreserved:"Todos los derechos reservados ◆ Credit Casa® 2023",
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
          card3:"Do you want to actively invest in real estate?<br><br>We advise you",
          card1_txt:"Saving",
          card2_txt:"Financing",
          card3_txt:"Investment",
          offer:"What we offer?",
          titlebenefits1:"<b>Personalized advice</b>",
          titlebenefits2:"<b>Legal Security</b>",
          titlebenefits3:"<b>Unique Real Estate Opportunities</b>",
          titlebenefits4:"<b>High yields</b>",
          titlebenefits5:"<b>Low interest rate</b>",
          titlebenefits6:"<b>Financing</b>",
          titlebenefits7:"<b>Loans with mortgage</b>",
          titlebenefits8:"<b>Club IBR</b>",
          benefits:"What benefits do I get?",
          benefits1:"Our commitment to all our clients is to provide personalized attention so that from the moment you contact us, you will receive quality attention throughout the process.",
          benefits2:"We are proud to be one of the few companies that will accompany you with a team of legal experts, providing legal security throughout your process.",
          benefits3:"Take advantage of our exclusive investment opportunities and become an exclusive member of the IBR CLUB.",
          benefits4:"One of our main objectives is to be one of the companies that offers the highest performance compared to other banking and/or financial institutions.<br><br>To verify this, we invite you to calculate your investment returns.",
          benefits5:"Being a SOFOM we are committed to offering a competitive interest rate compared to banking institutions.",
          benefits6:"We know that to obtain a mortgage loan it is necessary to meet essential requirements such as not being in a credit bureau and proof of expenses, with us all that does not exist.",
          benefits7:"No liquidity to open the business?<br>We give you up to 30% of the value of your property.",
          benefits8:"You will be part of an investor club",
          viewmore:"View more",
          discover:"Find out how to become a member",
          calculate:"Calculate your earnings",
          aboutus:"About us",
          mission:"Mission",
          missiond:"We seek to help more families in Mexico and the United States to achieve the dream of having their own home through our financing and/or mortgage loans with a competitive rate.",
          vision:"Vision",
          visiond:"We seek to position ourselves within the best companies to grant financing with a very competitive interest rate in the market.",
          values:"Values",
          valuesd:"Empowerment, commitment and honesty are the pillars of our corporation, directing both clients and employees towards constant growth in their individual and/or financial achievement.",
          trust:"<b>Why trust us?</b><br>They will tell you...",
          carousel1:"For a long time I was looking for a place where I had the security that my money would truly pay off.",
          carousel2:"The advice I receives all the time was clear and honest, they guided me through the entire process so that I could make the best decisions.",
          carousel3:"The cups are very competitive and I don't regret investing with them.",
          carousel4:"The benefits I obtained are greater than I expected, I really feel very satisfied with the treatment and the progress of the projects in which I have invested.",
          carousel5:"The sense of belonging to a group of investors gave me much more security and confidence, since we share an interest in making our money work and pay off.",
          carousel6:"Like everyone, it is difficult to trust any company to invest your money, but doing the corresponding research and comparisons, I am convinced that they are the best option to make my money work.",
          team:"<b>Trained team</b>",
          teamjoin:"Would you like to join our team?",
          chancetitle:"Unique real estate opportunities",
          locate:"Location",
          formdoubt:"Do you have any doubt?",
          formcontact:"Contact us",
          formdata:"Leave us your information and shortly an advisor will contact you",
          formsavetxt:"I am interested in knowing more about saving, to obtain a real estate asset",
          formfinancingtxt:"I am interested in obtaining financing",
          formchancetxt:"I want to know more about a real estate opportunity",
          formtalktxt:"I would like to speak with an advisor to resolve other questions",
          formsend:"SEND",
          formconfidential:"Any information you provide us will be confidential",
          legaltitle:"<b>LEGAL</b>", 
          legaladvise:"Legal Advise", 
          privacyadvise:"Privacy Advise", 
          ethicalpolicies :"Ethical Policies",
          corporatetitle :"<b>CORPORATE</b>",
          ouroffices:"Our Office", 
          advisors:"Advisors", 
          socialmedia:"<b>SOCIAL MEDIA</b>",
          contacttitle:"<b>CONTACT</b>", 
          rightsreserved:"All rights reserved ◆ Credit Casa® 2023",
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
          card3:"Vous souhaitez investir activement dans l'immobilier?<br><br>Nous vous conseillons",
          card1_txt:"Épargne",
          card2_txt:"Financement",
          card3_txt:"Investissement",
          offer:"Ce que nous offrons?",
          titlebenefits1:"<b>Conseils personnalisés</b>",
          titlebenefits2:"<b>Sécurité juridique</b>",
          titlebenefits3:"<b>Opportunités immobilières uniques</b>",
          titlebenefits4:"<b>Rendements élevés</b>",
          titlebenefits5:"<b>Faible taux d’intérêts</b>",
          titlebenefits6:"<b>Financement</b>",
          titlebenefits7:"<b>Prêts hypothécaires</b>",
          titlebenefits8:"<b>Club IBR</b>",
          benefits:"Quels avantages puis-je obtenir?",
          benefits1:"Notre engagement envers tous nos clients est de fournir une attention personnalisée afin qu'à partir du moment où vous nous contactez, vous receviez une attention de qualité tout au long du processus.",
          benefits2:"Nous sommes fiers d'être l'une des rares entreprises à vous accompagner avec une équipe d'experts juridiques, offrant une sécurité juridique tout au long de votre processus.",
          benefits3:"Profitez de nos opportunités d'investissement exclusives et devenez membre exclusif du CLUB IBR.",
          benefits4:"L'un de nos principaux objectifs est d'être l'une des entreprises offrant les meilleures performances par rapport aux autres institutions bancaires et/ou financières.<br><br>Pour le vérifier, nous vous invitons à calculer vos retours sur investissement.",
          benefits5:"En tant que SOFOM, nous nous engageons à offrir un taux d'intérêt compétitif par rapport aux institutions bancaires.",
          benefits6:"Nous savons que pour obtenir un prêt hypothécaire, il est nécessaire de répondre à des exigences essentielles telles que ne pas être dans une agence d’évaluation du crédit et une preuve de dépenses, avec nous tout ce qui n’existe pas.",
          benefits7:"Pas de liquidités pour ouvrir l’entreprise?<br>Nous vous donnons jusqu’à 30% de la valeur de votre propriété.",
          benefits8:"Vous ferez partie d’un club d’investisseurs",
          viewmore:"Voir plus",
          discover:"Découvrez comment devenir membre",
          calculate:"Calculez vos gains",
          aboutus:"À propos de nous",
          mission:"Mission",
          missiond:"Nous cherchons à aider plus de familles au Mexique et aux États-Unis à réaliser le rêve d'avoir leur propre maison grâce à notre financement et/ou nos prêts hypothécaires à un taux compétitif.",
          vision:"Vision",
          visiond:"Nous cherchons à nous positionner au sein des meilleures entreprises pour accorder des financements avec un taux d'intérêt très compétitif sur le marché.",
          values:"Valeurs",
          valuesd:"La responsabilisation, l'engagement et l'honnêteté sont les piliers de notre entreprise, orientant clients et employés vers une croissance constante de leur réussite individuelle et/ou financière.",
          trust:"<b>Pourquoi nous faire confiance ?</b><br>Ils vous diront...",
          carousel1:"Pendant longtemps, j'ai cherché un endroit où j'avais la sécurité que mon argent rapporterait vraiment.",
          carousel2:"Les conseils que je reçois tout le temps étaient clairs et honnêtes, ils m'ont guidé tout au long du processus afin que je puisse prendre les meilleures décisions.",
          carousel3:"Les coupes sont très compétitives et je ne regrette pas d'avoir investi avec elles.",
          carousel4:"Les bénéfices que j'ai obtenus sont supérieurs à ce que j'attendais, je me sens vraiment très satisfait du traitement et de l'avancement des projets dans lesquels j'ai investi.",
          carousel5:"Le sentiment d'appartenir à un groupe d'investisseurs m'a donné beaucoup plus de sécurité et de confiance, puisque nous avons en commun l'intérêt de faire fructifier notre argent et de le rapporter.",
          carousel6:"Comme tout le monde, il est difficile de faire confiance à une entreprise pour investir son argent, mais en faisant les recherches et les comparaisons correspondantes, je suis convaincu qu'elles sont la meilleure option pour faire fructifier mon argent.",
          team:"<b>Équipe formée</b>",
          teamjoin:"Vous souhaitez rejoindre notre équipe?",
          chancetitle:"Des opportunités immobilières uniques",
          locate:"Emplacement",
          formdoubt:"Avez-vous un doute ?",
          formcontact:"Contactez-nous",
          formdata:"Laissez-nous vos coordonnées et un conseiller vous contactera sous peu",
          formsavetxt:"Je suis intéressé à en savoir plus sur l'épargne, pour obtenir un bien immobilier",
          formfinancingtxt:"Je suis intéressé à obtenir un financement",
          formchancetxt:"Je veux en savoir plus sur une opportunité immobilière",
          formtalktxt:"J'aimerais parler à un conseiller pour résoudre d'autres questions",
          formsend:"ENVOYER",
          formconfidential:"Toute information que vous nous fournirez sera confidentielle.",
          legaltitle:"<b>LÉGAL</b>", 
          legaladvise:"Conseil Juridique", 
          privacyadvise:"Conseil de Confidentialité", 
          ethicalpolicies :"Politiques Éthiques",
          corporatetitle :"<b>CORPORATION</b>",
          ouroffices:"Notre Bureau", 
          advisors:"Conseillers", 
          socialmedia:"<b>RÉSEAUX SOCIAUX</b>",
          contacttitle:"<b>CONTACT</b>", 
          rightsreserved:"Tous droits réservés ◆ Credit Casa® 2023",
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
           titlebenefits1.innerHTML = data[idiom].titlebenefits1
           titlebenefits2.innerHTML = data[idiom].titlebenefits2
           titlebenefits3.innerHTML = data[idiom].titlebenefits3
           titlebenefits4.innerHTML = data[idiom].titlebenefits4
           titlebenefits5.innerHTML = data[idiom].titlebenefits5
           titlebenefits6.innerHTML = data[idiom].titlebenefits6
           titlebenefits7.innerHTML = data[idiom].titlebenefits7
           titlebenefits8.innerHTML = data[idiom].titlebenefits8
           benefits.innerHTML = data[idiom].benefits
           benefits1.innerHTML = data[idiom].benefits1
           benefits2.innerHTML = data[idiom].benefits2
           benefits3.innerHTML = data[idiom].benefits3
           benefits4.innerHTML = data[idiom].benefits4
           benefits5.innerHTML = data[idiom].benefits5
           benefits6.innerHTML = data[idiom].benefits6
           benefits7.innerHTML = data[idiom].benefits7
           benefits8.innerHTML = data[idiom].benefits8
           viewmore.innerHTML = viewmore2.innerHTML = viewmore3.innerHTML = data[idiom].viewmore
           discover.innerHTML = data[idiom].discover
           aboutus.innerHTML = data[idiom].aboutus
           mission.innerHTML = data[idiom].mission
           missiond.innerHTML = data[idiom].missiond
           vision.innerHTML = data[idiom].vision
           visiond.innerHTML = data[idiom].visiond
           values.innerHTML = data[idiom].values
           valuesd.innerHTML = data[idiom].valuesd
           trust.innerHTML = data[idiom].trust
           carousel1.innerHTML = data[idiom].carousel1
           carousel2.innerHTML = data[idiom].carousel2
           carousel3.innerHTML = data[idiom].carousel3
           carousel4.innerHTML = data[idiom].carousel4
           carousel5.innerHTML = data[idiom].carousel5
           carousel6.innerHTML = data[idiom].carousel6
           team.innerHTML = data[idiom].team
           teamjoin.innerHTML = data[idiom].teamjoin
           chancetitle.innerHTML = data[idiom].chancetitle
           calculate.innerHTML = data[idiom].calculate
           locate.innerHTML = data[idiom].locate
           formdoubt.innerHTML = data[idiom].formdoubt
           formcontact.innerHTML = data[idiom].formcontact
           formdata.innerHTML = data[idiom].formdata
           formsavetxt.innerHTML = data[idiom].formsavetxt
           formfinancingtxt.innerHTML = data[idiom].formfinancingtxt
           formchancetxt.innerHTML = data[idiom].formchancetxt
           formtalktxt.innerHTML = data[idiom].formtalktxt
           formsend.innerHTML = data[idiom].formsend
           formconfidential.innerHTML = data[idiom].formconfidential
           legaltitle.innerHTML = data[idiom].legaltitle
           legaladvise.innerHTML = data[idiom].legaladvise
           privacyadvise.innerHTML = data[idiom].privacyadvise
           ethicalpolicies.innerHTML = data[idiom].ethicalpolicies
           corporatetitle.innerHTML = data[idiom].corporatetitle
           ouroffices.innerHTML = data[idiom].ouroffices
           advisors.innerHTML = data[idiom].advisors
           socialmedia.innerHTML = data[idiom].socialmedia
           contacttitle.innerHTML = data[idiom].contacttitle
           rightsreserved.innerHTML = data[idiom].rightsreserved
      
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
          titlebenefits1.innerHTML = data[idiom].titlebenefits1
          titlebenefits2.innerHTML = data[idiom].titlebenefits2
          titlebenefits3.innerHTML = data[idiom].titlebenefits3
          titlebenefits4.innerHTML = data[idiom].titlebenefits4
          titlebenefits5.innerHTML = data[idiom].titlebenefits5
          titlebenefits6.innerHTML = data[idiom].titlebenefits6
          titlebenefits7.innerHTML = data[idiom].titlebenefits7
          titlebenefits8.innerHTML = data[idiom].titlebenefits8
          benefits.innerHTML = data[idiom].benefits
          benefits1.innerHTML = data[idiom].benefits1
          benefits2.innerHTML = data[idiom].benefits2
          benefits3.innerHTML = data[idiom].benefits3
          benefits4.innerHTML = data[idiom].benefits4
          benefits5.innerHTML = data[idiom].benefits5
          benefits6.innerHTML = data[idiom].benefits6
          benefits7.innerHTML = data[idiom].benefits7
          benefits8.innerHTML = data[idiom].benefits8
          viewmore.innerHTML = viewmore2.innerHTML = viewmore3.innerHTML = data[idiom].viewmore
          discover.innerHTML = data[idiom].discover
          aboutus.innerHTML = data[idiom].aboutus
          mission.innerHTML = data[idiom].mission
          missiond.innerHTML = data[idiom].missiond
          vision.innerHTML = data[idiom].vision
          visiond.innerHTML = data[idiom].visiond
          values.innerHTML = data[idiom].values
          valuesd.innerHTML = data[idiom].valuesd
          trust.innerHTML = data[idiom].trust
          carousel1.innerHTML = data[idiom].carousel1
          carousel2.innerHTML = data[idiom].carousel2
          carousel3.innerHTML = data[idiom].carousel3
          carousel4.innerHTML = data[idiom].carousel4
          carousel5.innerHTML = data[idiom].carousel5
          carousel6.innerHTML = data[idiom].carousel6
          team.innerHTML = data[idiom].team
          teamjoin.innerHTML = data[idiom].teamjoin
          chancetitle.innerHTML = data[idiom].chancetitle
          calculate.innerHTML = data[idiom].calculate
          locate.innerHTML = data[idiom].locate
          formdoubt.innerHTML = data[idiom].formdoubt
          formcontact.innerHTML = data[idiom].formcontact
          formdata.innerHTML = data[idiom].formdata
          formsavetxt.innerHTML = data[idiom].formsavetxt
          formfinancingtxt.innerHTML = data[idiom].formfinancingtxt
          formchancetxt.innerHTML = data[idiom].formchancetxt
          formtalktxt.innerHTML = data[idiom].formtalktxt
          formsend.innerHTML = data[idiom].formsend
          formconfidential.innerHTML = data[idiom].formconfidential
          legaltitle.innerHTML = data[idiom].legaltitle
          legaladvise.innerHTML = data[idiom].legaladvise
          privacyadvise.innerHTML = data[idiom].privacyadvise
          ethicalpolicies.innerHTML = data[idiom].ethicalpolicies
          corporatetitle.innerHTML = data[idiom].corporatetitle
          ouroffices.innerHTML = data[idiom].ouroffices
          advisors.innerHTML = data[idiom].advisors
          socialmedia.innerHTML = data[idiom].socialmedia
          contacttitle.innerHTML = data[idiom].contacttitle
          rightsreserved.innerHTML = data[idiom].rightsreserved