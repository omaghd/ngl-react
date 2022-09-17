import Tab from "./Tab";

const NavigationTabs = () => {
  return (
    <div className="text-center mb-16">
      <Tab title="Login" url="/login" />
      <Tab title="Register" url="/register" />
    </div>
  );
};

export default NavigationTabs;
