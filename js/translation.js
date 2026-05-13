/* ==========================================================================
   translation.js
   Sistema multilingua IT / EN / DE
   - Dizionario completo delle traduzioni
   - Switcher con persistenza in localStorage
   - Aggiorna lang attribute, title, meta description, contenuti con data-i18n
   - Aggiorna alt text con data-i18n-alt e attributi con data-i18n-attr
   ========================================================================== */

(function () {
  'use strict';

  /* ==========================================================================
     DIZIONARIO TRADUZIONI
     Organizzato per pagina/sezione → chiave
     Sintassi nei file HTML:
        <tag data-i18n="chiave.percorso">Testo fallback IT</tag>
        <img data-i18n-alt="chiave.percorso" alt="Fallback IT">
        <input data-i18n-attr="placeholder:chiave.percorso">
     ========================================================================== */

  const translations = {
    it: {
      // -------- META & GLOBAL --------
      meta: {
        siteName: 'Zagara',
        defaultTitle: 'Zagara — Case Vacanza · Lipari, Isole Eolie',
        defaultDescription: 'Due case autentiche sulla strada per Pirrera, a 400m sul mare. Villa Anna e Olivetta — il giardino di limoni con vista sull\'arcipelago eoliano.',
      },

      // -------- NAVIGAZIONE --------
      nav: {
        home: 'Home',
        villaAnna: 'Villa Anna',
        olivetta: 'Olivetta',
        guida: 'Guida a Lipari',
        contatti: 'Prenota',
      },

      // -------- HEADER --------
      header: {
        logoAlt: 'Zagara — Case Vacanza Lipari',
        menuOpen: 'Apri menu',
        menuClose: 'Chiudi menu',
      },

      // -------- FOOTER --------
      footer: {
        casePropertyTitle: 'Le case',
        contactsTitle: 'Contatti',
        langTitle: 'Lingua',
        mapsLink: 'Apri in Google Maps',
        whatsappLabel: 'WhatsApp',
        rights: 'Tutti i diritti riservati.',
        privacyLink: 'Privacy policy',
        cookieLink: 'Cookie policy',
        creditPrefix: 'Designed by',
      },
 

      // -------- HOME --------
      home: {
        title: 'Zagara — Case Vacanza · Lipari, Isole Eolie',
        description: 'Due case vacanza a Lipari, sulla strada per Pirrera. Villa Anna per famiglie e gruppi, Olivetta per coppie. Vista sull\'arcipelago delle Eolie.',

        // Hero
        heroEyebrow: 'Case vacanza · Lipari, Isole Eolie',
        heroTagline: 'Due case sulle Eolie, sospese tra l\'arcipelago e un giardino di limoni.',
        heroCta: 'Scopri le case',

        // Vivere Zagara
        introEyebrow: 'Vivere Zagara',
        introTitle: 'Una collina sopra il mare, due case sotto il cielo',
        introP1: 'A Pirrera si sale per cambiare prospettiva. Quattrocento metri di tornanti sopra il mare bastano a cambiare l\'aria: qui è fresca anche in agosto, filtrata dai limoni e dagli ulivi. Sotto, il blu dell\'arcipelago.',
        introP2: 'L\'architettura è quella tipica, dove il confine tra interno ed esterno sfuma: ci si sveglia con gli alberi alla finestra e si cena in terrazza guardando le isole. Per il mare, basta scegliere tra la passeggiata lungo la scalinata verso Canneto o un breve tragitto in auto.',
        introP3: 'Le due case sono completamente autonome. Villa Anna è ampia e accogliente, pensata per i gruppi; Olivetta è intima, perfetta per coppie e piccole famiglie. Due modi diversi di abitare lo stesso giardino, con la stessa libertà e la stessa vista.',

        // Pillar block
        pillar1Label: 'Due case indipendenti',
        pillar1Value: 'Ognuna con i suoi spazi e le sue terrazze. Affittabili insieme se siete un gruppo grande.',
        pillar2Label: 'Da 4 a 10 ospiti',
        pillar2Value: 'Villa Anna fino a 10, Olivetta fino a 4.',
        pillar3Label: '400 m sul mare',
        pillar3Value: 'Aria fresca tutto l\'anno, anche in piena estate.',
        pillar4Label: 'Vista arcipelago',
        pillar4Value: 'Lipari, Vulcano, Salina e Stromboli all\'orizzonte.',

        // Le due case
        propertiesEyebrow: 'Le due case',
        propertiesTitle: 'Scegli la tua',

        // Card Villa Anna
        villaCardLabel: 'Per famiglie e gruppi',
        villaCardTitle: 'Villa Anna',
        villaCardMeta: '5 camere · 6 bagni · fino a 10 ospiti · da €2.750 a settimana',
        villaCardDesc: 'Cinque camere su due piani, ognuna con il suo bagno. Due grandi terrazze, giardino con barbecue. Lo spazio per stare insieme senza togliersi privacy a vicenda.',
        villaCardCta: 'Scopri Villa Anna',

        // Card Olivetta
        olivettaCardLabel: 'Per coppie e piccole famiglie',
        olivettaCardTitle: 'Olivetta',
        olivettaCardMeta: '2 camere · 2 bagni · fino a 4 ospiti · da €1.050 a settimana',
        olivettaCardDesc: 'Una piccola casa indipendente, all\'ombra di un grande ulivo. Cucina sotto portico aperto, doccia esterna, terrazza con vista. Scalinata che scende a Canneto.',
        olivettaCardCta: 'Scopri Olivetta',
      },
      
      // -------- VILLA ANNA --------
      villa: {
        title: 'Villa Anna · Casa vacanza per famiglie e gruppi · Lipari, Eolie',
        description: 'Villa Anna, casa vacanza a Lipari per famiglie e gruppi fino a 10 persone. Cinque camere, sei bagni, due terrazze panoramiche con vista sull\'arcipelago.',

        // Hero
        heroEyebrow: 'Per famiglie e gruppi',
        heroTitle: 'Villa Anna',
        heroSubtitle: 'La villa per famiglie e gruppi, con vista sull\'arcipelago da ogni stanza',

        // Descrizione
        descP1: 'A Villa Anna la vista è il filo che tiene insieme tutta la casa. Dalle camere, dalle terrazze, dalla cucina, dal soggiorno — l\'arcipelago è sempre nell\'inquadratura. Cinque camere su due piani, ciascuna con il suo bagno, perché stare in tanti non significhi rinunciare alla privacy.',
        descP2: 'A 400 metri sul livello del mare, l\'aria è naturalmente fresca: anche in piena estate, le serate richiedono un golf leggero. Il giardino con barbecue e le due grandi terrazze diventano cucina e sala da pranzo per gli ospiti che vogliono vivere fuori.',

        // Facilities (riorganizzate per categorie funzionali)
        facilitiesEyebrow: 'Caratteristiche',
        facilitiesTitle: 'La casa',
        labelInterior: 'Spazi interni',
        valueInterior: 'Cinque camere su due piani, sei bagni in totale.\nPiano 1: 2 camere matrimoniali · 3 bagni · cucina abitabile · soggiorno.\nPiano 2: 1 camera matrimoniale · 2 camere doppie (letti unibili) · 3 bagni.',
        labelOutdoor: 'Spazi esterni',
        valueOutdoor: 'Due grandi terrazze panoramiche · Giardino con barbecue.\nTutte le camere sono affacciate sul panorama.',
        labelKitchen: 'Cucina',
        valueKitchen: 'Cucina abitabile completamente attrezzata · Forno · Frigorifero · Lavastoviglie · Piano cottura · Stoviglie complete · Bollitore · Moka.',
        labelEquipment: 'Dotazione',
        valueEquipment: 'Biancheria completa · Lavatrice · Asciugacapelli · Ventilatori in tutte le camere · Pulizie finali incluse.',
        labelLocation: 'Posizione e accesso',
        valueLocation: 'A 400 metri sul livello del mare, sulla strada per Pirrera.\nSpiaggia di Canneto: 5 minuti in auto.\nParcheggio: 2-3 posti auto su strada adiacente.',
        labelGuests: 'Ospiti',
        valueGuests: 'Fino a 10 persone. Bambini benvenuti (porta i tuoi accessori se servono).\nAnimali non ammessi. Fumatori: solo all\'esterno.',
        labelCheckin: 'Check-in / Check-out',
        valueCheckin: 'Check-in dalle 15:00 · Check-out entro le 11:00.',

        // Prezzi
        pricesEyebrow: 'Tariffe',
        pricesTitle: 'Prezzi',
        pricePeriod1: 'Giugno / Settembre',
        priceAmount1: '€2.750',
        pricePeriod2: 'Luglio',
        priceAmount2: '€2.900',
        pricePeriod3: 'Agosto',
        priceAmount3: '€3.050',
        priceUnit: ' / 7 notti',
        priceNote1: 'Pulizie incluse. Soggiorno minimo 7 notti (sabato-sabato preferibile).',
        priceNote2: 'Pagamento: caparra di 2 notti al momento della prenotazione (non rimborsabile in caso di cancellazione). Il saldo è da versare entro una settimana prima del check-in.',
        priceNote3: 'Bassa stagione (aprile-maggio, ottobre): disponibile su richiesta.',
        priceNote4: 'Sconti per soggiorni di un mese: contattaci per un preventivo dedicato.',

        // Gallery
        galleryEyebrow: 'Gallery',
        galleryTitle: 'La casa, dentro e fuori',
        galleryAllCta: 'Vedi tutte le foto (20)',

        // CTA finale
        ctaTitle: 'Hai domande o vuoi prenotare? Scrivimi, rispondo entro 24 ore. — Greta',
        ctaWhatsapp: 'Scrivimi su WhatsApp',
        ctaEmail: 'Manda un\'email',
      },

       // -------- OLIVETTA --------
      olivetta: {
        title: 'Olivetta · Casa vacanza per coppie e piccole famiglie · Lipari, Eolie',
        description: 'Olivetta, dependance nel giardino di Pirrera. Cucina sotto portico aperto, doccia esterna, terrazza con vista sull\'arcipelago. Per coppie e piccole famiglie fino a 4 ospiti.',
 
        heroEyebrow: 'Per coppie e piccole famiglie',
        heroTitle: 'Olivetta',
        heroSubtitle: 'La dependance nel giardino, all\'ombra del grande ulivo',
 
        descP1: 'Olivetta è la dependance del giardino: indipendente, raccolta e protetta dal grande ulivo che le dà il nome. È la scelta ideale per una famiglia o una coppia di amici, con quattro posti letto ben distribuiti. Il cuore della casa è la cucina sotto il portico, aperta su tre lati: uno spazio dove la colazione e la cena hanno sempre l\'arcipelago come sfondo.',
        descP2: 'All\'interno, una camera matrimoniale e una doppia (con letti unibili) offrono massima flessibilità. I bagni sono due, di cui uno con la doccia esterna per lavarsi sotto il cielo. Dalla terrazza la vista corre sul mare, mentre la scalinata accanto a casa conduce, con una breve passeggiata, direttamente alla spiaggia di Canneto.',
 
        kitchenEyebrow: 'La cucina sotto il portico',
        kitchenTitle: 'Una soglia tra la casa e il giardino.',
        kitchenP1: 'Aperta su tre lati, la cucina di Olivetta non è una stanza chiusa: è uno spazio tra casa e giardino, con piano cottura a gas, lavandino, frigorifero e un grande tavolo per mangiare in quattro. La colazione si fa al sole del mattino, la cena al tramonto, sempre con l\'arcipelago davanti.',
        kitchenP2: 'Accanto, una dispensa al chiuso ospita stoviglie, frigorifero e cibo: tutto è ordinato e protetto, niente resta esposto agli elementi.',
 
        facilitiesEyebrow: 'Caratteristiche',
        facilitiesTitle: 'La casa',
 
        labelInterior: 'Spazi interni',
        valueInterior: 'Due camere e due bagni in totale.\n1 camera matrimoniale (letto 140 cm) · 1 camera doppia (letti unibili).\n1 bagno completo interno · 1 bagno con WC e lavandino · Doccia esterna.',
 
        labelOutdoor: 'Spazi esterni',
        valueOutdoor: 'Terrazza panoramica con vista sull\'arcipelago.\nPortico con cucina aperta su tre lati · Doccia esterna · Barbecue.\nScalinata privata che scende verso la spiaggia di Canneto.',
 
        labelKitchen: 'Cucina',
        valueKitchen: 'Cucina esterna sotto portico, completamente attrezzata.\nPiano cottura a gas a 4 fuochi · Lavandino · Frigorifero · Stoviglie complete · Tavolo da 4.\nDispensa al chiuso adiacente, dove tutto resta ordinato e protetto.',
 
        labelEquipment: 'Dotazione',
        valueEquipment: 'Biancheria completa · Lavatrice · Asciugacapelli · Ventilatori · Pulizie finali incluse.',
 
        labelLocation: 'Posizione e accesso',
        valueLocation: 'A 400 metri sul livello del mare, sulla strada per Pirrera, accanto a Villa Anna.\nSpiaggia di Canneto: pochi minuti a piedi dalla scalinata, oppure 5 minuti in auto.\nParcheggio: 2-3 posti auto su strada adiacente.',
 
        labelGuests: 'Ospiti',
        valueGuests: 'Fino a 4 persone. Ideale per coppie e piccole famiglie.\nBambini benvenuti (porta i tuoi accessori se servono).\nAnimali non ammessi. Fumatori: solo all\'esterno.',
 
        labelCheckin: 'Check-in / Check-out',
        valueCheckin: 'Check-in dalle 15:00 · Check-out entro le 11:00.',
 
        pricesEyebrow: 'Tariffe',
        pricesTitle: 'Prezzi',
        pricePeriod1: 'Giugno / Settembre',
        priceAmount1: '€1.050',
        pricePeriod2: 'Luglio',
        priceAmount2: '€1.150',
        pricePeriod3: 'Agosto',
        priceAmount3: '€1.350',
        priceUnit: ' / 7 notti',
 
        priceNote1: 'Pulizie incluse. Soggiorno minimo 7 notti (sabato-sabato preferibile).',
        priceNote2: 'Pagamento: caparra di 2 notti al momento della prenotazione (non rimborsabile in caso di cancellazione). Il saldo è da versare entro una settimana prima del check-in.',
        priceNote3: 'Bassa stagione (aprile-maggio, ottobre): disponibile su richiesta.',
        priceNote4: 'Sconti per soggiorni di un mese: contattaci per un preventivo dedicato.',
 
        galleryEyebrow: 'Gallery',
        galleryTitle: 'Dentro Olivetta',
        galleryAllCta: 'Vedi tutte le foto (12)',
 
        ctaTitle: 'Hai domande o vuoi prenotare? Scrivimi, rispondo entro 24 ore. — Greta',
        ctaWhatsapp: 'Scrivici su WhatsApp',
        ctaEmail: 'Manda un\'email',
      },

       // -------- GUIDA --------
      guide: {
        title: 'Lipari, in pratica · Guida pratica all\'isola · Zagara',
        description: 'Una guida pratica all\'isola di Lipari scritta da chi la conosce. Trasporti, spiagge, trekking, cosa aspettarsi, dove mangiare, la spesa.',
 
        heroEyebrow: 'Guida a Lipari',
        heroTitle: 'Lipari, in pratica.',
        heroIntro: 'Lipari non si improvvisa. Soprattutto se si parte dalla strada per Pirrera, a 400 metri di quota. Questa guida è pratica, onesta, scritta da chi conosce l\'isola davvero.',
 
        s1Number: '01',
        s1Title: 'Come arrivare',
        s1P1: 'Si arriva a Lipari in traghetto o aliscafo da Milazzo (circa 1 ora), Messina o Napoli. Da Milazzo partono le corse più frequenti, consigliamo di prenotare con anticipo in alta stagione, soprattutto se si vuole portare l\'auto.',
        s1CalloutLabel: 'Importante',
        s1CalloutText: 'Per imbarcare l\'auto sull\'isola è necessario aver prenotato almeno 7 notti di soggiorno (normativa comunale). Con meno di 7 notti, l\'auto rimane sul continente.',
 
        s2Number: '02',
        s2Title: 'Trasporti sull\'isola',
        s2P1: 'Da Pirrera auto o motorino sono indispensabili: il dislivello di 400 metri non è adatto alle biciclette comuni. Noleggi di motorini e auto si trovano facilmente in centro a Lipari. Parcheggio disponibile su strada adiacente al cancello delle case.',
        s2MapLink: 'Apri la posizione su Google Maps',
 
        s3Number: '03',
        s3Title: 'Spiagge',
        s3P1: 'Le spiagge più belle non sono sempre le più facili da raggiungere, ed è giusto così. Da Olivetta c\'è una scalinata panoramica che scende direttamente a Canneto, la spiaggia più vicina e una delle più belle dell\'isola, con ciottoli neri di origine vulcanica e acqua limpidissima. Per chi vuole esplorare: Spiaggia Bianca, Valle Muria, e le calette raggiungibili in barca.',
 
        s4Number: '04',
        s4Title: 'Trekking e natura',
        s4P1: 'Il sentiero che scende da Pirrera verso Canneto è uno dei percorsi più belli e meno conosciuti dell\'isola: riservato a chi ha le gambe e la voglia di guadagnarsi la spiaggia. Per chi vuole esplorare l\'arcipelago, gite in barca alle isole vicine (Vulcano, Stromboli, Panarea) si organizzano facilmente dal porto di Lipari.',
 
        s5Number: '05',
        s5Title: 'Cosa aspettarsi',
        s5P1: 'Lipari è un\'isola vulcanica, e si vede. Le spiagge non sono di sabbia bianca: sono di ciottoli neri, levigati, a volte misti a sabbia grossa e ossidiana. L\'acqua è cristallina ma fredda fino a metà giugno, e l\'ingresso in mare è spesso ripido. Portate scarpette da scoglio, non sono un vezzo ma molto pratiche.',
        s5P2: 'Pochissime spiagge sono attrezzate. Significa libertà, ma anche niente lettini, niente bar, niente bagni pubblici a portata di mano. Telo, ombrellone leggero, acqua, qualcosa da mangiare: si parte la mattina, si torna nel pomeriggio.',
        s5P3: 'Il sole d\'estate è forte, il vento spesso più di quanto sembri. Crema solare alta, un cappello, una felpa per la sera anche ad agosto. Quando soffia il maestrale, sulla terrazza di Pirrera si scende di dieci gradi nel giro di un\'ora.',
 
        s6Number: '06',
        s6Title: 'Mangiare',
        s6P1: 'Tre criteri prima dei nomi.',
        s6P2: 'Allontanarsi dal lungomare turistico. Le trattorie migliori non sono sul corso principale ma nei vicoli laterali del centro, o salendo verso il castello. La regola siciliana vale anche qui: dove mangiano i locali la sera tardi, si mangia bene.',
        s6P3: 'Il pesce dipende dal giorno, non dal ristorante. Quando il mare è grosso non si pesca, e il pesce "fresco" di quel giorno arriva surgelato dalla Sicilia. Un buon ristorante lo dichiara, uno meno buono ve lo serve lo stesso. Chiedete sempre cosa è arrivato la mattina, e fidatevi se vi dicono "oggi non è la giornata, prenda la pasta".',
        s6P4: 'La cucina eoliana è cucina povera di mare. I piatti che vale la pena cercare sono le pasta con i capperi, le polpette di pesce spada o di tonno, la caponata eoliana (con uvetta e pinoli, diversa da quella catanese), il pesce stocco "alla ghiotta". Il piatto più tipico è il pane cunzato (pane casereccio condito con pomodoro, capperi, olio buono, acciuga, ricotta), un pranzo intero per pochi euro.',
        s6P5: 'Tre indirizzi di fiducia per orientarsi. <strong>Trattoria del Vicolo</strong>, in una traversa del corso, è la scelta più tradizionale e dal prezzo onesto: cucina eoliana di famiglia, ambiente semplice. <strong>E Pulera</strong>, poco fuori dal centro, ha una terrazza coperta da bouganville e un menu che alterna terra e mare, fascia di prezzo media, perfetto per una cena con calma. <strong>Filippino</strong>, in piazza Mazzini, è il più storico di Lipari (aperto nel 1910): prezzo alto, occasione speciale, vale la pena almeno una sera.',
        s6P6: 'La granita è colazione, non dessert. La mattina, al bar, con la brioche col tuppo. Caffè, mandorla, gelso. Da Subba in centro a Lipari, o dove vi indicano i locali, ce ne sono diversi buoni.',
 
        s7Number: '07',
        s7Title: 'La spesa',
        s7P1: 'Per la spesa quotidiana il punto di riferimento sull\'isola è la catena D\'Anieri, con punti vendita in centro a Lipari (via Vittorio Emanuele) e a Canneto. Hanno tutto: alimentari, ortofrutta, macelleria, e i prodotti tipici eoliani (Malvasia, capperi, dolci di mandorla) se volete portare qualcosa a casa. A Pianoconte e Canneto trovate anche supermercati più piccoli di prossimità.',
        s7P2: 'Per il pesce fresco, la pescheria del porto la mattina presto: i pescatori scaricano direttamente. Per la frutta e verdura, oltre ai supermercati c\'è il mercato del lunedì mattina a Lipari (piazza Sant\'Onofrio), più genuino, più economico, e una piccola esperienza in sé.',
        s7P3: 'Il pane buono si compra dai panifici del centro, non dai supermercati: sull\'isola si fa ancora il pane casereccio cotto a legna. Chiedete del <em>pane di grano duro</em>, è quello che si conserva meglio nei giorni caldi.',
      },
 

      // -------- CONTATTI / PRENOTA --------
      contact: {
        title: 'Contatti & Prenotazioni · Zagara Lipari',
        description: 'Scrivimi per informazioni o prenotazioni a Villa Anna o Olivetta. Risposta entro 24 ore.',
 
        // Hero
        heroTitle: 'Scrivimi per maggiori info.',
        heroIntro: 'Sono disponibile a rispondere a qualsiasi domanda — sulla casa, sulla posizione, sui periodi disponibili.',
        photoCaption: 'Greta · Rispondo personalmente entro 24 ore.',
 
        // Form section header
        formEyebrow: 'Modulo di contatto',
        formTitle: 'Compila il modulo',
        formSubtitle: 'Tutti i campi con * sono obbligatori. Gli altri sono opzionali ma aiutano a darti una risposta più precisa.',
 
        // Form fields
        fieldName: 'Nome',
        fieldNamePlaceholder: 'Nome e Cognome',
 
        fieldEmail: 'Email',
        fieldEmailPlaceholder: 'nome@esempio.com',
 
        fieldHouse: 'Casa',
        fieldHouseOption0: '— Seleziona —',
        fieldHouseOption1: 'Villa Anna',
        fieldHouseOption2: 'Olivetta',
        fieldHouseOption3: 'Entrambe',
        fieldHouseOption4: 'Non so ancora',
 
        fieldPeriod: 'Periodo previsto',
        fieldPeriodPlaceholder: 'Es. prima settimana di luglio, agosto flessibile…',
 
        fieldGuests: 'Numero di ospiti',
        fieldGuestsPlaceholder: 'Quante persone',
 
        fieldMessage: 'Messaggio',
        fieldMessagePlaceholder: 'Raccontami cosa ti serve sapere…',
 
        fieldPrivacy: 'Ho letto la privacy policy e acconsento al trattamento dei miei dati per ricevere risposta alla mia richiesta. *',
        fieldPrivacyLink: 'privacy policy',
 
        formSubmit: 'Invia la richiesta',
 
        // Messaggi di stato
        successTitle: 'Messaggio inviato.',
        successText: 'Grazie per avermi scritto. Ti rispondo entro 24 ore con tutte le informazioni che ti servono.',
        successSignature: '— Greta',
 
        errorTitle: 'Qualcosa è andato storto.',
        errorText: 'Non sono riuscita a inviare il messaggio. Puoi riprovare oppure scrivermi direttamente su WhatsApp o via email.',
        errorRetry: 'Riprova',
 
        // Contatti diretti (sezione sotto il form)
        methodsEyebrow: 'Oppure',
        methodsTitle: 'Scrivimi direttamente',
        methodEmailLabel: 'Email',
        methodWhatsappLabel: 'WhatsApp',
 
        // FAQ
        faqTitle: 'Domande frequenti',
        faq1Q: 'Qual è il soggiorno minimo?',
        faq1A: '7 notti. Preferisco il check-in il sabato, ma sono flessibile — scrivimi.',
        faq2Q: 'Posso portare animali domestici?',
        faq2A: 'No, le case non accettano animali.',
        faq3Q: 'È possibile affittare entrambe le case insieme?',
        faq3A: 'Sì. Se siete un gruppo numeroso che vuole le due case, scrivimi per un preventivo dedicato.',
        faq4Q: 'È inclusa la pulizia?',
        faq4A: 'Sì, le pulizie finali sono incluse nel prezzo per entrambe le proprietà.',
        faq5Q: 'Come si raggiunge la casa?',
        faq5A: 'Sulla strada che sale verso Pirrera, a circa 3-5 km dal centro di Lipari. Auto o motorino indispensabili.',
      },
    },

    en: {
      // -------- META & GLOBAL --------
      meta: {
        siteName: 'Zagara',
        defaultTitle: 'Zagara, Holiday Houses · Lipari, Aeolian Islands',
        defaultDescription: 'Two holiday houses in Lipari, on the road to Pirrera. Villa Anna for families and groups, Olivetta for couples. Views over the Aeolian archipelago.',
      },

      // -------- NAVIGATION --------
      nav: {
        home: 'Home',
        villaAnna: 'Villa Anna',
        olivetta: 'Olivetta',
        guida: 'Lipari Guide',
        contatti: 'Book',
      },

      // -------- HEADER --------
      header: {
        logoAlt: 'Zagara, Holiday Houses Lipari',
        menuOpen: 'Open menu',
        menuClose: 'Close menu',
      },

      // -------- FOOTER --------
      footer: {
        casePropertyTitle: 'The houses',
        contactsTitle: 'Contact',
        langTitle: 'Language',
        mapsLink: 'Open in Google Maps',
        whatsappLabel: 'WhatsApp',
        rights: 'All rights reserved.',
        privacyLink: 'Privacy policy',
        cookieLink: 'Cookie policy',
        creditPrefix: 'Designed by',
      },


      // -------- HOME --------
      home: {
        title: 'Zagara, Holiday Houses · Lipari, Aeolian Islands',
        description: 'Two holiday houses in Lipari, on the road to Pirrera. Villa Anna for families and groups, Olivetta for couples. Views over the Aeolian archipelago.',

        // Hero
        heroEyebrow: 'Holiday houses · Lipari, Aeolian Islands',
        heroTagline: 'Two houses in the Aeolians, suspended between the archipelago and a lemon garden.',
        heroCta: 'Discover the houses',

        // Living Zagara
        introEyebrow: 'Living Zagara',
        introTitle: 'A hillside above the sea, two houses under the sky',
        introP1: 'You climb up to Pirrera to shift your perspective. Four hundred metres of switchbacks above the sea are enough to change the air: here it stays cool even in August, filtered through lemon and olive trees. Below, the blue of the archipelago.',
        introP2: 'The architecture is the typical kind, where the line between inside and outside blurs: you wake up with trees at the window and have dinner on the terrace watching the islands. For the sea, you can choose between the walk down the staircase to Canneto or a short drive.',
        introP3: 'The two houses are completely independent. Villa Anna is spacious and welcoming, designed for groups; Olivetta is intimate, perfect for couples and small families. Two different ways of inhabiting the same garden, with the same freedom and the same view.',

        // Pillar block
        pillar1Label: 'Two independent houses',
        pillar1Value: 'Each with its own spaces and terraces. Rentable together if you are a large group.',
        pillar2Label: 'From 4 to 10 guests',
        pillar2Value: 'Villa Anna up to 10, Olivetta up to 4.',
        pillar3Label: '400 m above the sea',
        pillar3Value: 'Fresh air all year round, even in high summer.',
        pillar4Label: 'Archipelago view',
        pillar4Value: 'Lipari, Vulcano, Salina and Stromboli on the horizon.',

        // The two houses
        propertiesEyebrow: 'The two houses',
        propertiesTitle: 'Choose yours',

        // Villa Anna card
        villaCardLabel: 'For families and groups',
        villaCardTitle: 'Villa Anna',
        villaCardMeta: '5 bedrooms · 6 bathrooms · up to 10 guests · from €2,750 per week',
        villaCardDesc: 'Five bedrooms on two floors, each with its own bathroom. Two large terraces, garden with barbecue. The space to be together without giving up your privacy.',
        villaCardCta: 'Discover Villa Anna',

        // Olivetta card
        olivettaCardLabel: 'For couples and small families',
        olivettaCardTitle: 'Olivetta',
        olivettaCardMeta: '2 bedrooms · 2 bathrooms · up to 4 guests · from €1,050 per week',
        olivettaCardDesc: 'A small independent house, in the shade of a large olive tree. Kitchen under an open portico, outdoor shower, terrace with a view. A staircase leading down to Canneto.',
        olivettaCardCta: 'Discover Olivetta',
      },

      // -------- VILLA ANNA --------
      villa: {
        title: 'Villa Anna · Holiday house for families and groups · Lipari, Aeolian Islands',
        description: 'Villa Anna, a holiday house in Lipari for families and groups of up to 10. Five bedrooms, six bathrooms, two panoramic terraces with views over the archipelago.',

        // Hero
        heroEyebrow: 'For families and groups',
        heroTitle: 'Villa Anna',
        heroSubtitle: 'The villa for families and groups, with archipelago views from every room',

        // Description
        descP1: 'At Villa Anna the view is the thread that holds the whole house together. From the bedrooms, the terraces, the kitchen, the living room, the archipelago is always in the frame. Five bedrooms on two floors, each with its own bathroom, so that being in a large group never means giving up privacy.',
        descP2: 'At 400 metres above sea level, the air is naturally cool: even in high summer, evenings call for a light sweater. The garden with barbecue and the two large terraces turn into kitchen and dining room for the guests who want to live outside.',

        // Facilities
        facilitiesEyebrow: 'Features',
        facilitiesTitle: 'The house',
        labelInterior: 'Indoor spaces',
        valueInterior: 'Five bedrooms on two floors, six bathrooms in total.\nFloor 1: 2 double bedrooms · 3 bathrooms · eat-in kitchen · living room.\nFloor 2: 1 double bedroom · 2 twin bedrooms (beds can be joined) · 3 bathrooms.',
        labelOutdoor: 'Outdoor spaces',
        valueOutdoor: 'Two large panoramic terraces · Garden with barbecue.\nAll bedrooms face the panorama.',
        labelKitchen: 'Kitchen',
        valueKitchen: 'Fully equipped eat-in kitchen · Oven · Fridge · Dishwasher · Hob · Complete tableware · Kettle · Moka pot.',
        labelEquipment: 'Equipment',
        valueEquipment: 'Full linen · Washing machine · Hairdryer · Fans in every bedroom · Final cleaning included.',
        labelLocation: 'Location and access',
        valueLocation: 'At 400 metres above sea level, on the road to Pirrera.\nCanneto beach: 5 minutes by car.\nParking: 2 to 3 spaces on the road next to the property.',
        labelGuests: 'Guests',
        valueGuests: 'Up to 10 people. Children welcome (bring your own accessories if needed).\nNo pets allowed. Smokers: outdoors only.',
        labelCheckin: 'Check-in / Check-out',
        valueCheckin: 'Check-in from 3:00 pm · Check-out by 11:00 am.',

        // Prices
        pricesEyebrow: 'Rates',
        pricesTitle: 'Prices',
        pricePeriod1: 'June / September',
        priceAmount1: '€2,750',
        pricePeriod2: 'July',
        priceAmount2: '€2,900',
        pricePeriod3: 'August',
        priceAmount3: '€3,050',
        priceUnit: ' / 7 nights',
        priceNote1: 'Cleaning included. Minimum stay 7 nights (Saturday to Saturday preferred).',
        priceNote2: 'Payment: a 2-night deposit at the time of booking (non-refundable in case of cancellation). The balance is due no later than one week before check-in.',
        priceNote3: 'Low season (April to May, October): available on request.',
        priceNote4: 'Discounts for monthly stays: contact me for a dedicated quote.',

        // Gallery
        galleryEyebrow: 'Gallery',
        galleryTitle: 'The house, inside and out',
        galleryAllCta: 'See all photos (20)',

        // Final CTA
        ctaTitle: 'Any questions or ready to book? Write to me, I reply within 24 hours. Greta',
        ctaWhatsapp: 'Message me on WhatsApp',
        ctaEmail: 'Send an email',
      },

      // -------- OLIVETTA --------
      olivetta: {
        title: 'Olivetta · Holiday house for couples and small families · Lipari, Aeolian Islands',
        description: 'Olivetta, a cottage in the garden of Pirrera. Kitchen under an open portico, outdoor shower, terrace with views over the archipelago. For couples and small families up to 4 guests.',

        heroEyebrow: 'For couples and small families',
        heroTitle: 'Olivetta',
        heroSubtitle: 'The cottage in the garden, in the shade of the great olive tree',

        descP1: 'Olivetta is the cottage in the garden: independent, intimate and sheltered by the great olive tree that gives it its name. It is the ideal choice for a family or a couple of friends, with four well-distributed sleeping spots. The heart of the house is the kitchen under the portico, open on three sides: a space where breakfast and dinner always have the archipelago as their backdrop.',
        descP2: 'Inside, a double bedroom and a twin room (with beds that can be joined) offer maximum flexibility. There are two bathrooms, one of them with the outdoor shower for washing under the sky. From the terrace the view runs over the sea, while the staircase next to the house leads, with a short walk, straight down to Canneto beach.',

        kitchenEyebrow: 'The kitchen under the portico',
        kitchenTitle: 'A threshold between the house and the garden.',
        kitchenP1: 'Open on three sides, the Olivetta kitchen is not an enclosed room: it is a space between the house and the garden, with a gas hob, sink, fridge and a large table that seats four. Breakfast happens in the morning sun, dinner at sunset, always with the archipelago in front.',
        kitchenP2: 'Next to it, an indoor pantry holds the cookware, fridge and food: everything is tidy and protected, nothing is left exposed to the elements.',

        facilitiesEyebrow: 'Features',
        facilitiesTitle: 'The house',

        labelInterior: 'Indoor spaces',
        valueInterior: 'Two bedrooms and two bathrooms in total.\n1 double bedroom (140 cm bed) · 1 twin bedroom (beds can be joined).\n1 full indoor bathroom · 1 bathroom with WC and sink · Outdoor shower.',

        labelOutdoor: 'Outdoor spaces',
        valueOutdoor: 'Panoramic terrace with views over the archipelago.\nPortico with kitchen open on three sides · Outdoor shower · Barbecue.\nPrivate staircase leading down towards Canneto beach.',

        labelKitchen: 'Kitchen',
        valueKitchen: 'Fully equipped outdoor kitchen under the portico.\n4-burner gas hob · Sink · Fridge · Complete tableware · Table for 4.\nAdjacent indoor pantry, where everything stays tidy and protected.',

        labelEquipment: 'Equipment',
        valueEquipment: 'Full linen · Washing machine · Hairdryer · Fans · Final cleaning included.',

        labelLocation: 'Location and access',
        valueLocation: 'At 400 metres above sea level, on the road to Pirrera, next to Villa Anna.\nCanneto beach: a few minutes on foot via the staircase, or 5 minutes by car.\nParking: 2 to 3 spaces on the road next to the property.',

        labelGuests: 'Guests',
        valueGuests: 'Up to 4 people. Ideal for couples and small families.\nChildren welcome (bring your own accessories if needed).\nNo pets allowed. Smokers: outdoors only.',

        labelCheckin: 'Check-in / Check-out',
        valueCheckin: 'Check-in from 3:00 pm · Check-out by 11:00 am.',

        pricesEyebrow: 'Rates',
        pricesTitle: 'Prices',
        pricePeriod1: 'June / September',
        priceAmount1: '€1,050',
        pricePeriod2: 'July',
        priceAmount2: '€1,150',
        pricePeriod3: 'August',
        priceAmount3: '€1,350',
        priceUnit: ' / 7 nights',

        priceNote1: 'Cleaning included. Minimum stay 7 nights (Saturday to Saturday preferred).',
        priceNote2: 'Payment: a 2-night deposit at the time of booking (non-refundable in case of cancellation). The balance is due no later than one week before check-in.',
        priceNote3: 'Low season (April to May, October): available on request.',
        priceNote4: 'Discounts for monthly stays: contact me for a dedicated quote.',

        galleryEyebrow: 'Gallery',
        galleryTitle: 'Inside Olivetta',
        galleryAllCta: 'See all photos (12)',

        ctaTitle: 'Any questions or ready to book? Write to me, I reply within 24 hours. Greta',
        ctaWhatsapp: 'Message me on WhatsApp',
        ctaEmail: 'Send an email',
      },

      // -------- GUIDE --------
      guide: {
        title: 'Lipari, in practice · A practical guide to the island · Zagara',
        description: 'A practical guide to the island of Lipari, written by someone who knows it. Transport, beaches, hiking, what to expect, where to eat, the shopping.',

        heroEyebrow: 'Lipari Guide',
        heroTitle: 'Lipari, in practice.',
        heroIntro: 'Lipari is not a place to improvise. Especially if you start from the road to Pirrera, at 400 metres altitude. This guide is practical, honest, written by someone who really knows the island.',

        s1Number: '01',
        s1Title: 'Getting there',
        s1P1: 'You reach Lipari by ferry or hydrofoil from Milazzo (about 1 hour), Messina or Naples. Milazzo has the most frequent connections; I recommend booking in advance during high season, especially if you want to bring a car.',
        s1CalloutLabel: 'Important',
        s1CalloutText: 'To bring a car onto the island, you must have booked at least 7 nights of accommodation (local regulation). With fewer than 7 nights, the car stays on the mainland.',

        s2Number: '02',
        s2Title: 'Getting around the island',
        s2P1: 'From Pirrera, a car or scooter is essential: the 400-metre elevation difference is not suited to ordinary bicycles. Scooter and car rentals are easy to find in the centre of Lipari. Parking is available on the road next to the gate of the houses.',
        s2MapLink: 'Open the location on Google Maps',

        s3Number: '03',
        s3Title: 'Beaches',
        s3P1: 'The most beautiful beaches are not always the easiest to reach, and that is how it should be. From Olivetta there is a panoramic staircase that leads directly to Canneto, the closest beach and one of the most beautiful on the island, with black volcanic pebbles and crystal-clear water. For those who want to explore further: Spiaggia Bianca, Valle Muria, and the coves reachable by boat.',

        s4Number: '04',
        s4Title: 'Hiking and nature',
        s4P1: 'The trail that descends from Pirrera towards Canneto is one of the most beautiful and least-known walks on the island: reserved for those with the legs and the will to earn their beach. For those who want to explore the archipelago, boat trips to the nearby islands (Vulcano, Stromboli, Panarea) are easily arranged from the port of Lipari.',

        s5Number: '05',
        s5Title: 'What to expect',
        s5P1: 'Lipari is a volcanic island, and you can tell. The beaches are not white sand: they are black, smooth pebbles, sometimes mixed with coarse sand and obsidian. The water is crystal clear but cold until mid-June, and the entry into the sea is often steep. Bring reef shoes, they are not a quirk but very practical.',
        s5P2: 'Very few beaches are equipped. That means freedom, but also no sunbeds, no bars, no public toilets within easy reach. Towel, light umbrella, water, something to eat: you leave in the morning and come back in the afternoon.',
        s5P3: 'Summer sun is strong, the wind often more than it looks. High-factor sun cream, a hat, a sweatshirt for the evening even in August. When the maestrale blows, the temperature on the terrace in Pirrera can drop ten degrees in an hour.',

        s6Number: '06',
        s6Title: 'Eating',
        s6P1: 'Three principles before the names.',
        s6P2: 'Get away from the tourist seafront. The best trattorias are not on the main street but in the side alleys of the centre, or up towards the castle. The Sicilian rule applies here too: where the locals eat late in the evening, you eat well.',
        s6P3: 'The fish depends on the day, not on the restaurant. When the sea is rough no one goes fishing, and the "fresh" fish of that day arrives frozen from Sicily. A good restaurant tells you so, a lesser one serves it anyway. Always ask what came in that morning, and trust them if they say "today is not the day, have the pasta instead".',
        s6P4: 'Aeolian cuisine is humble seafood cuisine. The dishes worth seeking out are pasta with capers, swordfish or tuna meatballs, Aeolian caponata (with raisins and pine nuts, different from the Catania version), stockfish "alla ghiotta". The most typical dish is pane cunzato (rustic bread topped with tomato, capers, good oil, anchovy, ricotta), a whole meal for a few euros.',
        s6P5: 'Three trusted addresses to get you started. <strong>Trattoria del Vicolo</strong>, in a side street off the main road, is the most traditional choice and honestly priced: family-run Aeolian cooking, a simple setting. <strong>E Pulera</strong>, just outside the centre, has a terrace covered in bougainvillea and a menu that alternates land and sea, mid-range prices, perfect for a relaxed dinner. <strong>Filippino</strong>, in Piazza Mazzini, is the oldest in Lipari (opened in 1910): high prices, special occasion, worth it at least once.',
        s6P6: 'Granita is breakfast, not dessert. In the morning, at the bar, with the brioche col tuppo. Coffee, almond, mulberry. At Subba in the centre of Lipari, or wherever the locals point you, there are several good places.',

        s7Number: '07',
        s7Title: 'Groceries',
        s7P1: 'For day-to-day groceries the point of reference on the island is the D\'Anieri chain, with shops in the centre of Lipari (via Vittorio Emanuele) and in Canneto. They have everything: groceries, fruit and vegetables, butcher, and typical Aeolian products (Malvasia, capers, almond pastries) if you want to take something home. In Pianoconte and Canneto you will also find smaller neighbourhood supermarkets.',
        s7P2: 'For fresh fish, the fish market at the port early in the morning: the fishermen unload directly. For fruit and vegetables, beyond the supermarkets there is the Monday morning market in Lipari (Piazza Sant\'Onofrio), more authentic, cheaper, and a small experience in itself.',
        s7P3: 'Good bread is bought from the bakeries in the centre, not from supermarkets: on the island they still make wood-fired rustic bread. Ask for <em>pane di grano duro</em>, it keeps best on hot days.',
      },


      // -------- CONTACT / BOOK --------
      contact: {
        title: 'Contact & Bookings · Zagara Lipari',
        description: 'Write to me for information or bookings at Villa Anna or Olivetta. Reply within 24 hours.',

        // Hero
        heroTitle: 'Write to me for more info.',
        heroIntro: 'I am happy to answer any question, about the house, the location, the available dates.',
        photoCaption: 'Greta · I reply personally within 24 hours.',

        // Form section header
        formEyebrow: 'Contact form',
        formTitle: 'Fill in the form',
        formSubtitle: 'All fields marked with * are required. The others are optional but help me give you a more precise answer.',

        // Form fields
        fieldName: 'Name',
        fieldNamePlaceholder: 'First and last name',

        fieldEmail: 'Email',
        fieldEmailPlaceholder: 'name@example.com',

        fieldHouse: 'House',
        fieldHouseOption0: '(Select)',
        fieldHouseOption1: 'Villa Anna',
        fieldHouseOption2: 'Olivetta',
        fieldHouseOption3: 'Both',
        fieldHouseOption4: 'Not sure yet',

        fieldPeriod: 'Preferred dates',
        fieldPeriodPlaceholder: 'E.g. first week of July, August flexible…',

        fieldGuests: 'Number of guests',
        fieldGuestsPlaceholder: 'How many people',

        fieldMessage: 'Message',
        fieldMessagePlaceholder: 'Tell me what you would like to know…',

        fieldPrivacy: 'I have read the privacy policy and consent to my data being processed in order to receive a reply to my request. *',
        fieldPrivacyLink: 'privacy policy',

        formSubmit: 'Send the request',

        // Status messages
        successTitle: 'Message sent.',
        successText: 'Thank you for writing. I will reply within 24 hours with all the information you need.',
        successSignature: 'Greta',

        errorTitle: 'Something went wrong.',
        errorText: 'I was not able to send your message. You can try again or write to me directly on WhatsApp or by email.',
        errorRetry: 'Try again',

        // Direct contact (section below the form)
        methodsEyebrow: 'Or',
        methodsTitle: 'Write to me directly',
        methodEmailLabel: 'Email',
        methodWhatsappLabel: 'WhatsApp',

        // FAQ
        faqTitle: 'Frequently asked questions',
        faq1Q: 'What is the minimum stay?',
        faq1A: '7 nights. I prefer Saturday check-in but I am flexible, just write to me.',
        faq2Q: 'Can I bring pets?',
        faq2A: 'No, the houses do not accept pets.',
        faq3Q: 'Can I rent both houses together?',
        faq3A: 'Yes. If you are a large group wanting both houses, write to me for a dedicated quote.',
        faq4Q: 'Is cleaning included?',
        faq4A: 'Yes, final cleaning is included in the price for both properties.',
        faq5Q: 'How do I get to the house?',
        faq5A: 'On the road that climbs towards Pirrera, about 3 to 5 km from the centre of Lipari. A car or scooter is essential.',
      },
    },

    de: {
      // -------- META & GLOBAL --------
      meta: {
        siteName: 'Zagara',
        defaultTitle: 'Zagara, Ferienhäuser · Lipari, Äolische Inseln',
        defaultDescription: 'Zwei Ferienhäuser in Lipari, auf der Straße nach Pirrera. Villa Anna für Familien und Gruppen, Olivetta für Paare. Blick auf den Äolischen Archipel.',
      },

      // -------- NAVIGATION --------
      nav: {
        home: 'Home',
        villaAnna: 'Villa Anna',
        olivetta: 'Olivetta',
        guida: 'Lipari-Guide',
        contatti: 'Buchen',
      },

      // -------- HEADER --------
      header: {
        logoAlt: 'Zagara, Ferienhäuser Lipari',
        menuOpen: 'Menü öffnen',
        menuClose: 'Menü schließen',
      },

      // -------- FOOTER --------
      footer: {
        casePropertyTitle: 'Die Häuser',
        contactsTitle: 'Kontakt',
        langTitle: 'Sprache',
        mapsLink: 'In Google Maps öffnen',
        whatsappLabel: 'WhatsApp',
        rights: 'Alle Rechte vorbehalten.',
        privacyLink: 'Datenschutz',
        cookieLink: 'Cookie-Richtlinie',
        creditPrefix: 'Designed by',
      },


      // -------- HOME --------
      home: {
        title: 'Zagara, Ferienhäuser · Lipari, Äolische Inseln',
        description: 'Zwei Ferienhäuser in Lipari, auf der Straße nach Pirrera. Villa Anna für Familien und Gruppen, Olivetta für Paare. Blick auf den Äolischen Archipel.',

        // Hero
        heroEyebrow: 'Ferienhäuser · Lipari, Äolische Inseln',
        heroTagline: 'Zwei Häuser auf den Äolischen Inseln, zwischen Archipel und Zitronengarten.',
        heroCta: 'Die Häuser entdecken',

        // Zagara erleben
        introEyebrow: 'Zagara erleben',
        introTitle: 'Ein Hügel über dem Meer, zwei Häuser unter dem Himmel',
        introP1: 'Nach Pirrera fährt man hinauf, um die Perspektive zu wechseln. Vierhundert Meter Serpentinen über dem Meer reichen, um die Luft zu verändern: hier ist sie auch im August frisch, gefiltert durch Zitronen- und Olivenbäume. Unten das Blau des Archipels.',
        introP2: 'Die Architektur ist typisch, hier verschwimmt die Grenze zwischen drinnen und draußen: man wacht mit Bäumen vor dem Fenster auf und isst auf der Terrasse zu Abend, mit Blick auf die Inseln. Für das Meer kann man zwischen dem Spaziergang über die Treppe nach Canneto und einer kurzen Autofahrt wählen.',
        introP3: 'Die zwei Häuser sind völlig unabhängig voneinander. Villa Anna ist großzügig und einladend, gedacht für Gruppen; Olivetta ist intim, ideal für Paare und kleine Familien. Zwei verschiedene Arten, denselben Garten zu bewohnen, mit derselben Freiheit und derselben Aussicht.',

        // Pillar block
        pillar1Label: 'Zwei unabhängige Häuser',
        pillar1Value: 'Jedes mit eigenen Räumen und Terrassen. Zusammen mietbar, wenn ihr eine größere Gruppe seid.',
        pillar2Label: 'Von 4 bis 10 Gästen',
        pillar2Value: 'Villa Anna bis zu 10, Olivetta bis zu 4.',
        pillar3Label: '400 m über dem Meer',
        pillar3Value: 'Frische Luft das ganze Jahr, auch im Hochsommer.',
        pillar4Label: 'Blick auf den Archipel',
        pillar4Value: 'Lipari, Vulcano, Salina und Stromboli am Horizont.',

        // Die zwei Häuser
        propertiesEyebrow: 'Die zwei Häuser',
        propertiesTitle: 'Wählt euer Haus',

        // Villa Anna card
        villaCardLabel: 'Für Familien und Gruppen',
        villaCardTitle: 'Villa Anna',
        villaCardMeta: '5 Schlafzimmer · 6 Bäder · bis zu 10 Gäste · ab €2.750 pro Woche',
        villaCardDesc: 'Fünf Schlafzimmer auf zwei Etagen, jedes mit eigenem Bad. Zwei große Terrassen, Garten mit Grill. Raum für Gemeinschaft, ohne auf Privatsphäre zu verzichten.',
        villaCardCta: 'Villa Anna entdecken',

        // Olivetta card
        olivettaCardLabel: 'Für Paare und kleine Familien',
        olivettaCardTitle: 'Olivetta',
        olivettaCardMeta: '2 Schlafzimmer · 2 Bäder · bis zu 4 Gäste · ab €1.050 pro Woche',
        olivettaCardDesc: 'Ein kleines unabhängiges Haus im Schatten eines großen Olivenbaums. Küche unter offenem Portikus, Außendusche, Terrasse mit Aussicht. Treppe, die nach Canneto hinabführt.',
        olivettaCardCta: 'Olivetta entdecken',
      },

      // -------- VILLA ANNA --------
      villa: {
        title: 'Villa Anna · Ferienhaus für Familien und Gruppen · Lipari, Äolische Inseln',
        description: 'Villa Anna, Ferienhaus in Lipari für Familien und Gruppen bis zu 10 Personen. Fünf Schlafzimmer, sechs Bäder, zwei Panoramaterrassen mit Blick auf den Archipel.',

        // Hero
        heroEyebrow: 'Für Familien und Gruppen',
        heroTitle: 'Villa Anna',
        heroSubtitle: 'Die Villa für Familien und Gruppen, mit Blick auf den Archipel aus jedem Zimmer',

        // Beschreibung
        descP1: 'In Villa Anna ist die Aussicht der rote Faden, der das ganze Haus zusammenhält. Aus den Schlafzimmern, von den Terrassen, aus der Küche, aus dem Wohnzimmer: der Archipel ist immer im Bild. Fünf Schlafzimmer auf zwei Etagen, jedes mit eigenem Bad, damit das Beisammensein nie auf Kosten der Privatsphäre geht.',
        descP2: 'Auf 400 Metern über dem Meer ist die Luft von Natur aus frisch: auch im Hochsommer braucht es abends einen leichten Pullover. Der Garten mit Grill und die zwei großen Terrassen werden zur Küche und zum Esszimmer für alle, die draußen leben wollen.',

        // Eigenschaften
        facilitiesEyebrow: 'Eigenschaften',
        facilitiesTitle: 'Das Haus',
        labelInterior: 'Innenräume',
        valueInterior: 'Fünf Schlafzimmer auf zwei Etagen, sechs Bäder insgesamt.\nEtage 1: 2 Doppelzimmer · 3 Bäder · Wohnküche · Wohnzimmer.\nEtage 2: 1 Doppelzimmer · 2 Zweibettzimmer (Betten zusammenstellbar) · 3 Bäder.',
        labelOutdoor: 'Außenbereich',
        valueOutdoor: 'Zwei große Panoramaterrassen · Garten mit Grill.\nAlle Schlafzimmer sind zum Panorama hin ausgerichtet.',
        labelKitchen: 'Küche',
        valueKitchen: 'Voll ausgestattete Wohnküche · Backofen · Kühlschrank · Geschirrspüler · Kochfeld · Vollständiges Geschirr · Wasserkocher · Mokkakanne.',
        labelEquipment: 'Ausstattung',
        valueEquipment: 'Vollständige Bettwäsche · Waschmaschine · Haartrockner · Ventilatoren in allen Schlafzimmern · Endreinigung inklusive.',
        labelLocation: 'Lage und Anfahrt',
        valueLocation: 'Auf 400 Metern über dem Meeresspiegel, an der Straße nach Pirrera.\nStrand von Canneto: 5 Minuten mit dem Auto.\nParken: 2 bis 3 Stellplätze auf der angrenzenden Straße.',
        labelGuests: 'Gäste',
        valueGuests: 'Bis zu 10 Personen. Kinder willkommen (eigenes Zubehör bitte bei Bedarf mitbringen).\nHaustiere nicht erlaubt. Rauchen: nur im Freien.',
        labelCheckin: 'Check-in / Check-out',
        valueCheckin: 'Check-in ab 15:00 Uhr · Check-out bis 11:00 Uhr.',

        // Preise
        pricesEyebrow: 'Preise',
        pricesTitle: 'Preise',
        pricePeriod1: 'Juni / September',
        priceAmount1: '€2.750',
        pricePeriod2: 'Juli',
        priceAmount2: '€2.900',
        pricePeriod3: 'August',
        priceAmount3: '€3.050',
        priceUnit: ' / 7 Nächte',
        priceNote1: 'Reinigung inklusive. Mindestaufenthalt 7 Nächte (Samstag bis Samstag bevorzugt).',
        priceNote2: 'Zahlung: Anzahlung in Höhe von 2 Nächten bei Buchung (im Stornofall nicht erstattungsfähig). Der Restbetrag ist spätestens eine Woche vor Check-in zu zahlen.',
        priceNote3: 'Nebensaison (April bis Mai, Oktober): auf Anfrage verfügbar.',
        priceNote4: 'Rabatte für Monatsaufenthalte: schreibt mir für ein individuelles Angebot.',

        // Galerie
        galleryEyebrow: 'Galerie',
        galleryTitle: 'Das Haus, innen und außen',
        galleryAllCta: 'Alle Fotos anzeigen (20)',

        // CTA finale
        ctaTitle: 'Fragen oder bereit zu buchen? Schreibt mir, ich antworte innerhalb von 24 Stunden. Greta',
        ctaWhatsapp: 'Auf WhatsApp schreiben',
        ctaEmail: 'Eine E-Mail schicken',
      },

      // -------- OLIVETTA --------
      olivetta: {
        title: 'Olivetta · Ferienhaus für Paare und kleine Familien · Lipari, Äolische Inseln',
        description: 'Olivetta, Dépendance im Garten von Pirrera. Küche unter offenem Portikus, Außendusche, Terrasse mit Blick auf den Archipel. Für Paare und kleine Familien bis zu 4 Gäste.',

        heroEyebrow: 'Für Paare und kleine Familien',
        heroTitle: 'Olivetta',
        heroSubtitle: 'Die Dépendance im Garten, im Schatten des großen Olivenbaums',

        descP1: 'Olivetta ist die Dépendance im Garten: unabhängig, geborgen und beschützt vom großen Olivenbaum, der ihr den Namen gibt. Sie ist die ideale Wahl für eine Familie oder ein Paar mit Freunden, mit vier gut verteilten Schlafplätzen. Das Herz des Hauses ist die Küche unter dem Portikus, an drei Seiten offen: ein Raum, in dem Frühstück und Abendessen immer den Archipel im Hintergrund haben.',
        descP2: 'Im Inneren bieten ein Doppelzimmer und ein Zweibettzimmer (mit zusammenstellbaren Betten) maximale Flexibilität. Es gibt zwei Bäder, eines davon mit Außendusche, um sich unter dem Himmel zu waschen. Von der Terrasse wandert der Blick übers Meer, während die Treppe neben dem Haus mit einem kurzen Spaziergang direkt zum Strand von Canneto führt.',

        kitchenEyebrow: 'Die Küche unter dem Portikus',
        kitchenTitle: 'Eine Schwelle zwischen Haus und Garten.',
        kitchenP1: 'An drei Seiten offen, ist die Küche von Olivetta kein geschlossener Raum: sie ist ein Raum zwischen Haus und Garten, mit Gasherd, Spüle, Kühlschrank und einem großen Tisch für vier Personen. Das Frühstück gibt es in der Morgensonne, das Abendessen bei Sonnenuntergang, immer mit dem Archipel vor Augen.',
        kitchenP2: 'Daneben befindet sich eine geschlossene Speisekammer mit Geschirr, Kühlschrank und Lebensmitteln: alles ist ordentlich und geschützt, nichts bleibt den Elementen ausgesetzt.',

        facilitiesEyebrow: 'Eigenschaften',
        facilitiesTitle: 'Das Haus',

        labelInterior: 'Innenräume',
        valueInterior: 'Zwei Schlafzimmer und zwei Bäder insgesamt.\n1 Doppelzimmer (Bett 140 cm) · 1 Zweibettzimmer (Betten zusammenstellbar).\n1 vollständiges Innenbad · 1 Bad mit WC und Waschbecken · Außendusche.',

        labelOutdoor: 'Außenbereich',
        valueOutdoor: 'Panoramaterrasse mit Blick auf den Archipel.\nPortikus mit an drei Seiten offener Küche · Außendusche · Grill.\nPrivate Treppe, die zum Strand von Canneto hinabführt.',

        labelKitchen: 'Küche',
        valueKitchen: 'Voll ausgestattete Außenküche unter dem Portikus.\nGasherd mit 4 Flammen · Spüle · Kühlschrank · Vollständiges Geschirr · Tisch für 4.\nAngrenzende geschlossene Speisekammer, alles bleibt ordentlich und geschützt.',

        labelEquipment: 'Ausstattung',
        valueEquipment: 'Vollständige Bettwäsche · Waschmaschine · Haartrockner · Ventilatoren · Endreinigung inklusive.',

        labelLocation: 'Lage und Anfahrt',
        valueLocation: 'Auf 400 Metern über dem Meeresspiegel, an der Straße nach Pirrera, direkt neben Villa Anna.\nStrand von Canneto: wenige Minuten zu Fuß über die Treppe oder 5 Minuten mit dem Auto.\nParken: 2 bis 3 Stellplätze auf der angrenzenden Straße.',

        labelGuests: 'Gäste',
        valueGuests: 'Bis zu 4 Personen. Ideal für Paare und kleine Familien.\nKinder willkommen (eigenes Zubehör bitte bei Bedarf mitbringen).\nHaustiere nicht erlaubt. Rauchen: nur im Freien.',

        labelCheckin: 'Check-in / Check-out',
        valueCheckin: 'Check-in ab 15:00 Uhr · Check-out bis 11:00 Uhr.',

        pricesEyebrow: 'Preise',
        pricesTitle: 'Preise',
        pricePeriod1: 'Juni / September',
        priceAmount1: '€1.050',
        pricePeriod2: 'Juli',
        priceAmount2: '€1.150',
        pricePeriod3: 'August',
        priceAmount3: '€1.350',
        priceUnit: ' / 7 Nächte',

        priceNote1: 'Reinigung inklusive. Mindestaufenthalt 7 Nächte (Samstag bis Samstag bevorzugt).',
        priceNote2: 'Zahlung: Anzahlung in Höhe von 2 Nächten bei Buchung (im Stornofall nicht erstattungsfähig). Der Restbetrag ist spätestens eine Woche vor Check-in zu zahlen.',
        priceNote3: 'Nebensaison (April bis Mai, Oktober): auf Anfrage verfügbar.',
        priceNote4: 'Rabatte für Monatsaufenthalte: schreibt mir für ein individuelles Angebot.',

        galleryEyebrow: 'Galerie',
        galleryTitle: 'Olivetta von innen',
        galleryAllCta: 'Alle Fotos anzeigen (12)',

        ctaTitle: 'Fragen oder bereit zu buchen? Schreibt mir, ich antworte innerhalb von 24 Stunden. Greta',
        ctaWhatsapp: 'Auf WhatsApp schreiben',
        ctaEmail: 'Eine E-Mail schicken',
      },

      // -------- GUIDE --------
      guide: {
        title: 'Lipari, in der Praxis · Ein praktischer Inselführer · Zagara',
        description: 'Ein praktischer Führer zur Insel Lipari, geschrieben von jemandem, der sie kennt. Anreise, Strände, Wandern, was zu erwarten ist, wo man essen geht, der Einkauf.',

        heroEyebrow: 'Lipari-Guide',
        heroTitle: 'Lipari, in der Praxis.',
        heroIntro: 'Lipari lässt sich nicht improvisieren. Vor allem nicht, wenn man von der Straße nach Pirrera startet, auf 400 Metern Höhe. Dieser Führer ist praktisch, ehrlich und von jemandem geschrieben, der die Insel wirklich kennt.',

        s1Number: '01',
        s1Title: 'Anreise',
        s1P1: 'Nach Lipari kommt man mit der Fähre oder dem Tragflügelboot von Milazzo (etwa 1 Stunde), Messina oder Neapel. Von Milazzo gibt es die häufigsten Verbindungen; ich empfehle, in der Hochsaison rechtzeitig zu buchen, vor allem wenn ihr das Auto mitnehmen wollt.',
        s1CalloutLabel: 'Wichtig',
        s1CalloutText: 'Um ein Auto auf die Insel zu bringen, muss man mindestens 7 Nächte Aufenthalt gebucht haben (kommunale Vorschrift). Bei weniger als 7 Nächten bleibt das Auto auf dem Festland.',

        s2Number: '02',
        s2Title: 'Verkehr auf der Insel',
        s2P1: 'Von Pirrera aus sind Auto oder Motorroller unverzichtbar: der Höhenunterschied von 400 Metern eignet sich nicht für normale Fahrräder. Roller- und Autovermietungen findet man leicht im Zentrum von Lipari. Parken ist auf der angrenzenden Straße am Tor der Häuser möglich.',
        s2MapLink: 'Standort in Google Maps öffnen',

        s3Number: '03',
        s3Title: 'Strände',
        s3P1: 'Die schönsten Strände sind nicht immer die am leichtesten erreichbaren, und das ist auch richtig so. Von Olivetta führt eine Panoramatreppe direkt nach Canneto, dem nächstgelegenen Strand und einem der schönsten der Insel, mit schwarzen Vulkankieseln und kristallklarem Wasser. Wer mehr erkunden möchte: Spiaggia Bianca, Valle Muria und die nur per Boot erreichbaren Buchten.',

        s4Number: '04',
        s4Title: 'Wandern und Natur',
        s4P1: 'Der Pfad, der von Pirrera nach Canneto hinabführt, ist einer der schönsten und am wenigsten bekannten Wege der Insel: er ist denjenigen vorbehalten, die die Beine und den Willen haben, sich ihren Strand zu verdienen. Wer den Archipel erkunden möchte: Bootsausflüge zu den Nachbarinseln (Vulcano, Stromboli, Panarea) lassen sich leicht vom Hafen von Lipari aus organisieren.',

        s5Number: '05',
        s5Title: 'Was euch erwartet',
        s5P1: 'Lipari ist eine vulkanische Insel, und das sieht man. Die Strände sind nicht aus weißem Sand: sie bestehen aus schwarzen, glattgeschliffenen Kieseln, manchmal mit grobem Sand und Obsidian vermischt. Das Wasser ist kristallklar, aber bis Mitte Juni kalt, und der Einstieg ins Meer ist oft steil. Bringt Badeschuhe mit, das ist keine Macke, sondern sehr praktisch.',
        s5P2: 'Nur sehr wenige Strände sind ausgestattet. Das bedeutet Freiheit, aber auch keine Liegen, keine Bars, keine öffentlichen Toiletten in Reichweite. Handtuch, leichter Sonnenschirm, Wasser, etwas zu essen: man fährt morgens los und kommt nachmittags zurück.',
        s5P3: 'Die Sommersonne ist stark, der Wind oft stärker als er aussieht. Sonnencreme mit hohem Schutzfaktor, ein Hut, eine Jacke für den Abend, auch im August. Wenn der Maestrale weht, kann die Temperatur auf der Terrasse in Pirrera innerhalb einer Stunde um zehn Grad fallen.',

        s6Number: '06',
        s6Title: 'Essen',
        s6P1: 'Drei Grundsätze, bevor die Namen kommen.',
        s6P2: 'Weg von der touristischen Strandpromenade. Die besten Trattorias sind nicht auf der Hauptstraße, sondern in den Seitengassen des Zentrums oder oben Richtung Castello. Die sizilianische Regel gilt auch hier: wo die Einheimischen spätabends essen, isst man gut.',
        s6P3: 'Der Fisch hängt vom Tag ab, nicht vom Restaurant. Wenn das Meer rauh ist, wird nicht gefischt, und der "frische" Fisch des Tages kommt tiefgekühlt aus Sizilien. Ein gutes Restaurant sagt das offen, ein weniger gutes serviert ihn trotzdem. Fragt immer, was am Morgen angekommen ist, und vertraut ihnen, wenn sie sagen: "Heute ist nicht der Tag, nehmt die Pasta".',
        s6P4: 'Die äolische Küche ist eine bescheidene Meeresküche. Es lohnt sich, nach diesen Gerichten zu suchen: Pasta mit Kapern, Frikadellen aus Schwertfisch oder Thunfisch, äolische Caponata (mit Rosinen und Pinienkernen, anders als die aus Catania), Stockfisch "alla ghiotta". Das typischste Gericht ist pane cunzato (rustikales Brot mit Tomate, Kapern, gutem Öl, Sardelle, Ricotta), eine vollständige Mahlzeit für wenige Euro.',
        s6P5: 'Drei verlässliche Adressen zur Orientierung. <strong>Trattoria del Vicolo</strong>, in einer Seitenstraße der Hauptstraße, ist die traditionellste Wahl zu fairen Preisen: familiäre äolische Küche, einfaches Ambiente. <strong>E Pulera</strong>, etwas außerhalb des Zentrums, hat eine von Bougainvillea überdachte Terrasse und ein Menü zwischen Land und Meer, mittlere Preisklasse, ideal für ein entspanntes Abendessen. <strong>Filippino</strong>, an der Piazza Mazzini, ist das älteste Restaurant von Lipari (eröffnet 1910): hohe Preise, besondere Gelegenheit, mindestens einen Abend wert.',
        s6P6: 'Granita ist Frühstück, nicht Dessert. Morgens, in der Bar, mit der Brioche col tuppo. Kaffee, Mandel, Maulbeere. Bei Subba im Zentrum von Lipari oder dort, wo die Einheimischen euch hinschicken: es gibt mehrere gute Adressen.',

        s7Number: '07',
        s7Title: 'Der Einkauf',
        s7P1: 'Für den täglichen Einkauf ist die Kette D\'Anieri der Anlaufpunkt auf der Insel, mit Filialen im Zentrum von Lipari (via Vittorio Emanuele) und in Canneto. Sie haben alles: Lebensmittel, Obst und Gemüse, Metzgerei und typische äolische Produkte (Malvasia, Kapern, Mandelgebäck), wenn ihr etwas mit nach Hause nehmen wollt. In Pianoconte und Canneto gibt es auch kleinere Nachbarschaftssupermärkte.',
        s7P2: 'Für frischen Fisch lohnt sich der Fischmarkt am Hafen am frühen Morgen: die Fischer laden direkt aus. Für Obst und Gemüse gibt es neben den Supermärkten den Montagvormittagsmarkt in Lipari (Piazza Sant\'Onofrio): authentischer, günstiger und ein kleines Erlebnis für sich.',
        s7P3: 'Gutes Brot kauft man in den Bäckereien des Zentrums, nicht in den Supermärkten: auf der Insel wird noch im Holzofen gebackenes rustikales Brot hergestellt. Fragt nach <em>pane di grano duro</em>, das hält an heißen Tagen am besten.',
      },


      // -------- KONTAKT / BUCHEN --------
      contact: {
        title: 'Kontakt & Buchungen · Zagara Lipari',
        description: 'Schreibt mir für Informationen oder Buchungen in Villa Anna oder Olivetta. Antwort innerhalb von 24 Stunden.',

        // Hero
        heroTitle: 'Schreibt mir für mehr Infos.',
        heroIntro: 'Ich beantworte gerne jede Frage, zum Haus, zur Lage, zu den verfügbaren Zeiträumen.',
        photoCaption: 'Greta · Ich antworte persönlich innerhalb von 24 Stunden.',

        // Form section header
        formEyebrow: 'Kontaktformular',
        formTitle: 'Füllt das Formular aus',
        formSubtitle: 'Alle mit * gekennzeichneten Felder sind Pflichtfelder. Die anderen sind optional, helfen mir aber, euch genauer zu antworten.',

        // Form fields
        fieldName: 'Name',
        fieldNamePlaceholder: 'Vor- und Nachname',

        fieldEmail: 'E-Mail',
        fieldEmailPlaceholder: 'name@beispiel.com',

        fieldHouse: 'Haus',
        fieldHouseOption0: '(Auswählen)',
        fieldHouseOption1: 'Villa Anna',
        fieldHouseOption2: 'Olivetta',
        fieldHouseOption3: 'Beide',
        fieldHouseOption4: 'Noch unentschieden',

        fieldPeriod: 'Gewünschter Zeitraum',
        fieldPeriodPlaceholder: 'Z. B. erste Juliwoche, August flexibel…',

        fieldGuests: 'Anzahl der Gäste',
        fieldGuestsPlaceholder: 'Wie viele Personen',

        fieldMessage: 'Nachricht',
        fieldMessagePlaceholder: 'Erzählt mir, was ihr wissen möchtet…',

        fieldPrivacy: 'Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu, um eine Antwort auf meine Anfrage zu erhalten. *',
        fieldPrivacyLink: 'Datenschutzerklärung',

        formSubmit: 'Anfrage senden',

        // Statusmeldungen
        successTitle: 'Nachricht gesendet.',
        successText: 'Danke, dass ihr mir geschrieben habt. Ich antworte innerhalb von 24 Stunden mit allen Informationen, die ihr braucht.',
        successSignature: 'Greta',

        errorTitle: 'Etwas ist schiefgelaufen.',
        errorText: 'Ich konnte eure Nachricht nicht senden. Ihr könnt es noch einmal versuchen oder mir direkt auf WhatsApp oder per E-Mail schreiben.',
        errorRetry: 'Erneut versuchen',

        // Direkter Kontakt (Abschnitt unter dem Formular)
        methodsEyebrow: 'Oder',
        methodsTitle: 'Schreibt mir direkt',
        methodEmailLabel: 'E-Mail',
        methodWhatsappLabel: 'WhatsApp',

        // FAQ
        faqTitle: 'Häufig gestellte Fragen',
        faq1Q: 'Wie lange ist der Mindestaufenthalt?',
        faq1A: '7 Nächte. Ich bevorzuge Check-in am Samstag, bin aber flexibel, schreibt mir einfach.',
        faq2Q: 'Kann ich Haustiere mitbringen?',
        faq2A: 'Nein, die Häuser nehmen keine Tiere auf.',
        faq3Q: 'Kann man beide Häuser zusammen mieten?',
        faq3A: 'Ja. Wenn ihr eine größere Gruppe seid und beide Häuser möchtet, schreibt mir für ein individuelles Angebot.',
        faq4Q: 'Ist die Reinigung inklusive?',
        faq4A: 'Ja, die Endreinigung ist im Preis für beide Häuser inbegriffen.',
        faq5Q: 'Wie kommt man zum Haus?',
        faq5A: 'Auf der Straße, die nach Pirrera hinaufführt, etwa 3 bis 5 km vom Zentrum von Lipari entfernt. Auto oder Motorroller unverzichtbar.',
      },
    },
  };

  /* ==========================================================================
     CORE LOGIC
     ========================================================================== */

  const STORAGE_KEY = 'zagara_lang';
  const SUPPORTED = ['it', 'en', 'de'];
  const DEFAULT_LANG = 'it';

  /**
   * Determina la lingua da usare:
   * 1. localStorage
   * 2. Browser language
   * 3. Default IT
   */
  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;

    const browser = (navigator.language || navigator.userLanguage || '').toLowerCase().split('-')[0];
    if (SUPPORTED.includes(browser)) return browser;

    return DEFAULT_LANG;
  }

  /**
   * Naviga il dizionario annidato seguendo un path tipo "home.heroTagline".
   * Restituisce undefined se la chiave non esiste.
   */
  function getTranslation(lang, path) {
    const parts = path.split('.');
    let current = translations[lang];
    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        return undefined;
      }
    }
    return current;
  }

  /**
   * Applica le traduzioni a tutto il documento.
   */
  function applyTranslations(lang) {
    // 1. Aggiorna lang attribute sul <html>
    document.documentElement.setAttribute('lang', lang);

    // 2. Aggiorna title se la pagina ha un data-i18n-title
    const titleKey = document.documentElement.getAttribute('data-i18n-title');
    if (titleKey) {
      const titleTranslation = getTranslation(lang, titleKey);
      if (titleTranslation) document.title = titleTranslation;
    }

    // 3. Aggiorna meta description se presente la chiave
    const descKey = document.documentElement.getAttribute('data-i18n-description');
    if (descKey) {
      const descTranslation = getTranslation(lang, descKey);
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && descTranslation) {
        metaDesc.setAttribute('content', descTranslation);
      }
    }

    // 4. Aggiorna tutti gli elementi con data-i18n
    /* Helper: escape di caratteri HTML per evitare XSS quando usiamo innerHTML */
    function escapeHTML(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
     }

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = getTranslation(lang, key);
      if (value !== undefined) {
        // Se la stringa contiene \n, li convertiamo in <br> per andare a capo nell'HTML
        // Altrimenti usiamo textContent (più sicuro contro XSS)
        if (value.indexOf('\n') !== -1) {
          el.innerHTML = value
            .split('\n')
            .map(line => escapeHTML(line))
            .join('<br>');
        } else {
          el.textContent = value;
        }
      }
    });

    // 5. Aggiorna alt degli elementi con data-i18n-alt
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      const value = getTranslation(lang, key);
      if (value !== undefined) {
        el.setAttribute('alt', value);
      }
    });

    // 6. Aggiorna attributi arbitrari con data-i18n-attr="attrName:chiave"
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const directives = el.getAttribute('data-i18n-attr').split(',');
      directives.forEach(directive => {
        const [attrName, key] = directive.split(':').map(s => s.trim());
        if (attrName && key) {
          const value = getTranslation(lang, key);
          if (value !== undefined) el.setAttribute(attrName, value);
        }
      });
    });

    // 7. Aggiorna pulsanti del lang switcher (stato attivo)
    document.querySelectorAll('.lang-switcher__btn').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      btn.classList.toggle('is-active', btnLang === lang);
      btn.setAttribute('aria-pressed', String(btnLang === lang));
    });
  }

  /**
   * Cambia lingua e salva in localStorage.
   */
  function setLanguage(lang) {
    if (!SUPPORTED.includes(lang)) return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
  }

  /**
   * Inizializza i listener sui pulsanti del switcher.
   */
  function initLangSwitcher() {
    document.querySelectorAll('.lang-switcher__btn').forEach(btn => {
      // Evita di attaccare il listener due volte se già presente
      if (btn.dataset.i18nBound) return;
      btn.dataset.i18nBound = '1';

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
      });
    });
  }

  /* ==========================================================================
     INIT
     - Applica subito al DOMContentLoaded (per il contenuto della pagina)
     - Riapplica quando 'componentsLoaded' è emesso da template.js
       (per header e footer caricati dinamicamente)
     ========================================================================== */

  function bootstrap() {
    const lang = detectLang();
    applyTranslations(lang);
    initLangSwitcher();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }

  // Header e footer vengono caricati dopo via fetch, quindi riapplichiamo
  document.addEventListener('componentsLoaded', () => {
    const lang = detectLang();
    applyTranslations(lang);
    initLangSwitcher();
  });

  // Esponi un'API minimale globale (utile per debug o estensioni future)
  window.ZagaraI18n = {
    setLanguage,
    getCurrentLang: detectLang,
    getTranslation: (path) => getTranslation(detectLang(), path),
  };
})();