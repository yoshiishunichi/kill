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
      <input
        id="start"
        type="button"
        value="スタートっ！"
        :class="{ disp: disps[0], nodisp: nodisps[0] }"
        @click="tapStart"
      />
      <input
        id="stop"
        type="button"
        value="ストップっ！"
        :class="{ disp: disps[1], nodisp: nodisps[1] }"
        @click="tapStop"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      timeInterval: null,
      disps: [true, false],
      nodisps: [false, true]
    };
  },
  methods: {
    colorChange() {
      let colors = [0, 0, 0];
      for (let i = 0; i < colors.length; i++) {
        colors[i] = Math.floor(Math.random() * 256);
      }

      const thisColor =
        "rgb(" +
        String(colors[0]) +
        ", " +
        String(colors[1]) +
        ", " +
        String(colors[2]) +
        ")";
      return thisColor;
    },
    setColor() {
      const kill = document.getElementById("kill");
      const container = document.body;
      kill.style.color = this.colorChange();
      container.style.backgroundColor = this.colorChange();
    },
    tapStart() {
      this.disps[0] = false;
      this.disps[1] = true;
      this.nodisps[0] = true;
      this.nodisps[1] = false;
      this.timeInterval = setInterval(this.setColor, 100);
    },
    tapStop() {
      this.disps[1] = false;
      this.disps[0] = true;
      this.nodisps[1] = true;
      this.nodisps[0] = false;
      clearInterval(this.timeInterval);
    }
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

.disp {
  display: inline-block;
}

.nodisp {
  display: none;
}

#start {
  background-color: #eee;
  color: black;
  margin-left: 30px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  width: 120px;
  height: 30px;
  border-radius: 5px;
  border: 1px gray solid;
  font-size: 14px;
  outline: none;
}

#stop {
  background-color: #eee;
  color: black;
  margin-left: 30px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  width: 120px;
  height: 30px;
  border-radius: 5px;
  border: 1px gray solid;
  font-size: 14px;
  outline: none;
}
</style>
