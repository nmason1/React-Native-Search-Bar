# Mobile Telematics SDK
The Mobile Telematics SDK provides location monitoring services in conjunction with activity recognition services to gather user drive analytics.
You can use the Mobile Telematics SDK to initiate functions based on vehicular drive events such as start, stop or idle. You can also use the gathered geographical metrics to apply custom logic based on location.

# Configuration

To initialize the Mobile Telematics SDK, you must instantiate the MobileTelematicsCore class. This class takes two parameter arguments. The first, is the application context. The second, is an instantiation of the TelematicsConfig class. The TelematicsConfig class takes 4 parameters, three of which are required. The required parameters include:
## sharedPreferencesInstanceName – Required for SDK to know shared preference instance where access token is stored.
## sharedPreferencesAccessTokenKey – Required for SDK to gain access to access token.
## sensorFrequency – The frequency setting required between 10000 and 1000000 microseconds.
# Parameters not required:
## Mode – the environment in which the Mobile Telematics SDK will be initialized. These modes include test, dev, and prod.
