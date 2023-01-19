/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ChatProps } from "./Chat";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChatListOverridesProps = {
    ChatList?: PrimitiveOverrideProps<CollectionProps>;
    Chat?: ChatProps;
} & EscapeHatchProps;
export declare type ChatListProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ChatProps;
} & {
    overrides?: ChatListOverridesProps | undefined | null;
}>;
export default function ChatList(props: ChatListProps): React.ReactElement;
