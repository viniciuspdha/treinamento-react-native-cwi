import React, { useEffect, useState, useCallback } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { styles } from "./player.style";

import { Surface } from "../../containers/surface.container";

import {
  PreviousIcon,
  NextIcon,
  PlayFilledIcon,
  PauseIcon,
  SpeakerIcon,
  SoundIcon,
} from "../../../assets/icons";
import { useSelector, useDispatch } from "react-redux";
import {
  getVideoRequest,
  resetGetVideo,
  selectPlaylist,
} from "../../../state/playlist/playlist.actions";
import { fetchVideoById } from "../../../services/videos/videos.service";
import { Loader } from "../../components/loader/loader.component";

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

const Info = ({ video }) => {
  return (
    <View style={styles.textContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{video.title}</Text>
        <Text style={styles.description}>1:00 | 3:50</Text>
      </View>
      <Text style={styles.author}>{video.description}</Text>
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
  const { currentVideo, selectedPlaylist } = useSelector(
    (store) => store.playlistReducer
  );

  const dispatch = useDispatch();

  const [queue, setQueue] = useState([]);

  const getVideo = useCallback((id) => {
    dispatch(getVideoRequest(id));
  }, []);

  useEffect(() => {
    if (selectedPlaylist) {
      setQueue(selectedPlaylist.videos);
    }

    return () => dispatch(resetGetVideo());
  }, [selectedPlaylist]);

  useEffect(() => {
    if (queue) {
      getVideo(queue[0]);
    }
  }, [queue]);

  if (!queue) {
    return (
      <Surface
        style={[
          styles.container,
          { alignItems: "center", justifyContent: "center" },
        ]}
      >
        <Text>Não há videos a serem exibidos nessa playlist</Text>
      </Surface>
    );
  }

  if (!currentVideo) return <Loader />;

  return (
    <Surface style={styles.container}>
      <Image
        style={styles.videoImage}
        source={{ uri: currentVideo.imageUri }}
      />
      <StatusBar />
      <View style={styles.mediaContainer}>
        <Info video={currentVideo} />
        <Buttons />
        <SoundBar />
      </View>
    </Surface>
  );
};
