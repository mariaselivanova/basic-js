const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    let keyUpper = key.toUpperCase();
    let messageUpper = message.toUpperCase();
    const messageLength = messageUpper.length;
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < messageLength; i++) {
      const char = messageUpper[i];
      const charIndex = this.alphabet.indexOf(char);

      if (charIndex !== -1) {
        const keyChar = keyUpper[keyIndex % keyUpper.length];
        const keyCharIndex = this.alphabet.indexOf(keyChar);
        const cipherCharIndex = (charIndex + keyCharIndex) % 26;
        const cipherChar = this.alphabet[cipherCharIndex];

        result += cipherChar;
        keyIndex++;
      } else {
        result += char;
      }
    }

    if (this.direct) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }
  }


  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    let keyUpper = key.toUpperCase();
    let messageUpper = encryptedMessage.toUpperCase();
    const messageLength = messageUpper.length;
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < messageLength; i++) {
      const char = messageUpper[i];
      const charIndex = this.alphabet.indexOf(char);

      if (charIndex !== -1) {
        const keywordChar = keyUpper[keyIndex % keyUpper.length];

        const keywordCharIndex = this.alphabet.indexOf(keywordChar);
        const cipherCharIndex = (charIndex - keywordCharIndex + 26) % 26;
        const cipherChar = this.alphabet[cipherCharIndex];

        result += cipherChar;
        keyIndex++;
      } else {
        result += char;
      }
    }

    if (this.direct) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }

  }
}


module.exports = {
  VigenereCipheringMachine
};
