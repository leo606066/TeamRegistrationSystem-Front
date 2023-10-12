<template>
    <div>
      <p class="footer">{{ getOneGreatWord() }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Footer',
    methods: {
      // 生成随机励志句
      getOneGreatWord(): string {
        const footerContextList: string[] = [
        '其实所有被千夫所指的困难，都是为了淘汰掉懦夫，仅此而已。',
        '镜子很脏的时候，我们并不会误以为是自己的脸脏。那別人随口说出糟糕的话时，我们也不用觉得糟糕的是我们自己',
        '我依旧敢和生活顶撞，敢在逆境里撒野，直面生活的污水，永远乐意为新的一轮月亮和日落欢呼。',
        '坚持就是胜利！',
        '发光不是太阳的权利，每个人都可以熬过最苦的日子，去做最酷的自己。',
        '风可以吹走一大张白纸，却无法吹走一只蝴蝶，因为生命的力量不在于顺从。',
        '太阳下山夜里也有灯打开，你看这世界不坏。',
        '如果担心现在才开始学某样东西，年纪已经太大的话，不妨这样想：就算因此放弃不学，年纪还是照样会变大的。',
        '命运只负责洗牌，出牌的永远是我们自己。',
        '不要以为自己总在谷底。如果你停止，就是谷底。如果你还在继续，就是上坡。',
        '人生意义到底是什么呢？  吃得好一点，睡得好一点，多玩玩，不羡慕别人，不听管束，多储蓄人生经验，死而无憾，这就是最大的意义吧，一点也不复杂。',
        '奋斗者是最孤独的，你必得隔绝身边一些扰耳的声音，才能心无旁骛的去成功。',
        '“前方一片漆黑，什么也看不见。”“也不是啊，天亮了很美的。”',
        '等风来不如追风去。',
        '心如花木，向阳而生。',
        '没有期待的日子反而顺顺利利。',
        '落俗不可避免，浪漫至死不渝。',
        '所谓无底深渊，下去，也是前程万里。',
        ];
  
        // 生成随机数 0-40
        const num = Math.floor(Math.random() * footerContextList.length);
        return footerContextList[num];
      }
    }
  });
  </script>
  
  <style scoped>
  .footer {
    text-align: center;
    font:icon;
  }
  </style>
 