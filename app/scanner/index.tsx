import { Camera, CameraView } from "expo-camera";
import { Stack, router } from "expo-router";
import {
  AppState,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { Overlay } from "./Overlay";
import { useEffect, useRef } from "react";

export default function Home() {
  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        qrLock.current = false;
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const handleQRScan = async ({ data }: { data: string }) => {
    if (data && !qrLock.current) {
      try {
        qrLock.current = true;
        
        // Parse the QR data
        const qrData = JSON.parse(data);
        
        // Check if the QR contains the required navigation info
        if (qrData.page && qrData.props) {
          // Navigate to the specified page with props
          setTimeout(() => {
            router.push({
              pathname: `/${qrData.page}`,
              params: qrData.props
            });
          }, 500);
        } else {
          // Handle external URLs if needed
          if (data.startsWith('http')) {
            await Linking.openURL(data);
          }
        }
      } catch (error) {
        console.error('Error processing QR code:', error);
        // Reset the lock if there's an error
        qrLock.current = false;
      }
    }
  };

  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      <Stack.Screen
        options={{
          title: "Scanner",
          headerShown: false,
        }}
      />
      {Platform.OS === "android" ? <StatusBar hidden /> : null}
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={handleQRScan}
      />
      <Overlay />
    </SafeAreaView>
  );
}