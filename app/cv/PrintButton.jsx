'use client'
import { Printer } from 'lucide-react'

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 bg-accent text-bg font-syne font-bold text-xs px-4 py-2.5 rounded-full hover:bg-accent/90 transition-all duration-200"
    >
      <Printer size={13} />
      Guardar PDF
    </button>
  )
}
