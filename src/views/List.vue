<template>
  <div>
    <div class="con">
      <div class="container">
        <div class="con-left">
          <span>Redmi K30 5G</span>
          <span>|</span>
          <a href>Redmi K30</a>
        </div>
        <div class="con-right">
          <ul>
            <li>
              <a href>概述</a>
            </li>
            <li>
              <a href>参数</a>
            </li>
            <li>
              <a href>F码通道</a>
            </li>
            <li>
              <a href>咨询客服</a>
            </li>
            <li>
              <a href>用户评价</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="commodity container">
      <!-- 商品模块左侧start -->
      <div class="commodity-left">
        <div class="commodity-left-listroll">
          <a href="javascript:;" class="listroll-l"></a>
          <a href="javascript:;" class="listroll-r"></a>
          <ul>
            <li>
              <a href="javascript:;">
                <img src="images/list/list_roll1-1.jpg" alt />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="images/list/list_roll1-2.jpg" alt />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="images/list/list_roll1-3.jpg" alt />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="images/list/list_roll1-4.jpg" alt />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="images/list/list_roll1-5.jpg" alt />
              </a>
            </li>
          </ul>
          <ol class="listroll-circle"></ol>
        </div>
      </div>
      <!-- 商品模块左侧end -->
      <!-- 商品模块右侧start -->
      <div class="commodity-right">
        <h2>Redmi K30 5G</h2>
        <p class="details">
          <span>「6GB+128GB闪降300元，到手价仅2099元；6GB+128GB加19元得价值99元Redmi 20000mAh充电宝；享延保、碎屏保5折；享云空间年卡5折」</span>
          双模5G / 三路并发 / 高通骁龙765G / 7nm 5G低功耗处理器 / 120Hz高帧率流速屏 / 6.67''小孔径全面屏 / 索尼6400万前后六摄 / 最高可选8GB+256GB大存储 / 4500mAh+30W快充 / 3D四曲面玻璃机身 / 多功能NFC
        </p>
        <p class="channel">小米自营</p>
        <span class="commodity-right-price">1899</span>
        <span>元</span>
        <hr />
        <div class="commodity-right-addr bg-light">
          <div>
            <span>广东</span>
            <span>广州市</span>
            <span>越秀区</span>
            <span>北京街道</span>
            <!-- <a href="javascript:;">修改</a> -->
          </div>
        </div>
        <div class="select-version">
          <h4>选择版本</h4>
          <div class="commodity-right-edition">
            <a class="cEdition-active">6GB+64GB</a>
            <a>6GB+128GB</a>
            <a>8GB+128GB</a>
            <a>8GB+256B</a>
          </div>
        </div>
        <div class="select-color">
          <h4>选择颜色</h4>
          <div class="commodity-right-color">
            <a class="cColor-active">深海微光</a>
            <a>紫玉幻境</a>
            <a>时光独白</a>
            <a>花影惊鸿</a>
          </div>
        </div>
        <div class="commodity-right-desc">
          <div>
            <span>Redmi K30 5G 6GB+64GB 深海微光</span>
            <span>
              <span class="commodity-right-price">1899</span>元
            </span>
          </div>
          <p class="total-price">
            总计：
            <span class="commodity-right-price">1899</span> 元
          </p>
        </div>
        <div class="commodity-right-operation">
          <router-link class="commodity-right-purchase" to="/cart">加入购物车</router-link>
          <a class="commodity-right-collection" href="javascript:;">喜欢</a>
        </div>
        <div class="commodity-right-aftersales">
          <span>小米自营</span>
          <span>小米发货</span>
          <span>7天无理由退货</span>
          <span>运费说明</span>
          <span>企业信息</span>
          <span>售后服务政策</span>
          <span>7天价格保护</span>
        </div>
      </div>
    </div>
    <div class="commodity-bottom">
      <div class="container">
        <h3>价格说明</h3>
        <img src="images/list/list-bottom.jpeg" alt />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../public/scss/base.scss";
@import "../../public/scss/color.scss";

.con {
  line-height: 60px;
  width: 100%;
  height: 60px;
  border: 1px solid #e0e0e0;
  background-color: #ffffff;
  z-index: 999;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
  .container {
    display: flex;
    justify-content: space-between;
    .con-left {
      width: 18%;
      display: flex;
      justify-content: space-between;
      span {
        color: $colorK;
        font-size: $fontC;
      }
      a {
        color: $colorJ;
        font-size: $fontC;
      }
    }
    .con-right {
      width: 35%;
      ul {
        display: flex;
        justify-content: space-between;
        li + li {
          ::before {
            content: "|";
            margin: 0 25px;
          }
        }
        a {
          font-size: $fontA;
          color: $colorJ;
        }
      }
    }
  }
}
.commodity {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .commodity-left {
    width: 560px;
    height: 10px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .commodity-right {
    width: 600px;
    h2 {
      color: #212121;
      font-size: 24px;
      line-height: 36px;
      height: 36px;
    }
    .details {
      font-size: 14px;
      line-height: 1.5;
      color: #b0b0b0;
      span {
        color: $colorG;
      }
    }
    .channel {
      color: $colorG;
      font-size: $fontB;
      margin: 20px 0;
    }
    .commodity-right-price {
      font-size: 30px;
      color: $colorG;
    }
    .commodity-right-addr {
      height: 100px;
      padding-left: 10px;
      margin-bottom: 20px;
      border: 1px solid #e0e0e0;
      background-color: #f8f9fa;
      span {
        line-height: 100px;
        margin: 0 10px;
        font-size: 14px;
      }
    }
    .select-version {
      h4 {
        margin-bottom: 10px;
      }
      .commodity-right-edition {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        text-align: center;
        line-height: 42px;
        color: #757575;
        font-size: 16px;
        a {
          cursor: pointer;
          display: block;
          width: 292px;
          height: 42px;
          margin-bottom: 15px;
          border: 1px solid #e0e0e0;
          transition: all 0.5s;
          &:hover {
            border: 1px solid #ff6700;
          }
        }
      }
    }
    .select-color {
      h4 {
        margin-bottom: 10px;
      }
      .commodity-right-color {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        text-align: center;
        line-height: 42px;
        color: #757575;
        font-size: 16px;
        a {
          cursor: pointer;
          display: block;
          width: 292px;
          height: 42px;
          margin-bottom: 15px;
          border: 1px solid #e0e0e0;
          transition: all 0.5s;
          &:hover {
            border: 1px solid #ff6700;
          }
        }
      }
    }
    .commodity-right-desc {
      height: 60px;
      background-color: #f9f9fa;
      padding: 30px;
      > div {
        display: flex;
        justify-content: space-between;
        span {
          font-size: 14px;
          color: #616161;
        }
        p {
          color: $colorG;
          font-size: 24px;
          margin-top: 20px;
        }
      }
      .total-price {
        margin: 20px 0;
        span {
          font-size: 30px;
        }
      }
      .commodity-right-price {
        color: $colorG;
      }
    }
    .commodity-right-operation {
      margin-top: 20px;
      display: flex;
      justify-content: left;
      text-align: center;
      .commodity-right-purchase {
        display: block;
        width: 300px;
        height: 54px;
        line-height: 54px;
        background-color: #ff6700;
        color: #ffffff;
      }
      .commodity-right-collection {
        margin-left: 10px;
        display: block;
        width: 142px;
        height: 54px;
        line-height: 54px;
        background-color: #b0b0b0;
        color: #ffffff;
      }
    }
    .commodity-right-aftersales {
      display: flex;
      justify-content: start;
      flex-wrap: wrap;
      margin: 20px 0;
      span {
        font-size: 14px;
        color: #b0b0b0;
        padding: 0 15px 0 0;
      }
    }
    .commodity-bottom {
      background-color: #f5f5f5;
      .container {
        h3 {
          padding-top: 22px;
        }
        img {
          margin: 22px 0 50px 0;
        }
      }
    }
  }
}
</style>