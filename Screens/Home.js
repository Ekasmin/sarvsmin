import { DrawerActions } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import ListHorizontal, { ListVertical } from "../ListItems/HomeList";

function Home({ navigation }) {
  const [searchText, setsearchText] = useState();

  // const rowTitles = [{
  //     "1": "Products",
  //     "2": "Offers",
  // }];

  const Item = ({ title, price, validity, image, rating }) => {
    return (
      <View style={styles.itemHoriz}>
        <View style={styles.ImageRating}>
          <Image
            style={styles.itemImage}
            source={{
              uri: `${image}`,
            }}
          />
          {/* {Array({ rating }).fill().map((_) => (<Text style={styles.rating}>⭐</Text>))} */}
          <Text style={styles.rating}>Ratings </Text>
        </View>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemPrice}>
          {price.split(".")[0]}.{price.split(".")[1]}
        </Text>
        {validity === true ? (
          <Text style={{ color: "blue", position: "absolute", bottom: 20 }}>
            In Stock
          </Text>
        ) : (
          <Text style={{ color: "red", position: "absolute", bottom: 20 }}>
            Out of Stock
          </Text>
        )}
      </View>
    );
  };

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      price={item.price}
      validity={item.validity}
      image={item.image}
    />
  );

  const Logout = () => {
    Alert.alert("You sure to", "Logout?", [
      {
        text: "Cancel",
        onPress: () => navigation.navigate("Home"),
        style: "cancel",
      },
      { text: "Sure", onPress: () => navigation.navigate("Login") },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Top Navigation Bar */}
      <View style={styles.topNav}>
        {/* Left Nav Row */}
        <View style={styles.leftNav}>
          {/* Navigation-Bar Icon */}
          <IconFontAwesome
            name="navicon"
            style={styles.navIcon}
            size={30}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />

          {/* Search Icon */}
          {/* <View style={styles.search}>
                    <TextInput style={styles.searchInput} placeholder="Search" value={searchText} onChange={e => setsearchText(e.target.value)} underlineColorAndroid='transparent' />
                    </View> */}

          {/* Logo */}
          <Image style={styles.logo} source={require("../assets/logo.jpg")} />

          {/* Title Text */}
          <Text style={styles.titleText}>Ekasmin</Text>
        </View>

        {/* Right Nav Row */}
        <View style={styles.rightNav}>
          {/* Search Icon */}
          {/* <IconFontAwesome style={styles.searchIcon} name="search" size={22} /> */}

          {/* WishList Icon */}
          <IconFontAwesome
            style={styles.wishListIcon}
            name="heart-o"
            size={22}
            onClick={(e) => navigation.navigate("Likes")}
          />

          {/* Profile Avatar */}
          <IconFontAwesome
            style={styles.avatarIcon}
            name="smile-o"
            size={28}
            onClick={(e) => navigation.navigate("UserProfile")}
          />
        </View>
      </View>

      <View>
        <View style={styles.search}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Here"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>

      {/* Body */}
      <ScrollView>
        {/* <IconFontAwesome style={styles.filterIcon} name="sliders" size={30} />
                <Text style={styles.filterText}>Filter</Text> */}

        {/* <ListHorizontal ListTitle="Products" renderItem={renderItem} />
                <ListHorizontal ListTitle="Offers" renderItem={renderItem} /> */}

        {/* {rowTitles.map((rowTitle) => {
                    console.log({ rowTitle });
                    <ListHorizontal ListTitle={rowTitle} renderItem={renderItem} />
                })} */}

        {/* <ListVertical renderItem={renderItem} /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
  },
  topNav: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: Dimensions.get("window").width,
    marginTop: 10,
  },
  leftNav: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  navIcon: {
    marginLeft: 22,
    resizeMode: "contain",
    marginTop: 5,
    marginRight: 10,
  },
  search: {
    flexDirection: "row",
    margin: 15,
    marginTop: 20,
    height: 45,
    width: "80%",
    marginLeft: 36,
    borderRadius: 15,
    postion: "absolute",
    borderWidth: 1,
    backgroundColor: "white",
  },
  searchInput: {
    height: 30,
    position: "relative",
    left: 10,
    top: 5,
    width: "90%",
    fontSize: 18,
    paddingLeft: 10,
    // Remove outlines from TextInput
    outlineColor: "#F5F5F5",
    outlineOffset: 0,
    outlineStyle: "none",
    outlineWidth: 0,
  },
  logo: {
    width: 30,
    height: 32,
    resizeMode: "contain",
    marginLeft: 15,
  },
  titleText: {
    fontSize: 20,
    marginLeft: 5,
    fontWeight: 500,
  },
  rightNav: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  searchIcon: {
    color: "black",
    marginRight: 30,
  },
  wishListIcon: {
    color: "black",
    marginRight: 30,
  },
  avatarIcon: {
    marginRight: 22,
  },
  itemHoriz: {
    backgroundColor: "#fff",
    padding: 20,
    paddingVertical: 20,
    marginRight: 20,
    borderRadius: 15,
    width: 250,
    height: 220,
    marginBottom: 20,
  },
  // itemVert: {
  //     backgroundColor: '#fff',
  //     padding: 20,
  //     paddingVertical: 20,
  //     marginRight: 20,
  //     borderRadius: 15,
  //     width: 250,
  //     height: 220,
  // },
  ImageRating: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  rating: {
    marginLeft: 20,
    marginTop: 20,
  },
  itemImage: {
    width: 100,
    height: 80,
    borderWidth: 1,
    borderRadius: 15,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 600,
    marginTop: 10,
    width: 130,
  },
  itemPrice: {
    marginBottom: 8,
    position: "absolute",
    bottom: 40,
  },
  itemPriceMain: {
    fontWeight: 600,
  },
});
