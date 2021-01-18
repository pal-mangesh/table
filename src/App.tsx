import React from "react";
import Button from "./components/button";
import Input from "./components/input";

interface IListItem {
  firstName?: string;
  lastName?: string;
  age?: number;
}

const App = () => {
  const [editableItem, setEditableItem] = React.useState(-1);
  const [todoList, setTodoList] = React.useState([] as IListItem[]);

  const addListItem = () => {
    const list = [...todoList];
    list.push({firstName:"", lastName:"", age:0});
    setTodoList([...list]);
  };

  const onFieldValueChange = (id: number,fieldKey:string) => (value: string) => {
    const list = [...todoList] as any;
    let i = 0;
    for (let item of list) {
      if (i === id) {
        item[fieldKey] = value;
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
        <table width="100%" >
          <tr >
            <th>Sr no.</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Edit</th>
            <th>update</th>
            <th>Delete</th>

          </tr>
          {todoList.map((li: IListItem, index: number) => (
            <tr >
              <td>
                <div style={{ marginRight: "20px" }}>
                  {index + 1}.
</div>
              </td>
              <td>{editableItem === index ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div style={{
                      display: "flex"
                    }}>
                      <Input
                        value={li.firstName}
                        onChange={onFieldValueChange(index,"firstName")}
                      />
                    </div>
                  </div>
                </>
              ) : (
                  li.firstName
                )} </td>
              <td>{editableItem === index ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div style={{
                      display: "flex"
                    }}>
                      <Input
                        value={li.lastName}
                        onChange={onFieldValueChange(index,"lastName")}
                      />
                    </div>
                  </div>
                </>
              ) : (
                  li.lastName
                )} </td>
              <td>{editableItem === index ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div style={{
                      display: "flex"
                    }}>
                      <Input
                        value={li.age+""}
                        onChange={onFieldValueChange(index,"age")}
                      />
                    </div>
                  </div>
                </>
              ) : (
                  li.age
                )} </td>
              <td>
                <div>
                  <Button type="primary" onClick={makeEditable(index)}>Edit</Button>
                </div>
              </td>
              <td>
                <div>
                  <Button type="primary" onClick={resetEditable}>update</Button>
                </div>
              </td>
              <td>
                <div>
                  <Button type="primary" onClick={removeItem(index)}>Delete</Button>
                </div>
              </td>

            </tr>
          ))}
        </table>
        <hr />
        <div style={{ marginRight: "20px" }}>
          <Button type="secondary" onClick={addListItem}>
            Add a new record
</Button>
        </div>

      </div>

    </div>
  );
};

export default App;


