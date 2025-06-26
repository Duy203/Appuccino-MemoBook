import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
require("dotenv").config({path: "./server.config.env"});
const Db = process.env.ATLAS_URI;
type photo_ = {
 id: string;
 url: string;
 title: string;
 user_vote: boolean;
 can_vote: boolean;
 name:string;
 description:string;
};
const data: photo_[] = [
    {
        id:"1",
        url:"exmaple",
        title:"WIP",
        user_vote:false,
        can_vote:true,
        name:"",
        description:""
    }
];
//Note to others: I am stil having trouble figuring out what the correct 
//mongo db and api url code to use for this screen.

//const mongodbclient= new MongoClient(Db);
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
            {photos.map((item: { url: string | undefined; thumbnailUrl: string | undefined; title: string | undefined; }) => (
                <a href={item.url} target="_new">
                    <img width={'300px'} height={'300px'} src={item.thumbnailUrl} alt={item.title}></img>
                </a>
            ))}
            <Text style={styles.topic_title}>Topic of the day: photo_.title</Text>
            <Text style={styles.picture_name}>photo_.name</Text>
            <Text style={styles.picture_description}>photo_.description</Text>
            <button style={styles.photo_button_box}>Choose Different Photo</button>
            <button style={styles.photo_button_box}>Submit Photo</button>
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
    },
    picture_name:{
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        paddingBottom: 0,
    },
    picture_description:{
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        paddingBottom: 0,
    },
    photo_button_box:{
        flex: 1,
        color: "purple",
        height: 100,
        width: 300,
    }
});
export default PhotoSubmissionScreen;