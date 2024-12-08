export default async function List() {
  let interests = [];
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/interests`, {
      cache: "no-store", // Disable caching for SSR
    });
    if (response.ok) {
      const data = await response.json();
      interests = data.data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>Submitted Interests</h1>
      {interests.length > 0 ? (
        <ul>
          {interests.map((item) => (
            <li key={item._id}>
              <h3>{item.name}</h3>
              <p>City: {item.city}</p>
              <p>Interest: {item.interest}</p>
              <img
                src={item.profilePhoto}
                alt={`${item.name}'s profile`}
                style={{ maxWidth: "100px" }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}
