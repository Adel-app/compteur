const username = "blood";
const message = "tu as trois nouveaux message";
const complet = message + ", " + username;

console.log(complet);

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "
const name = "adel";
const greeting = "hi , my name is";
// Create a third variable, myGreeting, that contatenates the two strings
const myGreeting = greeting + " " + name;
// Log myGreeting to the console
console.log(myGreeting);

/*
let laps1 = 10
let laps2 = 20
let laps3 = 30
function tour() {
    total = laps1 + laps2 + laps3
    console.log("total");
}
tour();
let run = 0
function ajout() {
    run = run + 1
}
ajout();
ajout();
ajout();
console.log(run);

const readFileAsync = (filepath) =>
    new Promise((resolve, reject) => {
        fs.readFile(filepath, { encoding: 'utf8' }, (err, data) => {
            // impossible de lire le fichier
            if (err) {
                reject(new Error("File read failed"));
            }
            resolve(data)
        })
    });



const filecontent = await readFileAsync('./data/dragons.json');
const fileJson = JSON.parse(filecontent);*/