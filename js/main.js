/*
setTimeout(() => {
    document.getElementById('game').style.display = "block";
}, 4000);
*/

function switchTab(tabs) {
    const tabs = ['crafting', 'mining', 'location', 'power', 'transport', 'stats', 'settings'];

    for (const v in tabs) {
        document.getElementById(tabs[v]).style.display = 'none';
    }
    document.getElementById(`${tab}`).style.display = 'block';
}

// stuff
function startUpdateStats() {

}

function fixStuff() {

}
