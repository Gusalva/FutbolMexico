const apiKey = '60f43a00-8f92-11ed-a9e7-936178fa3da5'
const mexicoId = 78
const url = `https://app.sportdataapi.com/api/v1/soccer/teams?apikey=${apiKey}&country_id=${mexicoId}`

const defaultImage = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/20279.png'
// Example
// const memo = 'memo'

// $('.teams').append(`
//     <p> Equipo: ${memo} </p>
// `)


function showMexicoTeams(teamData) {
  teamData.forEach(team => {
    $('.teams').append(`
        <div class="col">
            <div class="card" style="width: 15rem;">
                <img src="${team.logo ? team.logo : defaultImage}" class="card-img-top" width=100 alt="...">
                <div class="card-body">
                    <h5 class="card-title">${team.name}</h5>
                    <p class="card-text"> Este equipo llamado ${team.name} tiene una identificacion ${team.team_id} y es del pais ${team.country.name} .</p>
                </div>
            </div>
        </div>
        `)
  })

}

function imageExists(url) {
    $.get(url, function(data, status) {
            console.log(status.status)
        }
    );
}


$.getJSON(url, function(data, status) {
  console.log('Status:', status)
  showMexicoTeams(data.data)
});


// const teamExample = [{
//   "team_id": 7710,
//   "name": "Club Celaya FC",
//   "short_code": "CEL",
//   "common_name": "",
//   "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/6967.png",
//   "country": {
//     "country_id": 78,
//     "name": "Mexico",
//     "country_code": "mx",
//     "continent": "North America"
//   }
// }]


// showMexicoTeams(teamExample)