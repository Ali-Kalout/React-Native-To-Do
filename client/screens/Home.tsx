import React, { useEffect, FC, useState } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './../redux/store';
import { getTasks, delTask, toggleTask } from './../redux/actions/task';
import styles from './../styles/index';
import Task from './../components/tasks/Task';

interface Props {
    setIndex: any;
};

const Home: FC<Props> = ({ setIndex }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootState) => state.auth);
    const { tasks, error, loading } = useSelector((state: any) => state.tasks);

    useEffect(() => { dispatch(getTasks()) }, []);

    const deleteTask = (id: string) => { dispatch(delTask(id)) };

    const toggleFTask = (id: string) => { dispatch(toggleTask(id)) };

    return (
        <View>
            <Text style={styles.title}>Hello {user?.username}</Text>
            {loading ? <Text>Loading...</Text> : error?.length > 0 ? <Text style={styles.error}>{error}</Text> : (
                <View style={{ marginTop: 15 }}>
                    {tasks?.length > 0 ? (
                        tasks?.map((t: any, i: any) => <Task key={t?._id} task={t}
                            deleteTask={deleteTask} toggleTask={toggleFTask} />)
                    ) : (
                        <Text style={styles.error}>No tasks found</Text>
                    )}
                </View>
            )}
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold' }}><Text style={{ textDecorationLine: 'underline' }}>
                Note</Text> : You can delete task by swiping task to the right, You can toggle 'completed' by swiping
                task to the left !
            </Text>
        </View >
    );
};

export default Home;