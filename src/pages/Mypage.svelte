<script>
  import Footer from '../components/Footer.svelte';
  import { user$ } from '../store';

  const logout = () => {
    //logout 하기 위해서는
    //1번: user의 값 지워주기
    user$.set(null);
    //2번: token 없애기
    localStorage.removeItem('token');
  };
</script>

<div>Personal Info</div>

<button class="logout-btn" on:click={logout}>Logout</button>

<Footer location="my" />

<style>
  .logout-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px tomato;
    margin: 5px;
    cursor: pointer;
    border-radius: 3px;
  }
</style>
