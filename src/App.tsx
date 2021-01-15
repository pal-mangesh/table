import React from "react";
import Button from "./components/button";
import Input from "./components/input";

interface IListItem {
  value?: string;
}

const App = () => {
  const [editableItem, setEditableItem] = React.useState(-1);
  const [todoList, setTodoList] = React.useState([
    { value: "TEMP" },
  ] as IListItem[]);

  const addListItem = () => {
    const list = [...todoList];
    list.push({ value: "" });
    setTodoList([...list]);
  };

  const onFieldValueChange = (id: number) => (value: string) => {
    const list = [...todoList] as IListItem[];
    let i = 0;
    for (let item of list) {
      if (i === id) {
        item.value = value;
        break;
      }
      i += 1;
    }
    setTodoList([...list]);
  };

  const makeEditable = (id: number) => () => {
    setEditableItem(id);
  };

  const resetEditable = (e: any) => {
    setEditableItem(-1);
  };

  const removeItem = (id: number) => () => {
    const list = todoList.filter(
      (tli: IListItem, index: number) => index !== id
    );
    setTodoList([...list]);
  };

  return (
    <div>
      <div>
        <h3>TODO LIST APP</h3>
      </div>
      <div>
        {todoList && todoList.length ? (
          <>
            <ul>
              {todoList.map((li: IListItem, index: number) => (
                <li
                  style={{ display: "flex", alignItems: "center" }}
                  key={index}
                  onClick={makeEditable(index)}
                >
                  <div style={{ marginRight: "20px" }}>{index+1}. </div>
                  <div>
                    {editableItem === index ? (
                      <>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <div>
                            <Input
                              value={li.value}
                              onChange={onFieldValueChange(index)}
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      li.value
                    )}
                  </div>
                  <div>
                    <Button onClick={removeItem(index)}>x</Button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          ""
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "20px" }}>
          <Button type="secondary" onClick={addListItem}>
            Add
          </Button>
        </div>
        <div>
          {editableItem > 0 ? (
            <Button type="primary" onClick={resetEditable}>
              OK
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
