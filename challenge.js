let elizabethSanger = {
  congressionalDistrict: 5,
  statements: [
    { statement: 'pie for everyone', category: 'Jobs' },
    { statement: 'no taxes on pie', category: 'Taxes' },
    { statement: 'No working on friday', category: 'Jobs' }
  ],
  donationFormUrl: 'www.google.com',
  events: [
    { date: '08/27/2018', title: "Zoe's birthday", description: 'eat all the pie at the party' },
    { date: '08/28/2018', title: 'Arrays', description: 'all the looping' },
    { date: '09/4/2018', title: 'Some important event', description: 'SUPER important' },
    { date: '09/4/2018', title: 'Running', description: 'from the police' },
    { date: '03/14/2019', title: 'Pi Day', description: 'Eat it all???' }
  ],
  volunteers: [
    {
      name: 'Callan',
      address: '500 interstate blvd S',
      email: 'callan@yomamma.com',
      phone: '1234567890',
      availability: '9-5',
      activities: 'phone calls only'
    },
    {
      name: 'Lauren',
      address: '1 main street',
      email: 'lauren@comcast.net',
      phone: '1134567890',
      availability: 'never',
      activities: 'collecting money'
    },
    {
      name: 'Bernard',
      address: '1 Bernard Way',
      email: 'Bernard@thebear.net',
      phone: '1134567890',
      availability: 'all day',
      activities: 'everything'
    }
  ],
  biography: "I'm so cool!  please elect me",
  images: [
    {
      imageUrl:
        'http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg',
      description: 'The Crew',
      type: 'constituents'
    },
    {
      imageUrl:
        'https://imgix.bustle.com/uploads/image/2018/4/18/5f312113-eaa8-4e71-9360-871e51084f4f-fotolia_125402501_subscription_monthly_m.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70',
      description: 'Elizabeth at the fair',
      type: 'headshot'
    },
    {
      imageUrl:
        'http://los40cl00.epimg.net/los40/imagenes/2018/08/13/actualidad/1534185434_207658_1534185597_noticia_normal.jpg',
      description: 'Elizabeth and her homies',
      type: 'constituents'
    },
    {
      imageUrl: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3658031.jpg',
      description: 'All the people of district 5',
      type: 'constituents'
    }
  ],
  missionStatement: 'Do good stuff',
  voterRegistrationUrl: 'www.google.com'
};

// Print To Dom Function
const printToDom = (stringToPrint, divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
};

// Challenge 1 Functions
const districtStringBuilder = () => {
  const newString = `<h2>Congressional District: ${elizabethSanger.congressionalDistrict}</h2>`;
  printToDom(newString, 'congressionalDistrict');
};

const donationFormStringBuilder = () => {
  const newString = `<a href="https://${elizabethSanger.donationFormUrl}" target="_blank">Donate Here</a>`;
  printToDom(newString, 'donationForm');
};

const statementsStringBuilder = () => {
  let newString = '';
  for (let i = 0; i < elizabethSanger.statements.length; i++) {
    newString += `<div class="statement">`;
    newString += `<h4>${elizabethSanger.statements[i].category}</h4>`;
    newString += `<h3>${elizabethSanger.statements[i].statement}</h3>`;
    newString += `</div>`;
  }
  printToDom(newString, 'statements');
};

const eventsStringBuilder = () => {
  let newString = '';
  for (let i = 0; i < elizabethSanger.events.length; i++) {
    newString += `<div class="event-card">`;
    newString += `<h3>${elizabethSanger.events[i].title}</h3>`;
    newString += `<h4>${elizabethSanger.events[i].date}</h4>`;
    newString += `<p>${elizabethSanger.events[i].description}</p>`;
    newString += `</div>`;
  }
  printToDom(newString, 'events');
};

const volunteersStringBuilder = () => {
  let newString = '';
  for (let i = 0; i < elizabethSanger.volunteers.length; i++) {
    newString += `<div class="volunteer-card">`;
    newString += `<h3>${elizabethSanger.volunteers[i].name}</h3>`;
    newString += `<ul>`;
    newString += `<li><strong>Phone:</strong> ${elizabethSanger.volunteers[i].phone}</li>`;
    newString += `<li><strong>Address:</strong> ${elizabethSanger.volunteers[i].address}</li>`;
    newString += `<li><strong>Email:</strong> ${elizabethSanger.volunteers[i].email}</li>`;
    newString += `<li><strong>Availability:</strong> ${elizabethSanger.volunteers[i].availability}</li>`;
    newString += `<li><strong>Activities:</strong> ${elizabethSanger.volunteers[i].activities}</li>`;
    newString += `</ul>`;
    newString += `</div>`;
  }
  printToDom(newString, 'volunteers');
};

const biographyStringBuilder = () => {
  const newString = `<h3>Biography: ${elizabethSanger.biography}</h3>`;
  printToDom(newString, 'biography');
};

const imagesStringBuilder = () => {
  let newString = '';
  for (let i = 0; i < elizabethSanger.images.length; i++) {
    newString += `<div class="image-card">`;
    newString += `<p>${elizabethSanger.images[i].description}</p>`;
    newString += `<img src="${elizabethSanger.images[i].imageUrl}"></img>`;
    newString += `</div>`;
  }

  printToDom(newString, 'images');
};

const missionStringBuilder = () => {
  const newString = `<h3>${elizabethSanger.missionStatement}</h3>`;
  printToDom(newString, 'missionStatment');
};

const voterRegistrationStringBuilder = () => {
  const newString = `<a href="https://${elizabethSanger.voterRegistrationUrl}" target="_blank">Register to Vote</a>`;
  printToDom(newString, 'voterRegistration');
};

// Challenge 2 Functions
const updateCongressionalDistrict = newDistric => {
  elizabethSanger.congressionalDistrict = newDistric;
  districtStringBuilder();
};

const updateDonationFormLink = newDonationLink => {
  elizabethSanger.donationFormUrl = newDonationLink;
  donationFormStringBuilder();
};

const updateStatements = (newStatement, statementCat) => {
  // const newSatementobject = `{statement: "${newStatement}", category: "${statementCat}"}`;
  elizabethSanger.statements.push({ statement: newStatement, category: statementCat });
  statementsStringBuilder();
};

const updateEvents = newEvent => {
  elizabethSanger.events.push(newEvent);
  eventsStringBuilder();
};

const updateVolunteers = newVolunteer => {
  elizabethSanger.volunteers.push(newVolunteer);
  volunteersStringBuilder();
};

const updateBiography = newBio => {
  elizabethSanger.biography = newBio;
  biographyStringBuilder();
};

const updateImges = newImage => {
  elizabethSanger.images.push(newImage);
  imagesStringBuilder();
};

const updateMission = newMissionStatement => {
  elizabethSanger.missionStatement = newMissionStatement;
  missionStringBuilder();
};

const updateVoterRegistration = newUrl => {
  elizabethSanger.voterRegistrationUrl = newUrl;
  voterRegistrationStringBuilder();
};

// Challenege 1 Function Calls
districtStringBuilder();
donationFormStringBuilder();
statementsStringBuilder();
eventsStringBuilder();
volunteersStringBuilder();
biographyStringBuilder();
imagesStringBuilder();
missionStringBuilder();
voterRegistrationStringBuilder();

// Challenge 2 Function Calls
updateVoterRegistration('bing.com');
updateCongressionalDistrict(7);
updateDonationFormLink('github.com');
updateStatements('Free College', 'Education');
updateEvents({
  date: '09/03/2018',
  title: 'Go back to work day',
  description: 'Time to get back to work'
});
updateVolunteers({
  name: 'Marco',
  address: '123 United Way',
  email: 'email@home.com',
  phone: '16152349875',
  availability: '6-9',
  activities: 'err thing'
});
updateBiography('(MJGA) - MAKE JAVASCRIPT GREAT AGAIN');
updateImges({
  imageUrl: 'http://mouthybroadcast.com/wp-content/uploads/2017/11/this-is-fine.jpg',
  description: 'This is fine',
  type: 'meme'
});
updateMission('A long time ago in a galaxy far far away...');
