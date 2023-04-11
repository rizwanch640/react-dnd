import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Layout = ({ children }) => {
  const [items, setItems] = useState([
    { id: "navbar", type: "component" },
    { id: "sidebar", type: "component" },
    { id: "content", type: "component" },
    { id: "footer", type: "component" },
  ]);

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (
      source.type === destination.type &&
      source.droppableId === destination.droppableId
    ) {
      const newItems = [...items];
      const [removed] = newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, removed);
      setItems(newItems);
    }
  };

  const sidebarStyles = {
    backgroundColor: "black",
    color: "black",
    fontSize: "200px",
  };

  const getComponent = (component) => {
    switch (component.id) {
      case "navbar":
        return <Navbar />;
      case "sidebar":
        return (
          <>
            {/* <div className=" d-flex justify-content-end"> */}
            <div className="col-2  ">
              <Sidebar style={{ sidebarStyles }} />
            </div>
          </>
        );
      case "content":
        return <div className="col-8">{children}</div>;
      case "footer":
        return (
          <div>
            <Footer />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="layout" type="component">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable
                key={item.id}
                draggableId={item.id}
                index={index}
                type="component"
                droppableId="layout"
              >
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    {getComponent(item)}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
export default Layout;
