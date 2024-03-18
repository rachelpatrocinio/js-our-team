console.log("JS-OUR-TEAM");

const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chied-editor-jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
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

for(let i = 0; i < teamMembers.length; i++){
    // console.log(teamMembers[i]);
    const currentMember = teamMembers[i];
    console.log(currentMember.name);
    console.log(currentMember.role);
    console.log(currentMember.photo);
}