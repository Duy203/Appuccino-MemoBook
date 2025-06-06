import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
type photo_ = {
 id: string;
 url: string;
 title: string;
 user_vote: boolean;
 can_vote: boolean;
};
const data: photo_[] = [
    {
        id:"1",
        url:"exmaple",
        title:"WIP",
        user_vote:false,
        can_vote:true
    }
];
function PhotoSubmissionScreen () {
    const [photos, setphotos] = useState([]);
    useEffect(() => {
        fetch('https://api.exmaple.com/photos(WIP)')
        .then((response)=> response.json())
        .then((data)=>setphotos(data));
    }, []);
    console.log(photos);
    return (
        <View style={styles.picture_box}>
            <Text style={styles.topic_title}>Topic of the day:</Text>
            {photos.map((item: { url: string | undefined; thumbnailUrl: string | undefined; title: string | undefined; }) => (
                <a href={item.url} target="_new">
                    <img width={'300px'} height={'300px'} src={item.thumbnailUrl} alt={item.title}></img>
                </a>
            ))}
        </View>
    );
};
const styles = StyleSheet.create({
    picture_box:{
        flex: 1,
    },
    topic_title:{
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        paddingBottom: 0,
    }
});
export default PhotoSubmissionScreen;