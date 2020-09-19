import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { PlaylistCard } from "../../components/playlist-card/playlist-card.component";

const data = [
  {
    id: 1,
    title: "Chill",
    imageUrl:
      "https://images.8tracks.com/cover/i/010/075/563/beach-chill-cool-edits-Favim.com-899607-6033.jpg?rect=0,0,500,500&q=98&fm=jpg&fit=max",
    quantity: 8,
    duration: "18h30min",
  },
  {
    id: 2,
    title: "Rap",
    imageUrl:
      "https://conscienciapopularlivre.files.wordpress.com/2019/10/rap.jpg",
    quantity: 12,
    duration: "30min",
  },
  {
    id: 3,
    title: "Gym",
    imageUrl:
      "https://images.theconversation.com/files/339674/original/file-20200604-130929-iutdtd.jpg?ixlib=rb-1.1.0&rect=8%2C0%2C5455%2C3637&q=45&auto=format&w=496&fit=clip",
    quantity: 50,
    duration: "2h40min",
  },
  {
    id: 4,
    title: "Zumba",
    imageUrl:
      "https://www.intimus.com.br/-/media/ubykotex/stage/tips/productos/kotex_corte_imagenes_2.jpg",
    quantity: 6,
    duration: "1h15min",
  },
  {
    id: 5,
    title: "Baile Funk",
    imageUrl: "https://i.ytimg.com/vi/2ahV7JXdkNE/maxresdefault.jpg",
    quantity: 35,
    duration: "5h20min",
  },
  {
    id: 6,
    title: "Rock",
    imageUrl:
      "data:image/jpeg;base64,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",
    quantity: 70,
    duration: "8h45min",
  },
  {
    id: 7,
    title: "Pagode",
    imageUrl:
      "https://www.diariodepernambuco.com.br/static/app/noticia_127983242361/2019/04/15/784190/20190415083733887909i.jpg",
    quantity: 25,
    duration: "3h50min",
  },
  {
    id: 8,
    title: "Eletrônica",
    imageUrl: "https://i.ytimg.com/vi/mi14OnUikmk/maxresdefault.jpg",
    quantity: 63,
    duration: "4h15min",
  },
  {
    id: 9,
    title: "Raça Negra",
    imageUrl:
      "https://revistafactual.com.br/wp-content/uploads/2019/07/grupo-raca-negra-foto-reproducao-facebook.jpg",
    quantity: 20,
    duration: "2h30min",
  },
];

export const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

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
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        />
      </View>
    );
  };

  const Loader = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  };

  return isLoading ? <Loader /> : <Content />;
};
