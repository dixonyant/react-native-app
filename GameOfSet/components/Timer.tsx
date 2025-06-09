import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';

const Timer = ({ running = true }: { running?: boolean }) => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  useEffect(() => {
    setSeconds(0);
  }, []); // reset on mount (or can be controlled by key prop)

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <View>
      <Text className="text-lg font-mono">{formatTime(seconds)}</Text>
    </View>
  );
};

export default Timer;