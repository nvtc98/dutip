import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Searchbar, Card, IconButton} from 'react-native-paper';
import useYoutube from '../hooks/youtube';
import normalize from 'react-native-normalize';
import {spacingNormal, spacingSmall} from '../constants/style';
import Screens from '../constants/screen';

export default function Home({navigation}) {
  const {search, download} = useYoutube();
  const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState([]);

  const onSearch = async () => {
    const result = await search(searchText);
    console.log('result', result);
    setSearchList(result);
  };

  const onDownload = videoId => {
    download(videoId);
  };

  const onItemPress = videoId => {
    navigation.push(Screens.Details, {videoId});
  };

  const renderItem = ({item}) => {
    const {
      id: {videoId},
      snippet: {
        title,
        channelTitle,
        description,
        thumbnails: {
          default: {url},
        },
      },
    } = item;
    return (
      <Card
        style={styles.itemContainer}
        mode="elevated"
        onPress={() => onItemPress(videoId)}>
        <View style={styles.itemContentContainer}>
          <Card.Cover
            source={{uri: url}}
            style={styles.itemImage}
            resizeMode={'cover'}
          />
          <Card.Title
            title={title}
            subtitle={channelTitle}
            style={styles.itemTextContainer}
          />
          <View style={styles.itemActionContainer}>
            <IconButton
              icon="plus-circle"
              size={spacingNormal}
              style={styles.itemActionIcon}
              onPress={() => {}}
            />
            <IconButton
              icon="download"
              size={spacingNormal}
              style={styles.itemActionIcon}
              onPress={() => onDownload(videoId)}
            />
          </View>
        </View>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search for videos"
        value={searchText}
        onChangeText={value => setSearchText(value)}
        onIconPress={onSearch}
        onSubmitEditing={onSearch}
      />
      <FlatList
        data={searchList}
        renderItem={renderItem}
        keyExtractor={(item, index) => item?.id?.videoId || index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemImage: {
    width: normalize(96),
    height: normalize(72),
  },
  itemContainer: {
    marginHorizontal: spacingNormal,
    marginTop: spacingNormal,
  },
  itemContentContainer: {
    flexDirection: 'row',
  },
  itemTextContainer: {
    flex: 1,
  },
  itemActionContainer: {
    justifyContent: 'center',
    marginRight: normalize(4),
  },
  itemActionIcon: {
    margin: 0,
  },
});
