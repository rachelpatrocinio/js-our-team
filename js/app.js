console.log("JS-OUR-TEAM");

//DICHIARO UN ARRAY CON GLI OGGETTI 
const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Desginer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
]

console.log(teamMembers);

//RECUPERO OGNI SINGOLO OGGETTO DELL'ARRAY
for(let i = 0; i < teamMembers.length; i++){
    // console.log(teamMembers[i]);
    const currentMember = teamMembers[i];
    console.log(currentMember.name);
    console.log(currentMember.role);
    console.log(currentMember.photo);

    //CREO UN ELEMENTO OGGETTO <div class="col-4"></div>
    const divMemberElement = myCreateElement('div', ['col-4']);

    //RECUPERO IL GENITORE PADRE A CUI VADO AD APPENDERE IL MIO ELEMENTO OGGETTO CREATO
    const rowDomElement = document.querySelector(".row");
    // console.log(rowDomElement);
    rowDomElement.append(divMemberElement);

    //CREO UN ELEMENTO OGGETTO <div class="card"></div> E LO APPENDO AL <div class="col-4"></div>
    const cardDomElement = myCreateElement('div', ['card'],    
    `<div class="photo">
        <img src="./img/${currentMember.photo}">
    </div>
    <div class="name text-center"> 
        <h3>${currentMember.name}</h3>
        <span>${currentMember.role}</span>
    </div>
    `);
    divMemberElement.append(cardDomElement);
};




// My Functions //////////////////////////////////////////////////////////////////////////////////////

function myCreateElement(tagName, classes, content = '') {
    const tag = document.createElement(tagName);
    for (let i = 0; i < classes.length; i++) {
        tag.classList.add(classes[i]);
    }
    tag.innerHTML = content; 
    return tag;
}









