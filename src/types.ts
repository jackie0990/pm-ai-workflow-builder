export type WorkflowCategory =
  | "PM Document"
  | "Communication"
  | "Decision Analysis"
  | "User Feedback"
  | "Interview Evaluation"
  | "General";

export type ActionType =
  | "Skill"
  | "Prompt Template"
  | "Automation"
  | "Human Review";

export type Workflow = {
  id: string;
  task: string;
  category: WorkflowCategory;
  action: ActionType;
  reason: string;
};
