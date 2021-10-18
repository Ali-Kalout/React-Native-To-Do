import React, { FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import styles from './../../styles';
import Swipeable from 'react-native-swipeable';

interface Props {
    task: {
        _id: string;
        title: string;
        description: string;
        completed: string;
    };
    index?: any;
    deleteTask?: any;
    toggleTask?: any;
}

const Task: FC<Props> = ({ task, deleteTask, toggleTask }) => {
    const [expanded, setExpanded] = React.useState(false);
    const handlePress = () => setExpanded(!expanded);

    const [leftActionActivated, setLeftActionActivated] = React.useState(false);
    const [toggle, setToggle] = React.useState(false);

    const [rightActionActivated, setRightActionActivated] = React.useState(false);
    const [toggleRight, setToggleRight] = React.useState(false);

    const createTwoButtonAlert = (task: any) => Alert.alert(
        "Delete Task",
        `Are you sure you want to delete '${task?.title}' ?`,
        [{
            text: "Cancel", onPress: () => { }, style: "cancel"
        },
        { text: "OK", onPress: () => deleteTask(task?._id) }]
    );

    const toggleFinishTask = () => { toggleTask(task._id) }

    return (
        <Swipeable
            leftActionActivationDistance={200}
            leftContent={(
                <View style={[styles2.leftSwipeItem, {
                    backgroundColor: leftActionActivated ? '#f50057' : '#F6F6F6',
                    marginBottom: 10
                }]}>
                    {leftActionActivated ?
                        <Text style={{ color: 'white' }}>Delete task!</Text> :
                        <Text>Keep pulling to delete!</Text>}
                </View>
            )}
            onLeftActionActivate={() => {
                createTwoButtonAlert(task);
                setLeftActionActivated(true);
            }}
            onLeftActionDeactivate={() => setLeftActionActivated(false)}
            onLeftActionComplete={() => setToggle(!toggle)}

            rightActionActivationDistance={200}
            rightContent={(
                <View style={[styles2.rightSwipeItem, {
                    backgroundColor: rightActionActivated ? '#2196f3' : '#F6F6F6',
                    marginBottom: 10
                }]}>
                    {rightActionActivated ?
                        <Text style={{ color: 'white' }}>{task?.completed ? 'Unfinish' : 'Finish'} task!</Text> :
                        <Text>Keep pulling to toggle finish!</Text>}
                </View>
            )}
            onRightActionActivate={() => {
                setRightActionActivated(true);
                toggleFinishTask();
            }}
            onRightActionDeactivate={() => setRightActionActivated(false)}
            onRightActionComplete={() => setToggleRight(!toggleRight)}
        >
            <TouchableOpacity style={[task?.completed ? styles?.listItemCompleted : styles.listItem, {
                borderTopRightRadius: !rightActionActivated ? 10 : 0,
                borderBottomRightRadius: !rightActionActivated ? 10 : 0,
            }]} onPress={handlePress}>
                <Text style={[task?.completed && styles?.listTextCompleted, { fontWeight: '600', fontSize: 20 }]}>
                    {task?.title}
                </Text>
                {expanded && (
                    <View>
                        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 10 }} />
                        <Text style={[task?.completed && styles?.listTextCompleted, { fontSize: 16, marginTop: 15 }]}>
                            {task?.description}
                        </Text>
                    </View>
                )}
            </TouchableOpacity>
        </Swipeable>
    );
}

export default Task;

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    listItem: {
        height: 75,
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftSwipeItem: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20
    },
    rightSwipeItem: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20
    }
});