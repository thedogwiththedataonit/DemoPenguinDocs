import Image from "next/image"
import styles from "./page.module.css"
import Link from "next/link"

export const metadata = {
  title: "DemoPenguin Documentation",
  description: "Documentation, guides, and examples for DemoPenguin",
}

const examples = [
  {
    name: "Dashboard App Demo",
    description: "A demo of a dashboard app with DemoPenguin onboarding",
    code: "https://github.com/thedogwiththedataonit/demoPenguinExampleDashboardApp",
    demo: "https://demo-penguin-example-dashboard-app.vercel.app",
    image: "https://khassd0tzvndon5l.public.blob.vercel-storage.com/1739088667760-i5q0c1elhym-A9wZZymKzlzx3ICXxL81YYM3Iidq90"
  },
  // Add more examples here if needed
]

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>DemoPenguin Documentation</h1>

      <p className={styles.titleDescription}>
        DemoPenguin is a platform that allows you to create demos of your projects. Take a look at some example demos below.
      </p>
      <div className={styles.grid}>
        {examples.map((example, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={example.image || "/placeholder.svg"}
              alt={example.name}
              width={800}
              height={800}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <h2 className={styles.projectName}>{example.name}</h2>
              <p className={styles.description}>{example.description}</p>
              <div className={styles.buttonContainer}>
                <Link className={styles.button} href={example.code} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.icon}
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  GitHub
                </Link>
                  <Link className={styles.button} href={example.demo} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.icon}
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" x2="21" y1="14" y2="3" />
                  </svg>
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

