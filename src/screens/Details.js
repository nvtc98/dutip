import React, {useEffect, useRef, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Searchbar, Card, IconButton} from 'react-native-paper';
import normalize from 'react-native-normalize';
import {spacingNormal, spacingSmall} from '../constants/style';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';
import useYoutube from '../hooks/youtube';
import Video from 'react-native-video';

export default function Defaults({route}) {
  const {navigation} = useNavigation();
  const {videoId} = route?.params;
  console.log('route', videoId);
  const {getUrl} = useYoutube();
  const videoRef = useRef(null);

  const [url, setUrl] = useState(null);
  useEffect(() => {
    const getUrlAsync = async () => {
      const url = await getUrl(videoId);
      setUrl(url);
    };
    // getUrlAsync();
    // console.log('videoRef', videoRef.current.presentFullscreenPlayer);
    videoRef.current.presentFullscreenPlayer();
  }, []);

  console.log('url', url);

  return (
    <View style={styles.container}>
      {/* {!!url && (
        <Video
          source={{uri: url}}
          //    ref={(ref) => {
          //      this.player = ref
          //    }}                                      // Store reference
          //    onBuffer={this.onBuffer}                // Callback when remote video is buffering
          //    onError={this.videoError}               // Callback when video cannot be loaded
          style={styles.video}
        />
      )} */}

      <Video
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        controls
        ref={videoRef}
        //    onBuffer={this.onBuffer}                // Callback when remote video is buffering
        //    onError={this.videoError}               // Callback when video cannot be loaded
        onBuffer={r => {
          console.log('buffer', r);
        }}
        onError={e => {
          console.log('error', e);
        }}
        style={styles.video}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    flex: 1,
    width: 600,
    height: 300,
  },
});
