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
  Image, 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const heroImage = require("../../assets/images/alone.png");

const deadInsideAlbum = require("../../assets/images/Rectangle1.png"); 
const heartlessAlbum = require("../../assets/images/Rectangle4.png");
const rectangle2Album = require("../../assets/images/Rectangle3.png");
const weAreChaosSingle = require("../../assets/images/Rectangle3.png"); 
const smileSingle = require("../../assets/images/Rectangle5.png"); 

const discographyData = [
  { id: "1", title: "Dead inside", year: "2020", image: deadInsideAlbum },
  { id: "2", title: "Alone", year: "2023", image: rectangle2Album },
  { id: "3", title: "Heartless", year: "2023", image: heartlessAlbum },
];

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

const renderDiscographyItem = ({ item }) => (
  <Link 
      href="/(tabs)/playing" 
      asChild 
   > 
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
                     {" "}
        <View style={styles.paginationDotsContainer}>
                    <View style={[styles.paginationDot, styles.activeDot]} />
                    <View style={styles.paginationDot} />
                    <View style={styles.paginationDot} />       {" "}
        </View>
                 {" "}
        <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Discography</Text>       
           {" "}
          <Pressable>
                        <Text style={styles.seeAllText}>See all</Text>         {" "}
          </Pressable>
                 {" "}
        </View>
               {" "}
        <FlatList
          horizontal
          data={discographyData}
          renderItem={renderDiscographyItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.discographyListContent}
        />
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular singles</Text>
          <Pressable>
            <Text style={styles.seeAllText}>See all</Text>
          </Pressable>
        </View>
        <FlatList
          data={popularSinglesData}
          renderItem={renderPopularSingleItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false} 
          contentContainerStyle={styles.popularSinglesListContent}
        />
                <View style={{ height: 90 }} /> 
                 {" "}
      </ScrollView>
      <View style={styles.bottomNav}>
        <Pressable style={styles.navItem}>
          <Ionicons name="heart" size={24} color="gray" />
          <Text style={styles.navText}>Favorite</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <Ionicons name="search" size={24} color="gray" />
          <Text style={styles.navText}>Search</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <Ionicons name="home" size={24} color="white" />
          <Text style={styles.navTextActive}>Home</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <Ionicons name="cart" size={24} color="gray" />
          <Text style={styles.navText}>Cart</Text>
        </Pressable>
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


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
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
  popularSinglesListContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  popularSingleItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#252525", 
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
    flex: 1, 
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
  navTextHighlight: {
    color: "#FF4500",
    fontSize: 12,
    marginTop: 4,
  },
});
