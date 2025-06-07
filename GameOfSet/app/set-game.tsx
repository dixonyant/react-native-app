import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { SetGameInteractive } from '@/classes/SetGameInteractive';
import CardView from '@/components/CardView';

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
    <View className="flex-1 px-5 py-6 bg-white dark:bg-gray-900">
      <Text className="text-lg font-bold text-gray-800 dark:text-white mb-2">Guess if this is a Set:</Text>

      <View className="h-64">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 4 }}
          className="flex-row"
        >
          {cards.map((card, index) => (
            <CardView key={index} card={card} />
          ))}
        </ScrollView>
      </View>

      <View className="flex-row justify-around my-3">
        <Button title="It's a Set" onPress={() => handleGuess(true)} />
        <Button title="Not a Set" onPress={() => handleGuess(false)} />
      </View>

      <Text className="text-lg text-center mb-2 text-gray-700 dark:text-gray-200">{feedback}</Text>
      <Text className="text-base text-center text-gray-600 dark:text-gray-300">Score: {score}</Text>

      <View className="mt-4">
        <Button title="Reset Game" onPress={() => {
          game.reset();
          setCards(game.dealCards());
          setFeedback('');
          setScore(game.getScore());
        }} />
      </View>
    </View>
  );
}

