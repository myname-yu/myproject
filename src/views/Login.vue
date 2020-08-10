<template>
  <div>
    <div class="main">
      <div class="wrapper">
        <!-- 登录框盒子 -->
        <div class="login_box">
          <!-- 登录框盒子顶部tab -->
          <div class="login_tab">
            <button type="button" class="login_tab1 active">帐号登录</button>
            <span class="line"></span>
            <button type="button" class="login_tab2">扫码登录</button>
          </div>
          <!--登录框 输入表单form1(账号登陆) -->
          <form action="#" class="form1">
            <div class="input_wrapper input_wrapper1">
              <input type="text" class="name" placeholder="邮箱/手机号码/小米ID" id="loginUname" />
            </div>
            <div class="input_wrapper input_wrapper2">
              <input type="password" class="pwd" placeholder="密码" id="loginUpwd" />
            </div>

            <div class="msg">
              <img src="images/login/err.png" alt />
              <span></span>
            </div>
            <div class="btn-wrapper">
              <button type="button" id="uname-login-btn">登录</button>
            </div>

            <div class="other_panel">
              <!-- 手机登录和注册 -->
              <div>
                <div class="sms_link">
                  <a href="javascript:void(0);" id="phone_login">手机短信登录/注册</a>
                </div>
                <div class="register_link">
                  <a href="register.html">立即注册</a>
                  <span>|</span>
                  <a href="reset.html">忘记密码？</a>
                </div>
              </div>
              <!-- 其他登录方式 -->
              <div class="other_link">
                <fieldset>
                  <legend>其他方式登录</legend>
                </fieldset>
                <div class="link_icon">
                  <a class="qq">
                    <img src="images/login/qq.png" alt />
                  </a>
                  <a class="weibo">
                    <img src="images/login/wb.png" alt />
                  </a>
                  <a class="zfb">
                    <img src="images/login/zfb.png" alt />
                  </a>
                  <a class="weixin">
                    <img src="images/login/wechat.png" alt />
                  </a>
                </div>
              </div>
            </div>
          </form>
          <!--登录框 输入表单form2，手机登陆，默认隐藏-->
          <form action="#" class="form2">
            <div class="input_wrapper input_wrapper1">
              <label class="label">+86</label>
              <input type="text" class="name" placeholder="手机号码" />
            </div>
            <div class="input_wrapper input_wrapper2">
              <input type="password" class="pwd" placeholder="短信验证码" id="verif-code" />
              <label class="label">获取验证码</label>
            </div>
            <div class="msg">
              <img src="images/login/err.png" alt />
              <span></span>
            </div>
            <div class="btn-wrapper">
              <button type="button" id="phone-login-btn">登录</button>
            </div>

            <div class="other_panel">
              <!-- 手机登录和注册 -->
              <div>
                <div class="sms_link">
                  <a href="javascript:void(0);" id="uname_login">用户名密码登录</a>
                </div>
                <div class="register_link">
                  <a href>收不到验证码？</a>
                </div>
              </div>
              <!-- 其他登录方式 -->
              <div class="other_link">
                <fieldset>
                  <legend>其他方式登录</legend>
                </fieldset>
                <div class="link_icon">
                  <a class="qq">
                    <img src="images/login/qq.png" alt />
                  </a>
                  <a class="weibo">
                    <img src="images/login/wb.png" alt />
                  </a>
                  <a class="zfb">
                    <img src="images/login/zfb.png" alt />
                  </a>
                  <a class="weixin">
                    <img src="images/login/wechat.png" alt />
                  </a>
                </div>
              </div>
            </div>
          </form>

          <!-- 扫码登陆tab内容框（默认隐藏） -->
          <div class="login_qr">
            <img src="images/login/erweima.png" alt />
            <p>
              使用
              <span>小米商城APP</span>扫一扫
              <br />小米手机可打开「设置」>「小米帐号」扫码登录
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>