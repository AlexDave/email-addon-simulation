import React, { useState } from 'react';

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
    <div style={{ padding: '20px' }}>
      <h1>Имитация надстройки для почты</h1>

      {/* Кнопка для создания встречи */}
      <button onClick={createMeeting} disabled={loading} style={{ marginBottom: '20px' }}>
        {loading ? 'Создание...' : 'Создать встречу в SberJazz'}
      </button>

      {/* Отображение статуса встречи */}
      {meetingCreated && <p>Встреча успешно создана!</p>}

      {/* Кнопка для вставки текста */}
      <button
        onClick={() => insertText('Текст вставлен в тело письма')}
        disabled={loading}
        style={{ marginBottom: '20px' }}
      >
        Вставить текст в письмо
      </button>

      {/* "Тело письма", куда вставляется текст */}
      <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '100px' }}>
        <h3>Тело письма</h3>
        <p>{emailBody}</p>
      </div>
    </div>
  );
}

export default App;
