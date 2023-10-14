<script>
  export let location;

  const moveToHome = () => {
    window.location.hash = '/';
  };
</script>

<footer>
  <div class="footer-element">
    <button class="footer-ele-icon" on:click={moveToHome}>
      {#if location === 'home'}
        <img src="assets/home.svg" alt="home-icon" />
      {:else}
        <img src="assets/emptyhome.svg" alt="home-icon" />
      {/if}
    </button>
    <div class="footer-ele-name">홈</div>
  </div>

  <div class="footer-element">
    <div class="footer-ele-icon">
      <img src="assets/town.svg" alt="town-icon" />
    </div>
    <div class="footer-ele-name">동네생활</div>
  </div>

  <div class="footer-element">
    <div class="footer-ele-icon">
      <img src="assets/near.svg" alt="near-icon" />
    </div>
    <div class="footer-ele-name">내 근처</div>
  </div>

  <div class="footer-element">
    <div class="footer-ele-icon">
      <img src="assets/chat.svg" alt="chat-icon" />
    </div>
    <div class="footer-ele-name">채팅</div>
  </div>

  <div class="footer-element">
    <div class="footer-ele-icon">
      <img src="assets/my.svg" alt="my-icon" />
    </div>
    <div class="footer-ele-name">나의 당근</div>
  </div>
</footer>
