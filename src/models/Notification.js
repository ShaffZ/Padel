import {db} from '../modules/firebase/firebase';

const collectionName = 'notifications';

export function subscribeNotifications(id, onUpdate, onError) {
    return db.collection(collectionName)
        .where('owner', '==', '/users/' + id)
        .onSnapshot((snapshot) => {
            const notifications = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
            onUpdate(notifications);
        }), onError;
}

export function getNotifications(id) {
    return db.collection(collectionName).where('owner', '==', '/users/' + id).get()
        .then((n) => n.docs.map((doc) => ({...doc.data(), id: doc.id})));
}

export function pressNotification(id) {
     db.collection('notifications').doc(id)
        .update({isnew: false});
    return null;
 }

 export function deletNotification(id) {
    db.collection('notifications').doc(id)
        .delete();
    return null;
 }

 
 export function uppdateNotification({
    description = null,
    detailText = null},
    id){
        db.collection('notifications').doc(id)
        .update({detailText: detailText, description: description, type: 'text'});
        return null;
 }
 

export function createNotification({
    type = 'default',
    header = null,
    owner = null,
    description = null,
    image = null,
    date = new Date(),
    isnew = true,
    detailText = null}) {
    return db.collection(collectionName).add({
        type,
        title: header,
        owner: '/users/' + owner,
        header,
        description,
        image,
        date,
        isnew,
        detailText,
    });
}
