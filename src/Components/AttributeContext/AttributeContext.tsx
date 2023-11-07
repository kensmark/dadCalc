import React, { PropsWithChildren, createContext, useContext, useState } from 'react';

interface Attribute {
  name: string;
  value: string;
}

type AttributesMap = {
  [key: string]: Attribute[];
};

const AttributeContext = createContext<[AttributesMap, React.Dispatch<React.SetStateAction<AttributesMap>>] | undefined>(undefined);
//const AttributeContext = React.createContext<[AttributesMap]>

export const useAttributes = () => {
    const context = useContext(AttributeContext);
    if (!context) {
        throw new Error("useAttributes must be used within an AttributeProvider");
    }
    return context;
};


export const AttributeProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [attributesMap, setAttributesMap] = useState<AttributesMap>({});
    return (
        <AttributeContext.Provider value={[attributesMap, setAttributesMap]}>
            {children}
        </AttributeContext.Provider>
    );
};



