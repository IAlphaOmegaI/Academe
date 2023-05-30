import React, { useState } from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";
import * as DocumentPicker from "expo-document-picker";

import PDFViewer from "../PDF-viewer/PDFViewer";

import styles from "./PDFPicker.style";

const PDFPicker = () => {
  const [pickedDocument, setPickedDocument] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
      });

      if (result.type === "success") {
        setPickedDocument(result);
      } else {
        setPickedDocument(null);
      }
    } catch (error) {
      console.log("Error picking document:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickDocument} style={styles.button}>
        <Text>Pick a PDF</Text>
      </TouchableOpacity>
      {pickedDocument && <PDFViewer pdf={""} />}
    </View>
  );
};

export default PDFPicker;
