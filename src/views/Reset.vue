<template>
  <div>
    <div class="frame">
      <div class="milogo">
        <img src="favicon.ico" alt />
      </div>
      <p>重置密码</p>
      <div class="regbox">
        <span>用户名：</span>
        <input type="text" placeholder="请输入您的用户名" class="uname" value />
        <span>旧密码：</span>
        <input type="password" placeholder="请输入您的旧密码" class="old-upwd" value />
        <span>新密码：</span>
        <input type="password" placeholder="请输入您的新密码" class="new-upwd" value />
        <span>再次输入新密码：</span>
        <input type="password" placeholder="请再次输入您的新密码" class="repeat-upwd" value />
        <span class="tip">新密码不相符</span>
        <a href="#" class="update-btn">修改</a>
      </div>
    </div>
    <div class="bottom">
      <ul>
        <li>
          <a href="#">简体</a>
        </li>
        <li>
          <a href="#">繁体</a>
        </li>
        <li>
          <a href="#">English</a>
        </li>
        <li>
          <a href="#">常见问题</a>
        </li>
      </ul>
      <p>小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.frame {
  width: 854px;
  padding: 0 34px 30px;
  background-color: #fff;
  margin: 150px auto;
  .milogo {
    padding: 25px 0 0;
    text-align: center;
  }
  p {
    font-size: 26px;
    text-align: center;
    color: #333;
    margin-top: 10px;
  }
  .regbox {
    width: 300px;
    margin: 0 auto;
    input {
      width: 100%;
      height: 40px;
      padding-left: 5px;
      &:focus {
        outline-color: #ee7600;
      }
    }
    a {
      display: block;
      width: 309px;
      height: 40px;
      background-color: #ff6700;
      text-align: center;
      line-height: 40px;
      color: #fff;
      margin-top: 25px;
      text-decoration: none;
      &:hover {
        background: rgba(255, 103, 0, 0.8);
        color: #f5f5f5;
        text-decoration: none;
      }
    }
    span {
      display: block;
      color: #333;
      margin: 10px 0 5px 0;
    }
    .tip {
      color: #ff6700;
    }
  }
}
.bottom {
  ul {
    text-align: center;
    color: #757575;
    li {
      display: inline-block;
      + li {
        display: span;
        content: "|";
        margin: 5px;
      }
      a {
        text-decoration: none;
        color: #757575;
        &:hover {
          color: #1c86ee;
        }
      }
    }
  }
  p {
    color: #9d9d9d;
    text-align: center;
    margin: 10px 0;
  }
}
</style>