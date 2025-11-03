import React, { useEffect, useRef } from 'react'; // <-- IMPORT useRef and useEffect
import { StyleSheet, Text, View, ImageBackground, Pressable, Animated } from 'react-native'; // <-- IMPORT Animated
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons'; 


const albumArt = require('../../assets/images/playingalond.png'); 

export default function PlayingScreen() {
  const scaleAnim = useRef(new Animated.Value(1)).current; 

  useEffect(() => {
    const breatheAnimation = () => {
      Animated.sequence([
       
        Animated.timing(scaleAnim, {
          toValue: 1.02,
          duration: 4000, 
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1.0,
          duration: 4000,
          useNativeDriver: true,
        }),
      ]).start(breatheAnimation); 
    };

    breatheAnimation();
    
    return () => scaleAnim.stopAnimation(); 
  }, [scaleAnim]);


  const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <AnimatedImageBackground 
          source={albumArt} 
          style={[
                styles.albumArtBackground,
                { 
                  transform: [{ scale: scaleAnim }]
                }
            ]} 
          resizeMode="cover"
        >
         
          <View style={styles.songInfoContainer}>
            <Text style={styles.songTitle}>Alone in the Abyss</Text>
            <Text style={styles.artistName}>Youlakou</Text>
            
            <Pressable style={styles.shareIcon}>
              <Feather name="upload" size={24} color="#E69A15" />
            </Pressable>
          </View>
        </AnimatedImageBackground>

        
        <View style={styles.controlsContainer}>
         
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
              <View style={styles.progressHandle} />
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.currentTime}>Dynamic Warmup |</Text>
              <Text style={styles.totalTime}>4 min</Text>
            </View>
          </View>

          {/* Main Playback Buttons */}
          <View style={styles.mainControls}>
            <Pressable>
              <MaterialCommunityIcons name="replay" size={30} color="gray" />
            </Pressable>
            <Pressable>
              <Ionicons name="play-skip-back" size={40} color="white" />
            </Pressable>
            <Pressable style={styles.playButton}>
              <Ionicons name="play" size={40} color="black" />
            </Pressable>
            <Pressable>
              <Ionicons name="play-skip-forward" size={40} color="white" />
            </Pressable>
            <Pressable>
              <Ionicons name="volume-high" size={30} color="gray" />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  albumArtBackground: {
    flex: 0.7, 
    justifyContent: 'flex-end',
    alignItems: 'center', 
    paddingBottom: 5,
  },
  songInfoContainer: {
    alignItems: 'center',
    position: 'relative', 
    width: '100%',
  },
  songTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E69A15', 
    marginBottom: 5,
  },
  artistName: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  shareIcon: {
    position: 'absolute',
    right: 20, 
    top: 5, 
  },
  controlsContainer: {
    flex: 0.25, 
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingTop: 10,
    justifyContent: 'space-around', 
  },
  progressBarContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  progressBar: {
    width: '100%',
    height: 5,
    backgroundColor: '#333',
    borderRadius: 2.5,
    marginBottom: 5,
    justifyContent: 'center',
  },
  progressFill: {
    width: '30%', 
    height: '100%',
    backgroundColor: '#E69A15',
    borderRadius: 2.5,
  },
  progressHandle: {
    position: 'absolute',
    left: '30%', 
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: 'white',
    transform: [{ translateX: -7.5 }], 
    borderColor: '#E69A15',
    borderWidth: 2,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
    marginTop: 5,
  },
  currentTime: {
    color: 'gray',
    fontSize: 14,
  },
  totalTime: {
    color: 'gray',
    fontSize: 14,
  },
  mainControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10, 
  },
  playButton: {
    backgroundColor: '#ffffff',
    borderRadius: 30, 
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1C1C1C", 
    borderTopWidth: 1,
    borderTopColor: "#333",
    paddingVertical: 8,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: "center",
    paddingHorizontal: 5,
  },
  navText: {
    color: "gray",
    fontSize: 12,
    marginTop: 4,
  },
  navTextActive: {
    color: "white", 
    fontSize: 12,
    marginTop: 4,
  },
});