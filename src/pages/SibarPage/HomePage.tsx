const HomePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
      <p className="text-gray-700 dark:text-gray-300">
        This is the home page. Use the sidebar to navigate to Inbox, Calendar,
        Search, and Settings.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-orange-200 dark:bg-orange-700 p-4 rounded shadow">
          <h2 className="font-semibold">Stats</h2>
          <p>Some important stats here</p>
        </div>
        <div className="bg-blue-200 dark:bg-blue-700 p-4 rounded shadow">
          <h2 className="font-semibold">Notifications</h2>
          <p>Recent notifications will appear here</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
