/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Todo } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import TodoFrame from "./TodoFrame";
import { Collection } from "@aws-amplify/ui-react";
export default function TodoList(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Todo,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="column"
      justifyContent="center"
      items={items || []}
      {...getOverrideProps(overrides, "TodoList")}
      {...rest}
    >
      {(item, index) => (
        <TodoFrame
          todo={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></TodoFrame>
      )}
    </Collection>
  );
}
