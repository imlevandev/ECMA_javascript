fetch("https://catfact.ninja/facts")
  .then(function (response) {
    let elements;

    response.json().then(function (jsonData) {
      console.log(jsonData);

      jsonData.data.map(function (item) {
        return item.fact;
      });
      document.writeln("<ol>" + ElementInternals.json("") + "</ol>");
    });
  })
  .catch(function (err) {
    console.log(err);
  });
