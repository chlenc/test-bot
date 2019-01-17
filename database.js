//const firebase = require("firebase");
var firebase = require('firebase-admin');
var serviceAccount = require('./key.json');

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://wavestest-b882c.firebaseio.com/"
});

module.exports = {
    getData(path){
        return firebase.database().ref(path).once('value').then(function (data) {
            return data.val()
        })
    },
    pushData (path, data){
        return firebase.database().ref(path).push(data).then(data => {
            return (data.path.pieces_)
        });
    },
    setData(path, data){
        firebase.database().ref(path).set(data)
    },
    updateData(path, data){
        firebase.database().ref(path).update(data)
    },
    removeData(path){
        firebase.database().ref(path).remove()
    }
    // getAllData(){
    //
    // },
}