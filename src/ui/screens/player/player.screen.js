import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./player.style";

import {
  PreviousIcon,
  NextIcon,
  PlayFilledIcon,
  PauseIcon,
  SpeakerIcon,
  SoundIcon,
} from "../../../assets/icons";

const imageUri =
  "https://www.incimages.com/uploaded_files/image/1920x1080/425A8015_Retouched_283406.jpg";

const StatusBar = () => {
  const [videoPercent, setVideoPercent] = useState(35);

  return (
    <View style={styles.statusBar}>
      <View style={[styles.statusProgress, { width: videoPercent + "%" }]} />
    </View>
  );
};

const Info = () => {
  return (
    <View style={styles.textContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Zumba Class</Text>
        <Text style={styles.description}>1:00 | 3:50</Text>
      </View>
      <Text style={styles.author}>Dancing School</Text>
    </View>
  );
};

const Buttons = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.touchable}>
        <PreviousIcon />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.playContainer}
        onPress={() => {
          setIsPlaying(!isPlaying);
        }}
      >
        <View style={styles.playButton}>
          {isPlaying ? <PauseIcon fill="white" /> : <PlayFilledIcon />}
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable}>
        <NextIcon />
      </TouchableOpacity>
    </View>
  );
};

const SoundBar = () => {
  const [volumePercent, setVolumePercent] = useState(20);

  return (
    <View style={styles.soundBarContainer}>
      <SpeakerIcon />
      <View style={styles.bar}>
        <View style={[styles.progress, { width: volumePercent + "%" }]}>
          <View style={styles.progressDot} />
        </View>
      </View>
      <SoundIcon />
    </View>
  );
};

export const PlayerScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.videoImage} source={{ uri: imageUri }} />
      <StatusBar />
      <View style={styles.mediaContainer}>
        <Info />
        <Buttons />
        <SoundBar />
      </View>
    </View>
  );
};
