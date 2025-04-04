import React, { useState } from 'react';

const sentenceData = [
  {
    telugu: "నేను పాఠశాలకు వెళ్ళాను",
    tense: "past",
    correctEnglish: "I went to school",
    tip: "'వెళ్ళాను' is past tense. Use past form of 'go' → 'went'"
  },
  {
    telugu: "ఆమె ఇప్పుడు భోజనం చేస్తుంది",
    tense: "present",
    correctEnglish: "She is eating now",
    tip: "'చేస్తుంది' shows present continuous → 'is eating'"
  },
  {
    telugu: "నువ్వు రేపు వస్తావు",
    tense: "future",
    correctEnglish: "You will come tomorrow",
    tip: "'వస్తావు' in future → use 'will come'"
  }
];

function TeluguToEnglishApp() {
  const [index, setIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');
  const [showTip, setShowTip] = useState(false);

  const checkAnswer = () => {
    const correct = sentenceData[index].correctEnglish.toLowerCase().trim();
    const input = userInput.toLowerCase().trim();
    if (input === correct) {
      setResult("✅ Correct!");
      setShowTip(false);
    } else {
      setResult(`❌ Incorrect. Correct answer: ${sentenceData[index].correctEnglish}`);
      setShowTip(true);
    }
  };

  const nextSentence = () => {
    setIndex((prev) => (prev + 1) % sentenceData.length);
    setUserInput('');
    setResult('');
    setShowTip(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Translate this Telugu sentence to English:</h2>
      <p style={{ fontSize: '18px' }}>👉 {sentenceData[index].telugu}</p>
      <input
        style={{ padding: '8px', width: '100%', margin: '10px 0' }}
        type="text"
        placeholder="Type your English sentence here"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={checkAnswer} style={{ marginRight: '10px' }}>Check</button>
      <button onClick={nextSentence}>Next</button>
      {result && <p style={{ marginTop: '20px' }}>{result}</p>}
      {showTip && <p style={{ fontStyle: 'italic', color: 'gray' }}>💡 Tip: {sentenceData[index].tip}</p>}
    </div>
  );
}

export default TeluguToEnglishApp;
