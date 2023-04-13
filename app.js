/*
  Every personal information is commented out and replaced with "####"
  This script is hard-coded, it's flexible only to the degree I need it to be.
  Its intended to run only in my specific Jotform.
  It may not work in other forms.
*/

// get the URl
const site = window.location.hostname;

if (site.includes("form.jotform.com")) {
  let answer = confirm("Do you want to inject the script?");
  if (answer) {
    injectScript();
  }
}

// inject the script
function injectScript() {
  // Hours worked
  let sunday1 = 0;

  let monday1 = 1;
  let monday2 = 1;
  let monday3 = 1.5;
  let monday4 = 1;

  let tuesday1 = 0;

  let wednesday1 = 1;
  let wednesday2 = 1;
  let wednesday3 = 1;
  let wednesday4 = 1;
  let wednesday5 = 1.5;

  let thursday1 = 1;

  let friday1 = 1;

  let saturday1 = 0;

  // document.getElementById("<id>").checked = true; ---> to select a box
  // document.getElementById("<id>").value = "<text>"; --->  if its to fil up a text box
  // document.getElementById("<id>").value = document.getElementById("<id>").options[<number>].value; ---> if its a drop down, the number is for drop down index

  // My info
  document.getElementById("first_3").value = "####";
  document.getElementById("last_3").value = "####";
  document.getElementById("input_46").value = "####";
  document.getElementById("input_47").options[1].value;
  document.getElementById("input_4").value = "####";
  document.getElementById("input_48").value ="####";
  // 1
  document.getElementById("input_6").value = "One-on-one";
  document.getElementById("first_7").value = "####";
  document.getElementById("last_7").value = "####";
  document.getElementById("input_9").value = "####";
  document.getElementById("input_10").value = "100";
  document.getElementById("input_44").value = "####";
  document.getElementById("other_44").checked = true;
  document.getElementById("input_50").value = "Monday";
  document.getElementById("input_42_hourSelect").value = 10;
  document.getElementById("input_42_minuteSelect").value = "00";
  document.getElementById("input_42_ampm").value = "AM";
  // 2
  document.getElementById("input_29").value = "Other";
  document.getElementById("input_31").value = "Drop-in";
  document.getElementById("input_53_0").checked = true;
  document.getElementById("input_56_hourSelect").value = 11;
  document.getElementById("input_56_minuteSelect").value = "00";
  document.getElementById("input_56_ampm").value = "AM";
  document.getElementById("input_54").value = "Monday";
  // 3
  document.getElementById("input_72").value = "One-on-one";
  document.getElementById("first_69").value = "####";
  document.getElementById("last_69").value = "####";
  document.getElementById("input_68").value = "####";
  document.getElementById("input_67").value = "102";
  document.getElementById("input_65").value = "Online";
  document.getElementById("other_65").checked = true;
  document.getElementById("input_64_hourSelect").value = 1;
  document.getElementById("input_64_minuteSelect").value = 30;
  document.getElementById("input_63").value = "Monday";
  // 4
  document.getElementById("input_88").value = "Other";
  document.getElementById("input_82").value = "Drop-in";
  document.getElementById("other_81").checked = true;
  document.getElementById("input_81").value = "Online";
  document.getElementById("input_80_hourSelect").value = 7;
  document.getElementById("input_80_minuteSelect").value = "00";
  document.getElementById("input_79").value = "Monday";
  // 5
  document.getElementById("input_100").value = "One-on-one";
  document.getElementById("first_103").value = "####";
  document.getElementById("last_103").value = "####";
  document.getElementById("input_104").value = "####";
  document.getElementById("input_105").value = "100";
  document.getElementById("other_98").checked = true;
  document.getElementById("input_98").value = "####";
  document.getElementById("input_97_hourSelect").value = 10;
  document.getElementById("input_97_minuteSelect").value = "00";
  document.getElementById("input_96").value = "Wednesday";
  // 6
  document.getElementById("input_106").value = "One_on_one";
  document.getElementById("first_109").value = "####";
  document.getElementById("last_109").value = "####";
  document.getElementById("input_110").value = "####";
  document.getElementById("input_111").value = "102";
  document.getElementById("input_113_0").checked = true;
  document.getElementById("input_114_hourSelect").value = 11;
  document.getElementById("input_114_minuteSelect").value = "00";
  document.getElementById("input_114_ampm").value = "AM";
  document.getElementById("input_115").value = "Wednesday";
  // 7
  document.getElementById("input_132").value = "Other";
  document.getElementById("input_126").value = "Drop-in";
  document.getElementById("input_125_0").checked = true;
  document.getElementById("input_124_hourSelect").value = 1;
  document.getElementById("input_124_minuteSelect").value = "00";
  document.getElementById("input_123").value = "Wednesday";
  // 8
  document.getElementById("input_148").value = "One-on-one";
  document.getElementById("first_145").value = "####";
  document.getElementById("last_145").value = "####";
  document.getElementById("input_144").value = "####";
  document.getElementById("input_143").value = "102";
  document.getElementById("input_141").value = "Online";
  document.getElementById("other_141").checked = true;
  document.getElementById("input_140_hourSelect").value = 2;
  document.getElementById("input_140_minuteSelect").value = "00";
  document.getElementById("input_139").value = "Wednesday";
  // 9
  document.getElementById("input_174").value = "Other";
  document.getElementById("input_168").value = "Drop-in";
  document.getElementById("input_167_0").checked = true;
  document.getElementById("input_166_hourSelect").value = 3;
  document.getElementById("input_166_minuteSelect").value = "00";
  document.getElementById("input_165").value = "Wednesday";
  // 10
  document.getElementById("input_190").value = "Other";
  document.getElementById("input_184").value = "Drop-in";
  document.getElementById("input_183_0").checked = true;
  document.getElementById("input_182_hourSelect").value = 12;
  document.getElementById("input_182_minuteSelect").value = 30;
  document.getElementById("input_181").value = "Thursday";
  // 11
  document.getElementById("input_191").value = "One-on-one";
  document.getElementById("first_194").value = "####";
  document.getElementById("last_194").value = "####";
  document.getElementById("input_195").value = "####";
  document.getElementById("input_196").value = "100";
  document.getElementById("input_198").value = "####";
  document.getElementById("other_198").checked = true;
  document.getElementById("input_199_hourSelect").value = 11;
  document.getElementById("input_199_minuteSelect").value = "00";
  document.getElementById("input_199_ampm").value = "AM";
  document.getElementById("input_200").value = "Friday";

  // Total hours worked
  setTimeout(function () {
    document.getElementById("input_51").value = monday1;
    document.getElementById("input_55").value = monday2;
    document.getElementById("input_62").value = monday3;
    document.getElementById("input_78").value = monday4;
    document.getElementById("input_95").value = wednesday1;
    document.getElementById("input_116").value = wednesday2;
    document.getElementById("input_122").value = wednesday3;
    document.getElementById("input_138").value = wednesday4;
    document.getElementById("input_164").value = wednesday5;
    document.getElementById("input_180").value = thursday1;
    document.getElementById("input_201").value = friday1;
    // Weekly total
    document.getElementById("input_49").value =
      monday1 +
      monday2 +
      monday3 +
      monday4 +
      wednesday1 +
      wednesday2 +
      wednesday3 +
      wednesday4 +
      wednesday5 +
      thursday1 +
      friday1;
    // Sunday total
    document.getElementById("input_20").value = sunday1;
    // Monday total
    document.getElementById("input_271").value =
      monday1 + monday2 + monday3 + monday4;
    // Tuesday total
    document.getElementById("input_21").value = tuesday1;
    // Wednesday total
    document.getElementById("input_22").value =
      wednesday1 + wednesday2 + wednesday3 + wednesday4 + wednesday5;
    // Thursday total
    document.getElementById("input_23").value = thursday1;
    // Friday total
    document.getElementById("input_24").value = friday1;
    // Saturday total
    document.getElementById("input_276").value = saturday1;

    alert("Time sheet has been injected in " + site);

    window.scrollTo(0, document.body.scrollHeight);
  }, 3000);
}
