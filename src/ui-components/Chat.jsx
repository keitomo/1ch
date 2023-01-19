/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Chat(props) {
  const { chat, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="805px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      borderRadius="19px"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Chat")}
      {...rest}
    >
      <Flex
        gap="-91px"
        direction="row"
        width="800px"
        height="50px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 15px"
        {...getOverrideProps(overrides, "NameFrame")}
      >
        <Text
          fontFamily="Inter"
          fontSize="25px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="30.25568199157715px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="776px"
          height="39px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={chat?.name}
          {...getOverrideProps(overrides, "\u540D\u524D")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="803px"
        height="20px"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "DateFrame")}
      >
        <Text
          fontFamily="Inter"
          fontSize="25px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="30.25568199157715px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          width="787px"
          height="37px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={chat?.createdAt}
          {...getOverrideProps(overrides, "2023/01/19 20:30")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="803px"
        height="185px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "TextFrame")}
      >
        <Text
          fontFamily="Inter"
          fontSize="25px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="30.25568199157715px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="793px"
          height="175px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={chat?.text}
          {...getOverrideProps(overrides, "\u30C6\u30AD\u30B9\u30C8")}
        ></Text>
      </Flex>
    </Flex>
  );
}
