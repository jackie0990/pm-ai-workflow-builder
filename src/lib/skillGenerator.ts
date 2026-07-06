import type { Workflow } from "../types";

export function generateSkill(workflow: Workflow): string {
  const title = getSkillTitle(workflow);

  return `# ${title}

## 适用场景

当用户需要处理类似任务时使用：

"${workflow.task}"

## 目标

帮助用户把这个任务从一次性 AI 提问，沉淀成可复用的工作流。

## 输入信息

请用户提供：

- 背景信息
- 原始材料
- 目标输出
- 限制条件
- 判断标准

## 分析步骤

1. 先总结用户要解决的问题
2. 提取关键信息
3. 识别风险、遗漏和不确定点
4. 按结构化方式输出结果
5. 给出下一步建议
6. 标注哪些部分需要人工判断

## 输出格式

### 1. 总体总结

### 2. 关键发现

### 3. 风险和遗漏

### 4. 建议动作

### 5. 需要人工确认的问题

## 使用建议

建议动作：${workflow.action}

原因：${workflow.reason}
`;
}

function getSkillTitle(workflow: Workflow): string {
  switch (workflow.category) {
    case "PM Document":
      return "PM Document Review Skill";
    case "Communication":
      return "Communication Writing Skill";
    case "Decision Analysis":
      return "Decision Analysis Skill";
    case "User Feedback":
      return "User Feedback Analysis Skill";
    case "Interview Evaluation":
      return "Interview Evaluation Skill";
    default:
      return "General Workflow Skill";
  }
}