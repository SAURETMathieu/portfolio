import createMiddleware from "next-intl/middleware";
import {locales, localePrefix} from './navigation';

export default createMiddleware({
  localePrefix,
  locales,
  defaultLocale: "fr",
});

export const config = {
  matcher: ["/", "/(fr|en)/:path*"],
};
