import React, { useState, useEffect, useCallback } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { PlaylistCard } from "../../components/playlist-card/playlist-card.component";
import { Loader } from "../../components/loader/loader.component";
import { fetchPlaylists } from "../../../services/playlist/playlist.service";
import {
  savePlaylists,
  selectPlaylist,
} from "../../../state/playlist/playlist.actions";

export const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const playlists = useSelector((store) => store.playlistReducer.playlists);

  const [isLoading, setIsLoading] = useState(false);

  const getPlaylists = useCallback(async () => {
    try {
      setIsLoading(true);
      const fetchedPlaylists = await fetchPlaylists();
      dispatch(savePlaylists(fetchedPlaylists));
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getPlaylists();
  }, []);

  const handleSelectPlaylist = (id) => {
    navigation.navigate("Player");

    dispatch(selectPlaylist(id));
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  const renderItem = ({ item }) => {
    const { imageUrl, title, duration, quantity } = item;

    return (
      <PlaylistCard
        imageUrl={imageUrl}
        title={title}
        duration={duration}
        quantity={quantity}
        onPress={() => handleSelectPlaylist(item.id)}
      />
    );
  };

  const Content = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "#414141",
            fontSize: 32,
            paddingTop: 30,
            paddingBottom: 10,
            marginStart: 20,
          }}
        >
          Playlists
        </Text>
        <FlatList
          data={playlists}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        />
      </View>
    );
  };

  return isLoading ? <Loader /> : <Content />;
};
