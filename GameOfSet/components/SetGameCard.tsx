import { Dimensions, View } from 'react-native';
import React from 'react';
import Shape from './Shape';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = SCREEN_WIDTH / 4;
const CARD_HEIGHT = CARD_WIDTH * 1.6;
const SetGameCard = ({ card }: { card: any })  => {
  console.log(card);
  return (
    <View style={{ width: CARD_WIDTH, height: CARD_HEIGHT }} className="border border-gray-300 rounded-xl bg-white items-center justify-center mx-2">
      <View className="flex-1 flex-col items-center justify-center py-6" style={{ gap: CARD_HEIGHT * 0.06 }}>
        {[...Array(card?.number)].map((_, i) => (
          <Shape
            key={i}
            type={card.shape}
            color={card.color}
            shading={card.shading}
          />
        ))}
      </View>
    </View>
  );
}

export default SetGameCard;