<script>
  import Login from './pages/Login.svelte';
  import Main from './pages/Main.svelte';
  import NotFound from './pages/NotFound.svelte';
  import Signup from './pages/Signup.svelte';
  import Write from './pages/Write.svelte';
  import Router from 'svelte-spa-router';
  import { GoogleAuthProvider } from 'firebase/auth';

  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  import './css/style.css';
  import './css/main.css';
  import './css/reset.css';
  import './css/header.css';
  import './css/footer.css';

  let login = false;

  const routes = {
    '/': Main,
    '/login': Login,
    '/signup': Signup,
    '/write': Write,
    '*': NotFound,
  };
</script>

{#if !login}
  <Login />
{:else}
  <Router {routes} />
{/if}

<main />

<style></style>
