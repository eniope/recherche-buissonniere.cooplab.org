import { QuartzComponent, QuartzComponentProps } from "./types"

/**
 * LinksHeader — cooplab.org (hub)
 * Navigation vers les deux espaces + à propos
 */
const LinksHeader: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <nav class="links-header">
      <a class="links-header-item" href="/billets">Billets</a>
      <a class="links-header-item" href="/dossiers">Dossiers</a>
      <a class="links-header-item" href="/fiches">Fiches</a>
      <a class="links-header-item" href="/refs">Documentation</a>
    </nav>
  )
}

export default (() => LinksHeader)
