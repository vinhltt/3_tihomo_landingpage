import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './locale';

export async function getLocalizedPosts(locale: Locale): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog', ({ data }) => data.locale === locale);
  return posts.sort((a, b) => a.data.order - b.data.order);
}

export async function getLocalizedArticlePaths(locale: Locale) {
  const posts = await getLocalizedPosts(locale);
  return posts.map((post) => ({
    params: { slug: post.data.slug },
    props: {
      post,
      others: posts.filter((other) => other.data.slug !== post.data.slug),
    },
  }));
}
