'use client';

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


export default function Home() {
    const answerTexts = `
# Vercel Customer Success Engineer Exercise

This is Hao-Tsun Kuo's answer for the Take Home Assessment for Customer Success Engineer at Vercel.

## 1. Favourite and Least Favourite Support Tasks

### Favourite Tasks
List and briefly explain your 5 most favourite support tasks from the provided list.

1. **Work with engineering teams during incidents and provide updates to internal and external stakeholders**: I find working on real-time, ongoing events challenging and exciting, knowing every second of my work is helping customers avoid potential losses.
2. **Analyse hundreds of support tickets to spot trends the product team can use**: Naturally, I like to spot patterns in things, and it's even better knowing this can help shape the future product
3. **Act as a dedicated CSE for a handful of key customers to ensure their success using Vercel**: I'm proud of my ability to build deep relationships with people, both in my personal and professional life. 
4. **Dig through logs to troubleshoot a customer's broken project**: There's no broken project, just projects that are waiting to be healed with my log digging skills ; )  On a serious note, usually a broken project started with the idea that carries people's hope, and I understand that frustration.
5. **Engage multiple users at once in a public discussion to answer their questions and troubleshoot problems**: I love exploring how to help more people in less time.

### Least Favourite Tasks
List and briefly explain your 5 least favourite support tasks from the provided list.

1. **Create video tutorials to help teach users a specific feature or use case**: While I enjoy watching videos to learn, producing videos myself is slow and not my preferred way of helping others.
2. **Respond to queries on Twitter, Reddit, Hacker News and other third-party sites**: Context can often be lost in short burst conversations; I often find myself giving more detailed, documentation-style explanations, which might not suit social media sites.
3. **Run ticket review sessions to ensure consistency of tone**: The task's description makes it not feel very technically challenging and is highly likely to be done by an AI eventually.
4. **Help resolve billing issues for customers**: Always happy to help any customers, although this sounds less technical and more reapting.
5. **Manage a support team**: Management is a very useful skill, and I would love to explore it. It's here only because, compared to other tasks, it slightly involves less hands-on problem-solving.

## 2. What do you want to learn or do more of at work?
I want to learn more about how Vercel, a large company that serves thousands of high-traffic sites, works, both technically and in terms of the decision-making process. I understand Vercel as one of the few community-driven private companies that is profiting and doing well. I also want to interact with other large third-party service providers or large customers and understand their ways of working. 

## 3. Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful?
I previously worked as a project manager, and helping customers was a big part. A significant issue we had was trying to determine why the AR glasses would keep on having a damaged display on one eye. I worked with the engineering team to identify potential reasons (heat / overloaded current, etc.). I evaluated the cost of the test and fix for each potential reason to figure out a plan to confirm if each potential reason was indeed causing the issue, implement the fix and run the same test plus an objective test that's close to customer env to make sure it is fixed or reduced the probability significantly. We finally would ask the customer to test and collect feedback before taking the issue off. 

## 4. When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?
- The Edge Function is good for light requests that are customised to each visitor; it's also good for things that need to be close to the visitor, such as API requests to a third party that also uses a distributed deployment structure.
- Serverless Function is suitable when the limited API and npm support of edge is insufficient, but the developer still wants the advantage of a distributed network. It handles form submissions better, like profile image processing and file uploading.
- Edge middleware is suitable when used as a layer to render conditionally before any static site. It can show different statically generating pages based on the user's authentication state and geolocation info

## 5. Imagine a customer writes in requesting help with a build issue on a framework or technology that you've not seen before. How would you begin troubleshooting this and what questions would you ask the customer to understand the situation better?
I would start by ensuring the issue does not originate from some other factor independent of the framework, like server or service down, deployment issue, not updating to the latest version, etc. At the same time, start reading the doc of the given framework/technology and try to see if some common issues from a framework I'm more familiar with can also happen here. On top of that, it's often the case that people need some guidance and can solve problems on their own before they are answered, so I often just be patient, listen, and learn fast. When all things fail, I would escalate to someone better equipped with the knowledge to help.

## 6. The customer from question 5 replies to your response with the below: “I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so just fix it for me instead of asking me questions.” Please write a follow-up reply to the customer.
"Hi, I feel your frustration. I have double chekced to make sure there's no service down on our side and checked internally to make sure this is not a known issue of our platform. Please allow more time for me to figure out this with you, I just need to gather a few more questions to rule out a few more possibilities before I can escalate it. I thank you in advance for your understanding. "


## 7. A customer writes in to the Helpdesk asking "How do I do a redirect from the /blog path to https://example.com?" Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.
"Hi, assuming you are using the Next.js app router, you can create \`route.ts\` file in the \`app/blog/\` folder, and use the following code:

\`\`\`typescript
import { redirect } from 'next/navigation';
 
export const runtime = 'edge';
 
export async function GET(request: Request) {
  redirect('https://example.com');
}
\`\`\`

This will create an edge runtime to handle any visit (a GET request) to the /blog route and redict them to https://example.com. 

The edge runtime make sure this code will be pushed to a distributed network globally and run super fast for visitors anywhere in the world.

To learn more about:
- [Redirects](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#examples)
- [Route Handler](https://vercel.com/docs/edge-network/redirects#adding-redirects)

Please let me know if you are using other framework or there's anything unclear in my response.

Thank you!
"

## 8. A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.
"
To prevent search engines from indexing your site on Next.js, follow these steps:

1. Create a \`robots.ts\` file in the root directory of your Next.js project.
2. Add this code to \`app/robots.ts\`:

\`\`\`typescript
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/',
      },
    ],
    sitemap: 'https://yourdomain.com/sitemap.xml',
  }
}
\`\`\`

This tells all crawlers not to index your site. You can adjust it for specific search engines by changing the \`userAgent\`.

If the robot.txt didn't work, you can also use metadata in the root layout file (e.g., \`app/layout.ts\` or \`.tsx\`) for granular crawler instructions:

\`\`\`typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
\`\`\`

This approach prevents indexing globally but customizes for Googlebot. Let me know if you're using a different framework or have any questions!
"

## 9. What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?
Many problems happen when people can't find what they need in the documentation, so improving the documentation's wording, searching, and structure would probably help a lot. It's also often the case that people get frustrated with how unique their problems are, so having an AI bot that helps break that problem into smaller problems with known solutions would be very helpful.
Personally, I would try to help my customer form a good hobby of referencing the documentation and recognise the potential of escalating the problem to the product team.

## 10. How could we improve or alter this familiarisation exercise?
I would just merge the text and the pdf a little so it is less repetitive; I worried I'd miss some information somewhere. The exact text was in the email, in the pdf, on Glassdoor. 

_Thanks for reading to the end!_
    `;

    return (
        <main className="flex min-h-screen flex-col p-10">
            <div className="w-auto max-w-[800px] m-auto">
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
                        code(props) {
                            const { node, ...rest } = props;
                            return <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold" {...rest} />;
                        },
                        pre(props) {
                            const { node, ...rest } = props;
                            return <pre className="rounded border border-stone-200 dark:border-stone-600 bg-stone-100 dark:bg-stone-800 my-2 p-2 font-mono text-sm font-semibold" {...rest} />;
                        },
                        a(props) {
                            const { node, ...rest } = props;
                            return <a className="underline text-bold" {...rest} />;
                        },
                    }}
                    remarkPlugins={[remarkGfm]}>{answerTexts}</Markdown>
            </div>
        </main>
    );
}
