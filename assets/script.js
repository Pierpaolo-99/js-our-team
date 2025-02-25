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
const formEl = document.getElementById('form_member')

function getMemberMarkup (member){
  const { name,role,email,img} = member

  const markup = `
            <div class="col-12 col-md-6 col-lg-4 gy-3">
                <div class="card_members d-flex bg-black text-white">
                    <img width="50%" src="./assets/${img}" alt="">
                    <div class="card_body p-3">
                        <h3>${name}</h3>
                        <p>${role}</p>
                        <a href="#">${email}</a>
                    </div>
                </div>
            </div>
  `
  return markup
}

function renderTeamMembers (teamMembers, cardEl){
  for (let i = 0; i < teamMembers.length; i++){
    const thisMember = teamMembers[i]

    const markup = getMemberMarkup(thisMember)

    cardEl.innerHTML += markup
  }
}

renderTeamMembers(teamMembers,cardEl)

formEl.addEventListener('submit', function (e){
  e.preventDefault()

  const name = document.querySelector('input[name="name"]').value
  console.log(name);
  
  const job = document.querySelector('input[name="job"]').value
  console.log(job);

  const email = document.querySelector('input[name="email"]').value
  console.log(email);

  const image = document.querySelector('input[name="image"]').value
  console.log(image);

  const member = {
    name: name,
    job: job,
    email: email,
    image: image
  }
  console.log(member);

  const markup = `
  <div class="col-12 col-md-6 col-lg-4 gy-3">
      <div class="card_members d-flex bg-black text-white">
          <img width="50%" src="${image}" alt="">
          <div class="card_body p-3">
              <h3>${name}</h3>
              <p>${job}</p>
              <a href="#">${email}</a>
          </div>
      </div>
  </div>
  `
  console.log(markup);

  cardEl.innerHTML += markup
  
})