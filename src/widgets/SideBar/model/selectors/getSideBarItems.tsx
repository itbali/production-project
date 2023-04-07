import { getUserAuthData } from 'entities/User';
import { createSelector } from '@reduxjs/toolkit';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeSVG from 'shared/assets/icons/home.svg';
import ArticlesSVG from 'shared/assets/icons/article.svg';
import ProfileSVG from 'shared/assets/icons/profile.svg';
import AboutSVG from 'shared/assets/icons/about.svg';
import React from 'react';
import { SideBarItemType } from '../types/SideBarItemType';

export const getSideBarItems = createSelector(
    getUserAuthData,
    (user) => {
        const sideBarItems: SideBarItemType[] = [
            {
                path: RoutePath.main,
                text: 'main-page',
                icon: <HomeSVG />,
            },
            {
                path: RoutePath.about,
                text: 'about-page',
                icon: <AboutSVG />,
            },
        ];

        if (user) {
            sideBarItems.push(
                {
                    path: RoutePath.articles,
                    text: 'articles-page',
                    icon: <ArticlesSVG />,
                    authOnly: true,
                },
                {
                    path: RoutePath.profile + user.id,
                    text: 'profile-page',
                    icon: <ProfileSVG />,
                    authOnly: true,
                },
            );
        }

        return sideBarItems;
    },
);
