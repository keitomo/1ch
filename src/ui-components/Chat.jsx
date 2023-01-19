/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Chat(props) {
  const { chat, overrides, ...rest } = props;
  return (
    <View
      width="805px"
      height="237px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Chat")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="443px"
        height="50px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="0%"
        bottom="78.72%"
        left="0%"
        right="44.83%"
        padding="10px 10px 10px 10px"
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
          width="356px"
          height="unset"
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
        direction="row"
        width="360px"
        height="50px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="0%"
        bottom="78.72%"
        left="55.17%"
        right="0%"
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
          width="344px"
          height="unset"
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
        position="absolute"
        top="21.28%"
        bottom="0%"
        left="0%"
        right="0%"
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
          width="607px"
          height="185px"
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
    </View>
  );
}
