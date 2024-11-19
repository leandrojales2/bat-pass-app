import React, { useMemo, useState } from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

import { styles } from './SectionOptionStyles';

export function SectionOption() {
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

    const [selectedId, setSelectedId] = useState<string | undefined>();
    
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