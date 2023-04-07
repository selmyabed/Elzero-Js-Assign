
let myAdmins = ['Ahmed' , 'Osama' , 'Sayed', "Stop" , 'Samera'];
let myEmployees = ['Amgad', 'Sameh' , 'Ameer' , 'Omar', 'Othman', 'Amany' , 'Samia'];
let i = 0;
let j = 0;
let counter = 0;
myAdmins.length  = myAdmins.indexOf("Stop")
document.write(`<div>We Have ${myAdmins.length} Admins</div>`)
document.write(`<hr>`)
while (i < myAdmins.length) {
    if( myAdmins[i] === 'Stop') { break;}

    
    document.write(`<div>`)
        document.write(`<p>the admin for team ${i + 1} Is <b>${myAdmins[i]}</b></p>`)
        document.write(`<h3>Team Members : </h3>`)
        
        for (j = 0; j < myEmployees.length; j++) {
            if (myAdmins[i].startsWith(myEmployees[j][0])) {
                document.write(`<P>- ${counter+1} ${myEmployees[j]}</P>`)
                counter++;
            }
            console.log(j)
        }
        counter = 0;
        console.log('**')
    document.write(`</div>`)
    document.write(`<hr>`)
    i++;
}