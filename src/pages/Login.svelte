<script>
  //import from firebase documentation how to make popup when login with google
  import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
    } catch (error) {
      console.error(error);
    }
  };
  const provider = new GoogleAuthProvider();

  const auth = getAuth();
</script>

<form id="login-form" action="/login" method="POST">
  <h1>WELCOME! PLEASE LOG IN</h1>
  <div>
    <label for="id">Log in ID</label>
    <input type="text" id="id" name="id" required />
  </div>
  <div>
    <label for="password">Log in PASSWORD</label>
    <input type="password" id="password" name="password" required />
  </div>
  <div>
    <button class="login-btn" type="submit">log-in</button>
  </div>

  <div id="info" />
</form>

<div>
  <div>GOOGLE</div>
  <button class="google-login-btn" on:click={loginWithGoogle}>
    <img
      class="google-logo"
      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
      alt=""
    />
    <div>login with google</div>
  </button>
</div>

<style>
  .login-btn {
    border: solid 1px gray;
    margin: 5px;
    cursor: pointer;
    border-radius: 3px;
  }
  .google-login-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px gray;
    margin: 5px;
    cursor: pointer;
    border-radius: 3px;
  }
  .google-logo {
    height: 20px;
    padding: 5px;
  }
</style>
