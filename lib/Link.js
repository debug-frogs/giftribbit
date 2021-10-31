/* Material-UI Next.js LINK adapter
/* https://github.com/mui-org/material-ui/blob/78d97b2b7074a383baa527cf822a7c2dc272c11d/examples/nextjs/src/Link.js
*/

/* eslint-disable jsx-a11y/anchor-has-content */
import clsx from 'clsx';
import {useRouter} from 'next/router';
import NextLink from 'next/link';
import MuiLink from '@mui/material/Link';
import {forwardRef} from "react";

export const NextLinkComposed = forwardRef(function NextLinkComposed(props, ref) {
    const {to, linkAs, href, replace, scroll, passHref, shallow, locale, ...other} = props;

    return (
        <NextLink
            href={to}
            as={linkAs}
            replace={replace || false}
            scroll={scroll || true}
            shallow={shallow || false}
            passHref={passHref || false}
            locale={locale}
        >
            <a ref={ref} {...other} />
        </NextLink>
    );
});

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const Link = forwardRef(function Link(props, ref) {
    const {activeClassName = 'active', as: linkAs, className: classNameProps, href, noLinkStyle, role, ...other} = props;

    const router = useRouter();
    const pathname = typeof href === 'string' ? href : href.pathname;
    const className = clsx(classNameProps, {
        [activeClassName]: router.pathname === pathname && activeClassName,
    });

    const isExternal =
        typeof href === 'string' && (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0);

    if (isExternal) {
        if (noLinkStyle) {
            return <a className={className} href={href} ref={ref} {...other} target="_blank"/>;
        }

        return <MuiLink className={className} href={href} ref={ref} {...other} />;
    }

    if (noLinkStyle) {
        return <NextLinkComposed className={className} ref={ref} to={href} {...other} />;
    }

    return (
        <MuiLink
            component={NextLinkComposed}
            linkAs={linkAs}
            className={className}
            ref={ref}
            to={href}
            {...other}
        />
    );
});


export default Link;
