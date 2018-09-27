<template>

    <Poptip placement="bottom" width="330">
      <Button type="primary" shape="circle">互动模式</Button>
      <div class="api" slot="content">

        <!--单一教室互动-->
        <div class="interactMode-teacher-border">
          <Button class="interactMode-teacher-classroom" v-on:click="selectedMode(1)">
            <div class="teacher-images1">
              <img :src="imgUrl1">
            </div>
            <div class="teacher-images2">
              <img :src="imgUrl2">
            </div>
          </Button>
          <div class="teacher-content-wrap">
            <p>与单教室互动</p>
            <p>老师与单一教室互动</p>
          </div>
        </div>

        <!--学生间互动-->
        <div class="interactMode-student-border">
          <Button class="interactMode-student-classroom" v-on:click="selectedMode(2)">
            <div class="student-images1">
              <img :src="imgUrl2">
            </div>
            <div class="student-images2">
              <img :src="imgUrl2">
            </div>
          </Button>
          <div class="student-content-wrap">
            <p>学生教室互动</p>
            <p>两间学生教室之间互动</p>
          </div>
        </div>

      </div>
    </Poptip>

  <!--<div class="demo-split">
    <Split v-model="split1">

      <div slot="left" class="demo-split-pane">
        <Button type="primary" shape="circle">
          <router-link to="/mode/teacher">互动模式1</router-link>
        </Button>
        &lt;!&ndash;<div class="demo-split">
          <Split v-model="split1">

            <div slot="left" class="demo-split-pane">
              <img :src="imgUrl1">
            </div>

            <div slot="right" class="demo-split-pane">
              <img :src="imgUrl2">
            </div>

          </Split>
        </div>&ndash;&gt;
      </div>

      <div slot="right" class="demo-split-pane">
        &lt;!&ndash;<div class="demo-split">
          <Split v-model="split1">

            <div slot="left" class="demo-split-pane">
              <img :src="imgUrl2">
            </div>

            <div slot="right" class="demo-split-pane">
              <img :src="imgUrl2">
            </div>

          </Split>
        </div>&ndash;&gt;
        <Button type="primary" shape="circle">
          <router-link to="/mode/students">互动模式2</router-link>
        </Button>
      </div>

    </Split>
  </div>-->
</template>

<script>
    export default {
      name: "InteractMode",
      data() {
        return {
          split1: 0.5,
          imgUrl1: require('../../assets/images/laoshi_hover_24_24.png'),
          imgUrl2: require('../../assets/images/xueshengjiaoshi_hover_26_26.png')
        }
      },
      methods: {
        selectedMode (mode) {
          let courseId = this.$route.query.courseId
          if (mode === 1) {
            //你需要接受路由的参数再跳转
            this.$router.push({
              path: '/mode/teacher/?courseId=' + courseId
            });
          }

          if (mode === 2) {
            //你需要接受路由的参数再跳转
            this.$router.push({
              path: '/mode/students/?courseId=' + courseId
            });
          }
        }
      }
    }
</script>

<style>

  .ivu-poptip-body {
    background-color: #0e0525;
    height: 350px;
  }

  .ivu-btn-primary {
    color: #fff;
    background-color: #051548;
    border-color: #2d8cf0;
    border-width: 2px;
  }

  .interactMode-teacher-border {
    float: left;
    width: 50%;
    background-color: #0e0525;
  }

  .interactMode-student-border {
    float: right;
    width: 50%;
    background-color: #0e0525;
  }

  .interactMode-teacher-classroom {
    float: left;
    background-color: #001048;
    width: 95%;
    height: 188px;
    margin-top: 10px;
  }

  .interactMode-student-classroom {
    float: right;
    background-color: #001048;
    width: 95%;
    height: 188px;
    margin-top: 10px;
  }

  .teacher-content-wrap {
    float: inherit;
    margin-top: 5px;
    margin-left: 40px;
  }

  .student-content-wrap {
    float: inherit;
    margin-top: 5px;
    margin-right: 40px;
  }

  .teacher-images1 {
    float: left;
    width: 46%;
    margin-top: 10px;
    margin-left: 5px;
  }

  .teacher-images2 {
    float: right;
    width: 46%;
    margin-top: 10px;
    margin-right: 5px;
  }

  .student-images1 {
    float: left;
    width: 46%;
    margin-top: 10px;
    margin-left: 5px;
  }

  .student-images2 {
    float: right;
    width: 46%;
    margin-top: 10px;
    margin-right: 5px;
  }

</style>
