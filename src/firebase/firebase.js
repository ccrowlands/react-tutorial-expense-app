import * as firebase from "firebase";

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);
 
const db = firebase.database();

export {firebase, db as default}; 

// db.ref("expenses").on("child_removed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// db.ref("expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// db.ref("expenses").on("child_added", (snapshot) => {
//     console.log(snapshot.key, snapshot.val()); 
// });


// db.ref("expenses").on("value", (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//     console.log(expenses);
//     });

// db.ref("expenses")
//     .once("value")
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//     console.log(expenses);
//     });

// db.ref("expenses").push({
//     description: "Beads",
//     note: "Red, green, blue",
//     amount: 3022,
//     createdAt: 23424324
// }); 



// db.ref("notes/-LLGIr70K46ragaRlK-B").remove();

// db.ref("notes").push({
//     title: "Course topics",
//     body: "React, Vue, Python"
// });

//   db.ref().on("value", (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   });

//   db.ref().on("value", (snapshot) => {
//     console.log(snapshot.val());
//   });

//   db.ref("location")
//     .once("value")
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log("error fetching data", e)
//     });

//   db.ref().set({
//       name: "Colin Rowlands",
//       age: 33,
//       stressLevel: 6,
//       job: {
//           title: "Developer",
//           company: "Google"
//       },
//       location: {
//           city: "Santiago",
//           country: "Chile"
//       }
//   }).then(() => {
//       console.log("Data is saved!");
//   }).catch((e) => {
//     console.log("This failed", e);
//   });

  //db.ref().set("This is my data");

//   db.ref("age").set(35);

//   db.ref("location/city").set("Valdivia");

//   db.ref("attributes").set({
//       height: "bloody tall",
//       width: "real skinny"
//   }).then(() => {
//     console.log("New data is saved!");
// }).catch((e) => {
//   console.log("New data save failed", e);
// });

// db.ref().update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "La Serena"
// });

// db.ref("isSingle").remove()
// .then(() => {
//     console.log("data removed");
// }).catch((e) => {
//     console.log("something went wrong", e);
// });