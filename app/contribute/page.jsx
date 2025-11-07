export const metadata = {
  title: "How to Contribute to SkillRahi",
  description: "How to contribute to SkillRahi — A complete guide",
};

const Contribute = () => {
  return (
    <div className="prose mx-auto py-10">
      <h1>How to Contribute to SkillRahi</h1>

      <p>SkillRahi is an open-source, community-driven CS learning platform.</p>

      <p>
        We want students & developers from anywhere in the world to help us
        create:
      </p>

      <ul>
        <li>Lessons</li>
        <li>Mini-projects</li>
        <li>Challenges</li>
        <li>Explanations</li>
      </ul>

      <p>You don’t need to know Git or Pull Requests.</p>

      <p>
        We accept contributions using <strong>GitHub Issues</strong>.
      </p>

      <hr />

      <h2>How Lesson Contribution Works</h2>

      <ol>
        <li>You write your lesson in Markdown format</li>
        <li>You go to our GitHub issues page</li>
        <li>
          You create an issue using the template{" "}
          <strong>“Submit a Lesson”</strong>
        </li>
        <li>We review your submission</li>
        <li>We add it to the SkillRahi database</li>
        <li>Your name will appear on the “Contributors” page</li>
      </ol>

      <hr />

      <h2>Lesson Format Guide</h2>

      <p>Every lesson should follow this structure:</p>

      <pre>
        <code>{`# Lesson Title

## What You Will Learn
- point 1
- point 2
- point 3

## Explanation
(write clear explanation here)

## Example Code
\`\`\`js
// code here
`}</code>
      </pre>
      <h2>Mini Assignment</h2>
      <p>Give 1 small assignment for students to do.</p>

      <h2>Resources (optional)</h2>
      <p>links</p>
      <hr />

      <h2>What Topics Are Accepted?</h2>
      <ul>
        <li>Next.js</li>
        <li>React</li>
        <li>JavaScript basics</li>
        <li>APIs</li>
        <li>MongoDB</li>
        <li>NODE.js basics</li>
        <li>Modern web development concepts</li>
        <li>CS concepts</li>
      </ul>
      <p>If you’re not sure — just submit. We will guide you.</p>
      <hr />

      <h2>Your Contribution = Your Public Credit</h2>
      <p>Every accepted contributor gets:</p>
      <ul>
        <li>their name listed on our official contributors page</li>
        <li>recognition in GitHub repo</li>
        <li>reference link you can show in CV</li>
      </ul>

      <h2>Start Contributing Now</h2>
      <p>
        👉{" "}
        <a
          href="https://github.com/amir-mansoor/skillrahi/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/amir-mansoor/skillrahi/issues
        </a>
      </p>
      <p>Click "New Issue" → choose "Submit a Lesson".</p>
    </div>
  );
};

export default Contribute;
