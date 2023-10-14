<script>
  import { onMount } from 'svelte';
  import Footer from '../components/Footer.svelte';
  import { getDatabase, ref, onValue } from 'firebase/database';

  let hour = new Date().getHours();
  let min = new Date().getMinutes();

  //get data from firebase server
  $: items = [];

  const db = getDatabase();
  const itemsRef = ref(db, 'items/');

  //글쓰기 하고 와도 추가된 페이지 바로 뜨도록 하기
  //화면이 렌더링 될 때마다 onmount가 실행되면서 페이지 보이기
  onMount(() => {
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      items = Object.values(data);
    });
  });
</script>

<header>
  <div class="info-bar">
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
  {#each items as item}
    <div class="main-box-list">
      <div class="box-img" />

      <div class="box-desc">
        <div class="desc-title">{item.title}</div>

        <div class="desc-meta">{item.place}</div>
        <div class="desc-price">{item.price}</div>
        <div class="desc-icon">
          <img src="assets/mini-chat.svg" alt="mini-chat" />
          <img src="assets/heart.svg" alt="heart" />
        </div>
        <!-- <div class="">{item.description}</div> -->
      </div>
    </div>
  {/each}

  <a class="write-btn" href="#/write">+ 글쓰기</a>
</main>

<Footer location="home" />

<!-- when screen too big or small, show message -->
<div class="media-info-msg">화면 사이즈를 조정해 주세요</div>
