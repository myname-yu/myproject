<template>
  <div class="addlist">
    <!-- 顶部区域 -->
    <div class="top">
      <div class="top-header">
        <!-- logo -->
        <router-link to="/" class="header-logo"></router-link>
        <p>确认订单</p>
        <!-- 账号 -->
        <div class="user">
          <span class="login-name">
            <router-link to="/login">登录</router-link>
          </span>
          <span>|</span>
          <router-link to="/orderlist">我的订单</router-link>
        </div>
      </div>
    </div>
    <div class="details">
      <div class="container">
        <!-- 收货地址 -->
        <div>
          <div class="address-top">收货地址</div>
          <div class="address">
            <!-- 添加地址 -->
            <a href="#" class="address-bar">
              <img src="images/buy/add.png" class="add" />
              <p>添加新地址</p>
            </a>
          </div>
        </div>
        <!-- 商品及优惠券 -->
        <div>
          <div class="commodity">商品及优惠券</div>
          <!-- 商品 -->
          <div class="commodity-bar"></div>
        </div>
        <!-- 配送方式 -->
        <div class="dispatching">
          <span class="dispatching-mode">配送方式</span>
          <span class="mode">包邮</span>
        </div>
        <!-- 发票 -->
        <div>
          <div class="dispatching-mode">发票</div>
          <div class="mode">
            <span>电子普通发票</span>
            <span>个人</span>
            <span>商品明细</span>
            <a href="#">修改 ></a>
          </div>
        </div>
        <!-- 统计 -->
        <div class="statistics">
          <div class="ticket">
            <div>
              <a href="#" class="discount-coupon">
                <img src="images/buy/add_3.png" alt />
                <span>使用优惠券</span>
              </a>
              <br />
              <a href="#" class="gift-card">
                <img src="images/buy/add_3.png" alt />
                <span>使用小米礼品卡</span>
              </a>
            </div>
          </div>
          <div class="commodity-statistics">
            <div class="items">
              <P class="items-name">商品件数：</P>
              <div class="items-count">0件</div>
            </div>
            <div class="items">
              <p class="items-name">商品总价：</p>
              <div class="items-money">0元</div>
            </div>

            <div class="items">
              <p class="items-name">优惠活动：</p>
              <div class="items-discount">-0元</div>
            </div>
            <div class="items">
              <p class="items-name">优惠券抵扣：</p>
              <div class="items-discount">-0元</div>
            </div>
            <div class="items">
              <p class="items-name">运费：</p>
              <div class="items-discount">0元</div>
            </div>
            <div class="items total-price">
              <p class="items-name">应付总额：</p>
              <div class="items-money">0元</div>
            </div>
          </div>
        </div>
        <!-- 结算 -->
        <div class="settle-accounts clearfix">
          <div>
            <div>
              <!-- payment.html -->
              <a href="payment.html" class="close-account">结算</a>
              <a href="shopcar.html" class="cart">返回购物车</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-main">
      <div class="modal">
        <div class="modal-top">
          <span>添加收货地址</span>
          <span class="close">×</span>
        </div>
        <div class="modal-middle">
          <div class="name-phone">
            <input type="text" placeholder="姓名" id="receiver" />
            <input type="text" placeholder="手机号" maxlength="11" id="cellphone" />
          </div>
          <div class="addr-list"></div>
          <div class="addr-spec">
            <textarea name cols="30" rows="3" placeholder="详细地址" id="address" maxlength="20"></textarea>
          </div>
        </div>
        <div class="modal-bottom">
          <a href="javascript:;" class="sure-btn">确定</a>
          <a href="javascript:;" class="close-btn">取消</a>
        </div>
      </div>
      <div class="modal-mask"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.addlist {
  .top {
    /*  */
    font-size: 12px;
    border-bottom: 2px solid #ff6700;
    background: #fff;
    color: #b0b0b0;
    position: relative;
    z-index: 20;
    height: 100px;
    .top-header {
      width: 1226px;
      margin-right: auto;
      margin-left: auto;
      .header-logo {
        float: left;
        margin: 20px 20px 0 0;
        display: block;
        position: relative;
        width: 55px;
        height: 55px;
        background-color: #ff6700;
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
      }
      .header-logo:hover::before,
      .header-logo:hover::after {
        margin-left: 55px;
      }
      p {
        float: left;
        color: #424242;
        height: 48px;
        font-size: 30px;
        margin-top: 26px;
      }
      .user {
        float: right;
        margin-top: 40px;
        a {
          color: #757575;
          font-size: 12px;
        }
      }
    }
  }
  .details {
    padding: 40px 0 60px;
    background-color: #f5f5f5;
    .container {
      background: #fff;
      > div {
        position: relative;
        padding: 25px 24px;
        .address-top {
          padding: 48px 0 25px;
          font-size: 18px;
        }
        .address {
          display: block;
          .address-bar {
            text-align: center;
            display: inline-block;
            width: 268px;
            height: 178px;
            border: 1px solid #e0e0e0;
            cursor: pointer;
            position: relative;
            margin-right: 17px;
            margin-bottom: 20px;
            vertical-align: top;
            &:hover {
              border-color: #b0b0b0;
              border: 1px solid #ff6700;
            }
            .add {
              width: 30px;
              margin: 50px 118px 0;
            }
          }
        }
      }
      .commodity {
        color: #333;
        font-size: 18px;
        line-height: 40px;
      }
      .commodity-bar {
        padding: 5px 0;
        border-bottom: 1px solid #e0e0e0;
      }
      .dispatching {
        padding: 25px 24px;
        border-bottom: 1px solid #e0e0e0;
        .dispatching-mode {
          width: 150px;
          color: #333;
          font-size: 18px;
          display: inline-block;
        }
        .mode {
          display: inline-block;
          width: 960px;
          border-color: #fff;
          color: #ff6700;
          a {
            color: #ff6700;
          }
          span {
            margin-right: 10px;
          }
        }
      }
      .statistics {
        position: relative;
        min-height: 200px;
        padding: 20px 0;
        margin: 0 48px;
        .ticket {
          position: absolute;
          left: 0;
          top: 20px;
          width: 130px;
          > div {
            position: relative;
            font-size: 14px;
            .discount-coupon {
              position: absolute;
              left: 0;
              top: 20px;
            }
            .gift-card {
              position: absolute;
              top: 60px;
            }
            img {
              width: 22px;
            }
            span {
              line-height: 50px;
              cursor: pointer;
            }
          }
        }
        .commodity-statistics {
          position: absolute;
          right: 0;
          bottom: 20px;

          .items {
            position: relative;
            padding-left: 126px;
            line-height: 2;
            text-align: right;
            .items-name {
              position: absolute;
              top: 0;
              left: 0;
              width: 126px;
              white-space: nowrap;
              color: #757575;
            }
            .items-count,
            .items-discount,
            .items-money {
              color: #ff6700;
            }
          }
          .total-price {
            margin: 10px 0 0;
            .items-money {
              font-size: 30px;
              line-height: 1;
              font-style: normal;
            }
          }
        }
      }
      .clearfix::before {
        content: " ";
        display: table;
      }
      .settle-accounts {
        padding: 20px 48px;
        border-top: 2px solid #f5f5f5;
        > div {
          float: right;
        }
        a {
          float: right;
          margin-left: 30px;
        }
        .cart {
          width: 158px;
          height: 38px;
          border: 1px solid #b0b0b0;
          font-size: 14px;
          line-height: 38px;
          text-align: center;
          color: #b0b0b0;
        }
      }
    }
  }
}
</style>