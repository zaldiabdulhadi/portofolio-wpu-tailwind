const scriptURL =
  "https://script.google.com/macros/s/AKfycbws25zlrUVD2AADHp5zaYLt18F9OkywHV5O6TXV1QiyacNrAY37V_82DcNK1QvoBA/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      alert("Sukses Mengirim Pesan");
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
