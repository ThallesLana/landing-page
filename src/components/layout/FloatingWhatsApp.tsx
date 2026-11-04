import { MessageCircle } from 'lucide-preact'
import { whatsappUrl } from '@/config'
import { content } from '@/content'

const { floatingWhatsApp: copy } = content

/** Atalho para o WhatsApp. Só aparece para quem escolheu "fazer um projeto". */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl(copy.message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={copy.ariaLabel}
      class="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full border-[3px] border-ink bg-whatsapp text-ink shadow-hard-sm transition-[transform,box-shadow] duration-100 hover:translate-0.5 hover:shadow-none sm:right-7 sm:bottom-7"
    >
      <MessageCircle size={24} fill="currentColor" aria-hidden="true" />
    </a>
  )
}
