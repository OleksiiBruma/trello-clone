import { AddNewItem } from "./AddNewItem";
import { Column } from "./Column";
import { CustomDragLayer } from "./CustomDragLayer";
import { addList } from "./state/actions";
import { useAppState } from "./state/AppStateContext";
import { AppContainer } from "./styles";
export const App = () => {
  const { lists, dispatch } = useAppState();
  return (
    <AppContainer>
      <CustomDragLayer />
      {lists.map((list) => (
        <Column key={list.id} id={list.id} text={list.text} />
      ))}
      <AddNewItem
        toggleButtonText="+ Create new list"
        onAdd={(text) => dispatch(addList(text))}
      />
    </AppContainer>
  );
};
