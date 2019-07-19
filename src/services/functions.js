import firebase from '../services/firebase'

let firestore = firebase.firestore()
export let foodsRef = firestore.collection('food')

export let writeFood = (object) => {
let id = foodsRef.doc().id
foodsRef.doc(id).set(object)
}

export const whereFood = (type) => {
    return firebase.firestore().collection('food').where("type", "==", type).get()
}

