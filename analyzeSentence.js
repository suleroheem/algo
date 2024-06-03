function analyzeSentence() {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let charCount = 0;
    let wordCount = 0;
    let vowelCount = 0;
    let inWord = false;
    const vowels = 'aeiouAEIOU';

    console.log("Enter a sentence ending with a period (.). Press Enter after each character.");

    rl.on('line', (input) => {
        const char = input;

        // Stop reading when period is encountered
        if (char === '.') {
            rl.close();
            console.log(`Character count (excluding period): ${charCount}`);
            console.log(`Word count: ${wordCount}`);
            console.log(`Vowel count: ${vowelCount}`);
            return;
        }

        // Increment character count
        charCount++;

        // Count vowels
        if (vowels.includes(char)) {
            vowelCount++;
        }

        // Check for word boundaries
        if (char.match(/[a-zA-Z]/)) {
            if (!inWord) {
                wordCount++;
                inWord = true;
            }
        } else {
            inWord = false;
        }
    });
}

analyzeSentence();