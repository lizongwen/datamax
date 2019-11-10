<template>
  <div class="home">
    <div class="title">交通运输数据大屏</div>
    <div style="width: 735px;height: 738px;top: 76px;left: 591px;">
      <div class="tap-head">
        <span class="active">物流线路</span>
        <span>车源分布</span>
      </div>
      <div class="tap-body">
        <div class="top-total">
          累计运输量
          <span>13,526</span>
        </div>
      </div>
    </div>
    <div class="borderImg" style="width: 549px;height: 250px;top: 67px;left: 25px;"></div>
    <div class="borderImg" style="width: 549px;height: 348px;top: 330px; left: 23px;"></div>
    <div class="borderImg" style="width: 549px;height: 370px;top: 686px;left: 23px;"></div>
    <div class="borderImg borderImg1" style="width: 553px;height: 262px;top: 73px;right: 24px;"></div>
    <div class="borderImg" style="width: 553px;height: 400px;top: 341px;right: 24px;"></div>
    <div class="borderImg" style="width: 557px;height: 301px;top: 751px;right: 24px;"></div>
    <div class="borderImg" style="width: 753px;height: 305px;top: 750px;left: 575px;"></div>
    <div
      style="width: 202px;height: 193px;top: 10px;left: 85px;backgroundSize:contain;"
      :style="{backgroundImage: `url(${require('../assets/xz.png')})`}"
    ></div>
    <div class="text" style="width:125px;height: 30px;top: 109px;left: 122px;">本月新增用户</div>
    <div class="count" style="width: 134px;top: 141px;left: 113px;text-align:center">8,238</div>
    <div
      style="width:202px;height:193px;top:10px;left:297px;backgroundSize:contain;"
      :style="{backgroundImage: `url(${require('../assets/xz1.png')})`}"
    ></div>
    <div class="text" style="width: 125px;height: 30px;top: 109px;left: 334px;">本月新增用户</div>
    <div class="count" style="width: 134px;top: 141px;left: 327px;text-align:center">824</div>
    <div id="chart1" style="width: 549px;height: 106px;top: 202px;left: 24px;"></div>
    <div class="cart-title" style="width: 325px;height: 30px;top: 358px;left: 33px;">ETC卡年金额消费区间车辆分布</div>
    <div id="chart2" style="width: 549px;height: 311px;top: 388px;left: 24px;"></div>
    <div class="cart-title" style="width: 228px;height: 30px;top: 720px;left: 35px;">ETC卡充值TOP企业</div>
    <div id="chart3" style="width: 549px;height: 299px;top: 763px;left: 24px;">
      <div style="height:100%;"></div>
    </div>
    <div class="date" style="width: 296px;height: 30px;top: 22px;left: 1619px;">
      <span class="text">2019-11-10</span>
      <span class="text" style="margin-left: 16px;">15:36:27</span>
      <span class="text" style="margin-left: 16px;">星期日</span>
    </div>
    <div class="order-text" style="top: 142px;">
      本月订单量
      <span>201</span>单
    </div>
    <div class="order-text" style="top: 244px;">
      本月订单量
      <span>132</span>单
    </div>
    <div class="cart-title" style="width: 125px; height: 30px; top: 368px; left: 1361px;">线路运单情况</div>
    <div style="width: 248px; height: 36px; top: 360px; left: 1625px;">
      <div class="item-container">
        <div class="ratio"></div>
        <span class="ratio-text">运单分布</span>
      </div>
      <div class="item-container">
        <div class="ratio"></div>
        <span class="ratio-text">运输时效</span>
      </div>
    </div>
    <div id="chart6" style="width: 280px;height: 335px;top: 398px;left: 1345px;"></div>
    <div id="chart7" style="width: 280px;height: 335px;top: 398px;left: 1561px;"></div>
    <div class="cart-title" style="width: 125px; height: 30px; top: 771px; left: 1361px;">车辆类型统计</div>
    <div id="chart8" style="width:545px; height: 250px; top: 798px; left: 1345px;"></div>
    <div
      class="cart-title"
      style="width: 272px; height: 30px; top: 772px;left: 590px;"
    >IC卡到了运输证逐月申领量</div>
  </div>
</template>

<script>
// @ is an alias to /src
import "swiper/dist/css/swiper.css";
export default {
  name: "home",
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>
<style  lang="scss" scoped>
@mixin borderImg {
  overflow: hidden;
  box-sizing: border-box;
  border: 26px solid rgba(255, 255, 255, 0);
  border-image: url("../assets/border.png") 26 fill stretch;
}
.home {
  position: relative;
  height: 100%;
  background: url(../assets/bg.jpg) center/cover no-repeat;
}
.home .title {
  width: 550px;
  padding-bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  top: 17px;
  font-size: 36px;
  text-align: center;
  text-shadow: rgba(50, 123, 250, 0.6) 0px 0px 10px,
    rgba(50, 123, 250, 0.6) 0px 0px 15px, 1px 0 rgba(50, 123, 250, 0.6),
    2px 0 rgba(50, 123, 250, 0.6), 3px 0 rgba(50, 123, 250, 0.6),
    4px 0 rgba(50, 123, 250, 0.6), 5px 0 rgba(50, 123, 250, 0.6),
    rgba(50, 123, 250, 0.6) 0px 0px 5px;
  background: linear-gradient(
      to right,
      transparent 0,
      #93c9fa 50%,
      transparent 100%
    )
    no-repeat;
  background-position: bottom;
  background-size: 100% 2px;
}
.home > div {
  position: absolute;
}

.borderImg {
  @include borderImg;
}
.borderImg1 {
  border-image: url("../assets/border1.png") 26 fill stretch;
}
.text {
  text-align: center;
  font-size: 20px;
  text-shadow: rgba(50, 123, 250, 0) 0px 0px 5px,
    rgba(50, 123, 250, 0) 0px 0px 10px, rgba(50, 123, 250, 0) 0px 0px 15px;
}
.count {
  font-size: 40px;
  text-shadow: rgba(50, 123, 250, 0.6) 0px 0px 8px,
    rgba(50, 123, 250, 0.6) 0px 0px 13px;
}
.cart-title {
  text-align: center;
  font-size: 20px;
  text-shadow: rgba(50, 123, 250, 0.6) 0px 0px 5px,
    rgba(50, 123, 250, 0.6) 0px 0px 10px, rgba(50, 123, 250, 0.6) 0px 0px 15px;
}

.date span {
  font-size: 20px;
  text-shadow: rgb(140, 207, 255) 1px 1px 5px;
}
.order-text {
  left: 1370px;
  font-size: 20px;
  text-shadow: rgba(50, 123, 250, 0.6) 0px 0px 5px,
    rgba(50, 123, 250, 0.6) 0px 0px 10px, rgba(50, 123, 250, 0.6) 0px 0px 15px;
}
.order-text span {
  margin-left: 10px;
  margin-right: 10px;
  font-size: 45px;
}
.item-container {
  margin-left: 30px;
  margin-top: 10px;
  display: inline-flex;
  align-items: center;
}
.item-container .ratio {
  background: rgb(0, 79, 231);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: inline-block;
}
.item-container .ratio:last-child {
  background: rgb(23, 216, 161);
}
.item-container .ratio-text {
  margin-left: 10px;
  font-size: 16px;
}
.tap-head span {
  padding: 0 20px 10px;
  font-size: 18px;
  font-weight: bold;
  width: 100px;
  height: 50px;
  color: rgba(255, 255, 255, 0.5);
  background: linear-gradient(
      to right,
      transparent 0,
      #7d7d7d 50%,
      transparent 100%
    )
    no-repeat;
  background-position: bottom;
  background-size: 100% 2px;
}
.tap-head span.active {
  color: #fff;
  background: linear-gradient(
      to right,
      transparent 0,
      #fff 50%,
      transparent 100%
    )
    no-repeat;
  background-position: bottom;
  background-size: 100% 2px;
}
.tap-head {
  margin-top: 13px;
}
.tap-head span:last-child {
  margin-left: 20px;
}
.top-total {
  position: absolute;
  top: 82px;
  left: 25px;
  font-size: 20px;
  text-shadow: rgba(50, 123, 250, 0.6) 0px 0px 5px,
    rgba(50, 123, 250, 0.6) 0px 0px 10px, rgba(50, 123, 250, 0.6) 0px 0px 15px;
}
.top-total span {
  line-height: 44px;
  font-size: 45px;
  margin-left: 27px;
  text-shadow: rgba(50, 123, 250, 0.6) 0px 0px 8px,
    rgba(50, 123, 250, 0.6) 0px 0px 13px, rgba(50, 123, 250, 0.6) 0px 0px 18px;
}
</style>
