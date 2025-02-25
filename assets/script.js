const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];
console.log(teamMembers);
const cardEl = document.querySelector('.row')

function getObject(teamMembers) {
  for (let i = 0; i < teamMembers.length; i++) {
    const thisMember = teamMembers[i]
    return thisMember
  }
}
const member = getObject(teamMembers)
console.log(member);

function getMemberMarkup (member){
  const { name,role,email,img} = member

  const markup = `
  <div class="col-6">
    <div class="card">
      <img src="./assets/${img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h3>${name}</h3>
        <p>${role}</p>
        <p>${email}</p>
      </div>
    </div>
  </div>
  `
  return markup
}

function renderTeamMembers (teamMembers, cardEl){
  for (let i = 0; i < teamMembers.length; i++){
    const thisMember = teamMembers[i]

    const markup = getMemberMarkup(member)

    cardEl.innerHTML += markup
  }
}

renderTeamMembers(teamMembers,cardEl)