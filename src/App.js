import React, { useState } from 'react';
import './App.css'; // Подключение файла стилей

function App() {
  const [meetingCreated, setMeetingCreated] = useState(false);
  const [emailBody, setEmailBody] = useState('');
  const [loading, setLoading] = useState(false);

  // Функция имитации создания встречи
  const createMeeting = async () => {
    setLoading(true);
    setTimeout(() => {
      setMeetingCreated(true);
      setEmailBody('Встреча в SberJazz создана: https://sberjazz.ru/meeting-link');
      setLoading(false);
    }, 1000); // Симулируем задержку
  };

  // Функция для вставки текста в "тело письма"
  const insertText = (text) => {
    setEmailBody((prevBody) => prevBody + '\n' + text);
  };

  return (
    <div className="app-container">
      {/* Левая колонка с календарем */}
      <div className="calendar-section">
        <h2>Календарь</h2>
        {/* Имитируем календарь, стилизованный под Outlook */}
        <div className="calendar">
          <table>
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
              <tr>
                <td>09:00 - 10:00</td>
                <td className="event">Встреча 1</td>
                <td></td>
                <td className="event">Встреча 2</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>10:00 - 11:00</td>
                <td></td>
                <td className="event">Встреча 3</td>
                <td></td>
                <td className="event">Встреча 4</td>
                <td></td>
              </tr>
              <tr>
                <td>11:00 - 12:00</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="event">Встреча 5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Правая колонка с интерфейсом надстройки */}
      <div className="addon-section">
        <h1>Имитация надстройки для почты</h1>

        {/* Кнопка для создания встречи */}
        <button onClick={createMeeting} disabled={loading} className="action-button">
          {loading ? 'Создание...' : 'Создать встречу в SberJazz'}
        </button>

        {/* Отображение статуса встречи */}
        {meetingCreated && <p>Встреча успешно создана!</p>}

        {/* Кнопка для вставки текста */}
        <button onClick={() => insertText('Текст вставлен в тело письма')} disabled={loading} className="action-button">
          Вставить текст в письмо
        </button>

        {/* "Тело письма", куда вставляется текст */}
        <div className="email-body">
          <h3>Тело письма</h3>
          <p>{emailBody}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
