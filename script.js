fetch("")
  .then((res) => {
    if (res.ok) {
      console.log("success");
    } else {
      console.log("not successful");
    }
  })
  .then((data) => console.log(data));
