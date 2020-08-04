<template>
  <div class="header">
    <nav class="nav">
      <div class="container">
        <div class="clearfix">
          <div class="nav-ul">
            <ul class="nav-ul-left">
              <li>
                <a href="javascript:;">小米商城</a>
              </li>
              <li>
                <a href="javascript:;">MIUI</a>
              </li>
              <li>
                <a href="javascript:;">IoT</a>
              </li>
              <li>
                <a href="javascript:;">云服务</a>
              </li>
              <li>
                <a href="javascript:;">金融</a>
              </li>
              <li>
                <a href="javascript:;">有品</a>
              </li>
              <li>
                <a href="javascript:;">小爱开放平台</a>
              </li>
              <li>
                <a href="javascript:;">企业团购</a>
              </li>
              <li>
                <a href="javascript:;">资质证照</a>
              </li>
              <li>
                <a href="javascript:;">协议规则</a>
              </li>
              <li>
                <a href="javascript:;">下载app</a>
              </li>
              <li>
                <a href="javascript:;">Select Location</a>
              </li>
            </ul>
            <ul class="nav-ul-right">
              <li>
                <a href="#">登录</a>
              </li>
              <li>
                <a href="#">注册</a>
              </li>
              <li>
                <a href="#">消息通知</a>
              </li>
            </ul>
          </div>
          <div class="nav-shopcar">
            <a href="#">
              购物车
              <span>(0)</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <header>
      <div class="header-content container">
        <div>
          <a href="index.html" class="header-logo"></a>
        </div>
        <div class="header-nav clearfix">
          <div class="header-nav-list">
            <ul>
              <li>
                <div class="dropdown">
                  <a href="#" class="list-dt">全部商品分类</a>
                  <ul class="list-dd">
                    <li>
                      <a href="#">手机 电话卡</a>
                    </li>
                    <li>
                      <a href="#">电视 盒子</a>
                    </li>
                    <li>
                      <a href="#">笔记本 显示器 平板</a>
                    </li>
                    <li>
                      <a href="#">家电 插线板</a>
                    </li>
                    <li>
                      <a href="#">出行 穿戴</a>
                    </li>
                    <li>
                      <a href="#">智能 路由器</a>
                    </li>
                    <li>
                      <a href="#">电源 配件</a>
                    </li>
                    <li>
                      <a href="#">健康 儿童</a>
                    </li>
                    <li>
                      <a href="#">耳机 音箱</a>
                    </li>
                    <li>
                      <a href="#">生活 箱包</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="mi-phone">
                <a href="#">小米手机</a>
              </li>
              <li>
                <a href="#">Redmi</a>
              </li>
              <li>
                <a href="#">红米</a>
              </li>
              <li>
                <a href="#">电视</a>
              </li>
              <li>
                <a href="#">笔记本</a>
              </li>
              <li>
                <a href="#">家电</a>
              </li>
              <li>
                <a href="#">路由器</a>
              </li>
              <li>
                <a href="#">智能硬件</a>
              </li>
              <li>
                <a href="#">服务</a>
              </li>
              <li>
                <a href="#">社区</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="header-search">
          <div>
            <input type="text" />
            <a class="btn-search" href="javascript:;">搜索</a>
          </div>
        </div>
      </div>
      <div class="header-banner">
        <div class="container">
          <div>
            <a href="#">
              <img src="images/header-bannr.webp" alt />
              <p class="title">小米10 青春版 5G</p>
              <span class="price">2099元</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img src="images/header-bannr.webp" alt />
              <p class="title">小米10 青春版 5G</p>
              <span class="price">2099元</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img src="images/header-bannr.webp" alt />
              <p class="title">小米10 青春版 5G</p>
              <span class="price">2099元</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img src="images/header-bannr.webp" alt />
              <p class="title">小米10 青春版 5G</p>
              <span class="price">2099元</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img src="images/header-bannr.webp" alt />
              <p class="title">小米10 青春版 5G</p>
              <span class="price">2099元</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img src="images/header-bannr.webp" alt />
              <p class="title">小米10 青春版 5G</p>
              <span class="price">2099元</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<style lang="scss">
@import "../../public/scss/color.scss";

.header {
  .nav {
    height: 40px;
    line-height: 40px;
    background-color: $colorH;
    a {
      color: $colorE;
      font-size: 12px;
      &:hover {
        color: $colorA;
      }
    }
    .nav-ul {
      width: 90%;
      float: left;
      .nav-ul-left {
        li {
          margin: 0 5px;
          float: left;
          + li {
            border-right: 1px solid colorC;
          }
        }
      }
      .nav-ul-right {
        li {
          float: right;
          margin: 0 5px;
        }
      }
      a {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .nav-shopcar {
      float: right;
      background-color: #424242;
      a {
        padding: 0 5px;
        display: block;
        width: 100%;
        height: 100%;
        &:hover {
          color: $colorG;
          background-color: $colorA;
        }
      }
    }
  }
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 20px 0;
    position: relative;
    .header-logo {
      width: 5%;
      display: block;
      position: relative;
      width: 55px;
      height: 55px;
      background-color: $colorG;
      overflow: hidden;
      &::before {
        content: " ";
        width: 55px;
        height: 55px;
        background: url("../../public/images/logo/logo1.png") no-repeat center;
        position: absolute;
        background-size: 55px;
        transition: all 0.2s;
      }
      &::after {
        content: " ";
        width: 55px;
        height: 55px;
        background: url("../../public/images/logo/logo2.png") no-repeat center;
        position: absolute;
        left: -55px;
        background-size: 55px;
        transition: all 0.2s;
      }
      &:hover {
        &::before {
          margin-left: 55px;
        }
        &::after {
          margin-left: 55px;
        }
      }
    }

    .header-nav {
      width: 70%;
      ul {
        margin: 10px 0 0 0;
        > li {
          margin: 0 7px;
          float: left;
          height: 40px;
          line-height: 40px;
          .dropdown {
            height: 88px;
            .list-dd {
              display: none;
              position: absolute;
              width: 234px;
              height: 420px;
              color: $colorA;
              margin-top: 35px;
              margin-left: -101px;
              background-color: $colorA;
              border: 1px solid $colorG;
              li {
                position: relative;
                height: 42px;
                line-height: 42px;
                margin-left: 2px;
                padding-left: 10px;
                &:hover {
                  background-color: $colorG;
                }
                a {
                  color: $colorI;
                  font-size: 14px;
                }
                &::after {
                  position: absolute;
                  content: ">";
                  font-size: 14px;
                  color: $colorI;
                  right: 10px;
                }
              }
            }
            .list-dt {
              color: $colorD;
              font-size: $fontC;
            }
          }
          > a {
            color: $colorB;
          }
        }
      }
    }
    .header-search {
      width: 25%;
      height: 30px;
      div {
        display: flex;
        width: 100%;
        height: 100%;
        input {
          height: 30px;
          width: 85%;
          &:focus {
            outline: none;
            box-shadow: none;
            border: 1px solid $colorG;
          }
        }
        a {
          display: block;
          width: 15%;
          height: 30px;
          text-align: center;
          line-height: 30px;
          background-color: $colorA;
          border: 1px solid $colorB;
          color: $colorD;
          &:hover {
            background-color: $colorG;
            border-color: $colorG;
            color: $colorA;
          }
        }
      }
    }
  }
  .header-banner {
    position: absolute;
    display: none;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.25);
    z-index: 2;
    background-color: $colorA;
    padding-bottom: $fontE;
    .container {
      display: flex;
      justify-content: space-around;
      div {
        + div {
          border-left: 1px $colorC solid;
        }
        .title {
          color: $colorD;
          font-size: $fontA;
        }
        .price {
          color: $colorG;
          font-size: $fontA;
        }
      }
    }
  }
}
</style>