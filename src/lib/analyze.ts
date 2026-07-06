import type { ActionType, Workflow, WorkflowCategory } from "../types";

function detectCategory(text: string): WorkflowCategory {
  const lower = text.toLowerCase();

  if (
    lower.includes("prd") ||
    lower.includes("需求") ||
    lower.includes("产品方案") ||
    lower.includes("项目进展") ||
    lower.includes("周报")
  ) {
    return "PM Document";
  }

  if (
    lower.includes("邮件") ||
    lower.includes("email") ||
    lower.includes("回复") ||
    lower.includes("沟通")
  ) {
    return "Communication";
  }

  if (
    lower.includes("买") ||
    lower.includes("选择") ||
    lower.includes("判断") ||
    lower.includes("对比") ||
    lower.includes("是否值得")
  ) {
    return "Decision Analysis";
  }

  if (
    lower.includes("用户反馈") ||
    lower.includes("feedback") ||
    lower.includes("pain point") ||
    lower.includes("痛点")
  ) {
    return "User Feedback";
  }

  if (
    lower.includes("候选人") ||
    lower.includes("面试") ||
    lower.includes("面评") ||
    lower.includes("interview")
  ) {
    return "Interview Evaluation";
  }

  return "General";
}

function recommendAction(
  category: WorkflowCategory,
  text: string
): {
  action: ActionType;
  reason: string;
} {
  const lower = text.toLowerCase();

  if (
    lower.includes("每周") ||
    lower.includes("定期") ||
    lower.includes("固定格式") ||
    lower.includes("weekly")
  ) {
    return {
      action: "Automation",
      reason: "这个任务有固定周期和固定格式，后续适合做成自动化流程。"
    };
  }

  if (
    category === "Decision Analysis" ||
    lower.includes("拍板") ||
    lower.includes("最终决定")
  ) {
    return {
      action: "Human Review",
      reason: "这个任务涉及最终判断，AI 可以辅助分析，但不应直接替人决策。"
    };
  }

  if (
    category === "PM Document" ||
    category === "User Feedback" ||
    category === "Interview Evaluation"
  ) {
    return {
      action: "Skill",
      reason: "这个任务有稳定的分析步骤，适合沉淀成可复用 Skill。"
    };
  }

  return {
    action: "Prompt Template",
    reason: "这个任务可以先沉淀成固定 Prompt 模板，提高下次使用效率。"
  };
}

export function analyzeWorkflows(input: string): Workflow[] {
  return input
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((task, index) => {
      const category = detectCategory(task);
      const recommendation = recommendAction(category, task);

      return {
        id: `workflow-${index + 1}`,
        task,
        category,
        action: recommendation.action,
        reason: recommendation.reason
      };
    });
}