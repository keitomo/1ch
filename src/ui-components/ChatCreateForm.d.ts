/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChatCreateFormInputValues = {
    name?: string;
    text?: string;
};
export declare type ChatCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChatCreateFormOverridesProps = {
    ChatCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type ChatCreateFormProps = React.PropsWithChildren<{
    overrides?: ChatCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ChatCreateFormInputValues) => ChatCreateFormInputValues;
    onSuccess?: (fields: ChatCreateFormInputValues) => void;
    onError?: (fields: ChatCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ChatCreateFormInputValues) => ChatCreateFormInputValues;
    onValidate?: ChatCreateFormValidationValues;
} & React.CSSProperties>;
export default function ChatCreateForm(props: ChatCreateFormProps): React.ReactElement;
