import { View } from 'react-native';
import React from 'react';
import Svg, { Defs, Path, Pattern, Polygon, Rect } from 'react-native-svg';

const Shape = ({
  type,
  color,
  shading,
}: {
  type: string;
  color: string;
  shading: string;
}) => {
  const shapeWidth = 60;
  const shapeHeight = 40;
  const isStriped = shading === 'striped';
  const patternId = `stripes-${color.replace('#', '')}`;
  const fill = shading === 'solid' ? color : isStriped ? `url(#${patternId})` : 'none';

  return (
    <View>
      <Svg height={shapeHeight} width={shapeWidth}>
        {isStriped && (
          <Defs>
            <Pattern
              id={patternId}
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
          <Rect
            x={(shapeWidth - 50) / 2}
            y={10}
            rx={10}
            ry={10}
            width={50}
            height={20}
            fill={fill}
            stroke={color}
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
            stroke={color}
            strokeWidth="2"
          />
        )}
        {type === 'squiggle' && (
          // vector points are converted from https://stackoverflow.com/a/25396670/6243389
          <Path
            d={`
              M ${shapeWidth * (104 / 109)},${shapeHeight * (15 / 72)}
              C ${shapeWidth * (112.4 / 109)},${shapeHeight * (36.9 / 72)}, ${shapeWidth * (89.7 / 109)},${shapeHeight * (60.8 / 72)}, ${shapeWidth * (63 / 109)},${shapeHeight * (54 / 72)}
              C ${shapeWidth * (52.3 / 109)},${shapeHeight * (51.3 / 72)}, ${shapeWidth * (42.2 / 109)},${shapeHeight * (42 / 72)}, ${shapeWidth * (27 / 109)},${shapeHeight * (53 / 72)}
              C ${shapeWidth * (9.6 / 109)},${shapeHeight * (65.6 / 72)}, ${shapeWidth * (5.4 / 109)},${shapeHeight * (58.3 / 72)}, ${shapeWidth * (5 / 109)},${shapeHeight * (40 / 72)}
              C ${shapeWidth * (4.6 / 109)},${shapeHeight * (22 / 72)}, ${shapeWidth * (19.1 / 109)},${shapeHeight * (9.7 / 72)}, ${shapeWidth * (36 / 109)},${shapeHeight * (12 / 72)}
              C ${shapeWidth * (59.2 / 109)},${shapeHeight * (15.2 / 72)}, ${shapeWidth * (61.9 / 109)},${shapeHeight * (31.5 / 72)}, ${shapeWidth * (89 / 109)},${shapeHeight * (14 / 72)}
              C ${shapeWidth * (95.3 / 109)},${shapeHeight * (10 / 72)}, ${shapeWidth * (100.9 / 109)},${shapeHeight * (6.9 / 72)}, ${shapeWidth * (104 / 109)},${shapeHeight * (15 / 72)}
              Z
            `}
            fill={fill}
            stroke={color}
            strokeWidth="2"
          />
        )}
      </Svg>
    </View>
  );
}

export default Shape;