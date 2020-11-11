const questionElement = document.getElementById("question")
const radioButtons = document.getElementsByName('wahlmoeglichkeiten')
const skala = document.getElementById('skala')
let counter = 0

let userAntwort = [];
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
            "frage": "Ich lasse mich von niemandem reizen.",
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

function sortCategory(category){
    let questions = userAntwort.filter( frage => frage.kategorie === category)
    let sum = questions.reduce( (acc, question) => acc + parseInt(question.id), 0)

    return {
        userAntwort: questions,
        totalPoints: sum
    }
}

function showResults(){
    const resultsContainer = document.getElementById('results')
    skala.style.display = 'none'
    questionElement.style.display = 'none'

    const optimismus = sortCategory('Optimismus')
    const kausal = sortCategory('Kausalanalyse')
    const selbst = sortCategory('Selbstwirksamkeit')
    const emotion = sortCategory('Emotionssteuerung')
    const ziel = sortCategory('Zielorientierung')
    const impuls = sortCategory('Impulskontrolle')
    const empathie = sortCategory('Empathie')

    const htmlArray = [
        createHTML(selbst),
        createHTML(optimismus),
        createHTML(kausal),
        createHTML(emotion),
        createHTML(ziel),
        createHTML(impuls),
        createHTML(empathie)
    ]

    resultsContainer.innerHTML = htmlArray.join('');
}

function createHTML(categoryObj){
    const htmlQuestions = categoryObj.userAntwort.map( question => {
        return `
            <div>
                <p>${question.frage}</p>
                <p>${question.antwort}</p>
            </div>
        `
    })

    return `
        <div class="category-results">
            <h2>${categoryObj.userAntwort[0].kategorie}</h2>
            ${htmlQuestions.join('')}
        </div>
    `
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
    if(event.key === 'Enter'){

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
        }
    }
}

function reverseValue(num){
    return (num - 6) * (-1)
}

displayQuestion(counter);

window.addEventListener('keyup', nextQuestion);
