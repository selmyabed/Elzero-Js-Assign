
let cardTile = 'Elzero' , 
    cardDesc = 'Elzero Web School',
    cardDate = '25/10';

let markUp = `
    <div class="card">
        <h3> Hello  ${cardTile} </h3>
        <p>${cardDesc}</p>
        <span>${cardDate}</span>
    </div>
`
document.write(markUp.repeat(4))