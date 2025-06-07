import { View } from 'react-native';
import React from 'react';
import Svg, { Defs, Ellipse, Pattern, Polygon, Rect } from 'react-native-svg';

const Shape = ({
  type,
  color,
  shading,
  sWidth,
}: {
  type: string;
  color: string;
  shading: string;
  sWidth: number;
}) => {
  const shapeWidth = sWidth * .6;
  const shapeHeight = 40;
  const isStriped = shading === 'striped';
  const fill = shading === 'solid' ? color : isStriped ? 'url(#stripes)' : 'none';
  const stroke = color;

  return (
    <View className="my-1">
      <Svg height={shapeHeight} width={shapeWidth}>
        {isStriped && (
          <Defs>
            <Pattern
              id="stripes"
              patternUnits="userSpaceOnUse"
              width="4"
              height="4"
              patternTransform="rotate(45)"
            >
              <Rect width="2" height="4" fill={color} />
            </Pattern>
          </Defs>
        )}

        {type === 'oval' && (
          <Ellipse
            cx={shapeWidth / 2}
            cy={shapeHeight / 2}
            rx={shapeWidth / 2.5}
            ry={shapeHeight / 2.5}
            fill={fill}
            stroke={stroke}
            strokeWidth="2"
          />
        )}
        {type === 'diamond' && (
          <Polygon
            points={`
              ${shapeWidth / 2},5 
              ${shapeWidth - 5},${shapeHeight / 2} 
              ${shapeWidth / 2},${shapeHeight - 5} 
              5,${shapeHeight / 2}
            `}
            fill={fill}
            stroke={stroke}
            strokeWidth="2"
          />
        )}
        {type === 'squiggle' && (
          <Rect
            x={(shapeWidth - 50) / 2}
            y={10}
            rx={10}
            ry={10}
            width={50}
            height={20}
            fill={fill}
            stroke={stroke}
            strokeWidth="2"
          />
        )}
      </Svg>
    </View>
  );
}

export default Shape;