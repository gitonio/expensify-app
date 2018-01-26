import * as firebase from 'firebase'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };


  firebase.initializeApp(config);

  const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default}

//   database.ref().set({
//       name: 'Antonio',
//       age: 26,
//       stressLevel: 6,
//       job: {
//           title: 'Software developer',
//           company: 'Google'
//       },
//       location: {
//           city: 'San Diego',
//           country: 'USA'
//       }
//   }).then(() => {
//       console.log('Data is saved')
//   }).catch((e) => {
//       console.log('This failed',e)
//   })


// database.ref('isSingle').remove(() => {
//     console.log('removed')
// }).catch((e) => {
//     console.log('remove failed', e)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })
  //database.ref().set('This is my data.')

//   database.ref().set({
//       age: 27
//   })

// database.ref('age').set(27)
// database.ref('location/city').set('New York')
// database.ref('attributes').set({
//     height: 73,
//     weight: 150
// }).then(() => {
//     console.log('worked')
// }).catch((e) => {
//     console.log('fail',e)
// })