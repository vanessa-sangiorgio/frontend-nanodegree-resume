
var name="Vanessa Sangiorgio";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer";
var formattedRole= HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

var bio = {
  "name": "Vanessa Sangiorgio",
  "role": "Web Developer",
  "contacts": {
    "mobile": "0775254..",
    "email": "vanessa.sangiorgio@yahoo.co.uk",
    "gitHub": "vanessa-sangiorgio",
    "twitter": "@VanessaSangi",
    "location": "Bristol"
  },
  "bioPic": "images/Vanessa-Sangiorgio.jpg",
  "welcomeMessage": "Welcome to my story",
  "skills": ["JavaScript", "jQuery", "Css", "Git", "HTML"]
};


var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
//var formattedContacts = HTMLmobile.replace("%data%", bio.contacts[0]);
//var formattedContacts = HTMLmobile.replace("%data%", bio.contacts[0]);
//var formattedContacts = HTMLmobile.replace("%data%", bio.contacts[0]);

var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelMes = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedWelMes);
$("#header").append(formattedPic);




if(bio.skills.length >0){
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
$("#skills").append(formattedSkill);
}


var work = {
  "jobs":[
    {
      "title":  "Customer Assistant",
      "employer": "Primark",
      "years": "2015/2016",
      "cityJob": "Bristol",
      "description": "Help customer"
    },
    {
      "title":  "Sales Assistant",
      "employer": "Age UK Charity Shop",
      "years": "2015",
      "cityJob": "Bristol",
      "description": "Assisting in the day-to-day running of the shop with the aim of maximising sales and profitability. Making sure the customers are served in a helpful, cheerful and professional manner and working with other volunteers to process stock, including sorting, steaming, pricing and hanging of donated items. Responsible for till operations and handling of cash."
    },
    {
    "title":  "Back Office Consultant for Enel",
    "employer": "Back Office Consultant for Enel ",
    "years": "•	October 2010 – 15 October 2014",
    "cityJob": "Reggio Calabria, Italy",
    "description": "The activity consisted in receiving and handling written complaints on behalf of Enel Energia, through the use of dedicated enterprise’s software. Check the availability of customer’s request, decide in autonomy the actions to solve the complaint collaborating with other departments like Billing and Credit and write a reply at the end of resolution, using strict guidelines in according to company decisions."
  }
  ]}

for(job in work.jobs){
$("#workExperience").append(HTMLworkStart);
  var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].years);

var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].cityJob);

var formattedWorkDescription= HTMLworkDescription.replace("%data%", work.jobs[job].description);

  var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle+ formattedWorkDate + formattedWorkLocation +formattedWorkDescription;

  $(".work-entry:last").append(formattedEmployerTitle);
}




var projects = {
  "projects": [
    {
      "title": "My Own Web Site",
      "location": "Bristol",
      "dates": "Starts february 2016",
      "description": "Curriculum Online",
      "images": []
    }
  ]
}
var education = {
  "schools": [
    {
      "name": "College Green",
      "schoolCity": "Bristol",
      "majors": "English",
      "minor": "Relantionship",
      "graduateYear": "2016",
    }],
    "onlineCourse": [
    {
      "title": "Web Developer Nanodegree",
      "school": "Udacity",
      "dates": "2016",
      "url": ""
    }]

  }
