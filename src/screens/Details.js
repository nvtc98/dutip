import React, {useEffect, useRef, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Searchbar, Card, IconButton} from 'react-native-paper';
import normalize from 'react-native-normalize';
import {spacingNormal, spacingSmall} from '../constants/style';
import {useNavigation} from '@react-navigation/native';
import useYoutube from '../hooks/youtube';
import SoundPlayer from 'react-native-sound-player';
var Sound = require('react-native-sound');
import Video from 'react-native-video';
import muc from '../assets/videoplayback.mp4';
import {WebView} from 'react-native-webview';

//https://www.npmjs.com/package/@sayem314/react-native-keep-awake

export default function Defaults({route}) {
  const {navigation} = useNavigation();
  const {videoId} = route?.params;
  console.log('route', videoId);
  const {getUrl, getAudio} = useYoutube();

  const [url, setUrl] = useState(null);

  useEffect(() => {
    const setVideoUrl = async () => {
      console.log('start');
      const url = await getAudio(videoId);
      console.log('url', url);
      // setUrl(url);
      // SoundPlayer.playUrl(url);
      //'https://file-examples.com/storage/fe8c7eef0c6364f6c9504cc/2017/11/file_example_MP3_700KB.mp3'
      // var audio = new Sound(url, null, error => {
      //   if (error) {
      //     console.log('failed to load the sound', error);
      //     return;
      //   }
      //   // if loaded successfully
      //   console.log(
      //     'duration in seconds: ' +
      //       audio.getDuration() +
      //       'number of channels: ' +
      //       audio.getNumberOfChannels(),
      //   );
      //   audio.play();
      // });
    };
    setVideoUrl();
  }, []);

  // useEffect(() => {
  //   const calll = async () => {
  //     const url = await getUrl(videoId);
  //     setUrl(url);
  //   };
  //   // calll();
  // });

  // 'https://rr3---sn-42u-nboez.googlevideo.com/videoplayback?expire=1681143018&ei=iuAzZKjTIey_vcAPnM6G-Aw&ip=2405%3A4800%3A5b0c%3Abbac%3A9c6f%3Ad122%3A2afe%3A98d4&id=o-AG6PSezOF10iAbwVZAWyyRAjpwvjms31kc6kmb_ua9DM&itag=18&source=youtube&requiressl=yes&mh=kn&mm=31%2C26&mn=sn-42u-nboez%2Csn-un57sne7&ms=au%2Conr&mv=m&mvi=3&pl=47&initcwndbps=2431250&vprv=1&mime=video%2Fmp4&ns=_CXyO4QqzatWy36nVpu_JuUM&cnr=14&ratebypass=yes&dur=190.659&lmt=1665638101515715&mt=1681121111&fvip=2&fexp=24007246&c=WEB&txp=4538434&n=wPqkl36WcpjSdVA8jAP&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAPKfS7hhi9Uh_2R9dW60qMj-7_ige96QLDM2oSX3sC0_AiBrDthznnyGJauYcIB50U3YlDP63ic7zwKMTPcoPURnFA%3D%3D&sig=AOq0QJ8wRQIgMD9dB-9ANINQV864nqNFVAitMw2d26FsPRPFS7A0o00CIQDnB1DVd8BIZ4EK6n6mQR6DbF9TSO7pETDOX4Or_vt5og%3D%3D'

  return (
    <Video
      source={{
        uri: 'https://rr3---sn-42u-nboez.googlevideo.com/videoplayback?expire=1681143018&ei=iuAzZKjTIey_vcAPnM6G-Aw&ip=2405%3A4800%3A5b0c%3Abbac%3A9c6f%3Ad122%3A2afe%3A98d4&id=o-AG6PSezOF10iAbwVZAWyyRAjpwvjms31kc6kmb_ua9DM&itag=18&source=youtube&requiressl=yes&mh=kn&mm=31%2C26&mn=sn-42u-nboez%2Csn-un57sne7&ms=au%2Conr&mv=m&mvi=3&pl=47&initcwndbps=2431250&vprv=1&mime=video%2Fmp4&ns=_CXyO4QqzatWy36nVpu_JuUM&cnr=14&ratebypass=yes&dur=190.659&lmt=1665638101515715&mt=1681121111&fvip=2&fexp=24007246&c=WEB&txp=4538434&n=wPqkl36WcpjSdVA8jAP&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAPKfS7hhi9Uh_2R9dW60qMj-7_ige96QLDM2oSX3sC0_AiBrDthznnyGJauYcIB50U3YlDP63ic7zwKMTPcoPURnFA%3D%3D&sig=AOq0QJ8wRQIgMD9dB-9ANINQV864nqNFVAitMw2d26FsPRPFS7A0o00CIQDnB1DVd8BIZ4EK6n6mQR6DbF9TSO7pETDOX4Or_vt5og%3D%3D',
      }} // Can be a URL or a local file.
      // ref={ref => {
      //   this.player = ref;
      // }} // Store reference
      //  onBuffer={this.onBuffer}                // Callback when remote video is buffering
      //  onError={this.videoError}               // Callback when video cannot be loaded
      //  style={styles.backgroundVideo}
      controls
      style={{flex: 1}}
      playInBackground
    />
  );

  return (
    <View style={styles.container}>
      <Text>HEHE</Text>
      <Text>HEHE</Text>
      <Text>HEHE</Text>
      <Text>HEHE</Text>
      <Text>HEHE</Text>
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
      {/* https://file-examples.com/storage/fe8c7eef0c6364f6c9504cc/2017/04/file_example_MP4_480_1_5MG.mp4 */}
      {/* <IVideo
    source={{ uri: url }}
    title='title'
    showFullscreenIcon={true}
    width='100%'
    height={240}
    actions={[{
        text: 'select 1',
        onPress: () => { },
    }, {
        text: 'select 2',
        onPress: () => { },
    }]}
/> */}
      {/* <Video
        key={url}
        source={{
          uri:
            url ||
            'https://rr2---sn-npoe7nl6.googlevideo.com/videoplayback?expire=1668126312&ei=B0JtY_6QMrCVvcAP0LCHkAI&ip=2405%3A4802%3A803d%3A4410%3A8c8c%3Ace00%3Aceb1%3A9897&id=o-AHaLmzds6ZJbUumtqatlfxMEcP5ROlqqnWnZwmYKRc_G&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=_rn73OiVlEC7ejMJBLRw5NEJ&gir=yes&clen=11369967&ratebypass=yes&dur=237.098&lmt=1667920091168476&fexp=24001373,24007246&c=WEB&txp=3319224&n=pho56bDzdvZrZ5JiEAC&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgYiTFJb0XVFuQTOP3iZWg357EcN9x_yk_xcoBJxY7DdQCIBqp2Fhf7YdFomx_4kjsWs-3Ptig3AGQTdlJmFmsVGfT&cm2rm=sn-42u-nboze7l,sn-i3bk776&req_id=7ce85a233906a3ee&ipbypass=yes&redirect_counter=2&cms_redirect=yes&cmsv=e&mh=ui&mm=34&mn=sn-npoe7nl6&ms=ltu&mt=1668104204&mv=m&mvi=2&pl=47&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhANC2oOVzbq367NUHbyVoViC0e5pKdFCUtoBamUJE2mnVAiEAnvRJtouuK_XfSAJA4DTyKHNtZY9VUPnmyf_SX_gWmsU%3D',
        }}
        controls
        //    onBuffer={this.onBuffer}                // Callback when remote video is buffering
        //    onError={this.videoError}               // Callback when video cannot be loaded
        onBuffer={r => {
          console.log('buffer', r);
        }}
        onError={e => {
          console.log('error', e);
        }}
        style={styles.video}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    height: '100%',
  },
  video: {
    flex: 1,
  },
});
