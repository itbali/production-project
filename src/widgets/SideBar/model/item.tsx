import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeSVG from 'shared/assets/icons/home.svg';
import AboutSVG from 'shared/assets/icons/about.svg';
import ProfileSVG from 'shared/assets/icons/profile.svg';
import ArticlesSVG from 'shared/assets/icons/article.svg';

export interface SideBarItemType {
    path: string;
    text: string;
    icon: React.ReactNode;
    authOnly?: boolean;
}

export const SideBarItems: SideBarItemType[] = [
    {
        path: RoutePath.main,
        text: 'main-page',
        icon: <HomeSVG />,
    },
    {
        path: RoutePath.articles,
        text: 'articles-page',
        icon: <ArticlesSVG />,
        authOnly: true,
    },
    {
        path: RoutePath.profile,
        text: 'profile-page',
        icon: <ProfileSVG />,
        authOnly: true,
    },
    {
        path: RoutePath.about,
        text: 'about-page',
        icon: <AboutSVG />,
    },
];
