<script>
  function logout() {
    firebase.auth().signOut().then(() => {
      window.location.href = "login.html";
    });
  }
</script>
