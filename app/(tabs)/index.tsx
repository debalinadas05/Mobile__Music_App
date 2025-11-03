import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';
import { Link } from 'expo-router';

// 1. FINAL CORRECTED IMAGE PATH
// Path is: app/(tabs)/index.tsx -> ../ (out of tabs) -> ../ (out of app) -> assets/images/image.png
const background = require('../../assets/images/image.png'); 

export default function LandingScreen() {
  return (
    <View style={styles.container}>
      
      <ImageBackground 
        source={background} 
        resizeMode="cover" 
        style={styles.imageBackground}
      >
        <View style={styles.contentContainer}>
          
          <Text style={styles.titleText}>
            Dancing between{'\n'}
            The shadows{'\n'}
            Of rhythm
          </Text>

          {/* Button: Get Started - Navigates to the Explore tab */}
          <Link href="/(tabs)/explore" asChild> 
            <Pressable style={styles.getStartedButton}>
              <Text style={styles.getStartedButtonText}>Get started</Text>
            </Pressable>
          </Link>
          
          {/* Button: Continue with Email - Navigates to a separate login screen */}
          <Link href="/email_login" asChild> 
            <Pressable style={styles.emailButton}>
              <Text style={styles.emailButtonText}>Continue with Email</Text>
            </Pressable>
          </Link>

          {/* Terms and Privacy Text */}
          <Text style={styles.termsText}>
            by continuing you agree to terms of services and <Text style={{fontWeight: 'bold'}}>Privacy policy</Text>
          </Text>
          
        </View>
      </ImageBackground>
    </View>
  );
}

// ----------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'black',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end', 
  },
  contentContainer: {
    paddingHorizontal: 30, 
    paddingBottom: 50, 
    alignItems: 'center', 
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Subtle overlay for text readability
    paddingTop: 30,
  },
  titleText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 80, 
    alignSelf: 'flex-start', // Align title to the left
    lineHeight: 45, 
  },
  // --- BUTTON 1: Get Started (Rounded) ---
  getStartedButton: {
    width: '100%',
    backgroundColor: '#FF4500', 
    paddingVertical: 15,
    borderRadius: 25, // Rounded corners
    marginBottom: 15,
    alignItems: 'center',
  },
  getStartedButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // --- BUTTON 2: Email (Rounded) ---
  emailButton: {
    width: '100%',
    borderColor: 'gray', 
    borderWidth: 1,
    paddingVertical: 15,
    borderRadius: 25, // Rounded corners
    marginBottom: 20,
    alignItems: 'center',
  },
  emailButtonText: {
    color: 'white',
    fontSize: 18,
  },
  // --- Footer Text ---
  termsText: {
    color: 'gray',
    fontSize: 12,
    textAlign: 'center',
  },
});