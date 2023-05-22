import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      healthData: {},
      recommendations: '',
      emergencyContacts: [
        {
          name: 'My Son',
          phoneNumber: '9491191708',
        },
        {
          name: 'my doctor',
          phoneNumber: '9876543210',
        },
      ],
      isEmergency: false,
    };
  }

  componentDidMount() {
    this.fetchHealthData();
    this.fetchRecommendations();
  }

  fetchHealthData = () => {
    const data = {
      heartRate: 78,
      bloodPressure: '120/80',
      bloodSugar: 110,
      oxygenSaturation: 98,
    };
    this.setState({ healthData: data });
  };

  fetchRecommendations = () => {
    const recommendations = 'Take a walk for 30 minutes daily.';
    this.setState({ recommendations });
  };

  handleEmergencyClick = () => {
    const { emergencyContacts } = this.state;
    const message = 'Emergency situation! Please help!';
    
    emergencyContacts.forEach((contact) => {
      const { name, phoneNumber } = contact;
      this.sendMessage(phoneNumber, message);
      console.log(`Message sent to ${name} at ${phoneNumber}`);
    });

    this.setState({ isEmergency: true });
  };

  sendMessage = (phoneNumber, message) => {
    console.log(`Sending message to ${phoneNumber}: ${message}`);
  };

  render() {
    const { healthData, recommendations, emergencyContacts, isEmergency } = this.state;

    return (
      <div className="container">
        <h2>Health  Sunita Sharma </h2>
        <div className="health-data">
          <p>Heart Rate: {healthData.heartRate}</p>
          <p>Blood Pressure: {healthData.bloodPressure}</p>
          <p>Blood Sugar: {healthData.bloodSugar}</p>
          <p>Oxygen Saturation: {healthData.oxygenSaturation}</p>
        </div>

        <h2>Recommendations</h2>
        <p>{recommendations}</p>

        <h2>Emergency Contacts</h2>
        <ul className="emergency-contacts">
          {emergencyContacts.map((contact, index) => (
            <li key={index}>{contact.name} - {contact.phoneNumber}</li>
          ))}
        </ul>

        <button onClick={this.handleEmergencyClick}>Emergency</button>
        {isEmergency && <p>Emergency alert sent!</p>}
      </div>
    );
  }
}

export default App;