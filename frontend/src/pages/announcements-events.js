import React from 'react';

const announcementsData = [
  { title: "Semester Registration Open", date: "2026-02-01", description: "Register online for the upcoming semester." },
  { title: "Library Extended Hours", date: "2026-02-05", description: "Library open until 10 PM during exam week." },
];

const eventsData = [
  { title: "Campus Job Fair", date: "2026-03-10", location: "Main Hall", description: "Meet top employers." },
  { title: "Tech Workshop", date: "2026-03-15", location: "Lab 202", description: "Hands-on coding workshop." },
];

function AnnouncementsEvents() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-12">
      
      {/* Announcements Section */}
      <section>
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Latest Announcements</h1>
        <div className="space-y-4">
          {announcementsData.map((item, index) => (
            <div key={index} className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition bg-white mb-4">
              <h2 className="text-xl font-semibold text-blue-700">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.date}</p>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section>
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Upcoming Events</h1>
        <div className="space-y-4">
          {eventsData.map((event, index) => (
            <div key={index} className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition bg-white mb-4">
              <h2 className="text-xl font-semibold text-green-700">{event.title}</h2>
              <p className="text-sm text-gray-500">{event.date} | {event.location}</p>
              <p className="mt-2 text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default AnnouncementsEvents;
