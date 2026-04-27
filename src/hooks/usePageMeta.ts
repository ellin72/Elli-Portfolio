import { useEffect } from 'react';

interface MetaConfig {
    title: string;
    description: string;
    image?: string;
    urlPath?: string;
    type?: 'website' | 'article';
    noIndex?: boolean;
}

const ensureMetaTag = (attribute: 'name' | 'property', tagName: string) => {
    let meta = document.querySelector(`meta[${attribute}="${tagName}"]`) as HTMLMetaElement | null;

    if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, tagName);
        document.head.appendChild(meta);
    }

    return meta;
};

export const usePageMeta = ({
    title,
    description,
    image = '/assets/images/profile.jpg',
    urlPath = '/',
    type = 'website',
    noIndex = false,
}: MetaConfig) => {
    useEffect(() => {
        document.title = title;

        const descriptionTag = ensureMetaTag('name', 'description');
        descriptionTag.setAttribute('content', description);

        const ogTitleTag = ensureMetaTag('property', 'og:title');
        ogTitleTag.setAttribute('content', title);

        const ogDescriptionTag = ensureMetaTag('property', 'og:description');
        ogDescriptionTag.setAttribute('content', description);

        const ogTypeTag = ensureMetaTag('property', 'og:type');
        ogTypeTag.setAttribute('content', type);

        const ogImageTag = ensureMetaTag('property', 'og:image');
        ogImageTag.setAttribute('content', image);

        const canonicalUrl = `${window.location.origin}${urlPath}`;
        const ogUrlTag = ensureMetaTag('property', 'og:url');
        ogUrlTag.setAttribute('content', canonicalUrl);

        const robotsTag = ensureMetaTag('name', 'robots');
        robotsTag.setAttribute('content', noIndex ? 'noindex, nofollow' : 'index, follow');

        let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', canonicalUrl);
    }, [description, image, noIndex, title, type, urlPath]);
};
