export default function Offices() {
    const offices = [
        {
            location: "Patna",
            address: "Shop no-09, Gharouda Complex, piller no-11, opp-Jagdev Path, Khajpura, Bailey Road, Patna-800014, Bihar.",
            phones: ["+91 7209074148"],
        },
        {
            location: "Garhwa",
            address: "Purani bazar, Near joda Mandir, Garhwa, Jharkhand-822114",
            phones: [ "+91 7209074148","+91 7909089562"],
        },
        {
            location: "Buxar",
            address: "3rd Floor, Tech Park, Whitefield Road, Bangalore – 560066, Karnataka.",
            phones: ["+91 8045671234", "+91 9876543210"],
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                    Our Office Locations
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {offices.map((office, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                📍 {office.location}
                            </h3>
                            <p className="text-gray-600 mb-2">
                                <span className="font-medium text-gray-700">Address:</span><br />
                                {office.address}
                            </p>
                            <div className="text-gray-600">
                                <span className="font-medium text-gray-700">Phone:</span><br />
                                {office.phones.map((phone, i) => (
                                    <p key={i}>{phone}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
