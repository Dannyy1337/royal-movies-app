<template>
  <div class="footer">
    <div class="social">
      <p class="social_p">Социальные сети:</p>
      <a href="#"><img src="./img/social/teleg.jpg" alt="" /></a>
      <a href="#"><img src="./img/social/inst.png" alt="" /></a>
      <a href="#"><img src="./img/social/link.png" alt="" /></a>
    </div>
    <h3 class="created">© 2021</h3>
  </div>
</template>

<style lang='scss'>
.footer {
  background: #1f1f1f;
  color: #3c3b3c;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  font-family: Arial, Helvetica, sans-serif !important;
  font-size: 16px;
  & .social {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 40%;
    height: 20px;
    & a {
      margin-left: 10px;
      display: flex;
      justify-content: center;

      border: 2px solid black;

      border-radius: 50%;
      &:hover {
        border: 2px solid white;
        background: white;
      }
      & img {
        width: 30px;
        height: 30px;
      }
    }
    & .social_p {
      margin-right: 10px;
      font-size: 20px;
      font-weight: bold;
      height: 30px;
      margin-top: 35px;
      min-width: 100px;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.32) 0%,
        rgba(255, 255, 255, 0.48) 50%,
        rgba(255, 255, 255, 0.32) 100%
      ) !important;
      -webkit-text-fill-color: transparent !important;
      -webkit-background-clip: text !important;
      text-shadow: none;
    }
    & .created {
      color: rgb(85, 85, 85) !important;
      text-shadow: none !important;
    }
  }
}
</style>