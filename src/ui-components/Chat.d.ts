/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Chat } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChatOverridesProps = {
    Chat?: PrimitiveOverrideProps<FlexProps>;
    NameFrame?: PrimitiveOverrideProps<FlexProps>;
    "\u540D\u524D"?: PrimitiveOverrideProps<TextProps>;
    DateFrame?: PrimitiveOverrideProps<FlexProps>;
    "2023/01/19 20:30"?: PrimitiveOverrideProps<TextProps>;
    TextFrame?: PrimitiveOverrideProps<FlexProps>;
    "\u30C6\u30AD\u30B9\u30C8"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ChatProps = React.PropsWithChildren<Partial<FlexProps> & {
    chat?: Chat;
} & {
    overrides?: ChatOverridesProps | undefined | null;
}>;
export default function Chat(props: ChatProps): React.ReactElement;
