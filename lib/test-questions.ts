export interface TestQuestion {
  id: number
  text: string
  category: "ei" | "sn" | "tf" | "jp"
  options: {
    value: string
    text: string
  }[]
}

export const testQuestions: TestQuestion[] = [
  // E vs I 问题
  {
    id: 1,
    text: "在社交场合，你通常：",
    category: "ei",
    options: [
      { value: "e", text: "与许多不同的人交谈，包括陌生人" },
      { value: "i", text: "只与你已经认识的几个人交谈" },
    ],
  },
  {
    id: 2,
    text: "以下哪种情况会让你感到更有活力：",
    category: "ei",
    options: [
      { value: "e", text: "与他人相处" },
      { value: "i", text: "独处时间" },
    ],
  },
  {
    id: 3,
    text: "在项目工作中，你更喜欢：",
    category: "ei",
    options: [
      { value: "e", text: "边工作边与他人讨论想法" },
      { value: "i", text: "在分享前独自思考想法" },
    ],
  },
  {
    id: 4,
    text: "你更愿意在空闲日：",
    category: "ei",
    options: [
      { value: "e", text: "参加有很多人的社交活动" },
      { value: "i", text: "在安静的地方，独自或与一两个亲密朋友在一起" },
    ],
  },
  {
    id: 5,
    text: "当你遇到问题时，你通常会：",
    category: "ei",
    options: [
      { value: "e", text: "与他人讨论解决" },
      { value: "i", text: "自己思考解决" },
    ],
  },

  // S vs N 问题
  {
    id: 6,
    text: "你更感兴趣的是：",
    category: "sn",
    options: [
      { value: "s", text: "实际和真实的事物" },
      { value: "n", text: "可能性和理论" },
    ],
  },
  {
    id: 7,
    text: "你更倾向于关注：",
    category: "sn",
    options: [
      { value: "s", text: "细节和事实" },
      { value: "n", text: "大局和想法之间的联系" },
    ],
  },
  {
    id: 8,
    text: "你更可能信任：",
    category: "sn",
    options: [
      { value: "s", text: "你的直接经验和观察" },
      { value: "n", text: "你的直觉和印象" },
    ],
  },
  {
    id: 9,
    text: "你更喜欢的指示是：",
    category: "sn",
    options: [
      { value: "s", text: "具体而详细的" },
      { value: "n", text: "留有解释和创造空间的" },
    ],
  },
  {
    id: 10,
    text: "你更关注的是：",
    category: "sn",
    options: [
      { value: "s", text: "当下正在发生的事" },
      { value: "n", text: "未来可能发生的事" },
    ],
  },

  // T vs F 问题
  {
    id: 11,
    text: "做决定时，你通常：",
    category: "tf",
    options: [
      { value: "t", text: "首先考虑逻辑和一致性" },
      { value: "f", text: "首先考虑人和特殊情况" },
    ],
  },
  {
    id: 12,
    text: "你更容易被说服的是：",
    category: "tf",
    options: [
      { value: "t", text: "逻辑合理的论证" },
      { value: "f", text: "对价值观和和谐的有说服力的呼吁" },
    ],
  },
  {
    id: 13,
    text: "你更看重：",
    category: "tf",
    options: [
      { value: "t", text: "真相，即使它可能伤害感情" },
      { value: "f", text: "委婉和避免不必要的冲突" },
    ],
  },
  {
    id: 14,
    text: "你更喜欢给予的反馈是：",
    category: "tf",
    options: [
      { value: "t", text: "直接而坦率的" },
      { value: "f", text: "温和而鼓励的" },
    ],
  },
  {
    id: 15,
    text: "在冲突中，你更关注：",
    category: "tf",
    options: [
      { value: "t", text: "找到最符合逻辑的解决方案" },
      { value: "f", text: "维持和谐并尊重感受" },
    ],
  },

  // J vs P 问题
  {
    id: 16,
    text: "你更喜欢：",
    category: "jp",
    options: [
      { value: "j", text: "事情已经决定并解决" },
      { value: "p", text: "保持选择开放" },
    ],
  },
  {
    id: 17,
    text: "你倾向于：",
    category: "jp",
    options: [
      { value: "j", text: "提前计划并按日程行事" },
      { value: "p", text: "随性而为，随机应变" },
    ],
  },
  {
    id: 18,
    text: "你觉得更满足的是：",
    category: "jp",
    options: [
      { value: "j", text: "完成一个项目并将其从清单上划掉" },
      { value: "p", text: "开始一个项目并看看它会引向何方" },
    ],
  },
  {
    id: 19,
    text: "你更喜欢的环境是：",
    category: "jp",
    options: [
      { value: "j", text: "有结构和组织的" },
      { value: "p", text: "灵活和适应性强的" },
    ],
  },
  {
    id: 20,
    text: "你在什么情况下感到更舒适：",
    category: "jp",
    options: [
      { value: "j", text: "有一个明确的计划" },
      { value: "p", text: "可以随遇而安" },
    ],
  },
]

