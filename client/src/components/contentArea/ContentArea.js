import React from 'react';

const ContentArea = ({ tabs, activeTab }) => {
  const tab = tabs.find((t) => t.id === activeTab);

  return (
    <div className="flex-1 p-10">
      <h2 className="text-2xl font-semibold mb-4">Welcome to Admin Dashboard</h2>
      <div className="bg-white p-6 rounded-md shadow-md">
        <h3 className="text-lg font-semibold mb-2">{tab.name} Content</h3>
        <p>{tab.content}</p>
      </div>
    </div>
  );
};

export default ContentArea;
