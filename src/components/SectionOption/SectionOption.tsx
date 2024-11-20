import React, { useMemo, useState, useEffect } from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

import { styles } from './SectionOptionStyles';
import { useSelectionStore } from '../../store/store';

export function SectionOption() {

    const { selectionGeneration } = useSelectionStore() as { selectionGeneration: any };

    const radioButtons: RadioButtonProps[] = useMemo(() => ([
        {
            id: '1', 
            label: '8 Digitos',
            value: '8'
        },
        {
            id: '2',
            label: '12 Digitos',
            value: '12'
        }
    ]), []);

    const [selectedId, setSelectedId] = useState<string | any>();
    
    const Value = radioButtons[parseInt(selectedId) - 1]?.value

    useEffect(() => {
        selectionGeneration({ number: Value })
    }, [Value])

    return (
        <RadioGroup 
            labelStyle={styles.option}
            containerStyle={styles.container}
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
        />
    );
}