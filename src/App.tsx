import { useState } from "react";
import "./styles.css";
import type { Workflow } from "./types";
import { analyzeWorkflows } from "./lib/analyze";
import { generateSkill } from "./lib/skillGenerator";

const sample = `帮我 review PRD，找风险和遗漏
帮我总结项目进展，写成周报
帮我整理候选人面评，输出推荐意见
帮我分析用户反馈，提炼 top pain points
帮我写英文邮件回复合作方`;

function App() {
  const [input, setInput] = useState(sample);
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(null);

  function handleAnalyze() {
    const result = analyzeWorkflows(input);
    setWorkflows(result);
    setSelectedWorkflow(result[0] ?? null);
  }

  function handleCopy() {
    if (!selectedWorkflow) return;
    navigator.clipboard.writeText(generateSkill(selectedWorkflow));
    alert("Skill copied to clipboard.");
  }

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">AI Workflow Tool</p>
        <h1>PM AI Workflow Builder</h1>
        <p className="subtitle">
          Turn repeated AI-assisted PM work into reusable prompts, skills, and workflow templates.
        </p>
      </section>

      <section className="card">
        <h2>1. Paste your AI workflow records</h2>
        <p className="hint">
          One task per line. For example: PRD review, weekly update, interview evaluation, user feedback analysis.
        </p>

        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={8}
        />

        <button onClick={handleAnalyze}>Analyze Workflows</button>
      </section>

      <section className="card">
        <h2>2. Workflow Map</h2>

        {workflows.length === 0 ? (
          <p className="empty">Click Analyze to generate your workflow map.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Category</th>
                <th>Recommended Action</th>
                <th>Reason</th>
              </tr>
            </thead>

            <tbody>
              {workflows.map((workflow) => (
                <tr
                  key={workflow.id}
                  onClick={() => setSelectedWorkflow(workflow)}
                  className={
                    selectedWorkflow?.id === workflow.id ? "selected" : ""
                  }
                >
                  <td>{workflow.task}</td>
                  <td>{workflow.category}</td>
                  <td>{workflow.action}</td>
                  <td>{workflow.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {selectedWorkflow && (
        <section className="card">
          <div className="skillHeader">
            <h2>3. Generated Skill</h2>
            <button onClick={handleCopy}>Copy Skill</button>
          </div>

          <pre>{generateSkill(selectedWorkflow)}</pre>
        </section>
      )}
    </main>
  );
}

export default App;