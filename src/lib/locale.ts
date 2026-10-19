export type Locale = 'vi' | 'en';

// Content paths never include the deployment base; public paths include it once.
export function publicPath(contentPath: string): string {
  return `${import.meta.env.BASE_URL}${contentPath.slice(1)}`;
}

export function contentPath(publicPathname: string): string {
  const base = import.meta.env.BASE_URL;
  if (publicPathname === base.slice(0, -1)) return '/';
  if (!publicPathname.startsWith(base)) {
    throw new Error(`Path is outside the site base: ${publicPathname}`);
  }
  return `/${publicPathname.slice(base.length)}`;
}

export function equivalentPath(pathname: string, locale: Locale): string {
  const unlocalized = pathname.replace(/^\/vi(?=\/)/, '');
  return publicPath(`${locale === 'vi' ? '/vi' : ''}${unlocalized}`);
}

export const localePaths = {
  vi: { home: publicPath('/vi/'), blog: publicPath('/vi/blog/') },
  en: { home: publicPath('/'), blog: publicPath('/blog/') },
} as const satisfies Record<Locale, { home: string; blog: string }>;

const dateOptions = {
  timeZone: 'UTC',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
} as const;

const dateFormats = {
  vi: new Intl.DateTimeFormat('vi-VN', dateOptions),
  en: new Intl.DateTimeFormat('en-GB', dateOptions),
} satisfies Record<Locale, Intl.DateTimeFormat>;

export function articlePath(locale: Locale, slug: string): string {
  return `${localePaths[locale].blog}${slug}/`;
}

export function formatUpdated(date: Date, locale: Locale): string {
  return dateFormats[locale].format(date);
}
