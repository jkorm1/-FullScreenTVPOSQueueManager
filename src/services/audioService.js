class AudioService {
  constructor() {
    this.synthesis = window.speechSynthesis;
    this.voice = null;
    this.initialize();
  }

  initialize() {
    if (this.synthesis.onvoiceschanged !== undefined) {
      this.synthesis.onvoiceschanged = () => {
        const voices = this.synthesis.getVoices();
        // Prefer clear English voices
        this.voice = voices.find(voice => 
          voice.name.includes('Google US English') ||
          voice.name.includes('Daniel') ||
          voice.lang === 'en-US'
        ) || voices[0];
      };
    }
  }

  announceNowServing(customers) {
    if (!customers.length) return;

    const formatID = (id) => {
      // Less pause between characters
      return id.split('').join(' ');
    };

    const message = customers.length === 1 
      ? `Now serving ID ${formatID(customers[0].ID)}`
      : `Now serving IDs ${customers.map(c => formatID(c.ID)).join(' and ')}`;

    this.speak(message, {
      rate: 0.6,    // Slightly slower than normal but not too slow
      pitch: 1,
      volume: 1
    });
  }

  speak(message, options = {}) {
    const utterance = new SpeechSynthesisUtterance(message);
    
    if (this.voice) {
      utterance.voice = this.voice;
    }

    utterance.rate = options.rate || 0.6;
    utterance.pitch = options.pitch || 1;
    utterance.volume = options.volume || 1;

    this.synthesis.cancel();
    this.synthesis.speak(utterance);
  }
}

const audioService = new AudioService();
export default audioService; 