<template>
     <div class="formsumbit" :style="{width:formwidth}">
         <input type="text" placeholder="请输入邮箱或手机">
         <input type="password" placeholder="请输入密码">
          <div class="form-pass"><span><input type="checkbox">记住用户名</span>  <span><a href="#">忘记密码</a></span></div>
          <input type="sumbit" value="sumbit" class="sub-btn">
     </div>
</template>

<script>
export default {
    name:'formSumbit',
    props:['formwidth']

}
</script>

<style lang="less" scpoed>
.formsumbit .sub-btn{
    font-size: 1.125rem;
    color: #fff;
    background-color: #000;
    border: none;
    text-align: center;
}
.formsumbit>input{
    width: 100%;
    height: 40px;
    margin-bottom: 30px;
}
 .form-pass{
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        input{
            width: 15px;
            height: 15px;
            border: 1px solid #000;
        }

        span>a{
            color: #000;
        }
 input[type=checkbox]{
     cursor: pointer;
     position: relative;
     width: 15px;
     height: 15px;
     font-size: 14px;
}

input[type=checkbox]::after{
     position: absolute;
     top: 0;
     background-color: #fff;
     border: 1px solid #000;
     color: #fff;
     width: 15px;
     height: 15px;
     display: inline-block;
     visibility: visible;
     padding-left: 0px;
     text-align: center;
     content: ' ';
     border-radius: 3px
}
        
input[type=checkbox]:checked::after{
     content: "✓";
     font-size: 12px;
     font-weight: bold;
     background-color: #cb9864;
     border: none;


}

    }
</style>