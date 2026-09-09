import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: 'Home', href: '/' }, ...items]

  const breadcrumbListSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': allItems.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.label,
      'item': item.href ? `https://renaissanceacademy.org.in${item.href}` : undefined,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6 text-sm">
        <ol className="flex items-center space-x-2 text-neutral-500 overflow-x-auto whitespace-nowrap">
          {allItems.map((item, idx) => {
            const isLast = idx === allItems.length - 1
            return (
              <li key={idx} className="flex items-center">
                {idx > 0 && <ChevronRight className="h-4 w-4 mx-1.5 text-neutral-400 shrink-0" />}
                {isLast || !item.href ? (
                  <span className="font-semibold text-brand-900 truncate" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    href={item.href} 
                    className="hover:text-brand-700 transition-colors flex items-center gap-1"
                  >
                    {idx === 0 && <Home className="h-3.5 w-3.5" />}
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
