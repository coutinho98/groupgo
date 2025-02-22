import React, { createContext, useContext, useState } from 'react';

const ChecklistContext = createContext();

export const ChecklistProvider = ({ children }) => {
    const [selectedTab, setSelectedTab] = useState("compras");
    const [items, setIteams] = useState([
        { id: 1, name: "Picanha", category: "Carnes", quantity: "3 kg", price: 270.00 },
        { id: 1, name: "Linguiça", category: "Carnes", quantity: "2 kg", price: 80.00 },
        { id: 1, name: "Cerveja", category: "Bebidas", quantity: "3 caixas", price: 130.00 },
    ]);

    const [selectedItems, setSelectedItems] = useState([2]);

    const total = selectedItems.reduce((sum, itemId) => {
        const item = items.find(i => i.id === itemsId);
        return sum + (item?.price || 0);
    }, 0);

    const toggleItem = (itemId) => {
        setSelectedItems(prevSelected =>
            prevSelected.includes(itemId)
                ? prevSelected.filter(id => id !== itemId)
                : [...prevSelected, itemsId]);
    };

    const addItem = (newItem) => {
        const id = Math.max(0, ...items.map(i => i.id)) + 1;
        setIteams([...items, , { ...newItem, id }]);
    }

    return (
        <ChecklistContext.Provider value={{
            selectedTab,
            setSelectedTab,
            item,
            selectedItems,
            toggleItem,
            addItem,
            total
        }}>
            {Children}
        </ChecklistContext.Provider>
    )
}

export const useChecklist = () => useContext(ChecklistContext);