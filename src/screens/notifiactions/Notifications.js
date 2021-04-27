import React, {useEffect, useState } from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import {Avatar} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

//TODO
//--fire base--
//make it possible to fetch notifications from fire base
//make it so that new notifications are added when avalible
//(make it so new notifications are fetched even if not in app)
//add push notification functionality
//
//--non fire base--
//add the standard CSS
//

// {
//     id,
//     type,
//     header,
//     description,
//     image,
//     date,
//     isNew,
//     other data
// }


// temp data
//TODO
//remove once data can be fetched from fire base
const NOTIFICATIONS = [
    {
        id: '1',
        header: 'First Notification',
        description: 'this is the first item',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Crafoord_Prize_D81_9141_%2842282165922%29_%28cropped%29.jpg/800px-Crafoord_Prize_D81_9141_%2842282165922%29_%28cropped%29.jpg',
        time: '2014-02-02-14.44',
        isnew: true,
    },
    {
        id: '2',
        header: 'Second Notification',
        description: 'this is the second item',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/EVER_GIVEN_%2849643352087%29.jpg/1920px-EVER_GIVEN_%2849643352087%29.jpg',
        time: '2014-02-02-14.44',
        isnew: false,
    },
    {
        id: '3',
        header: 'Third Notification',
        description: 'this is the third item',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Queen_Elizabeth_II_March_2015.jpg/800px-Queen_Elizabeth_II_March_2015.jpg',
        time: '2014-02-02-14.44',
        isnew: false,
    },
];

//renders base notification, same for all types
const NotificationView = (inData) => {
    const item = inData.item;
    const [extend, setExtend] = useState('');
        return(
            <TouchableHighlight onPress={() => {setExtend(!extend)}} >
                <View style={{borderRightWidth: 8, borderColor: item.isnew ? '#00CEB4':'#f7f7f7'}}>
                    <View style={styles.nBox} >
                        <View style={{flexDirection: 'row', width:'100%', justifyContent:'space-evenly'}}>
                            <View style={{width:90}}>
                                <Image
                                    style={styles.nPicture}
                                    source = {{uri: item.image}}/>
                            </View>
                            <View style={{width:'60%'}}>
                                <Text style={styles.nHeader}>{item.header}</Text>
                                <View style={{marginTop:10}}>                       
                                    <NotificationDetails enabled={extend} item={item}/>
                                </View>
                            </View>
                            <View style={{margin:10,width:'10%', minWidth:60}}>
                                <Text style={styles.nText}>{item.time}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
}


//this shoud be added to depending on the type
const NotificationDetails = (props) => {
    const item = props.item;

    //when notification is expanded 
    if(props.enabled){
        switch(item.type){
            case('match invite'):
                //to be added to when the relevant page has been made
            case('tournament resaults'):
                //to be added to when the relevant page has been made
            case('friend request'):
                //to be added to when the relevant page has been made

                //more to be added


            default:
                return(
                    <View>
                        <Text style={styles.nText}>
                            If you see this an no specific details were added for this notification
                        </Text>
                    </View>
                );
        } 
    }

    //when notification is not expanded
    return(
        <Text style={styles.nText}>{item.description}</Text>
    )
}

//collect data from item obdject to send to NotificationView
const RenderNotification = ({item}) => {    
    return(
        <NotificationView  item={item}/>
       
       );
   
};


const Notifications = () => {
    return (
        <View> 
            <FlatList
                data={NOTIFICATIONS}
                renderItem={RenderNotification}
                keyExtractor={(item) => item.id}
            />
            <Text style={styles.nEnd}>No more notifications</Text>
        </View>
    );
};

export default Notifications;

// TODO make standard styles
const styles = StyleSheet.create({
    nBox: {
        backgroundColor: '#f7f7f7',
        padding: '1%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderColor: '#BFBFBF',
        minWidth: 320,
    },
    nText: {
        color: '#707070',
    },
    nHeader: {
        marginTop:10,
        fontSize: 20,
        color: '#707070',
    },
    nPicture: {
        height: 60,
        width: 60,
        borderRadius: 30,
        margin: 10,
    },
    nEnd: {
        color: '#707070',
        textAlign: 'center',
        margin: 50,
    },
});