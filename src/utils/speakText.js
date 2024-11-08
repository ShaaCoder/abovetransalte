export function speakText(text, lang = 'uz-UZ') {
    if (!window.speechSynthesis) {
      alert('Your browser does not support text-to-speech.');
      return;
    }
  
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
  }
  