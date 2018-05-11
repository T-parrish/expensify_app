import * as firebase from 'firebase';



database.ref().set({
    name: 'T Money',
    age: '28',
    location: {
        city: 'Seoul',
        country: 'South Korea'
    }
}).then(() => {
    console.log('Data is saved')
}). catch((e) => {
    console.log('AW SNAPS', e)
});

database.ref('age').set(29);
database.ref('location/city').set('Korea')

database.ref('attributes/height').set('182.88')
database.ref('attributes/weight').set('175')

database.ref('attributes').set({
    height: 180,
    weight: 170
}).then(() => {
    console.log('Data is saved')
}).catch((e) => {
    console.log('error: ', e)
})

database.ref().update({
    name: 'Jimmy',
    age: 22
})

database.ref().update({
    'location/city': 'Los altos',
    'location/country': 'USA'
})

database.ref('age').remove().then(() => {
    console.log('age is removed')
}).catch((e) => {
    console.log('error :', e)
});


// subscribes to database, will reflect changes in realtime
const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
});

// subscribes to database, will reflect changes in realtime
const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
});

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 1000);

// setTimeout(() => {
//     database.ref().off('value', onValueChange)
// }, 5000);

// setTimeout(() => {
//     database.ref('age').set(12);
// }, 7000);


// // single ping to database, can pass values to 
// // ref to only pull data from a specific node
// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('error fetching: ', e)
//     });

// subscribes to database, will reflect changes in realtime
const onValueChange = database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.val());
});

// triggers when a child of the snapshot is removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// triggers when a child of the snapshot is changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

setTimeout(() => {
    database.ref('expenses').push({
        description:'Ramen',
        note: 'Delicious',
        amount: 750,
        createdAt: 1239588558
    });  
}, 5000);

database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        const expenses = []

        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        console.log(expenses);
    }).catch((e) => {
        console.log('error :', e)
    });
