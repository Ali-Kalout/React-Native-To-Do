import React, { useEffect, FC, useState } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './../redux/store';
import { getTasks, delTask } from './../redux/actions/task';
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

    return (
        <View>
            <Text style={styles.title}>Hello {user?.username}</Text>
            {loading ? <Text>Loading...</Text> : error?.length > 0 ? <Text style={styles.error}>{error}</Text> : (
                <View style={{ marginTop: 15 }}>
                    {tasks?.tasks?.map((t: any, i: any) => <Task key={t?._id} task={t} deleteTask={deleteTask} />)}
                </View>
            )}
        </View>
    );
};

export default Home;