import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SetGameInteractive } from '@/classes/SetGameInteractive';
import SetGameCard from '@/components/SetGameCard';
import SetGameButton from '@/components/SetGameButton';
import Timer from '@/components/Timer';

const game = new SetGameInteractive();

export default function SetGameScreen() {
  const [timerKey, setTimerKey] = useState(0);
  const [timerRunning, setTimerRunning] = useState(true);
  const [cards, setCards] = useState(() => game.dealRandom());
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(() => game.getScore());

  const handleGuess = (guess: boolean) => {
    const result = game.checkUserAssertion(guess);
    setFeedback(result ? '✅ Correct!' : '❌ Wrong!');
    setScore(game.getScore());
    let newCards = game.dealRandom();
    setCards(newCards);
    if (!newCards?.length) {
      setFeedback('Game Over! Reset to play again.');
      setTimerRunning(false); // stop timer
    }
  };

  const resetGame = () => {
    game.reset();
    setFeedback('');
    setScore(game.getScore());
    setCards(game.dealRandom());
    setTimerKey(prevKey => prevKey + 1); // Reset timer by changing key
    setTimerRunning(true); // start timer
  };

  return (
    <View className="flex-1 px-5 py-6 bg-background">
      <View className="flex-row items-center justify-end">
        <Timer key={timerKey} running={timerRunning} />
      </View>
      <Text className="text-lg font-bold text-center mt-4 mb-8">Is this is a Set?</Text>
      <View className="h-48">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 4 }}
          className="flex-row"
        >
          {cards.map((card, index) => (
            <SetGameCard key={index} card={card} />
          ))}
        </ScrollView>
        {/* Show Score only when cards run out */}
        {cards.length === 0 && (
          <>
            <Text className="text-2xl font-bold text-center mb-4">Score:</Text>
            <Text className="text-md text-center text-muted-foreground">{score}</Text>
          </>
        )}
      </View>
      
      <Text className="text-md text-center text-muted-foreground mt-8 mb-8">Cards Remaining: {game.cardsRemaining()}</Text>
      <Text className="text-lg text-center mb-8 text-muted-foreground" style={{ minHeight: 32 }}>
        {feedback}
      </Text>

      <View className="flex-row justify-around my-3">
        <SetGameButton title="It's a Set" disabled={!cards?.length} handlePress={() => handleGuess(true)} containerStyles="flex-1 mx-2" />
        <SetGameButton title="Not a Set" disabled={!cards?.length} handlePress={() => handleGuess(false)} containerStyles='flex-1 mx-2' />
      </View>
      <View className="mt-4">
        <SetGameButton title="Reset Game" handlePress={() => resetGame()} />
      </View>
    </View>
  );
}

