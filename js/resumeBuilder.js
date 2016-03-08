var name ="Vanessa Sangiorgio";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = " Web Developer";
var formattedRole= HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);

//bio
var bio = {
  "name": "Vanessa Sangiorgio",
  "role": "Web Developer",
  "contacts": {
    "mobile": "0775254..",
    "email": "vanessa.sangiorgio@yahoo.co.uk",
    "github": "vanessa-sangiorgio",
    "twitter": "@VanessaSangi",
    "location": "Bristol"
  },
  "biopic": "images/Vanessa-Sangiorgio.jpg",
  "welcomeMessage": "Welcome to my story",
  "skills": ["JavaScript", "jQuery", "Css", "Git", "HTML"],

  "display": function(){

     var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
     var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
     var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
     var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
     var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
     var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
     var formattedWelMes = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
     var formattedContact = formattedMobile + formattedEmail+ formattedGithub + formattedTwitter +formattedLocation;

    $("#topContacts, #footerContacts").append(formattedContact);
    $("#header").append(formattedWelMes);
    $("#header").append(formattedPic);

    if(bio.skills.length){
      $("#header").append(HTMLskillsStart);
        for (var skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
      }
    }


    function inName(fullName){
      var surname = name.trim().split(" ");
      return surname[0] + " " + surname[1].toUpperCase();
    }
    var a = inName(name);
    $("#header").prepend("<h1>"+a+"</h1>");
    $("#main").append(internationalizeButton);
  }

};

bio.display();

//work
var work = {
  "jobs":[
    {
      "title":  "Customer Assistant",
      "employer": "Primark",
      "dates": "2015/2016",
      "location": "Bristol",
      "description": "Help customer"
    },
    {
      "title":  "Sales Assistant",
      "employer": "Age UK Charity Shop",
      "dates": "2015",
      "location": "Bristol",
      "description": "Assisting in the day-to-day running of the shop with the aim of maximising sales and profitability. Making sure the customers are served in a helpful, cheerful and professional manner and working with other volunteers to process stock, including sorting, steaming, pricing and hanging of donated items. Responsible for till operations and handling of cash."
    },
    {
    "title":  "Back Office Consultant for Enel",
    "employer": "Back Office Consultant for Enel ",
    "dates": "October 2010 - 15 October 2014",
    "location": "Reggio Calabria",
    "description": "The activity consisted in receiving and handling written complaints on behalf of Enel Energia, through the use of dedicated enterprise’s software. Check the availability of customer’s request, decide in autonomy the actions to solve the complaint collaborating with other departments like Billing and Credit and write a reply at the end of resolution, using strict guidelines in according to company decisions."
  }
],
"display" :function(){
  for(var job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
      var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formattedWorkDescription= HTMLworkDescription.replace("%data%", work.jobs[job].description);
      var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle+ formattedWorkDate + formattedWorkLocation +formattedWorkDescription;
      $(".work-entry:last").append(formattedEmployerTitle);

}}

};
work.display();

//project
var projects = {
  "projects": [
    {
      "title": "My Own Web Site",
      "dates": "Starts february 2016",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula metus et accumsan rhoncus. Maecenas elementum vitae magna nec bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus enim ipsum, mattis vitae mollis non, varius eget ligula. Praesent faucibus neque ut quam ultricies, eu sodales nisi volutpat. Nullam tempor sit amet nulla euismod placerat. Vestibulum non neque dolor. Praesent egestas libero at nisl efficitur, vitae interdum risus pharetra. Sed sed sapien at dolor dictum consequat.",
      "images": ["images/travel.jpg", "images/strawberries.jpg"]
    }
  ],
"display": function(){
for(var proj in projects.projects){
$("#projects").append(HTMLprojectStart);
var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
$(".project-entry:last").append(formattedProjectTitle);

var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
$(".project-entry:last").append(formattedProjectDates);

var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
$(".project-entry:last").append(formattedProjectDescription);

if (projects.projects[proj].images.length >0) {
  for (var image in projects.projects[proj].images) {
    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[image]);
    $(".project-entry:last").append(formattedProjectImage);
                                              }
                                              }
}
}
};

projects.display();
//Education

var education = {
  "schools": [
    {
      "name": "College Green",
      "degree": "English First Certificate Cambridge",
      "location": "Bristol",
      "majors": "English",
      "dates": "2016",
    },
  {
    "name": "ITC G. Ferraris",
    "degree": "Diploma in Accounting and Programming",
    "location": "Reggio Calabria",
    "majors": "Visual Basic, Develop website, Basic C++",
    "dates": "2007",
  }],
  "onlineCourse": [
    {
      "title": "Web Developer Nanodegree",
      "school": "Udacity",
      "dates": "Start February 2016 ",
      "url": "https://www.udacity.com/ "
    },
    {
      "title": "LEVEL 2 CERTIFICATE IN IT USER SKILLS(ITQ)",
      "school": "NFCE",
      "dates": "2015",
      "url": "http://www.ncfe.org.uk/qualification-search/ncfe-level-2-certificate-in-it-user-skills-itq-269.aspx "
    }],

    "display" : function (){
      for (var ed in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[ed].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[ed].degree);
        var formattedDate = HTMLschoolDates.replace("%data%", education.schools[ed].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[ed].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[ed].majors);
        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedDate);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajor);
      }
      $(".education-entry:last").append(HTMLonlineClasses);
        for (var course in education.onlineCourse) {

          var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title);
          var formattedSchoolName = HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school);
          var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourse[course].dates);
          var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourse[course].url);
          var formattedFinal= formattedTitle + formattedSchoolName + formattedDates + formattedUrl;
          $(".education-entry:last").append(formattedFinal);

      }

    }
  };

education.display();

  $(document).click(function(loc){
    var x= loc.pageX;
    var y= loc.pageY;
    logClicks(x,y);

  });

  $("#mapDiv").append(googleMap);
