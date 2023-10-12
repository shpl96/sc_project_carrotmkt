<script>
  let hour = new Date().getHours();
  let min = new Date().getMinutes();
</script>

<header>
  <div class="inW„fo-bar">
    <div class="info-bar__time">{hour}:{min}</div>
    <div class="info-bar__icons">
      <img src="assets/chartbar.svg" alt="chartbar-icon" />
      <img src="assets/wifi.svg" alt="wifi-icon" />
      <img src="assets/battery.svg" alt="battery-icon" />
    </div>
  </div>
  <div class="menu-bar">
    <div class="menu-bar__town">
      <div>신정3동</div>
      <div class="menu-bar__town__icon">
        <img src="assets/chevron.svg" alt="chevron-icon" />
      </div>
    </div>
    <div class="menu-bar__icons">
      <img src="assets/magnifying-glass.svg" alt="magnifying-glass-icon" />
      <img src="assets/bar.svg" alt="bar-icon" />
      <img src="assets/bell.svg" alt="bell-icon" />
    </div>
  </div>
</header>

<main>
  <a class="write-btn" href="#/write">+ 글쓰기</a>
</main>

<footer>
  <div class="footer-element">
    <div class="footer-ele-icon">
      <img src="assets/home.svg" alt="home-icon" />
    </div>
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

<!-- when screen too big or small, show message -->
<div class="media-info-msg">화면 사이즈를 조정해 주세요</div>
