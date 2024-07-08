const fetchHello = async () => {
    const response = await fetch("https://fourtonfish.com/hellosalut/?lang=fr");
    const data = await response.json();
    document.getElementById("hello").innerHTML = data.hello;
  };
  fetchHello();