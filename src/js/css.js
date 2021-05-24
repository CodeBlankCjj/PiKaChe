const string = `
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.skin {
  position: relative;
  background: #ffe600;
  mix-height: 50vh;
}
.skin .nose {
  border: 10px solid red;
  border-color: black transparent transparent transparent;
  width: 0;
  height: 0;
  position: relative;
  left: 50%;
  top: 145px;
  margin-left: -10px;
  z-index: 4;
}
.skin .nose .yuan {
  position: absolute;
  width: 20px;
  height: 6px;
  top: -16px;
  left: -10px;
  border-radius: 10px 10px 0 0;
  background: #000;
}
.skin .nose:hover {
  transform-origin: 50% 100%;
  animation: wave 200ms infinite;
}
.skin .eye {
  position: absolute;
  left: 50%;
  top: 100px;
  border: 2px solid #000;
  width: 64px;
  height: 64px;
  margin-left: -32px;
  background: #2e2e2e;
  border-radius: 50%;
}
.skin .eye.left {
  transform: translateX(-100px);
}
.skin .eye.right {
  transform: translateX(100px);
}
.skin .eye::before {
  content: "";
  position: relative;
  left: 8px;
  top: 4px;
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fFF;
}
.skin .mouth {
  position: absolute;
  left: 50%;
  top: 170px;
  width: 200px;
  height: 200px;
  margin-left: -100px;
}
.skin .mouth .up {
  position: relative;
  top: -20px;
  z-index: 2;
}
.skin .mouth .up .lip {
  border: 3px solid #000000;
  height: 30px;
  width: 100px;
  border-top-color: transparent;
  border-right-color: transparent;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  background: #ffe600;
}
.skin .mouth .up .lip::before {
  content: "";
  display: block;
  width: 7px;
  height: 30px;
  position: absolute;
  bottom: 0;
  background: #ffe600;
}
.skin .mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  transform: rotate(-15deg) translateX(-53px);
}
.skin .mouth .up .lip.left::before {
  right: -6px;
}
.skin .mouth .up .lip.left::after {
  content: "";
  display: block;
  background: #ffe600;
  height: 3px;
  width: 100%;
  position: absolute;
  top: -5px;
}
.skin .mouth .up .lip.right {
  border-radius: 0 0 50px 0;
  transform: rotate(15deg) translateX(53px);
}
.skin .mouth .up .lip.right::before {
  left: -6px;
}
.skin .mouth .down {
  height: 180px;
  position: absolute;
  top: 5px;
  width: 100%;
  overflow: hidden;
}
.skin .mouth .down .yuan1 {
  border: 3px solid black;
  width: 150px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 75px/300px;
  background: #9b000a;
  overflow: hidden;
}
.skin .mouth .down .yuan1 .yuan2 {
  width: 200px;
  height: 300px;
  position: absolute;
  bottom: -155px;
  left: 50%;
  margin-left: -100px;
  border-radius: 100px;
  background: #ff485f;
}
.skin .face {
  position: absolute;
  left: 50%;
  border: 3px solid #000000;
  width: 88px;
  height: 88px;
  top: 200px;
  margin-left: -44px;
  z-index: 3;
}
.skin .face.left {
  transform: translateX(-180px);
  background: #ff0000;
  border-radius: 50px;
}
.skin .face.right {
  transform: translateX(180px);
  background: #ff0000;
  border-radius: 50px;
}
`
export default string