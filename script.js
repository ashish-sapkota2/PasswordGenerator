const FunnyPassword = [
    "password",
    "ineedapassword",
    "changeme",
    "secret ",
    "iamforgetful",
    "newpassword",
    "IamACompleteIdiot",
    "nothing",
    "nothingagain",
    "iforgot",
    "whydoialwaysforget",
    "qwerty",
    "asdf",
    "user",
    "YouWontGuessThisOne",
    "PasswordShmashword",
    "youmoron",
    "doubleclick",
    "iamnottellingyoumypw",
    "masterpassword",
    "yetanotherpassword",
    "nomorepasswords",
    "password123",
    "myonlypassword",
    "cantremember",
    "dontaskdonttell",
    "memorysucks",
    "earlyalzheimers",
    "passwordforoldpeople"
  ];
  const weakPassword = [
    "123456",
    "12345678",
    "123456789",
    "12345",
    "1234567",
    "password",
    "1password",
    "abc123",
    "qwerty",
    "111111",
    "1234",
    "iloveyou",
    "sunshine",
    "monkey",
    "1234567890",
    "123123",
    "princess",
    "baseball",
    "dragon",
    "football",
    "shadow",
    "soccer",
    "unknown",
    "000000",
    "myspace1",
    "purple",
    "fuckyou",
    "superman",
    "Tigger",
    "buster",
    "pepper",
    "ginger",
    "qwerty123",
    "qwerty1",
    "peanut",
    "summer",
    "654321",
    "michael1",
    "cookie",
    "LinkedIn",
    "whatever",
    "mustang",
    "qwertyuiop",
    "123456a",
    "123abc",
    "letmein",
    "freedom",
    "basketball",
    "babygirl",
    "hello",
    "qwe123",
    "fuckyou1",
    "love",
    "family",
    "yellow",
    "trustno1",
    "jesus1",
    "chicken",
    "diamond",
    "scooter",
    "booboo",
    "welcome",
    "smokey",
    "cheese",
    "computer",
    "butterfly",
    "696969",
    "midnight",
    "princess1",
    "orange",
    "monkey1",
    "killer",
    "snoopy",
    "qwerty12",
    "1qaz2wsx",
    "bandit",
    "sparky",
    "666666",
    "football1",
    "master",
    "asshole",
    "batman",
    "sunshine1",
    "bubbles",
    "friends",
    "1q2w3e4r",
    "chocolate",
    "Yankees",
    "Tinkerbell",
    "iloveyou1",
    "abcd1234",
    "flower",
    "121212",
    "passw0rd",
    "pokemon",
    "StarWars",
    "iloveyou2",
    "123qwe",
    "Pussy",
    "angel1"
  ];
  
  
  function generateStrongpassword(length) {
    const letterUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letterLowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const special = "~!@#$%^&*().?><:{}[]";
    const allcharacter = letterUpperCase + letterLowerCase + numbers + special
    let password = ""
    for (let i = 0; i < length; i++) {
      randomIndex = Math.floor(Math.random() * allcharacter.length);
      password += allcharacter[randomIndex];
      console.log(password)
    }
    return password
  }
  function generateNormalpassword(length) {
    const letterUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letterLowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const allcharacter = letterUpperCase + letterLowerCase + numbers
    let password = ""
    for (let i = 0; i < length; i++) {
      randomIndex = Math.floor(Math.random() * allcharacter.length);
      password += allcharacter[randomIndex];
    }
    return password
  }
  strongPassword.addEventListener("click", function(e) {
    document.getElementById("text").innerHTML = generateStrongpassword(12);
  });
  document.getElementById("weakPassword").addEventListener("click", function(e) {
    let random = Math.floor(Math.random() * weakPassword.length);
    let password = weakPassword[random];
    document.getElementById("text").innerHTML = password;
  });
  document.getElementById("normalPassword").addEventListener("click", function(e) {
    document.getElementById("text").innerHTML = generateNormalpassword(10)
  });
  document.getElementById("funnyPassword").addEventListener("click", function(e) {
    console.log("clicked");
    let random = Math.floor(Math.random() * FunnyPassword.length);
    let password = FunnyPassword[random];
    document.getElementById("text").innerHTML = password;
    console.log(password)
  });
  