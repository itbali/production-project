import React from 'react';

export interface SideBarItemType {
    path: string;
    text: string;
    icon: React.ReactNode;
    authOnly?: boolean;
}
