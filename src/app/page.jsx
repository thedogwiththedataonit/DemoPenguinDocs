import { redirect } from 'next/navigation'

export const metadata = {
  title: "DemoPenguin Documentation",
  description: "Documentation, guides, and examples for DemoPenguin",
}


export default function IndexPage() {
  redirect('/docs')
  
}

