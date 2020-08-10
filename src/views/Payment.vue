<template>
  <div>
    <div class="payment-content">
      <div class="container">
        <div class="container-item">
          <div class="payment-content-success">
            <span>√</span>
          </div>
          <div class="payment-content-desc">
            <h4>订单提交成功！去付款咯～</h4>
            <p>
              请在
              <span class="mytimer"></span> 完成支付, 超时后将取消订单
            </p>
            <p>
              收货信息 ：
              <span class="receiver">林先生</span>
              <span class="cellphone">188****7226</span>
              <span class="province">广东省</span>
              <span class="city">广州市</span>
              <span class="county">越秀区</span>
              <span class="address">北京街道 10086房间</span>
            </p>
          </div>
          <div class="payment-content-price">
            <!-- <p>应付总额：<span>99</span>元</p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../../public/scss/base.scss";
@import "../../public/scss/color.scss";
.payment-content {
  background-color: #f5f5f5;
  padding: 20px;
  .container-item {
    background-color: #ffffff;
    padding: 30px;
    display: flex;
    .payment-content-success {
      width: 100px;
      height: 100px;
      border: springgreen 1px solid;
      border-radius: 50%;
      text-align: center;
      line-height: 100px;
      font-size: 80px;
      color: springgreen;
    }
    .payment-content-desc {
      margin-left: 30px;
      .mytimer {
        color: $colorG;
      }
    }
    .payment-content-price {
      margin-left: 350px;
    }
  }
}
</style>