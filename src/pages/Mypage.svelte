<script>
  import Footer from '../components/Footer.svelte';

  const logout = () => {};
</script>

<div>Personal Info</div>

<button on:click={logout}>Logout</button>

<Footer location="my" />
