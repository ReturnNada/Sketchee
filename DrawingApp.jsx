import React, { useRef, useEffect } from 'react';
import { View, Button } from 'react-native';
import { SketchCanvas, SketchCanvasRef } from 'rn-perfect-sketch-canvas';

const DrawingApp = () => {
  const canvasRef = useRef<SketchCanvasRef>(null);

  useEffect(() => {
    // Ensure the canvas is ready
    if (canvasRef.current) {
      // You can perform any initial setup here
    }
  }, []);

  const handleClear = () => {
    canvasRef.current?.reset();
  };

  return (
    <View style={{ flex: 1 }}>
      <SketchCanvas
        ref={canvasRef}
        strokeColor={'black'}
        strokeWidth={4}
        containerStyle={{ flex: 1, backgroundColor: 'white' }}
      />
      <Button title="Clear" onPress={handleClear} />
    </View>
  );
};

export default DrawingApp;
