<template>
  <div id="container">
    <h1 id="kill">殺すぞ</h1>
    <div id="tweet">
      <a
        href="http://twitter.com/share?url=https://yoshiishunichi.github.io/kill/&text=殺すぞ"
        id="tweetbutton"
        target="_blank"
        >ツイートする</a
      >
      <input id="start" type="button" value="スタートっ！" @click="tapStart" />
      <input id="stop" type="button" value="ストップっ！" @click="tapStop" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      timeInterval: null
    };
  },
  methods: {
    tapStart() {},
    tapStop() {}
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

body {
  background-color: black;
}

div {
  height: 100%;
  width: 100%;
  margin: 0 auto;
}

#tweet {
  width: 90%;
  margin: 0 auto;
}

h1 {
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
  color: white;
  font-size: 50px;
  user-select: none;
}

#tweetbutton {
  display: inline-block;
  color: white;
  font-weight: bold;
  font-size: 15px;
  background-color: skyblue;
  border: 1px gray solid;
  text-decoration: none;
  width: 120px;
  height: 28px;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  border-radius: 5px;
  line-height: 30px;
}

#start {
  display: inline-block;
  background-color: #eee;
  color: black;
  margin-left: 30px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: 1px gray solid;
  font-size: 14px;
  outline: none;
}

#stop {
  display: none;
  background-color: #eee;
  color: black;
  margin-left: 30px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: 1px gray solid;
  font-size: 14px;
  outline: none;
}
</style>
