
import type { FlowNode } from '@/data/types';
import styles from './FlowDiagram.module.css';

interface FlowDiagramProps {
  nodes: FlowNode[];
  /** Accessible description of what the flow represents. */
  label: string;
  /** Reduced-chrome variant for use inside project cards. */
  compact?: boolean;
}

function ArrowRight() {
  return (
    <svg
      className={`${styles.arrow} ${styles.arrowRight}`}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M2.5 8h11M10 4.5L13.5 8 10 11.5" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg
      className={`${styles.arrow} ${styles.arrowDown}`}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M8 2.5v11M4.5 10L8 13.5 11.5 10" />
    </svg>
  );
}

/**
 * Renders a linear pipeline as an ordered list styled to read as a diagram.
 *
 * Using `<ol>` rather than an SVG canvas means the sequence is conveyed to
 * screen readers by the markup itself, the diagram reflows to a vertical
 * stack on narrow viewports, and every colour comes from the theme tokens.
 */
export function FlowDiagram({ nodes, label, compact }: FlowDiagramProps) {
  return (
    <ol
      className={`${styles.flow} ${compact ? styles.compact : ''}`}
      aria-label={label}
    >
      {nodes.map((node, index) => {
        const isLast = index === nodes.length - 1;

        return (
          <li key={node.label} className={styles.node}>
            <div
              className={`${styles.box} ${node.emphasis ? styles.emphasis : ''}`}
            >
              <span className={styles.label}>{node.label}</span>
              {node.meta ? <span className={styles.meta}>{node.meta}</span> : null}
            </div>
            {/* Only one of the two renders per breakpoint; both live inside
                the <li> so the list stays valid HTML. */}
            {!isLast ? <ArrowRight /> : null}
            {!isLast ? <ArrowDown /> : null}
          </li>
        );
      })}
    </ol>
  );
}
