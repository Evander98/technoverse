import { Tabs } from "expo-router";
import { TabIcon } from "../../components/TabIcon";
import { tabsConfig } from "../../constants/tabs";
import { colors } from "../../constants/colors";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.activeTintColor,
        tabBarInactiveTintColor: colors.gray,
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      {tabsConfig.map(({ name, title, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ color }) => <TabIcon icon={icon} color={color} />,
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;
