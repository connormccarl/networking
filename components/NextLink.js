import React, { forwardRef } from 'react';
import Link from 'next/link';

export const NextLink = forwardRef(({ href, ...others }, ref) => (
    <Link href={href} {...others} ref={ref} />
))

NextLink.displayName = 'NextLink'

export default NextLink