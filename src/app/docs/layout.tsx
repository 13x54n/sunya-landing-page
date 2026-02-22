import type { Metadata } from "next"
import { AppSidebar } from "@/components/app-sidebar"
import { DocsBreadcrumb } from "@/components/docs-breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { siteDetails } from "@/data/siteDetails"

export const metadata: Metadata = {
  title: "Documentation",
  description: "Sunya documentation: installation, configuration, Slither integration. Scan EVM smart contracts for vulnerabilities.",
  alternates: { canonical: `${siteDetails.siteUrl}/docs` },
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <DocsBreadcrumb />
        </header>
        <div className="p-4 py-2">
        {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
