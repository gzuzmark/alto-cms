import { ComponentProps } from 'react';
import { Link } from '@tanstack/react-location';

/**
 * This is a base component that will render either a button or a link,
 * depending on the props that are passed to it. The link rendered will
 * also correctly get wrapped in a next/link component to ensure ideal
 * page-to-page transitions.
 */
export function ButtonOrLink({ href, children, ...props }) {
  const isLink = typeof href !== 'undefined';
  const sButtonOrLink = isLink ? 'a' : 'button';

  const content = <sButtonOrLink {...props} />;

  if (isLink) {
    return <Link to={href}>{children}</Link>;
  }

  return content;
}
