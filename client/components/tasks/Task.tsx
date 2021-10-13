import React, { FC } from 'react';
import { View, Text } from 'react-native';

interface Props {
    task: {
        id: string;
        title: string;
        description: string;
        completed: string;
    };
}

const Task: FC<Props> = ({ task }) => {
    console.warn(task);
    return (
        <View>
            <Text>{task?.title}</Text>
        </View>
    );
}

export default Task;