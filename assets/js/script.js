// Dati dei membri del team
const teamMembers = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg'
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg'
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg'
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg'
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg'
  },
]

for (let i = 0; i < teamMembers.length; i++) {
  console.log('Name:', teamMembers[i].name);
  console.log('Role:', teamMembers[i].role);
  console.log('Image:', teamMembers[i].image);
}

const teamContainer = document.querySelector('.container');

for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];

  const card = document.createElement('div');
  card.classList.add('card');

  const content = document.createElement('div');
  content.classList.add('content');

  const imgBx = document.createElement('div');
  imgBx.classList.add('imgBx');

  const img = document.createElement('img');
  img.src = `./assets/img/${member.image}`;
  img.alt = member.name;

  const contentBx = document.createElement('div');
  contentBx.classList.add('contentBx');

  const heading = document.createElement('h3');
  heading.innerHTML = `${member.name}<br><span>${member.role}</span>`;

  content.appendChild(imgBx);
  imgBx.appendChild(img);
  content.appendChild(contentBx);
  contentBx.appendChild(heading);
  card.appendChild(content);

  const socialIcons = document.createElement('ul');
  socialIcons.classList.add('sci');

  const socialPlatforms = ['fa-facebook', 'fa-github', 'fa-linkedin'];
  for (let j = 0; j < socialPlatforms.length; j++) {
    const listItem = document.createElement('li');
    listItem.style.setProperty('--i', j + 1);

    const link = document.createElement('a');
    link.href = '#';

    const icon = document.createElement('i');
    icon.classList.add('fa-brands', socialPlatforms[j]);

    link.appendChild(icon);
    listItem.appendChild(link);
    socialIcons.appendChild(listItem);
  }

  card.appendChild(socialIcons);
  teamContainer.appendChild(card);
}
