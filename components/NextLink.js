import React, { forwardRef } from 'react';
import Link from 'next/link';

export const NextLink = forwardRef(({ href, ...others }) => (
    <Link href={href} {...others} />
))