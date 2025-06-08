import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { SetGameInteractive } from '@/classes/SetGameInteractive';
import SetGameCard from '@/components/SetGameCard';

const game = new SetGameInteractive();

export default function SetGameScreen() {
  const [cards, setCards] = useState(game.dealCards());
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(game.getScore());

  const handleGuess = (guess: boolean) => {
    const result = game.checkUserAssertion(guess);
    setFeedback(result ? '✅ Correct!' : '❌ Wrong!');
    setScore(game.getScore());
    setCards(game.dealCards());
  };

  return (
    <View className="flex-1 px-5 py-6 bg-background">
      <Text className="text-lg font-bold text-foreground mb-2">Guess if this is a Set:</Text>
      <View className="h-64">
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
      </View>

      <View className="flex-row justify-around my-3">
        <Button title="It's a Set" disabled={!cards?.length} onPress={() => handleGuess(true)} />
        <Button title="Not a Set" disabled={!cards?.length}  onPress={() => handleGuess(false)} />
      </View>

      <Text className="text-lg text-center mb-2 text-muted-foreground">{feedback}</Text>
      <Text className="text-base text-center text-muted-foreground">Score: {score}</Text>
      <Text className="text-sm text-center text-muted-foreground mt-2">Cards Remaining: {game.cardsRemaining()}</Text>

      <View className="mt-4">
        <Button title="Reset Game" onPress={() => {
          game.reset();
          setFeedback('');
          setScore(game.getScore());
        }} />
      </View>
    </View>
  );
}

