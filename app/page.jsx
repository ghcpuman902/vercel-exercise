'use client';

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


export default function Home() {
    const answerTexts = `
# Vercel Customer Success Engineer Exercise

This is Hao-Tsun Kuo's answer for the Take Home Assessment for Customer Success Engineer at Vercel.

## Favourite and Least Favourite Support Tasks

### Favourite Tasks
List and briefly explain your 5 most favourite support tasks from the provided list.
* Respond to 50+ support requests via email every day
* Dig through logs to troubleshoot a customer's broken project
* Write and maintain support articles and docs pages
* Create video tutorials to help teach users a specific feature or use case
* Help resolve billing issues for customers
* Analyze hundreds of support tickets to spot trends the product team can use
* Identify, file (and, where possible, resolve) bugs in private and public Vercel/Next.js repos on GitHub
* Manage a support team 
* Find and recruit teammates for the support team
* Help train and onboard new support teammates
* Run ticket review sessions to make sure tone is consistent
* Work with 3rd party partners to track down a tricky situation for a joint customer
* Work with the product team to develop a new feature based on feedback from customers
* Respond to queries on Twitter, Reddit, Hacker News and other 3rd party sites
* Act as a dedicated CSE for a handful of key customers to ensure their success using Vercel
* Work with engineering teams during incidents and provide updates to internal and external stakeholders
* Scheduling time-off coverage and collaborating as part of a growing cohesive support team 
* Engage multiple users at once in a public discussion, to answer their questions and troubleshoot problems
* Work with people to figure out if Vercel is suitable for their use case

1. **[Task Name]**: [Your brief explanation here]
2. **[Task Name]**: [Your brief explanation here]
3. **[Task Name]**: [Your brief explanation here]
4. **[Task Name]**: [Your brief explanation here]
5. **[Task Name]**: [Your brief explanation here]

### Least Favourite Tasks
List and briefly explain your 5 least favourite support tasks from the provided list.

1. **[Task Name]**: [Your brief explanation here]
2. **[Task Name]**: [Your brief explanation here]
3. **[Task Name]**: [Your brief explanation here]
4. **[Task Name]**: [Your brief explanation here]
5. **[Task Name]**: [Your brief explanation here]

## Learning and Growth

### What do you want to learn or do more of at work?
[Your answer here]

## Problem-Solving

### Describe how you solved a challenge or technical issue in a previous role.
[Your answer here]

## Technical Decision Making

### When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?
[Your answer here]

## Troubleshooting Approach

### Troubleshooting a New Framework or Technology
[Your answer here]

### Responding to a Frustrated Customer
[Your answer here]

## Specific Customer Requests

### Redirecting a Path to a Different URL
[Your reply to the customer here]

### Preventing a Site from Being Indexed by Search Engines
[Your reply to the customer here]

## Common Customer Problems

### Most Common Problems and Solutions
[Your answer here]

## Feedback on the Exercise

### Suggestions for Improvement
[Your suggestions here]
    `;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="p-8 max-w-[800px]">
            <Markdown
                components={{
                    h1(props) {
                        const { node, ...rest } = props
                        return <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" {...rest} />
                    },
                    h2(props) {
                        const { node, ...rest } = props
                        return <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0" {...rest} />
                    },
                    h3(props) {
                        const { node, ...rest } = props
                        return <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight" {...rest} />
                    },
                    h4(props) {
                        const { node, ...rest } = props
                        return <h4 className="scroll-m-20 text-xl font-semibold tracking-tight" {...rest} />
                    },
                    p(props) {
                        const { node, ...rest } = props
                        return <p className="leading-7 [&:not(:first-child)]:mt-6" {...rest} />
                    },
                    // Mapping table to a div wrapping a table tag with Tailwind styles
                    table(props) {
                        const { node, ...rest } = props;
                        return (
                            <div className="my-6 w-full">
                                <table className="w-full" {...rest} />
                            </div>
                        );
                    },
                    thead(props) {
                        const { node, ...rest } = props;
                        return <thead {...rest} />;
                    },
                    tbody(props) {
                        const { node, ...rest } = props;
                        return <tbody {...rest} />;
                    },
                    tr(props) {
                        const { node, ...rest } = props;
                        return <tr className="m-0 border-t p-0 even:bg-muted" {...rest} />;
                    },
                    th(props) {
                        const { node, ...rest } = props;
                        return (
                            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right" {...rest} />
                        );
                    },
                    td(props) {
                        const { node, ...rest } = props;
                        return (
                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right" {...rest} />
                        );
                    },
                    ul(props) {
                        const { node, ...rest } = props;
                        return <ul className="my-3 ml-6 list-disc [&>li]:mt-2" {...rest} />;
                    },
                    ol(props) {
                        const { node, ...rest } = props;
                        return <ol className="my-3 ml-6 list-disc [&>li]:mt-2" {...rest} />;
                    },
                }}
                remarkPlugins={[remarkGfm]}>{answerTexts}</Markdown>
            </div>
        </main>
    );
}
