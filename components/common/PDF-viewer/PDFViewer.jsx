import React, { useEffect, useRef } from "react";
import { Text, View } from "react-native";
import { Audio } from "expo-av";

const PDFViewer = ({ pdfUrl }) => {
  const sound = useRef(new Audio.Sound());

  useEffect(() => {
    const loadPDF = async () => {
      try {
        await sound.current.loadAsync({ uri: pdfUrl });
        await sound.current.playAsync();
      } catch (error) {
        console.log("Error loading PDF:", error);
      }
    };

    loadPDF();

    return () => {
      sound.current.unloadAsync();
    };
  }, [pdfUrl]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>PDF Viewer</Text>
    </View>
  );
};

export default PDFViewer;
