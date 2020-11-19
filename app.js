const questions = document.getElementById("questions")
const background = document.getElementById("background")
const questionElement = document.getElementById("question")
const radioButtons = document.getElementsByName('wahlmoeglichkeiten')
const skala = document.getElementById('skala')
const next = document.getElementById("btn")

// counter, der aktuelle Frage hält
let counter = 34

// hierreein werden die abgegeben antworten gepushed
let userAntwort = [];

// db - fragen
const fragen = [
        {
            "id": 1,
            "frage": "Ich kann mich auf mich und meine Fähigkeiten verlassen.",
            "kategorie": "Selbstwirksamkeit",
            "isSkalaReverse": "true"
        },
        {
            "id": 2,
            "frage": "Es wird sich schon alles zum Guten wenden.",
            "kategorie":  "Optimismus",
            "isSkalaReverse": "false"
        },
        {
            "id": 3,
            "frage": "Ich spüre schnell, wenn es jemandem nicht gut geht.",
            "kategorie": "Empathie",
            "isSkalaReverse": "true"
        },
        {
            "id": 4,
            "frage": "Ich kann es nicht leiden, wenn Menschen immer anderen die Schuld für ihr eigenes Versagen geben.",
            "kategorie": "Kausalanalyse",
            "isSkalaReverse": "true"
        },
        {
            "id": 5,
            "frage": "Meine Freunde kommen zu mir, um von ihren Sorgen zu berichten.",
            "kategorie": "Empathie",
            "isSkalaReverse": "true"
        },
        {
            "id": 6,
            "frage": "Bin ich schlecht drauf, finde ich Mittel und Wege, meine Laune zu verbessern.",
            "kategorie": "Emotionssteuerung",
            "isSkalaReverse": "true"
        },
        {
            "id": 7,
            "frage": "Klappt etwas nicht, forsche ich so lange nach, bis ich die Ursache finde.",
            "kategorie": "Kausalanalyse",
            "isSkalaReverse": "true"
        },
        {
            "id": 8,
            "frage": "Jeder ist seines Glückes Schmied.",
            "kategorie": "Selbstwirksamkeit",
            "isSkalaReverse": "true"
        },
        {
            "id": 9,
            "frage": "Ich setze mir Ziele und arbeite darauf hin.",
            "kategorie": "Zielorientierung",
            "isSkalaReverse": "true"
        },
        {
            "id": 10,
            "frage": "Schreit mich jemand an, fällt es mir leicht, ruhig zu bleiben.",
            "kategorie": "Impulskontrolle",
            "isSkalaReverse": "true"
        },
        {
            "id": 11, 
            "frage": "Menschen, die nichts dem Zufall überlassen können, finde ich langweilig.",
            "kategorie": "Zielorientierung",
            "isSkalaReverse": "false"
        },
        {
            "id": 12,
            "frage": "Ich sehe positiv in die Zukunft.",
            "kategorie":  "Optimismus",
            "isSkalaReverse": "true"
        },
        {
            "id": 13,
            "frage": "Kommt mir einer krumm, ist der Tag für mich gelaufen.",
            "kategorie": "Emotionssteuerung",
            "isSkalaReverse": "false"
        },
        {
            "id": 14,
            "frage": "Das Glas ist für mich halb voll, nicht halb leer.",
            "kategorie":  "Optimismus",
            "isSkalaReverse": "true"
        },
        {
            "id": 15,
            "frage": "Jeder hat sein Schicksal selbst in der Hand.",
            "kategorie": "Selbstwirksamkeit",
            "isSkalaReverse": "true"
        },
        {
            "id": 16,
            "frage": "Wenn mir jemand komisch kommt, wird er schon einen triftigen Grund dafür haben.",
            "kategorie": "Empathie",
            "isSkalaReverse": "true"
        },
        {
            "id": 17,
            "frage": "Merke ich, dass ein Ziel unrealistisch oder unwichtig wird, verwerfe ich es und setze mir ein neues Ziel.",
            "kategorie": "Zielorientierung",
            "isSkalaReverse": "true"
        },
        {
            "id": 18,
            "frage": "Klappt etwas nicht, ist es für mich ein Leichtes, etwas anderes zu tun.",
            "kategorie": "Kausalanalyse",
            "isSkalaReverse": "false"
        },
        {
            "id": 19,
            "frage": "Stehe ich mit dem falschen Fuß auf, ist der Rest des Tages gelaufen.",
            "kategorie": "Emotionssteuerung",
            "isSkalaReverse": "false"
        },
        {
            "id": 20,
            "frage": "Disziplin ist mir wichtig.",
            "kategorie": "Impulskontrolle",
            "isSkalaReverse": "true"
        },
        {
            "id": 21,
            "frage": "Ich stelle in Frage, ob ich das Richtige tue.",
            "kategorie": "Selbstwirksamkeit",
            "isSkalaReverse": "false"
        },
        {
            "id": 22,
            "frage": "Es gibt Tage, da geht einfach alles schief.",
            "kategorie":  "Optimismus",
            "isSkalaReverse": "false"
        },
        {
            "id": 23,
            "frage": "Mich nerven Menschen, die ständig gute Laune haben.",
            "kategorie": "Emotionssteuerung",
            "isSkalaReverse": "false"
        },
        {
            "id": 24,
            "frage": "Es gibt Menschen, mit denen kann man einfach nicht reden.",
            "kategorie": "Empathie",
            "isSkalaReverse": "false"
        },
        {
            "id": 25,
            "frage": "Wer es sich einmal mit mir verdorben hat, dem verzeihe ich nicht.",
            "kategorie": "Kausalanalyse",
            "isSkalaReverse": "false"
        },
        {
            "id": 26,
            "frage": "Ich habe gelernt, mich direkt zu wehren.",
            "kategorie": "Impulskontrolle",
            "isSkalaReverse": "false"
        },
        {
            "id": 27,
            "frage": "Ich trete auf der Stelle.",
            "kategorie": "Selbstwirksamkeit",
            "isSkalaReverse": "false"
        },
        {
            "id": 28,
            "frage": "Mein Lieblingssatz könnte sein '5 Minuten schmollen ist in Ordnung. Mehr ist Absicht.'",
            "kategorie": "Emotionssteuerung",
            "isSkalaReverse": "true"
        },
        {
            "id": 29,
            "frage": "Ich weiß genau, was ich will und erreiche dies auch.",
            "kategorie": "Zielorientierung",
            "isSkalaReverse": "true"
        },
        {
            "id": 30,
            "frage": "Nehme ich mir etwas vor, schaffe ich es nicht, länger dran zu bleiben. Oder lasse ich mich leicht davon ablenken.",
            "kategorie": "Impulskontrolle",
            "isSkalaReverse": "false"
        },
        {
            "id": 31,
            "frage": "Ich weiß nicht wie meine Zukunft aussehen soll.",
            "kategorie": "Zielorientierung",
            "isSkalaReverse": "false"
        },
        {
            "id": 32,
            "frage": "Ich finde es anstrengend, wenn andere dauernd über ihre Probleme reden wollen.",
            "kategorie": "Kausalanalyse",
            "isSkalaReverse": "false"
        },
        {
            "id": 33,
            "frage": "Ich lasse mich schnell reizen.",
            "kategorie": "Impulskontrolle",
            "isSkalaReverse": "false"
        },
        {
            "id": 34,
            "frage": "Mir fällt es echt schwer, Verständnis für das Jammern anderer aufzubringen.",
            "kategorie": "Empathie",
            "isSkalaReverse": "false"
        },
        {
            "id": 35,
            "frage": "Ich möchte morgens am liebsten nicht aufstehen.",
            "kategorie":  "Optimismus",
            "isSkalaReverse": "false"
        },
        {
            "id": 36,
            "frage": "Ich bin ganz schön genervt von meinen Kollegen.",
            "kategorie": "Empathie",
            "isSkalaReverse": "false"
        },
        {
            "id": 37,
            "frage": "Ich kann konzentriert an etwas arbeiten und lasse mich nicht ablenken.",
            "kategorie": "Impulskontrolle",
            "isSkalaReverse": "true"
        },
        {
            "id": 38,
            "frage": "Ich lege mich nicht fest und lasse mich gerne überraschen.",
            "kategorie": "Zielorientierung",
            "isSkalaReverse": "false"
        },
        {
            "id": 39,
            "frage": "Ich ärgere mich nicht über jemanden",
            "kategorie": "Emotionssteuerung",
            "isSkalaReverse": "true"
        },
        {
            "id": 40,
            "frage": "Ich bin überzeugt davon, dass fast alles, was ich erreicht habe, pures Glück war.",
            "kategorie": "Selbstwirksamkeit",
            "isSkalaReverse": "false"
        },
        {
            "id": 41,
            "frage": "Mir fällt es sehr schwer darauf zu vertrauen, dass die Dinge wieder in Ordnung kommen.",
            "kategorie":  "Optimismus",
            "isSkalaReverse": "false"
        },
        {
            "id": 42,
            "frage": "Passiert mir ein Fehler, überlege ich, was ich beim nächsten Mal verbessern könnte.",
            "kategorie": "Kausalanalyse",
            "isSkalaReverse": "true"
        }
    ]
    
// db - results page
const results = [
    {
        "kategorie": "Impulskontrolle",
        "title": "Impulskontrolle - Fokus",
        "text": "Den ersten Faktor nennt man Impulskontrolle. Unter Impulskontrolle versteht man in diesem Zusammenhang zwei Dinge. Zum einen ist dies die klassische Disziplin, d.h. Dinge zu beenden die man begonnen hat, oder sich an Absprachen zu halten - FOKUS",
        "text2": "Zum anderen bezeichnet Impulskontrolle jedoch auch die Fähigkeit, nicht auf den ersten Impuls zu reagieren, z.B. nicht direkt zurück zu „pampen“, wenn man angeblafft wird.",
        "high": "Du hast eine gute Konzentrationsfähigkeit und beendest das, was du begonnen hast, ohne dich groß ablenken zu lassen.",
        "mid": "Wenn dich eine Sache interessiert, kannst du dich gut darin vertiefen, allerdings lässt du dich schnell ablenken, wenn etwas vermeintlich Spannenderes anfällt.",
        "low": "Du bleibst selten an einer Sache dran, sondern gibst jeder Ablenkung und jedem Impuls sofort nach.",
    },
    {
        "kategorie": "Emotionssteuerung",
        "title": "Emotionssteuerung - Lächeln",
        "text": "Der zweite Faktor ist die Emotionssteuerung. Das bezeichnet die Fähigkeit, in schwierigen Situationen seine Emotionen so zu steuern, dass sie tatsächlich positiv werden. Hierbei sprechen wir jedoch nicht von Verdrängen von negativen Gefühlen, sondern einem wirklichen Herbeiführen von positiven Emotionen.",
        "text2": "Ein Lächeln kann diesem Zweck dienen. Hierzu gehört die Fähigkeit, sich dazu zu entscheiden, nicht schlecht gelaunt zu sein, also bewusst zu versuchen, positive Gefühle herzustellen.",
        "high": "Du lässt dich von schwierigen oder unangenehmen Umständen nicht so leicht die Laune verderben.",
        "mid": "Du bist oft gut gelaunt, und schaffst es auch nach schwierigen Situationen vergleichsweise schnell, deine Emotionen zum Positiven zu wenden.",
        "low": "Du bist den Launen des Lebens hilflos ausgeliefert und schaffst es nur selten, dich selbst aus einer negativen Emotion zu befreien."
    },
    {
        "kategorie": "Empathie",
        "title": "Empathie - Herz",
        "text": "Die Fähigkeit zur Emotionssteuerung wird oft unterstützt von der Fähigkeit zur Empathie. Empathie bezeichnet man die Fähigkeit, sich in andere Personen hineinzuversetzen, und ihre Gefühle und Beweggründe zu verstehen. HERZ zu zeigen. Empathische Fähigkeiten helfen dir z.B., auch mit schwierigen Zeitgenossen umzugehen.",
        "high": "Du kannst dich gut in andere Leute hineinversetzen, was dir ermöglicht, tiefe und dauerhafte Beziehungen zu anderen zu führen.",
        "mid": "In den meisten Fällen kannst du dich einfühlen in das, was in deinem Gegenüber vorgeht. Es gibt jedoch immer wieder Situationen, in denen du völlig überrascht von den Reaktionen anderer Menschen sind.",
        "low": "Andere Menschen sind dir ein Rätsel, du hast keinen Schimmer, was in ihnen vorgeht."
    },
    {
        "kategorie": "Zielorientierung",
        "title": "Zielorientierung - Drive",
        "text": "Zielorientierung ist die Fähigkeit, sich immer wieder neue, herausfordernde, aber realistische Ziele zu setzen und diese zu verfolgen (vgl. Impulskontrolle) – man hat halt DRIVE. Dazu gehört aber auch, sich unrealistisch gewordene Ziele anzusehen und ggf. zu korrigieren, also nicht starr an einem einmal eingeschlagenen Kurs festzuhalten.",
        "high": "Du weißt, was du willst, setzt dir Ziele im Leben, und erreichst diese auch meist.",
        "mid": "Du setzt dir hin und wieder Ziele, allerdings eher sporadisch und wenig strukturiert.",
        "low": "Du lebst in der Regel in den Tag hinein und genießen das Leben. Es kommt dir nicht in den Sinn, sich Ziele zu setzen."
    },
    {
        "kategorie":  "Selbstwirksamkeit",
        "title": "Selbstwirksamkeitsüberzeugung - Wums",
        "text": "Eine weitere wichtige Fähigkeit, die einen Einfluss auf die Resilienz im Ganzen hat, ist die Selbstwirksamkeitsüberzeugung. Damit ist die Einstellung gemeint, dass man selber etwas an seiner Situation verändern kann, und nicht das Opfer seiner Umstände ist. Menschen, die diese Fähigkeit besitzen, ist z.B. bewusst, dass sie selber mit guten Leistungen eine gute Beurteilung erlangen können, und nicht auf den Goodwill ihres Vorgesetzten angewiesen sind, und verhalten sich dementsprechend. Anders ausgedrückt: sie wissen, dass sie WUMS haben. Die innere Stärke, Dinge selber zu wuppen.",
        "high": "Du verfügst über ein gesundes Selbstbewusstsein und bist der Überzeugung, dass du die Dinge selbst beeinflussen kannst.",
        "mid": "In der Regel traust du dir einiges zu, aber hin und wieder kommen dir schon Zweifel, ob du es wirklich aus eigener Kraft schaffen kannst.",
        "low": "Du zweifelst ernsthaft an dir selbst, und glaubst vielmehr, dass du gegen das Schicksal ohnehin nichts ausrichten kannst."
    },
    {
        "kategorie": "Optimismus",
        "title": "Optimismus - Sonne",
        "text": "Ein weiterer wichtiger Faktor ist Optimismus, also eine positive Sicht auf die Dinge. Menschen, die diese Fähigkeit besitzen, fühlen sich normalerweise, als ob sie an der SONNE wären. Auch widrige Umstände oder schlimme Ereignisse lassen sie nicht lange verzagen, da der feste Glaube daradass es schon wieder gut wird, sie aufrechterhält. Ein pessimistischer Mensch würde daran eher zweifeund glauben, dass alle Chancen vertan sind.",
        "high": "Dein Glas ist in den allermeisten Fällen halb voll, und du lässt dich auch von widrigen Umständen nicht von deiner positiven Sicht auf die Dinge abbringen.",
        "mid": "In der Regel glaubst du daran, dass die Dinge sich im Großen und Ganzen schon zum Guten wenden werden, allerdings kommen dir immer häufiger Zweifel, ob dem wirklich so ist.",
        "low": "Egal was passiert – du bist der Überzeugung, dass es schlecht ausgehen wird. Dass du immer in der längsten Schlange warten wirst. Dass alles schiefgehen wird, was nur schiefgehkann."
    },
    {
        "kategorie": "Kausalanalyse",
        "title": "Kausalanalyse - Grips",
        "text": "Zu guter Letzt hilft resilienten Menschen ihre Fähigkeit zur Kausalanalyse. Hierunter versteht man die Fähigkeit, den Dingen auf den wahren Grund zu gehen (die „Kausa“ zu ergründen) und auch selbstkritisch sein eigenes Zutun zu analysieren – sozusagen GRIPS zu zeigen. ",
        "high": "Du lernst aus deinen Fehlern, weil du dir die Zeit nimmst und die Fähigkeiten besitzt, diese zu analysieren.",
        "mid": "Hin und wieder gelingt es dir, aus Situationen die richtigen Schlüsse zu ziehen.",
        "low": "In den allermeisten Fällen hast du den Eindruck, dass Dinge „einfach so“, ohne ersichtlichen Grund, schiefgehen. In der Regel schaffst du es nicht, deinen eigenen Anteil in Fehlschlägen zu erkennen."
    },
    {
        "kategorie": "Gesamt",
        "title": "Deine Gesamtwertung",
        "high": "Du bist ein äußert resilienter Mensch – Hut ab! Achte bitte auf dich, damit Dir diese Resilienz erhalten bleibt, denn zu viel Stress oder eine dauerhafte Unter- oder Überforderung im Job kann an dieser Resilienz zehren. ",
        "mid": "Du bist im Großen und Ganzen und in den meisten Situationen resilient. Zu viel Druck oder ein Zusammentreffen von unglücklichen Umständen können dich jedoch leicht aus der Bahn werfen. Es wäre sinnvoll, an den weniger resilienten Punkten zu arbeiten, um diese „Fäden“ zu stärken und gleichzeitig die starken Faktoren weiter zu unterstützen. ",
        "low": "Du solltest unbedingt etwas tun – deine Resilienz hat schon ganz schön gelitten! Liegt es an deinem Job? An den Lebensumständen? Oder kennst du es gar nicht anders? Schaue hin, was die Ursache ist, und arbeite einerseits an deiner Resilienz.",
    }
]


// F U N K T I O N E N   für Question-Section

function displayQuestion(fragenCount){
    questionElement.textContent = fragen[fragenCount].frage
}

function saveAnswer(fragenCount){
    let userSelection = parseInt(getRadioInput())

    userAntwort = [...userAntwort, {
        ...fragen[fragenCount],
        antwort: userSelection,
        wert: fragen[fragenCount].isSkalaReverse === 'true' ? reverseValue(userSelection) : userSelection
    }]
}

function getRadioInput(){
    let value = 0;
    radioButtons.forEach(radio => {
        if(radio.checked){
            value = radio.value
            radio.checked = false;
        }
    })
    return value
}

function isOneChecked(){
    let value = false;
    radioButtons.forEach(radio => {
        if(radio.checked){
            value = true
        }
    })
    return value
}

function nextQuestion(event){
    if(event.target === next || event.key === 'Enter'){

        if (!isOneChecked()){
            console.log('Bitte input selecten')
            return
        }

        saveAnswer(counter)
        counter++

        if (counter < fragen.length ){
            displayQuestion(counter)
        } else if (counter >= fragen.length) {
            showResults()
            window.removeEventListener('keyup', nextQuestion)
            next.removeEventListener('click', nextQuestion);
        }
    }
}

function reverseValue(num){
    return (num - 6) * (-1)
}

// F U N K T I O N E N   um Resultate anzuzeigen

function showResults(){
    const resultsContainer = document.getElementById('results')
    questions.style.display = 'none'
    background.style.position = 'absolute'
    background.style.top='0px'
    background.style.left='0px'
    background.style.right='0px'
    background.style.bottom='0px'



    const einleitung = `
        <section class="flow--xl">
            <h1>Resilienz</h1>
            <p class="p-large">
            Resilienz besteht aus verschiedenen Faktoren, die gemeinsam unsere
            Fähigkeit ausmachen, im Chaos einen kühlen Kopf zu bewahren.
            Manchmal wird sie auch als das „Immunsystem der Seele“ bezeichnet.
            In der Literatur wird mal von 7, mal von 8 Faktoren gesprochen.
            Dieser Test basiert auf den 7 Faktoren nach Denis Mourlane aus
            seinem Buch „Resilienz. Die Fähigkeit der wirklich Erfolgreichen“.
            </p>
        </section>
    `
    const gesamt = `
    <section class="flow--xxl">
        <header>
            <div class="section__intro flow">
                <h1>Deine Gesamtwertung</h1>
            </div>
            <div class="section__points">
                <p class="punkte--accent">${userAntwort.reduce( (acc, question) => acc + parseInt(question.wert), 0)}</p>
                <p class="punkte">Punkte</p>
            </div>
        </header>
        <div class="points flow--xxl">
            <div class="point--larger flex">
                <p class="punkte">210 - 148 Punkte:</p>
                <p>
                ${results.find( result => result.kategorie === "Gesamt").high}
                </p>
            </div>
            <div class="point--larger flex">
                <p class="punkte">147 - 105 Punkte:</p>
                <p>
                ${results.find( result => result.kategorie === "Gesamt").mid}
                </p>
            </div>
            <div class="point--larger flex">
                <p class="punkte">104 - 42 Punkte:</p>
                <p>
                ${results.find( result => result.kategorie === "Gesamt").low}
                </p>
            </div>
        </div>
    </section>
    `
    const ausleitung = `
        <section class="flow--xxl">
            <div class="section__intro flow">
                <h2>Letzte Worte</h2>
                <p>
                    Überlege andererseits, auf welche äußeren Umstände du Einfluss
                    nehmen kannst – z.B. in dem Du dich beruflich neu orientierst,
                    wenn du in deinem Job nicht mehr glücklich bist.
                </p>
                <p>
                    Resilienz ist nie statisch. Stelle dir Resilienz vielmehr als eine
                    Art Spinnennetz vor. Gewoben haben dieses Netz unsere Eltern,
                    unsere Geschwister, später auch unsere Freunde. Je nachdem wie gut
                    sie darin waren, ist das Netz mehr oder weniger stark. Genauer:
                    sind die einzelnen Fäden mehr oder weniger stark.
                </p>
                <p>
                    Dieses Netz ist dafür da, uns durch schwierige Situationen zu
                    tragen. Uns wieder hoch zu federn, damit wir weitermachen können.
                    Dabei kann es passieren, dass sich das Netz an einigen Stellen
                    abnutzt. Dass einzelne Fäden dünn werden, oder gar reißen. Das
                    passiert selten von einem Tag auf den anderen. Es kann das
                    Resultat eines steten Zermürbungsprozesses sein. Manchmal aber
                    auch von einer einzigen schlimmen Erfahrung. Und plötzlich steht
                    man da, ohne Netz. Und weiß nicht mehr weiter. Und darunter tut
                    sich ein Abgrund auf.
                </p>
                <p>
                    Die gute Nachricht ist aber: wir sind selber die Spinnen. Und um
                    uns immer daran zu erinnern, habe ich Resi, die resiliente Spinne,
                    entwickelt. Denn so wie Spinnen ihr Netz selbst flicken können,
                    können auch wir die einzelnen Fäden reparieren, und unser Netz
                    stärker machen, als es jemals war. Du hast es selber in der Hand.
                    Gerne unterstütze ich dich dabei.
                </p>
                <p>
                    Willst du mehr über Resilienz wissen? Dann empfehle ich dir mein
                    Buch „Nichts ist zu schwer für den, der spinnt – Stärke deine
                    Resilienz und werde glücklich und erfolgreich“ sowie das
                    Übungsbuch „Spinn dich STARK, Tag für Tag – In 9 Monaten zu einem
                    neuen Leben“, erhältlich im Buchhandel, oder mit persönlicher
                    Widmung unter www.katjamichalek.de/veroeffentlichungen
                </p>
                <p><strong>Herzlichst, Deine Katja </strong></p>
            </div>
        </section>
    `
    const htmlArray = [einleitung, ...results.map( resultCategory => createHTML(resultCategory)), gesamt, ausleitung]

    resultsContainer.innerHTML = `
        <div class="container">
            ${htmlArray.join('')}
        </div>
    `;
    resultsContainer.style.marginTop = "20vh"
    resultsContainer.style.marginBottom = "10vh"
}


function createHTML(category){

    if(category.kategorie === "Gesamt"){
        return null
    }

    const filtered = sortCategory(category.kategorie)  
    //returns an obj with all category questions and totalSum

    return `
        <section class="flow--xxl">
            <header class="flex">
            <div class="section__intro flow">
                <h2>${category.title}</h2>
                <p>
                ${category.text}
                </p>
            </div>
            <div class="section__points">
                <p class="punkte--accent">${filtered.totalPoints}</p>
                <p class="punkte">Punkte</p>
            </div>
            </header>
            <div class="points flow--xxl">
            <div class="point flex">
                <p class="punkte">30 - 22 Punkte:</p>
                <p>
                ${category.high}
                </p>
            </div>
            <div class="point flex">
                <p class="punkte">21 - 15 Punkte:</p>
                <p>
                ${category.mid}
                </p>
            </div>
            <div class="point flex">
                <p class="punkte">14 - 6 Punkte:</p>
                <p>
                ${category.low}
                </p>
            </div>
            </div>
        </section>
    `
}

function sortCategory(category){
    let questions = userAntwort.filter( frage => frage.kategorie === category)
    let sum = questions.reduce( (acc, question) => acc + parseInt(question.wert), 0)

    return {
        userAntwort: questions,
        totalPoints: sum
    }
}


// Initial Set Up

displayQuestion(counter);
next.addEventListener('click', nextQuestion);
window.addEventListener('keyup', nextQuestion);




// function platzhalter(){
//     const impuls = sortCategory('Impulskontrolle')
//     const emotion = sortCategory('Emotionssteuerung')
//     const empathie = sortCategory('Empathie')
//     const ziel = sortCategory('Zielorientierung')
//     const selbst = sortCategory('Selbstwirksamkeit')
//     const optimismus = sortCategory('Optimismus')
//     const kausal = sortCategory('Kausalanalyse')


//     const htmlQuestions = categoryObj.userAntwort.map( question => {
        


//         return `
//             <div>
//                 <p>${question.frage}</p>
//                 <p>${question.antwort}</p>
//             </div>
//         `
//     })

//     return `
//         <div class="category-results">
//             <h2>${categoryObj.userAntwort[0].kategorie}</h2>
//             ${htmlQuestions.join('')}
//         </div>
//     `
// }
