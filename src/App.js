import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper
} from '@mui/material';
import './App.css'; // Подключение файла стилей

function App() {
  const [meetingCreated, setMeetingCreated] = useState(false);
  const [emailBody, setEmailBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [participants, setParticipants] = useState([]);
  const [participantName, setParticipantName] = useState('');
  const [meetingTopic, setMeetingTopic] = useState('');

  // Функция имитации создания встречи
  const createMeeting = async () => {
    setLoading(true);
    setError(''); // Очистка предыдущего сообщения об ошибке
    setTimeout(() => {
      const success = Math.random() > 0.2; // Симуляция сценария успеха/неуспеха

      if (success) {
        setMeetingCreated(true);
        setEmailBody(`Встреча в SberJazz создана на тему: "${meetingTopic}". Ссылка: https://sberjazz.ru/meeting-link`);
      } else {
        setError('Ошибка создания встречи. Попробуйте снова.');
      }
      setLoading(false);
    }, 1000); // Симулируем задержку
  };

  // Функция для добавления участника
  const addParticipant = () => {
    if (participantName.trim()) {
      setParticipants((prevParticipants) => [...prevParticipants, participantName]);
      setParticipantName(''); // Очистка поля ввода после добавления
    }
  };

  return (
    <Container maxWidth="lg" style={{ height: '100vh' }}>
      <Grid container spacing={2} style={{ height: '100%' }}>
        {/* Левая колонка с календарем */}
        <Grid item xs={8}>
          <Paper elevation={3} className="calendar" style={{ height: '100%' }}>
            <Typography variant="h5" gutterBottom align="center">Календарь</Typography>
            <table className="calendar-table">
              <thead>
                <tr>
                  <th>Время</th>
                  <th>Понедельник</th>
                  <th>Вторник</th>
                  <th>Среда</th>
                  <th>Четверг</th>
                  <th>Пятница</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { time: '09:00 - 10:00', events: ['Встреча 1', '', 'Встреча 2', '', ''] },
                  { time: '10:00 - 11:00', events: ['', 'Встреча 3', '', 'Встреча 4', ''] },
                  { time: '11:00 - 12:00', events: ['', '', '', '', ''] },
                  // Добавьте дополнительные временные интервалы здесь
                ].map((row, index) => (
                  <tr key={index}>
                    <td>{row.time}</td>
                    {row.events.map((event, idx) => (
                      <td key={idx} className={event ? 'event' : ''}>
                        {event}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Paper>
        </Grid>

        {/* Правая колонка с интерфейсом надстройки */}
        <Grid item xs={4}>
          <Typography variant="h4" gutterBottom>
            Имитация надстройки для почты
          </Typography>

          <TextField
            label="Тема встречи"
            variant="outlined"
            fullWidth
            value={meetingTopic}
            onChange={(e) => setMeetingTopic(e.target.value)}
            margin="normal"
          />

          <TextField
            label="Имя участника"
            variant="outlined"
            fullWidth
            value={participantName}
            onChange={(e) => setParticipantName(e.target.value)}
            margin="normal"
          />
          <Button 
            variant="contained" 
            color="primary" 
            onClick={addParticipant}
            style={{ margin: '10px 0' }}
          >
            Добавить участника
          </Button>

          <Typography variant="h6" gutterBottom>
            Участники:
          </Typography>
          <List>
            {participants.map((participant, index) => (
              <ListItem key={index}>
                <ListItemText primary={participant} />
              </ListItem>
            ))}
          </List>

          <Button 
            variant="contained" 
            color="success" 
            onClick={createMeeting} 
            disabled={loading} 
            style={{ margin: '10px 0' }}
          >
            {loading ? 'Создание...' : 'Создать встречу с AI'}
          </Button>

          {meetingCreated && <Typography color="success.main">Встреча успешно создана!</Typography>}
          {error && <Typography color="error.main">{error}</Typography>}

          <Typography variant="h6" gutterBottom>
            Тело письма:
          </Typography>
          <Typography variant="body1" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            {emailBody}
          </Typography>

          <Button 
            variant="outlined" 
            color="secondary" 
            onClick={() => setEmailBody('')} 
            style={{ margin: '10px 0' }}
          >
            Очистить тело письма
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
