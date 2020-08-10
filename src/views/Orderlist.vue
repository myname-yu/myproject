<template>
  <div>
    <mi-header></mi-header>
    <div class="orderlist">
      <div class="orderlist-nav container">
        <router-link to="/">首页</router-link>
        <span>/ 交易订单</span>
      </div>
      <div class="orderlist-content container">
        <div class="orderlist-content-left">
          <div>
            <p>订单中心</p>
            <ul>
              <li>
                <a href="javascript:;">我的订单</a>
              </li>
              <li>
                <a href="javascript:;">评价晒单</a>
              </li>
              <li>
                <a href="javascript:;">话费充值订单</a>
              </li>
              <li>
                <a href="javascript:;">以旧换新订单</a>
              </li>
            </ul>
          </div>
          <div>
            <p>个人中心</p>
            <ul>
              <li>
                <a href="javascript:;">我的个人中心</a>
              </li>
              <li>
                <a href="javascript:;">消息通知</a>
              </li>
              <li>
                <a href="javascript:;">购买资格</a>
              </li>
              <li>
                <a href="javascript:;">现金账户</a>
              </li>
              <li>
                <a href="javascript:;">小米礼品卡</a>
              </li>
              <li>
                <a href="javascript:;">现金券</a>
              </li>
              <li>
                <a href="javascript:;">喜欢的商品</a>
              </li>
              <li>
                <a href="javascript:;">优惠券</a>
              </li>
              <li>
                <a href="javascript:;">收货地址</a>
              </li>
              <li>
                <a href="javascript:;">红包</a>
              </li>
            </ul>
          </div>

          <div>
            <p>售后服务</p>
            <ul>
              <li>
                <a href="javascript:;">服务记录</a>
              </li>
              <li>
                <a href="javascript:;">申请服务</a>
              </li>
              <li>
                <a href="javascript:;">领取快递报销</a>
              </li>
            </ul>
          </div>
          <div>
            <p>订单中心</p>
            <ul>
              <li>
                <a href="javascript:;">账户管理</a>
              </li>
              <li>
                <a href="javascript:;">个人信息</a>
              </li>
              <li>
                <router-link to="reset">修改密码</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="orderlist-content-right">
          <div class="title">
            <h1>我的订单</h1>
            <small>请谨防钓鱼链接或诈骗电话，了解更多></small>
          </div>
          <div class="orderlist-content-right-list">
            <ul class="orderlist-content-right-ul">
              <li class="orderlist-content-right-item">
                <a href="javascript:;">全部有效订单</a>
              </li>
              <li class="orderlist-content-right-item">
                <a href="javascript:;">待支付</a>
              </li>
              <li class="orderlist-content-right-item">
                <a href="javascript:;">待收货</a>
              </li>
              <li class="orderlist-content-right-item">
                <a href="javascript:;">订单回收站</a>
              </li>
            </ul>
            <div class="header-search">
              <div>
                <input type="text" />
                <button class="btn-search">搜索</button>
              </div>
            </div>
          </div>

          <div class="commodity-list">
            <ul>
              <!-- <li class="commodity-list-item">
                            <div>
                                <div class="commodity-list-state">
                                    <p>等待付款</p>
                                    <p>应付金额：<span class="shouldPay">289.00元</span></p>
                                </div>
                                <div class="commodity-list-desc">
                                    <div class="commodity-list-desc-admin">
                                        <div class="commodity-list-desc-item">
                                            <img src="images/xiaomishan.png" alt="" class="commodity-list-desc-pic">
                                            <div>
                                                <a href="javascript:;">米家直流变频落地扇<span>1</span><span>×</span><span>白色</span></a>
                                                <p>289元 × 1</p>
                                            </div>
                                        </div>
                                        <div class="commodity-list-desc-item">
                                            <img src="images/xiaomishan.png" alt="" class="commodity-list-desc-pic">
                                            <div>
                                                <a href="javascript:;">米家直流变频落地扇<span>1</span><span>×</span><span>白色</span></a>
                                                <p>289元 × 1</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="commodity-list-btn">
                                        <a href="javascript:;">立即付款</a>
                                        <a href="javascript:;">订单详情</a>
                                        <a href="javascript:;">联系客服</a>
                                    </div>
                                </div>
                            </div>
              </li>-->
              <a href class="payNow"></a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../public/scss/color.scss";
@import "../../public/scss/base.scss";
.orderlist {
  background-color: #f5f5f5;
  padding-bottom: 50px;
  .orderlist-nav {
    height: 40px;
    line-height: 40px;
    font-size: 15px;
  }
  .orderlist-content {
    display: flex;
    justify-content: space-around;
    .orderlist-content-left {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      width: 234px;
      height: 950px;
      background-color: #ffffff;
      div {
        width: 138px;
        margin: 0 auto;
        text-align: left;
        p {
          margin: 20px 0;
        }
        ul {
          li {
            margin: 10px 0;
          }
          a {
            color: $colorJ;
          }
        }
      }
    }
    .orderlist-content-right {
      .orderlist-content-right-list {
        display: flex;
        justify-content: space-between;
        .orderlist-content-right-ul {
          display: flex;
          justify-content: space-between;
          li {
            + li {
              content: "|";
            }
            a {
              color: $colorJ;
              padding: 0 10px;
            }
          }
        }
      }
      width: 978px;
      /* height: 500px; */
      background-color: #ffffff;
      padding: 20px;
      .title {
        padding: 10px 10px 0 0;
        display: flex;
        background-color: #ffffff;
        h1 {
          font-size: 30px !important;
          color: #757575;
        }
        small {
          margin-top: 17px;
          font-size: 12px;
          color: #757575;
        }
      }
      a {
        font-size: 16px;
      }
      .commodity-list {
        .commodity-list-item {
          > div {
            &:nth-child(1) {
              border: 1px solid #ff6700;
            }
          }
          margin-top: 20px;
          .commodity-list-state {
            padding: 20px 30px;
            background-color: #fffaf7;
            border-bottom: 1px solid #ff6700;
            > p {
              &:nth-child(1) {
                color: #ff6700;
                font-size: 20px;
              }
              .shouldPay {
                color: #ff6700;
                font-size: 20px;
              }
            }
          }
          .commodity-list-desc {
            display: flex;
            justify-content: space-between;
            padding: 20px 30px;
            .commodity-list-desc-item {
              display: flex;
              .commodity-list-desc-pic {
                width: 80px;
                height: 80px;
              }
              > div {
                padding-top: 10px;
                > div {
                  padding-top: 50px;
                }
              }
            }
            .commodity-list-btn {
              padding-top: 30px;
              a {
                display: block;
                width: 120px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                margin: 10px 0;
                &:nth-child(1) {
                  background-color: #ff6700;
                  color: $colorA;
                  &:hover {
                    color: $colorA;
                  }
                }
                + a {
                  border: 1px solid #757575;
                  color: #757575;
                }
              }
            }
          }
        }

        .shouldPay {
          color: #ff6700;
          font-size: 20px;
        }
      }
    }
  }
}
</style>