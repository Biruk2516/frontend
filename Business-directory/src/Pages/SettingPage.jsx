import React, { useState } from 'react';
import '../PageRelated/SettingPage.css'
// Mock functions to handle saving settings
const saveSettings = (settings) => {
  console.log('Settings saved:', settings);
};

const cancelSettings = () => {
  console.log('Settings changes canceled.');
};

const SettingPage = () => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
  });

  const [account, setAccount] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    appNotifications: true,
  });

  const [theme, setTheme] = useState('light');

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const handleNotificationsChange = (e) => {
    const { name, checked } = e.target;
    setNotifications({ ...notifications, [name]: checked });
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleSave = () => {
    saveSettings({ profile, account, notifications, theme });
  };

  const handleCancel = () => {
    cancelSettings();
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      
      <section className="settings-section">
        <h2>Profile Information</h2>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={handleProfileChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleProfileChange}
          />
        </label>
      </section>
      
      <section className="settings-section">
        <h2>Account Settings</h2>
        <label>
          Current Password:
          <input
            type="password"
            name="currentPassword"
            value={account.currentPassword}
            onChange={handleAccountChange}
          />
        </label>
        <label>
          New Password:
          <input
            type="password"
            name="newPassword"
            value={account.newPassword}
            onChange={handleAccountChange}
          />
        </label>
        <label>
          Confirm New Password:
          <input
            type="password"
            name="confirmPassword"
            value={account.confirmPassword}
            onChange={handleAccountChange}
          />
        </label>
      </section>
      
      <section className="settings-section">
        <h2>Notification Preferences</h2>
        <label>
          <input
            type="checkbox"
            name="emailNotifications"
            checked={notifications.emailNotifications}
            onChange={handleNotificationsChange}
          />
          Email Notifications
        </label>
        <label>
          <input
            type="checkbox"
            name="appNotifications"
            checked={notifications.appNotifications}
            onChange={handleNotificationsChange}
          />
          App Notifications
        </label>
      </section>
      
      <section className="settings-section">
        <h2>Theme</h2>
        <label>
          <input
            type="radio"
            name="theme"
            value="light"
            checked={theme === 'light'}
            onChange={handleThemeChange}
          />
          Light
        </label>
        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={theme === 'dark'}
            onChange={handleThemeChange}
          />
          Dark
        </label>
      </section>
      
      <div className="settings-buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default SettingPage;
