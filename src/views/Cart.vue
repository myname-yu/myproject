<template>
  <div>
    <div class="mi-cart" id="pay">
      <div class="cart-container container">
        <div class="mi-cart-empty">
          <div class="bg-mi-cart-empty">
            <h2>您的购物车还是空的！</h2>
            <router-link to="/list" class="login-buy">马上去购物</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../public/scss/color.scss";
@import "../../public/scss/base.scss";
.mi-cart {
  padding: 38px 0;
  background-color: #f5f5f5;
  .mi-cart-empty {
    height: 273px;
    margin: 65px 0px 130px;
    padding: 1px 0 0 558px;
    color: #b0b0b0;
    background: url(../../public/images/shopcar/cart-empty.png) no-repeat 124px
      0;
    overflow: hidden;
    box-sizing: border-box;
    h2 {
      margin: 50px 0 5px;
      color: #b0b0b0;
      font-size: 36px;
    }
    .login-buy {
      display: inline-block;
      width: 172px;
      height: 50px;
      background-color: #ff6700;
      color: #ffe7ff !important;
      text-align: center;
      line-height: 50px;
      margin-right: 10px;
    }
  }
}
</style>