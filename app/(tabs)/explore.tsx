import React from "react";
import { Link } from 'expo-router';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Pressable,
  FlatList,
  Image, // Needed for Popular Singles album art
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// Importing icons needed for Popular Singles ('dots-vertical') and the Bottom Nav
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// --- Image Imports ---
// Using the corrected path with two '..'
const heroImage = require("../../assets/images/alone.png");

// Placeholder images for Discography and Singles
const deadInsideAlbum = require("../../assets/images/Rectangle1.png"); // Replace with actual path
const heartlessAlbum = require("../../assets/images/Rectangle4.png");
const rectangle2Album = require("../../assets/images/Rectangle3.png");
// Replace with actual path  // Replace with actual path
const weAreChaosSingle = require("../../assets/images/Rectangle3.png"); // Replace with actual path
const smileSingle = require("../../assets/images/Rectangle5.png"); // Replace with actual path

// Dummy data for Discography (using placeholders for now)
const discographyData = [
  { id: "1", title: "Dead inside", year: "2020", image: deadInsideAlbum },
  { id: "2", title: "Alone", year: "2023", image: rectangle2Album }, // Using hero image as placeholder
  { id: "3", title: "Heartless", year: "2023", image: heartlessAlbum },
];

// Dummy data for Popular Singles
const popularSinglesData = [
  {
    id: "1",
    title: "We Are Chaos",
    artist: "Easy Living",
    year: "2023",
    image: weAreChaosSingle,
  },
  {
    id: "2",
    title: "Smile",
    artist: "Berrechid",
    year: "2023",
    image: smileSingle,
  },

];

// --- Render Item for Discography (Horizontal) ---
const renderDiscographyItem = ({ item }) => (
  <Link 
      href="/(tabs)/playing" // The destination is the playing screen
      asChild 
   > 
    {/* This <Pressable> is the ONLY direct child of <Link>.
      All visual elements (Image and Text) MUST be inside this Pressable.
    */}
    <Pressable style={styles.discographyItem}> 
        <ImageBackground 
            source={item.image} 
            style={styles.discographyImage} 
            imageStyle={{ borderRadius: 10 }}
        >
        </ImageBackground>
        <Text style={styles.discographyTitle}>{item.title}</Text>
        <Text style={styles.discographyYear}>{item.year}</Text>
    </Pressable>
  </Link>
);

// --- Render Item for Popular Singles (Vertical) ---
const renderPopularSingleItem = ({ item }) => (
  <Pressable style={styles.popularSingleItem}>
    <Image source={item.image} style={styles.popularSingleImage} />
    <View style={styles.popularSingleTextContainer}>
      <Text style={styles.popularSingleTitle}>{item.title}</Text>
      <View style={styles.popularSingleSubtitle}>
        <Text style={styles.popularSingleYear}>{item.year}</Text>
        <Text style={styles.popularSingleArtist}> • {item.artist}</Text>
      </View>
    </View>
    <MaterialCommunityIcons name="dots-vertical" size={24} color="gray" />
  </Pressable>
);

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
           {" "}
      <ScrollView style={styles.container}>
                        {/* --- 1. Hero Section --- */}       {" "}
        <ImageBackground source={heroImage} style={styles.heroBackground}>
                   {" "}
          <View style={styles.heroContent}>
                        <Text style={styles.heroTitle}>A.L.O.N.E</Text>         
             {" "}
            <Pressable style={styles.subscribeButton}>
                           {" "}
              <Text style={styles.subscribeButtonText}>Subscribe</Text>         
               {" "}
            </Pressable>
                     {" "}
          </View>
                 {" "}
        </ImageBackground>
                {/* --- 2. Pagination Dots --- */}       {" "}
        <View style={styles.paginationDotsContainer}>
                    <View style={[styles.paginationDot, styles.activeDot]} />
                    <View style={styles.paginationDot} />
                    <View style={styles.paginationDot} />       {" "}
        </View>
                {/* --- 3. Discography Section Header --- */}       {" "}
        <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Discography</Text>       
           {" "}
          <Pressable>
                        <Text style={styles.seeAllText}>See all</Text>         {" "}
          </Pressable>
                 {" "}
        </View>
                {/* --- 4. Discography Horizontal List --- */}
               {" "}
        <FlatList
          horizontal
          data={discographyData}
          renderItem={renderDiscographyItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.discographyListContent}
        />
               {/* --- 5. Popular Singles Section Header --- */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular singles</Text>
          <Pressable>
            <Text style={styles.seeAllText}>See all</Text>
          </Pressable>
        </View>
        {/* --- 6. Popular Singles Vertical List --- */}
        <FlatList
          data={popularSinglesData}
          renderItem={renderPopularSingleItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false} // Disable scrolling since it's inside ScrollView
          contentContainerStyle={styles.popularSinglesListContent}
        />
                <View style={{ height: 90 }} /> {/* Spacer for bottom nav */}   
                 {" "}
      </ScrollView>
      {/* --- 7. Bottom Navigation Bar --- */}
      <View style={styles.bottomNav}>
        {/* Favorite */}
        <Pressable style={styles.navItem}>
          <Ionicons name="heart" size={24} color="gray" />
          <Text style={styles.navText}>Favorite</Text>
        </Pressable>
        {/* Search */}
        <Pressable style={styles.navItem}>
          <Ionicons name="search" size={24} color="gray" />
          <Text style={styles.navText}>Search</Text>
        </Pressable>
        {/* Home (Active) */}
        <Pressable style={styles.navItem}>
          <Ionicons name="home" size={24} color="white" />
          <Text style={styles.navTextActive}>Home</Text>
        </Pressable>
        {/* Cart */}
        <Pressable style={styles.navItem}>
          <Ionicons name="cart" size={24} color="gray" />
          <Text style={styles.navText}>Cart</Text>
        </Pressable>
        {/* Profile (Highlight) */}
        <Pressable style={styles.navItem}>
          <Ionicons name="person" size={24} color="#E69A15" />
          <Text style={[styles.navText, { color: "#E69A15" }]}>
            Profile
          </Text>
        </Pressable>
      </View>
         {" "}
    </SafeAreaView>
  );
}

// ----------------------------------------------------------------

// --- Styles ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  // ... (Hero Section & Discography Styles are UNCHANGED)
  heroBackground: {
    width: "100%",
    height: 350,
    justifyContent: "flex-end",
  },
  heroContent: {
    paddingBottom: 20,
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  subscribeButton: {
    backgroundColor: "#FF4500",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignSelf: "flex-start",
  },
  subscribeButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  paginationDotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "gray",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#FF4500",
    width: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FF4500",
  },
  seeAllText: {
    color: "gray",
    fontSize: 16,
  },
  discographyListContent: {
    paddingHorizontal: 20,
  },
  discographyItem: {
    marginRight: 15,
    alignItems: "flex-start",
    width: 120,
  },
  discographyImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 8,
    overflow: "hidden",
  },
  discographyTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
  },
  discographyYear: {
    color: "gray",
    fontSize: 14,
    textAlign: "left",
  },
  // --- NEW STYLES: Popular Singles ---
  popularSinglesListContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  popularSingleItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#252525", // Slightly different background for the row
    borderRadius: 10,
    padding: 8,
  },
  popularSingleImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  popularSingleTextContainer: {
    flex: 1, // Takes up the middle space
  },
  popularSingleTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  popularSingleSubtitle: {
    flexDirection: "row",
  },
  popularSingleYear: {
    color: "gray",
    fontSize: 13,
  },
  popularSingleArtist: {
    color: "gray",
    fontSize: 13,
  },
  // --- NEW STYLES: Bottom Navigation ---
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1C1C1C", // Dark background for the bar
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
    color: "white", // Home is usually white/highlighted
    fontSize: 12,
    marginTop: 4,
  },
  navTextHighlight: {
    color: "#FF4500", // Profile is highlighted in orange
    fontSize: 12,
    marginTop: 4,
  },
});
