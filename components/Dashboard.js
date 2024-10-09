import React from 'react';
import {Text, ScrollView, Dimensions, StyleSheet} from 'react-native';
import {
  BarChart,
  LineChart,
  PieChart,
  RadarChart,
} from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const Dashboard = () => {
  const userActivityData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const adPerformanceData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [45, 49, 60, 71, 46, 35, 30],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>User Activity</Text>
      <BarChart
        data={userActivityData}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
      <Text style={styles.header}>Ad Performance</Text>
      <LineChart
        data={adPerformanceData}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />
      <Text style={styles.header}>Pie Chart</Text>
      <PieChart
        data={[
          {
            name: 'January',
            population: 65,
            color: 'rgba(131, 167, 234, 1)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'February',
            population: 59,
            color: '#F00',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          // Add more data points here
        ]}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
      <Text style={styles.header}>Radar Chart</Text>
      <RadarChart
        data={userActivityData}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default Dashboard;
