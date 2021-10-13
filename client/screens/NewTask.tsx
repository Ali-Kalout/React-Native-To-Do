import React, { useState, useEffect, FC } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './../styles/index';
import { TextInput, Button } from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDispatch } from 'react-redux';
import { addTask } from './../redux/actions/task';

interface Props {
    setIndex: any;
};

const NewTask: FC<Props> = ({ setIndex }) => {
    const dispatch = useDispatch();
    const [description, setDescription] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [dueDate, setDueDate] = useState<any>('');
    const [dueTime, setDueTime] = useState<any>('');
    const [dueDateTime, setDueDateTime] = useState<any>({ date: new Date(), time: new Date() });

    useEffect(() => { setDueDateTime({ ...dueDateTime, date: dueDate }) }, [dueDate]);
    useEffect(() => { setDueDateTime({ ...dueDateTime, time: dueTime }) }, [dueTime]);

    const handleSubmit = () => {
        dispatch(addTask({ description: description, title: title }));
        setDescription('');
        setDueDate('');
        setDueTime('');
        setDueDateTime({ date: new Date(), time: new Date() });
        setIndex(0);
    }

    // date time input
    const [isDatePickerVisible, setDatePickerVisibility] = useState<any>(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState<any>(false);

    const showDatePicker = () => setDatePickerVisibility(true);
    const hideDatePicker = () => setDatePickerVisibility(false);
    const handleConfirmDate = (date: any) => {
        setDueDate(date);
        hideDatePicker();
    };

    const showTimePicker = () => setTimePickerVisibility(true);
    const hideTimePicker = () => setTimePickerVisibility(false);
    const handleConfirmTime = (date: any) => {
        setDueTime(date);
        hideTimePicker();
    };

    return (
        <ScrollView keyboardShouldPersistTaps='handled'>
            <Text style={styles.title}>New Task</Text>
            <TextInput label="Task Title" mode="outlined" value={title}
                onChangeText={text => setTitle(text)} style={styles.input} maxLength={10} />
            <Text style={styles.caption}>{title?.length} / 10</Text>
            <TextInput label="Task Description" mode="outlined" value={description}
                onChangeText={text => setDescription(text)} multiline={true}
                style={styles.input} numberOfLines={3} maxLength={50} />
            <Text style={styles.caption}>{description?.length} / 50</Text>
            <View style={styles.dateBtnContainer}>
                <Button style={styles.button} mode="contained" onPress={showDatePicker}>Add Due Date</Button>
                <Button style={styles.button} mode="contained" onPress={showTimePicker}>Add Due Time</Button>
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
            />
            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleConfirmTime}
                onCancel={hideTimePicker}
            />
            <View style={{ marginTop: 15 }}>
                <Text>
                    <Text style={{ fontWeight: 'bold' }}>Due date</Text> :&nbsp;
                    {dueDateTime?.date && dueDateTime?.date?.getDate() + ' / ' + (dueDateTime?.date?.getMonth() + 1) + ' / ' + dueDateTime?.date?.getFullYear()}
                    &nbsp;-&nbsp;
                    {dueDateTime?.time && dueDateTime?.time?.getHours() + ":" + dueDateTime?.time?.getMinutes()}
                </Text>
            </View>
            <Button style={styles.button} mode="contained" onPress={handleSubmit}>Add Task</Button>
        </ScrollView>
    );
};

export default NewTask;