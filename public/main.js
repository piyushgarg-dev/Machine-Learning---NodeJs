var form = document.getElementById("myform");
var auto = document.getElementById("auto");
form.addEventListener("submit", e => {
  e.preventDefault();
  var debit = document.getElementById("dr").value;
  var credit = document.getElementById("cr").value;
  var mydata = {
    journal: [`${debit}`, `${credit}`]
  };
  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(mydata)
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("alert").innerText = data;
    });
});

auto.addEventListener("submit", e => {
  e.preventDefault();
  var query = document.getElementById("query").value;
  var debit = document.getElementById("dr");
  var credit = document.getElementById("cr");
  const d = {
    query
  };
  console.log(d);
  document.getElementById("btn").value = "Please Wait";
  fetch("/auto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(d)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const entry = data.split(",");
      console.log(entry);
      debit.value = entry[0];
      credit.value = entry[1];
      document.getElementById("btn").value = "Generate";
    });
});
