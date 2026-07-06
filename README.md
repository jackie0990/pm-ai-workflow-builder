# PM AI Workflow Builder

PM AI Workflow Builder is a lightweight product demo that helps product managers and AI power users turn repeated AI-assisted work into reusable prompts, skills, and workflow templates.

## Why This Exists

Many knowledge workers use AI repeatedly for similar tasks, such as:

- Reviewing PRDs
- Writing weekly updates
- Summarizing interview feedback
- Analyzing user feedback
- Drafting emails
- Comparing options and making decisions

However, these AI workflows are often one-off. Users need to explain the same context again and again, recreate prompts, and manually adjust output formats.

This project explores a simple idea:

> Repeated AI work should become reusable workflow assets.

## What It Does

The MVP allows users to:

1. Paste recent AI-assisted workflow records
2. Analyze each task with a rule-based workflow classifier
3. Categorize tasks into common PM workflow types
4. Recommend whether each task should become a Skill, Prompt Template, Automation, or Human Review process
5. Generate a reusable Skill template in Markdown

## Live Demo

The project is deployed with GitHub Pages:

https://jackie0990.github.io/pm-ai-workflow-builder/

## Core Concept

The product classifies repeated AI-assisted work into four recommended action types:

| Action | Meaning |
|---|---|
| Skill | A repeatable task with stable reasoning steps that can become a reusable AI skill |
| Prompt Template | A task that can be captured as a reusable prompt |
| Automation | A recurring or fixed-format task that may be automated |
| Human Review | A task where AI can assist, but humans should make the final decision |

## Workflow Categories

| Category | Examples |
|---|---|
| PM Document | PRD review, project updates, product planning |
| Communication | Emails, replies, stakeholder communication |
| Decision Analysis | Comparison, judgment, purchase or product decisions |
| User Feedback | Feedback analysis, pain point extraction |
| Interview Evaluation | Candidate feedback and hiring notes |
| General | Other workflow records |

## How It Works

```text
User input
  ↓
Rule-based analysis
  ↓
Workflow Map
  ↓
Select a workflow
  ↓
Generate reusable Skill template