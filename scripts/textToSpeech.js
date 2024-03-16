const Allbuttons = document.querySelectorAll("#textToSpeech");
let synth = speechSynthesis,
  isSpeaking = true;
let voice = synth.getVoices()[10];

// Lecture du contentu HTML
Allbuttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    textButton = e.target.innerHTML;
    let textReading = new SpeechSynthesisUtterance(textButton);
    voicelocalService = false;
    textReading.lang = "tr-TR"; // Turkish language code
    textReading.text = input;

    // Ajuster les propriétés pour une voix plus fluide
    textReading.pitch = 0.75; // Hauteur de la voix (entre 0 et 2, 1 étant normal)
    textReading.rate = 0.85; // Vitesse de la voix (1 est normal, plus élevé est plus rapide)
    textReading.volume = 1.0; // Volume de la voix (entre 0 et 1)

    // Définir une voix spécifique (optionnel)
    var voices = window.speechSynthesis.getVoices();
    var voice = voices.find((v) => v.lang === "tr-TR");
    textReading.voice = voice;

    synth.speak(textReading);
  });
});
