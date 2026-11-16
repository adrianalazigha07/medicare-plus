import { useState } from "react";
import { doctors } from "../data/doctors";
import DoctorCard from "../components/DoctorCard";

function Services() {
  const [selected, setSelected] = useState("All");

  const filtered = selected === "All"
    ? doctors
    : doctors.filter((d) => d.department === selected);

  return (
    <div>
      <h1>Our Doctors</h1>

      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option>All</option>
        <option>Cardiology</option>
        <option>Neurology</option>
        <option>Pediatrics</option>
        <option>Dermatology</option>
      </select>

      <div className="card-grid">
        {filtered.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
}
export default Services;