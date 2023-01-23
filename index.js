console.log("hello console reader....")
const images = ["cutie", "gorgeous", "lovely", "friend", "beauty"];
document.getElementById("img").style.display = "none";

let show = () => {
  const image = images[Math.floor(Math.random() * images.length)];
  document.getElementById("subtitle").textContent = "here you go, friend ᓚᘏᗢ"
  if (document.getElementById("img").style.display == "none") {
    document.getElementById("img").style.display = "inline";
  }
  document.getElementById("img").src = "./static/" + image + ".png";
}

let sign = () => {
  let name = document.getElementById('name').value;
  name = name.toLowerCase();
  // could be a lot cleaner with regex
  if (name.includes('e')) {
    name = name.replace("e", "meow");
  } else if (name.includes('n')) {
    name = name.replace('n', "nya");
  } else {
    name += " 🐾" 
  }
  document.getElementById('names').innerHTML += '<br>' + name;
}

const button = document.getElementById('btn');
button.addEventListener('mouseover', function () {
    button.style.position = "absolute";
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
});

button.addEventListener('click', function () {
  if (document.getElementById("img").style.display == "none") {
    document.getElementById("img").style.display = "inline";
  }
  document.getElementById("img").src = "./static/sad.png";
  document.getElementById("subtitle").textContent = "ok, you got me ᓚᘏᗢ"
})
