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
        colors[index] = color.data().votes

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
            db.collection('Votes').doc('1Red').update({
                votes: colors[0]
            });
        }
        if (radialInputs[1].checked) {
            colors[1] = colors[1] + 1;
            db.collection('Votes').doc('2Red-Orange').update({
                votes: colors[1]
            });
        }
        if (radialInputs[2].checked) {
            colors[2] = colors[2] + 1;
            db.collection('Votes').doc('3Orange').update({
                votes: colors[2]
            });
        }
        if (radialInputs[3].checked) {
            colors[3] = colors[3] + 1;
            db.collection('Votes').doc('4Yellow-Orange').update({
                votes: colors[3]
            });
        }
        if (radialInputs[4].checked) {
            colors[4] = colors[4] + 1;
            db.collection('Votes').doc('5Yellow').update({
                votes: colors[4]
            });
        }
        if (radialInputs[5].checked) {
            colors[5] = colors[5] + 1;
            db.collection('Votes').doc('6Yellow-Green').update({
                votes: colors[5]
            });
        }
        if (radialInputs[6].checked) {
            colors[6] = colors[6] + 1;
            db.collection('Votes').doc('7Green').update({
                votes: colors[6]
            });
        }
        if (radialInputs[7].checked) {
            colors[7] = colors[7] + 1;
            db.collection('Votes').doc('8Blue-Green').update({
                votes: colors[7]
            });
        }
        if (radialInputs[8].checked) {
            colors[8] = colors[8] + 1;
            db.collection('Votes').doc('9Blue').update({
                votes: colors[8]
            });
        }
        if (radialInputs[9].checked) {
            colors[9] = colors[9] + 1;
            db.collection('Votes').doc('ABlue-Violet').update({
                votes: colors[9]
            });
        }
        if (radialInputs[10].checked) {
            colors[10] = colors[10] + 1;
            db.collection('Votes').doc('BViolet').update({
                votes: colors[10]
            });
        }
        if (radialInputs[11].checked) {
            colors[11] = colors[11] + 1;
            db.collection('Votes').doc('CRed-Violet').update({
                votes: colors[11]
            });
        }
        updateChart()
        document.cookie = "vote=true";
        console.log(document.cookie)
    }
}


// Grafica

const labels = ["Red", "Red-Orange", "Orange", "Yellow-Orange", "Yellow", "Yellow-Green", "Green", "Blue-Green", "Blue", "Blue-Violet", "Violet", "Red-Violet"];
const data = {
    labels: labels,
    datasets: [{
        // borderColor: 'rgb(0,0,0)',
        backgroundColor: [
            '#FE0000',
            '#FF6400',
            '#FE9A00',
            '#FFCD01',
            '#FFFF07',
            '#65CC01',
            '#009801',
            '#00CDCC',
            '#0266CB',
            '#660099',
            '#98009A',
            '#CC0099'
        ],
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    }]
};

const config = {
    type: 'doughnut',
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