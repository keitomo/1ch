/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Todo } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TodoFrameOverridesProps = {
    TodoFrame?: PrimitiveOverrideProps<FlexProps>;
    titleFrame?: PrimitiveOverrideProps<FlexProps>;
    title?: PrimitiveOverrideProps<TextProps>;
    desFrame?: PrimitiveOverrideProps<FlexProps>;
    description?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TodoFrameProps = React.PropsWithChildren<Partial<FlexProps> & {
    todo?: Todo;
    onClick?: (event: SyntheticEvent) => void;
} & {
    overrides?: TodoFrameOverridesProps | undefined | null;
}>;
export default function TodoFrame(props: TodoFrameProps): React.ReactElement;
