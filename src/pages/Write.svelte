<script>
  import { getDatabase, ref, push } from 'firebase/database';

  let title;
  let price;
  let description;
  let place;

  function writeUserData() {
    const db = getDatabase();
    //set을 이용하면 제목이 같은 경우, 기존 item이 새로운 item으로 대체되어 버린다.
    //따라서 push 사용
    push(ref(db, 'itmes/'), {
      title: title,
      price: price,
      description: description,
      place: place,
    });
  }
</script>

<form id="write-form" on:submit|preventDefault={writeUserData}>
  <!-- image -->
  <!-- <div>
    <label for="image">image</label>
    <input type="file" id="image" name="image" />
  </div> -->

  <div>
    <!-- title -->
    <label for="title">title</label>
    <input type="text" id="title" name="title" bind:value={title} />
  </div>

  <div>
    <!-- price -->
    <label for="price">price</label>
    <input type="number" id="price" name="price" bind:value={price} />
  </div>

  <div>
    <!-- description -->
    <label for="description">describe</label>
    <input
      type="text"
      id="description"
      name="description"
      bind:value={description}
    />
  </div>

  <div>
    <!-- place -->
    <label for="place">place</label>
    <input type="text" id="place" name="place" bind:value={place} />
  </div>

  <!-- submit btn -->
  <div>
    <button type="submit">submit item</button>
  </div>
</form>
