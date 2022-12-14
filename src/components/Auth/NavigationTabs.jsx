import Tab from "./Tab";

const NavigationTabs = () => {
  return (
    <div className="text-center mb-16">
      <Tab title="Share" url="/" />
      <Tab title="Messages" url="/messages" />
    </div>
  );
};

export default NavigationTabs;
