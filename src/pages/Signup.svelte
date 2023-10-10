<form id="signup-form" action="/signup" method="POST">
  <h1>SIGN UP TO OUR HOMEPAGE</h1>
  <div>
    <label for="id">Sign in ID</label>
    <input type="text" id="id" name="id" required />
  </div>
  <div>
    <label for="password">Sign in PASSWORD</label>
    <input type="password" id="password" name="password" required />
  </div>
  <div>
    <label for="password2">PASSWORD check</label>
    <input type="password" id="password2" name="password2" required />
  </div>
  <div>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required />
  </div>
  <div>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required />
  </div>
  <div>
    <button type="submit">sign-up</button>
  </div>
  <div id="passwordCheck" style="color:red" />
</form>
