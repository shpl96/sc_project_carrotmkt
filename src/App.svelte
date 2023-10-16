<script>
  import Login from './pages/Login.svelte';
  import Main from './pages/Main.svelte';
  import NotFound from './pages/NotFound.svelte';
  import Signup from './pages/Signup.svelte';
  import Write from './pages/Write.svelte';
  import Router from 'svelte-spa-router';
  import { user$ } from './store';
  import {
    getAuth,
    GoogleAuthProvider,
    signInWithCredential,
  } from 'firebase/auth';

  // import { GoogleAuthProvider } from 'firebase/auth';

  // const provider = new GoogleAuthProvider();
  // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  import './css/style.css';
  import './css/main.css';
  import './css/reset.css';
  import './css/header.css';
  import './css/footer.css';
  import { onMount } from 'svelte';

  // let login = false;

  let isLoading = true;

  //새로고침해도 login 유지하도록
  const auth = getAuth();

  const checkLogin = async () => {
    const token = localStorage.getItem('token');
    if (!token) return (isLoading = false);

    const credential = GoogleAuthProvider.credential(null, token);
    const result = await signInWithCredential(auth, credential);
    const user = result.user;
    user$.set(user);
    isLoading = false;
  };

  const routes = {
    '/': Main,
    '/signup': Signup,
    '/write': Write,
    '*': NotFound,
  };

  onMount(() => checkLogin());
</script>

{#if isLoading}
  <div>loading...</div>
{:else if !$user$}
  <Login />
{:else}
  <Router {routes} />
{/if}

<main />

<style></style>
