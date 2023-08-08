<script>
export default {
  components: {
    
  },
  data() {
    return {
    }
  }
}
</script>

<template> 
  <div class="input" > 
    <div class="page_title" > 
      <p>INPUT</p>
    </div>
    <div class="inputBeans">名前<input v-model="name" /></div>
    <div class="inputBeans">産地<input v-model="producingArea" /></div>
    <div class="inputBeans">品種<input v-model="kind" /></div>
    <div class="inputBeans">焙煎度<input v-model="degreeOfRoasting" /></div>
    <div class="inputBeans">価格<input v-model="price" /></div>
    <div class="inputBeans">味</div>
    <div class="inputBeans">
        <label for="acidity">酸味</label>
        <input type="range" id="acidity" name="acidity"  min="0" max="10"  value="5" step="1">
    </div>
    <div class="inputBeans">
        <label for="bitter">苦味</label>
        <input type="range" id="bitter" name="bitter"  min="0" max="10"  value="5" step="1">
    </div>
    <div class="inputBeans">
        <label for="sweety">甘味</label>
        <input type="range" id="sweety" name="sweety"  min="0" max="10"  value="5" step="1">
    </div>
    <div class="inputBeans">
        <label for="fullBody">コク</label>
        <input type="range" id="fullBody" name="fullBody"  min="0" max="10"  value="5" step="1">
    </div>
    <div class="inputBeans">
        <label for="aroma">香り</label>
        <input type="range" id="aroma" name="aroma"  min="0" max="10"  value="5" step="1">
    </div>
    <div class="inputBeans">コメント<input v-model="comments" /></div>
    <button @click="addBeans()">登録</button>
    <button @click="delBeans()">削除</button>
</div>
</template>

<style scoped>
.description {
  /* width: 300px; */
  /* display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1; */
  /* overflow: hidden; */
  font-size: 0.9rem;
}

img {
  margin-left: 3px;
  width: 15px;
}
.history_link{
  min-height: 30px;
}
li{
  font-size: 1.2rem;
}
</style>
