import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { useMDXScope } from "gatsby-plugin-mdx/context";
const LiveCode = props => {
  const components = useMDXScope();
  return (
    <LiveProvider code={props.children.props.children.trim()} scope={components}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
} 
const SyntaxHighlighter = props => {
  const className = props.children.props.className || '';
  const matches = className.match(/language-(?<lang>.*)/);
  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ''
      }
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
const components = {
  wrapper: ({ children }) => <>{children}</>,
  h1: props => <h1 style={{ color: 'blue' }} {...props} />,
  pre: props => {
    if (props.children.props['react-live']) {
      return <LiveCode {...props} />;
    } else {
      return <SyntaxHighlighter {...props} />;
    }
  }
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
