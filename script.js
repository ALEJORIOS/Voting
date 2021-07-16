// Firebase

var firebaseConfig = {
    apiKey: "AIzaSyAcScpreavSYlfGljabWPZedS3T-XnZRvQ",
    authDomain: "main-b98e5.firebaseapp.com",
    projectId: "main-b98e5",
    storageBucket: "main-b98e5.appspot.com",
    messagingSenderId: "532964300697",
    appId: "1:532964300697:web:7c98e2a81fb2067141e508"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var colors = [];

db.collection('Votes').get().then((snapshot) => {
    snapshot.docs.forEach((color, index) => {
        colors[index] = color.data().Votes

    });
});

// Estado de los radiobuttons
function state() {
    let vote = false
    const radialInputs = document.getElementsByName("flexRadioDefault")
    for (let i = 0; i < radialInputs.length; i++) {
        if (radialInputs[i].checked) {
            vote = true
        }
    }
    if (vote) {
        for (let i = 0; i < radialInputs.length; i++) {
            radialInputs[i].disabled = true;
        }
        // Actualiza Base de datos
        if (radialInputs[0].checked) {
            colors[0] = colors[0] + 1;
            db.collection('Votes').doc('Black').update({
                Votes: colors[0]
            });
        }
        if (radialInputs[1].checked) {
            colors[1] = colors[1] + 1;
            db.collection('Votes').doc('Blue').update({
                Votes: colors[1]
            });
        }
        if (radialInputs[2].checked) {
            colors[2] = colors[2] + 1;
            db.collection('Votes').doc('Green').update({
                Votes: colors[2]
            });
        }
        if (radialInputs[3].checked) {
            colors[3] = colors[3] + 1;
            db.collection('Votes').doc('Red').update({
                Votes: colors[3]
            });
        }
        if (radialInputs[4].checked) {
            colors[4] = colors[4] + 1;
            db.collection('Votes').doc('White').update({
                Votes: colors[4]
            });
        }
        if (radialInputs[5].checked) {
            colors[5] = colors[5] + 1;
            db.collection('Votes').doc('Yellow').update({
                Votes: colors[5]
            });
        }
        updateChart()
    }
}


// Grafica

const labels = ["Black", "Blue", "Green", "Red", "White", "Yellow"];
const data = {
    labels: labels,
    datasets: [{
        // borderColor: 'rgb(0,0,0)',
        backgroundColor: [
            'rgb(206, 190, 226)',
            'rgb(122, 143, 190)',
            'rgb(82, 82, 82)',
            'rgb(155, 38, 99)',
            'rgb(230, 167, 125)',
            'rgb(191, 241, 167)'
        ],
        data: [0, 0, 0, 0, 0, 0]

    }]
};

const config = {
    type: 'pie',
    data,
    options: {}
};

var myChart = new Chart(
    document.getElementById('myChart'),
    config
);

function updateChart() {
    myChart.data.datasets[0].data = colors;
    myChart.update();
}