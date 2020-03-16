<template>
  <div id="app">
    <div class="loginArea">
      <div class="title">
        <div class="title_logo">
          <img src="../../assets/titleIcon.png" alt />
        </div>
        <span class="title_name">黑马面面</span>
        <span class="title_line"></span>
        <span class="title_login">用户登录</span>
      </div>
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item class="login_phone" prop="phone">
          <el-input
            v-model="form.phone"
            placeholder="请输入手机号"
            prefix-icon="el-icon-user"
            class="input_phone"
          ></el-input>
        </el-form-item>
        <el-form-item class="login_password" prop="password">
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-unlock"
            class="input_phone"
          ></el-input>
        </el-form-item>
        <el-form-item class="login_code" prop="code">
          <el-row :gutter="24">
            <el-col :span="16">
              <el-input
                v-model="form.code"
                placeholder="请输入验证码"
                prefix-icon="el-icon-key"
                class="input_phone"
              ></el-input>
            </el-col>
            <el-col :span="8" class="code_img">
              <img src="../../assets/login_captcha.png" alt />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item class="checkbox" prop="ischecked">
          <el-checkbox v-model="form.ischecked">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私协议</el-link>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="login_btn" :plain="true">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onRegister" class="register_btn" :plain="true">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
        code: "",
        ischecked: [],
      },
      rules: {
        phone: [
          { required: true, message: "请输入正确的电话号码！", trigger: "blur" },
          { min: 11, max: 11, message: "手机号码格式不正确！", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码！", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符'！", trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入验证码！", trigger: "blur" },
          { min: 4, max: 4, message: "验证码格式不正确！", trigger: "blur" }
        ],
        ischecked: [
         { type: 'array', required: true, message: '请阅读有关协议并同意！', trigger: 'change' }
        ],
      }
    };
  },
  methods: {
      onSubmit(){
      this.$refs.form.validate((valid) => {
          if (valid) {
                 this.$message({
          message: '登录成功！',
          type: 'success'
        });
          } else {
            this.$message.error('登录失败！');
          }
        });
      },
      onRegister(){
          
      }
  },
};
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  display: flex;
  justify-content: space-around;
  align-items: center;

  .loginArea {
    width: 478px;
    height: 550px;
    background: rgba(245, 245, 245, 1);
    padding: 47px 42px 86px;

    .title {
      display: flex;
      align-items: center;

      .title_logo {
        height: 22px;

        img {
          height: 100%;
        }
      }
      .title_name {
        font-size: 24px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
        margin-left: 15px;
      }

      .title_login {
        font-size: 22px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
      }
      .title_line {
        width: 1px;
        height: 28px;
        background: rgba(199, 199, 199, 1);
        margin: 0 14px;
      }
    }

    .login_phone {
      margin-top: 30px;
    }

    .el-input__inner {
      height: 43px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(204, 207, 213, 1);
      border-radius: 4px;
    }

    .login_btn,
    .register_btn {
      width: 100%;
    }

    .login_code {
      margin-bottom: 10px;
    }
    .code_img {
      img {
        width: 110px;
        height: 42px;
      }
    }

    .checkbox {
      margin-top: 10px;
    }
  }
}
</style>