import { Dimensions, View } from 'react-native';
import React from 'react';
import Shape from './Shape';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = SCREEN_WIDTH / 3.8;
const CARD_HEIGHT = CARD_WIDTH * 1.6;

const CardView = ({ card }: { card: any })  => {
  const shapeCount = card.number;
  return (
    <View style={{ width: CARD_WIDTH, height: CARD_HEIGHT }} className="border border-gray-300 rounded-xl bg-white dark:bg-gray-800 items-center justify-center mx-2">
      <View className="flex-col items-center justify-center space-y-2 py-3">
        {[...Array(3)].map((_, i) =>
          i < shapeCount ? (
            <Shape
              key={i}
              type={card.shape}
              color={card.color}
              shading={card.shading}
              sWidth={CARD_WIDTH}
            />
          ) : (
            <View key={i} className="h-10" />
          )
        )}
      </View>
    </View>
  );
}

export default CardView;