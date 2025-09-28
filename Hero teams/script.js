fetch('heroes.json')
    .then(heroes => heroes.json())

    .then(data => {
        data.sort(
            (a,b) => a.heroName.localeCompare(b.heroName)
        );
        data.forEach((item) => {
            const value = item.teamId;
            const li = document.createElement('li');
            const ATeam = document.getElementById('A-team');
            const Xmen = document.getElementById('X-men');
            const justiceLeague = document.getElementById('JusticeLeague');
            const suicideSquad = document.getElementById('SuicideSquad');
            console.log(value);
            li.textContent = item.heroName;
            if(value == 1){
                ATeam.appendChild(li);
            }
            else if (value == 2){
                justiceLeague.appendChild(li);
            }
            else if (value == 5){
                Xmen.appendChild(li);
            }
            else if (value == 8){
                suicideSquad.appendChild(li);
            }
        });
    })