const Allimages = document.querySelectorAll("#altToSpeech");
let synth = speechSynthesis,
  isSpeaking = true;
let voice = synth.getVoices()[10];

// Lecture de la description alternative
Allimages.forEach((image) => {
  image.addEventListener("click", (e) => {
    e.preventDefault();
    textimage = e.target.alt;
    let textReading = new SpeechSynthesisUtterance(textimage);
    textReading.lang = "tr-TR"; // Turkish language code
    // Ajuster les propriétés pour une voix plus fluide
    textReading.pitch = 0.75; // Hauteur de la voix (entre 0 et 2, 1 étant normal)
    textReading.rate = 1; // Vitesse de la voix (1 est normal, plus élevé est plus rapide)
    textReading.volume = 1.0; // Volume de la voix (entre 0 et 1)

    // Définir une voix spécifique (optionnel)
    var voices = window.speechSynthesis.getVoices();
    var voice = voices.find((v) => v.lang === "tr-TR");
    textReading.voice = voice;

    speechSynthesis.speak(textReading);
  });
});
