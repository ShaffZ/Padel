import {db} from '../modules/firebase/firebase';
import {getUserReference} from './User';

const collectionName = 'tournaments';

export function subscribeTournament(id, onUpdate, onError) {
    const unsubscribe = db.collection(collectionName)
        .where('owner', '==', getUserReference(id))
        .onSnapshot((snapshot) => {
            const tournaments = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
            onUpdate(tournaments);
        }); var onError;
    return unsubscribe;
}

//Fetch data for victory screen
//will have to be updated
export function getForvictory(id) {
    return db.collection(collectionName).doc(id).get()
        .then((u) => (u.data()));
}

export function createTournament({
    owner = null,
    city = null,
    court = null,
    from = null,
    to = null,
    date = null,
    minRank = null,
    maxRank = null,
    minPlayers = null}) {
    return db.collection(collectionName).add({
        owner: getUserReference(owner),
        city,
        court,
        from,
        to,
        date,
        minRank,
        maxRank,
        minPlayers,
    });
}
