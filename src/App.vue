<template>
  <div id="container">
    <div class="kill-container" id="kill-container">
      <h1 id="kill">殺すぞ</h1>
    </div>
    <div id="tweet">
      <a
        href="http://twitter.com/share?url=https://yoshiishunichi.github.io/kill/&text=殺すぞ"
        id="tweetbutton"
        target="_blank"
        @click="tapTweet"
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
    <button id="save" @click="tapSave">保存！</button>
  </div>
</template>

<script>
import domtoimage from "dom-to-image";
import FileSaver from "file-saver";

export default {
  name: "App",
  data() {
    return {
      timeInterval: null,
      disps: [true, false],
      nodisps: [false, true],
      killContainer: null
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
      const body = document.body;

      kill.style.color = this.colorChange();
      const backColor = this.colorChange();
      body.style.backgroundColor = backColor;
      this.killContainer.style.backgroundColor = backColor;
    },
    tapStart() {
      this.killContainer = document.getElementById("kill-container");
      this.disps[0] = false;
      this.disps[1] = true;
      this.nodisps[0] = true;
      this.nodisps[1] = false;
      this.timeInterval = setInterval(this.setColor, 100);
    },
    tapStop() {
      this.killContainer = document.getElementById("kill-container");
      this.disps[1] = false;
      this.disps[0] = true;
      this.nodisps[1] = true;
      this.nodisps[0] = false;
      clearInterval(this.timeInterval);
    },
    save() {
      this.killContainer = document.getElementById("kill-container");
      const killContainerCopy = this.killContainer;
      killContainerCopy.style.width = "500px";
      killContainerCopy.style.height = "500px";
      killContainerCopy.style.marginLeft = "0px";
      killContainerCopy.children[0].style.lineHeight = "500px";
      domtoimage
        .toPng(killContainerCopy)
        .then(function(dataUrl) {
          const img = new Image();
          img.src = dataUrl;

          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            canvas.toBlob(blob => {
              FileSaver.saveAs(blob, "kill-image.png");
              killContainerCopy.style.width = "100%";
              killContainerCopy.style.height = "275px";
              killContainerCopy.style.marginLeft = "auto";
              killContainerCopy.children[0].style.lineHeight = "275px";
            });
          };
        })
        .catch(error => {
          console.log(error);
        });
    },
    tapSave() {
      this.save();
    },
    update() {
      // Scripting.FileSystemObject というオブジェクトを作成（JavaScript内でWSHを使ってファイルを扱う）
      // eslint-disable-next-line no-undef
      var fs = new ActiveXObject("Scripting.FileSystemObject");

      // text.txtという新規のファイルを作成
      var file = fs.CreateTextFile("text.txt");

      // texxt.txtファイルへ書き込み
      file.Write("Complete, written!");

      // text.txtファイルを閉じる
      file.Close();
    },
    tapTweet() {
      this.update();
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
  background-color: #000;
}

.kill-container {
  background-color: #000;
  height: 275px;
}

div {
  height: 100%;
  width: 100%;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #fff;
  font-size: 50px;
  user-select: none;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 275px;
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
  margin-left: 20px;
}

#tweetbutton:hover {
  opacity: 0.8;
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

#save {
  display: block;
  margin-left: 20px;
  margin-top: 15px;
  background-color: #eee;
  color: black;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  width: 120px;
  height: 30px;
  border: 1px gray solid;
  outline: none;
  border-radius: 5px;
}

input:hover {
  opacity: 0.8;
}

button:hover {
  opacity: 0.8;
}

@media screen and (max-width: 300px) {
  #tweetbutton {
    font-size: 13px;
    width: 100px;
    height: 25px;
    line-height: 27px;
  }

  #start {
    margin-left: 20px;
    width: 100px;
    height: 27px;
    font-size: 12px;
  }

  #stop {
    margin-left: 20px;
    width: 100px;
    height: 27px;
    font-size: 12px;
  }

  #save {
    font-size: 13px;
    width: 100px;
    height: 25px;
    line-height: 27px;
  }
}
</style>
