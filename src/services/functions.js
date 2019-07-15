import firebase from '../services/firebase'

let firestore = firebase.firestore()
export let foodsRef = firestore.collection('food')

export let writeFood = (object) => {
let id = foodsRef.doc().id
foodsRef.doc(id).set(object)
}

