import { useState } from 'react';
import { translateText } from '../utils/translateText';
import { startRecognition } from '../utils/startRecognition';
import { speakText } from '../utils/speakText';
import styles from './TranslatorApp.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TranslatorApp() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('uz'); // 'uz' for Uzbek to English, 'en' for English to Uzbek

  const handleTranslate = async () => {
    const targetLang = language === 'uz' ? 'en' : 'uz';
    const translation = await translateText(input, targetLang);
    setOutput(translation);
  };

  const handleVoiceInput = () => {
    const recognition = startRecognition(language === 'uz' ? 'uz-UZ' : 'en-US');
    if (recognition) {
      recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript;
        setInput(spokenText);
      };
      recognition.start();
    }
  };

  const handleVoiceOutput = () => {
    speakText(output, language === 'uz' ? 'en-US' : 'uz-UZ');
  };

  return (
    <>
    <Navbar/>
        <div className={styles.container}>
      <h1 className={styles.title}>Uzbek-English Translator</h1>
      <div className={styles.languageSwitcher}>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className={styles.select}
        >
          <option value="uz">Uzbek to English</option>
          <option value="en">English to Uzbek</option>
        </select>
      </div>

      {/* Input Container */}
      <div className={styles.inputContainer}>
        <textarea
          className={styles.textarea}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={language === 'uz' ? 'Type or speak in Uzbek' : 'Type or speak in English'}
        />
        <button className={styles.microphoneButton} onClick={handleVoiceInput}>
          <i className="fas fa-microphone"></i>
        </button>
      </div>

      {/* Swap Button between input and output */}
      <button className={styles.swapButton} onClick={() => setLanguage(language === 'uz' ? 'en' : 'uz')}>
        <i className="fas fa-exchange-alt"></i>
      </button>

      {/* Output Container */}
      <div className={styles.outputContainer}>
        <textarea
          className={styles.textarea}
          value={output}
          readOnly
          placeholder="Translation will appear here"
        />
        <button className={styles.volumeButton} onClick={handleVoiceOutput}>
          <i className="fas fa-volume-up"></i>
        </button>
      </div>

      {/* Translate Button */}
      <div className={styles.buttonGroup}>
        <button className={styles.translateButton} onClick={handleTranslate}>
          <i className="fas fa-language"></i> Translate
        </button>
      </div>
    </div>
    <Footer/>
    </>
  
  );
}
