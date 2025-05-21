import { Fragment, ReactNode } from 'react'
import { Highlight, themes } from 'prism-react-renderer'

interface FenceProps {
  children: string;
  language?: string;
}

export function Fence({ children, language = 'jsx' }: FenceProps) {
  return (
    <Highlight 
      theme={themes.dracula}
      code={children.trimEnd()}
      language={language as any}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <pre className={className} style={style}>
          <code>
            {tokens.map((line, lineIndex) => (
              <Fragment key={lineIndex}>
                {line.map((token, tokenIndex) => (
                  <span key={tokenIndex} {...getTokenProps({ token })} />
                ))}
                {'\n'}
              </Fragment>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  )
}
