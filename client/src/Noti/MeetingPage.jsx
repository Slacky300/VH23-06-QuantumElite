// MeetingPage.js

import React, { useState } from 'react';

const MeetingPage = () => {
  const [meetingTime, setMeetingTime] = useState(new Date()); // Set the meeting time

  const handleScheduleNotification = () => {
    const notificationTime = new Date(meetingTime.getTime() - 10 * 60 * 1000); // 10 minutes before meeting
    
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Meeting Reminder', {
        body: 'Your meeting will start in 10 minutes!',
      });
    } else if ('Notification' in window && Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification('Meeting Reminder', {
            body: 'Your meeting will start in 10 minutes!',
          });
        }
      });
    }
  };

  return (
    <div>
      <h1>Meeting Page</h1>
      
      <button onClick={handleScheduleNotification}>Schedule Notification</button>
    </div>
  );
};

export default MeetingPage;
