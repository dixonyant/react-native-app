import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<any>(null);
  // const [milliseconds, setMilliseconds] = useState(0);
  // const milIntervalRef = useRef<any>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  // useEffect(() => {
  //   milIntervalRef.current = setInterval(() => {
  //     setMilliseconds((prev) => prev + 1);
  //   }, 1);
  //   return () => {
  //     if (milIntervalRef.current) clearInterval(milIntervalRef.current);
  //   };
  // }, []);

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