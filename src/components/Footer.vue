<template>
  <div class="footer container">
    <div class="footer-item">
      <ul class="footer-item-list">
        <li>
          <a href="javascript:;">预约维修服务</a>
        </li>
        <li>
          <a href="javascript:;">7天无理由退货</a>
        </li>
        <li>
          <a href="javascript:;">15天免费换货</a>
        </li>
        <li>
          <a href="javascript:;">满99元包邮</a>
        </li>
        <li>
          <a href="javascript:;">520余家售后网点</a>
        </li>
      </ul>
    </div>
    <div class="footer-item-middle">
      <div class="footer-help">
        <div>
          <dl>
            <dt>帮助中心</dt>
            <dd>
              <a href="#">账户管理</a>
            </dd>
            <dd>
              <a href="#">购物指南</a>
            </dd>
            <dd>
              <a href="#">订单操作</a>
            </dd>
          </dl>
          <dl>
            <dt>服务支持</dt>
            <dd>
              <a href="#">售后政策</a>
            </dd>
            <dd>
              <a href="#">自助服务</a>
            </dd>
            <dd>
              <a href="#">相关下载</a>
            </dd>
          </dl>
          <dl>
            <dt>线下门店</dt>
            <dd>
              <a href="#">小米之家</a>
            </dd>
            <dd>
              <a href="#">服务网点</a>
            </dd>
            <dd>
              <a href="javascript:;">授权体验店</a>
            </dd>
          </dl>
          <dl>
            <dt>关于小米</dt>
            <dd>
              <a href="#">了解小米</a>
            </dd>
            <dd>
              <a href="#">加入小米</a>
            </dd>
            <dd>
              <a href="#">投资者关系</a>
            </dd>
            <dd>
              <a href="#">企业社会责任</a>
            </dd>
            <dd>
              <a href="#">廉洁举报</a>
            </dd>
          </dl>
          <dl>
            <dt>关注我们</dt>
            <dd>
              <a href="#">新浪微博</a>
            </dd>
            <dd>
              <a href="#">官方微信</a>
            </dd>
            <dd>
              <a href="#">联系我们</a>
            </dd>
            <dd>
              <a href="#">公益基金会</a>
            </dd>
          </dl>
          <dl>
            <dt class="mb-3">特色服务</dt>
            <dd>
              <a href="#">F 码通道</a>
            </dd>
            <dd>
              <a href="#">礼物码</a>
            </dd>
            <dd>
              <a href="#">防伪查询</a>
            </dd>
          </dl>
        </div>
      </div>
      <div class="footer-tel">
        <p class="footer-tel-number">400-100-5678</p>
        <p class="footer-tel-time">8:00-18:00（仅收市话费）</p>
        <a href="#">人工服务</a>
        <div>
          <span>关注小米:</span>
          <img src="images/footer/wb.png" alt />
          <img src="images/footer/wx.png" alt />
        </div>
      </div>
    </div>
    <div class="footer-info">
      <ul>
        <li>
          <a href="#">小米商城</a>
        </li>
        <li>
          <a href="#">MIUI</a>
        </li>
        <li>
          <a href="#">米家</a>
        </li>
        <li>
          <a href="#">米聊</a>
        </li>
        <li>
          <a href="#">多看</a>
        </li>
        <li>
          <a href="#">游戏</a>
        </li>
        <li>
          <a href="#">政企服务</a>
        </li>
        <li>
          <a href="#">小米天猫店</a>
        </li>
        <li>
          <a href="#">小米集团隐私政策</a>
        </li>
        <li>
          <a href="#">小米公司儿童信息保护规则</a>
        </li>
        <li>
          <a href="#">小米商城隐私政策</a>
        </li>
        <li>
          <a href="#">小米商城用户协议</a>
        </li>
        <li>
          <a href="#">问题反馈</a>
        </li>
        <li>
          <a href="#">Select Location</a>
        </li>
      </ul>
    </div>
    <div class="footer-copyright">
      <p>
        <a href="#">© mi.com</a> 京ICP证110507号
        <a href="#">京ICP备10046444号</a>
        <a href="#">京公网安备11010802020134号</a>
        <a href="#">京网文[2020]0276-042号</a>
        <br />
        <a href="#">（京）网械平台备字（2018）第00005号</a>
        <a href="#">互联网药品信息服务资格证</a>
        <a href="#">(京)-非经营性-2014-0090</a>
        <a href="#">营业执照</a>
        <a href="#">医疗器械质量公告</a>
        <br />
        <a href="#">增值电信业务许可证</a> 网络食品经营备案（京）【2018】WLSPJYBAHF-12
        <a href="#">食品经营许可证</a>
        <br />违法和不良信息举报电话：
        <a href="#">185-0130-1238</a>
        <a href="#">知识产权侵权投诉</a> 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
      </p>
      <div>
        <img src="images/footer/truste.png" alt />
        <img src="images/footer/v-logo-2.png" alt />
        <img src="images/footer/v-logo-1.png" alt />
        <img src="images/footer/v-logo-3.png" alt />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../public/scss/color.scss";

.footer {
  a {
    color: $colorF;
    &:hover {
      color: $colorG;
    }
  }
  .footer-item-list {
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 20px 0;
    background-color: $colorA;
    border-bottom: 1px solid $colorC;
    li {
      width: 25%;
      + li {
        border-left: 1px solid $colorC;
      }
    }
  }
  .footer-item-middle {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    margin: 20px 0;
    .footer-help {
      width: 75%;
      > div {
        display: flex;
        justify-content: space-between;
        dt {
          color: $colorB;
          font-size: $fontB;
          margin: 10px 0;
        }
        dd {
          font-size: $fontA;
          margin: 15px 0;
          a {
            color: $colorJ;
          }
        }
      }
    }
    .footer-tel {
      text-align: center;
      width: 25%;
      padding: 10px 0;
      .footer-tel-number {
        color: $colorG;
        font-size: 22px;
      }
      .footer-tel-time {
        color: $colorF;
        font-size: $fontA;
        margin: 10px 0;
      }
      a {
        display: inline-block;
        font-size: $fontA;
        height: 30px;
        line-height: 30px;
        width: 120px;
        color: $colorG;
        border: 1px solid;
        transition: all 0.5s;
        &:hover {
          background-color: $colorG;
          color: $colorA;
        }
      }
      div {
        color: $colorF;
        font-size: 12px;
        img {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
  .footer-info {
    margin-bottom: 20px;
    ul {
      display: flex;
      justify-content: space-between;
      background-color: $colorA;
      li {
        + li {
          &::before {
            display: inline-block;
            content: "|";
            margin: 0 10px;
          }
          a {
            color: $colorJ;
            font-size: $fontA;
          }
        }
      }
    }
  }
  .footer-copyright {
    p {
      width: 80%;
      font-size: $fontB;
      color: $colorD;
      margin-bottom: 10px;
      a {
        color: $colorJ;
      }
    }
    img {
      vertical-align: middle;
    }
  }
}
</style>